const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public")); // 👈 FRONTEND

app.post("/calculate", (req, res) => {
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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Running on port", PORT));
