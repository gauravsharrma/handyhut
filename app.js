let quill;
let currentFolder = null;

window.onload = () => {
  quill = new Quill("#editor", {
    theme: "snow",
    modules: { toolbar: [["bold", "italic"], [{ list: "bullet" }]] }
  });

  currentFolder = localStorage.getItem("currentFolder");
  loadFolders();

  if (currentFolder) {
    loadNote();
  } else {
    clearEditor();
  }
};

function loadFolders() {
  const folders = JSON.parse(localStorage.getItem("folders") || "[]");
  const list = document.getElementById("folder-list");
  list.innerHTML = "";
  folders.forEach(folder => {
    const li = document.createElement("li");
    li.textContent = folder.name;
    li.className = folder.id === currentFolder ? "active" : "";
    li.onclick = () => {
      currentFolder = folder.id;
      localStorage.setItem("currentFolder", currentFolder);
      loadFolders();
      loadNote();
    };
    list.appendChild(li);
  });
}

function addFolder() {
  const name = prompt("Enter folder name:");
  if (!name) return;
  const folders = JSON.parse(localStorage.getItem("folders") || "[]");
  const id = Date.now().toString();
  folders.push({ id, name });
  localStorage.setItem("folders", JSON.stringify(folders));
  currentFolder = id;
  localStorage.setItem("currentFolder", currentFolder);
  loadFolders();
  clearEditor();
}

function saveNote() {
  if (!currentFolder) {
    alert("Please select or create a folder first.");
    return;
  }
  const title = document.getElementById("note-title").value;
  const content = quill.root.innerHTML;

  let notes = JSON.parse(localStorage.getItem("notes") || "{}");
  notes[currentFolder] = { title, content };
  localStorage.setItem("notes", JSON.stringify(notes));

  alert("Note saved!");
}

function loadNote() {
  const notes = JSON.parse(localStorage.getItem("notes") || "{}");
  const note = notes[currentFolder];
  if (note) {
    document.getElementById("note-title").value = note.title || "";
    quill.root.innerHTML = note.content || "";
  } else {
    clearEditor();
  }
}

function deleteNote() {
  if (!currentFolder) return;
  const notes = JSON.parse(localStorage.getItem("notes") || "{}");
  delete notes[currentFolder];
  localStorage.setItem("notes", JSON.stringify(notes));
  alert("Note deleted!");
  clearEditor();
}

function clearEditor() {
  document.getElementById("note-title").value = "";
  if (quill) quill.root.innerHTML = "";
}

function exportCSV() {
  const notes = JSON.parse(localStorage.getItem("notes") || "{}");
  const folders = JSON.parse(localStorage.getItem("folders") || "[]");

  let csv = "Folder,Title,Content\n";
  folders.forEach(f => {
    const note = notes[f.id];
    if (note) {
      const content = note.content.replace(/"/g, '""').replace(/\n/g, " ");
      const title = note.title.replace(/"/g, '""');
      csv += `"${f.name}","${title}","${content}"\n`;
    }
  });

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "notes.csv";
  a.click();
}

function exportExcel() {
  const notes = JSON.parse(localStorage.getItem("notes") || "{}");
  const folders = JSON.parse(localStorage.getItem("folders") || "[]");

  const data = folders.map(f => {
    const note = notes[f.id] || {};
    return {
      "Folder": f.name,
      "Title": note.title || "",
      "Content (HTML)": note.content || ""
    };
  });

  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Notes");
  XLSX.writeFile(wb, "notes.xlsx");
}
