const tools = [
    {
        name: "BMI Calculator",
        url: "bmi-calculator.html",
        description: "Calculate your Body Mass Index (BMI) and find out your weight status.",
        category: "Health",
        tags: ["Health", "Calculator"]
    },
    {
        name: "EMI Calculator",
        url: "emi-calculator.html",
        description: "Calculate your Equated Monthly Installment (EMI) for loans.",
        category: "Finance",
        tags: ["Finance", "Calculator"]
    },
    {
        name: "Currency Converter",
        url: "currency-converter.html",
        description: "Convert currencies quickly and easily.",
        category: "Finance",
        tags: ["Finance", "Converter"]
    },
    {
        name: "Unit Converter",
        url: "unit-converter.html",
        description: "Convert between various units of measurement.",
        category: "Utility",
        tags: ["Utility", "Converter"]
    },
    {
        name: "Income Tax Calculator",
        url: "income-tax-calculator.html",
        description: "Calculate your income tax liability.",
        category: "Finance",
        tags: ["Finance", "Calculator"]
    },
    {
        name: "SIP Calculator",
        url: "sip-calculator.html",
        description: "Calculate returns on your Systematic Investment Plan (SIP).",
        category: "Finance",
        tags: ["Finance", "Calculator"]
    },
     {
        name: "Age & Date Difference",
        url: "date-difference.html",
        description: "Calculate the difference between dates.",
        category: "Utility",
        tags: ["Utility", "Date"]
    },
    {
        name: "Timer, Stopwatch & Countdown",
        url: "timer-stopwatch-countdown.html",
        description: "Versatile timer, stopwatch, and countdown tool.",
        category: "Utility",
        tags: ["Utility", "Timer"]
    },
    {
        name: "Ideal Weight Calculator",
        url: "ideal-weight-calculator.html",
        description: "Determine your ideal weight range based on various factors.",
        category: "Health",
        tags: ["Health", "Calculator"]
    },
    {
        name: "Calorie Burn Calculator",
        url: "calorie-burn-calculator.html",
        description: "Calculate estimated calories burned during various activities.",
        category: "Health",
        tags: ["Health", "Calculator"]
    },
    {
        name: "Water Intake Calculator",
        url: "water-intake-calculator.html",
        description: "Calculate daily water intake recommendations for optimal hydration.",
        category: "Health",
        tags: ["Health", "Calculator"]
    },
    {
        name: "BMR Calculator",
        url: "bmr-calculator.html",
        description: "Calculate your Basal Metabolic Rate (BMR).",
        category: "Health",
        tags: ["Health", "Calculator"]
    },
    {
        name: "Budget Planner",
        url: "budget-planner.html",
        description: "Plan and manage your budget effectively.",
        category: "Finance",
        tags: ["Finance", "Planner"]
    },
    {
        name: "Loan Eligibility Checker",
        url: "loan-eligibility-checker.html",
        description: "Check your eligibility for various loans.",
        category: "Finance",
        tags: ["Finance", "Eligibility"]
    },
    {
        name: "GST Calculator",
        url: "gst-calculator.html",
        description: "Calculate Goods and Services Tax (GST).",
        category: "Finance",
        tags: ["Finance", "Calculator"]
    },
    {
        name: "Pregnancy Due Date Calculator",
        url: "pregnancy-due-date-calculator.html",
        description: "Calculate the estimated due date for a pregnancy.",
        category: "Health",
        tags: ["Health", "Calculator"]
    },
    {
        name: "Ovulation & Fertility Calculator",
        url: "ovulation-fertility-calculator.html",
        description: "Estimate ovulation and fertile days to assist family planning.",
        category: "Health",
        tags: ["Health", "Calculator"]
    },
    {
        name: "Text Tools",
        url: "text-tools.html",
        description: "Various tools for text manipulation.",
        category: "Utility",
        tags: ["Utility", "Text"]
    },
    {
        name: "Timer",
        url: "timer.html",
        description: "Set timers for various activities.",
        category: "Utility",
        tags: ["Utility", "Timer"]
    },
    {
        name: "QR Code Generator",
        url: "qr-code-generator.html",
        description: "Generate QR codes for various purposes.",
        category: "Utility",
        tags: ["Utility", "QR Code"]
    },
    {
        name: "Prompt Engineering",
        url: "prompt-engineering.html",
        description: "Tools and resources for effective prompt engineering.",
        category: "AI",
        tags: ["AI"]
    },
    {
        name: "News Reader",
        url: "news-reader.html",
        description: "Stay updated with the latest news from Times of India.",
        category: "Information",
        tags: ["Information", "News"]
    },
    {
        name: "Fuel Cost Calculator",
        url: "fuel-cost-calculator.html",
        description: "Calculate the cost of fuel for your journey.",
        category: "Utility",
        tags: ["Utility", "Calculator"]
    },
    {
        name: "Tip Calculator",
        url: "tip-calculator.html",
        description: "Calculate the appropriate tip amount.",
        category: "Finance",
        tags: ["Finance", "Calculator"]
    },
    {
        name: "Timezone Converter",
        url: "timezone-converter.html",
        description: "Convert times between different timezones.",
        category: "Utility",
        tags: ["Utility", "Converter"]
    },
    {
        name: "Grade / GPA Calculator",
        url: "grade-calculator.html",
        description: "Calculate grades, GPA, and percentages.",
        category: "Utility",
        tags: ["Utility", "Education", "Calculator"]
    },
    {
        name: "Typing Speed Test",
        url: "typing-test.html",
        description: "Test your typing speed and accuracy.",
        category: "Utility",
        tags: ["Utility", "Productivity"]
    },
    {
        name: "Plagiarism Checker",
        url: "plagiarism-checker.html",
        description: "Check text for potential plagiarism.",
        category: "Utility",
        tags: ["Utility", "Writing", "Education"]
    },
    {
        name: "Readability Checker",
        url: "readability-checker.html",
        description: "Check the readability of your text.",
        category: "Utility",
        tags: ["Utility", "Writing", "Education"]
    },
    {
        name: "Flashcard Generator",
        url: "flashcard-generator.html",
        description: "Create custom flashcards for studying.",
        category: "Utility",
        tags: ["Utility", "Education", "Study"]
    },
    {
        name: "Markdown to HTML",
        url: "markdown-to-html.html",
        description: "Convert Markdown text to HTML.",
        category: "Utility",
        tags: ["Utility", "Text", "Converter"]
    },
    {
        name: "Password Generator",
        url: "password-generator.html",
        description: "Generate strong and secure passwords with customizable options.",
        category: "Utility",
        tags: ["Utility", "Security"]
    },
    {
        name: "PDF Tools",
        url: "pdf-tools.html",
        description: "Compress or merge PDF files.",
        category: "Utility",
        tags: ["Utility", "PDF"]
    }, 
    {
        name: "Resume Analyzer (ATS Check)",
        url: "resume-analyzer.html",
        description: "Check your resume for ATS compatibility.",
        category: "Utility",
        tags: ["Utility", "Career"]
    }
    //  ADD NEW TOOLS HERE!  This is the only place you'll need to update.
];