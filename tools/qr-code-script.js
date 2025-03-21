// tools/qr-code-script.js
document.addEventListener('DOMContentLoaded', () => {
    const qrText = document.getElementById('qrText');
    const generateQR = document.getElementById('generateQR');
    const qrCodeDisplay = document.getElementById('qrCodeDisplay');
    const scanResult = document.getElementById('scanResult');

    generateQR.addEventListener('click', () => {
        qrCodeDisplay.innerHTML = '';
        if (qrText.value) {
            new QRCode(qrCodeDisplay, qrText.value);
        } else {
            qrCodeDisplay.textContent = 'Please enter text or URL.';
        }
    });

    const html5QrCode = new Html5Qrcode("qrScanner", { fps: 10, qrbox: 250 });

    function onScanSuccess(decodedText, decodedResult) {
        scanResult.textContent = `Scanned: ${decodedText}`;
        html5QrCode.stop();
    }

    function onScanFailure(error) {
        // Handle scan failure, usually not needed.
    }

    html5QrCode.start({ facingMode: "environment" }, { qrbox: { width: 250, height: 250 } }, onScanSuccess, onScanFailure);
});