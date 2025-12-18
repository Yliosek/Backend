app.post("/calculate", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "https://frontendkalkulator-cpddbsbeb8a3bzez.polandcentral-01.azurewebsites.net");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    const { a, b, operator } = req.body;
    const x = parseFloat(a);
    const y = parseFloat(b);

    let result;
    switch (operator) {
        case "+": result = x + y; break;
        case "-": result = x - y; break;
        case "*": result = x * y; break;
        case "/": result = y !== 0 ? x / y : null; break;
        default: return res.status(400).send("Błąd");
    }

    res.json({ result });
});
