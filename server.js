const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/calculate", (req, res) => {
    const { a, b, operator } = req.body;

    const x = parseFloat(a);
    const y = parseFloat(b);

    let result;

    switch (operator) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = y !== 0 ? x / y : "Błąd (dzielenie przez 0)";
            break;
        default:
            return res.status(400).json({ error: "Nieznany operator" });
    }

    res.json({ result });
});

app.listen(5000, () => {
    console.log("Backend działa na http://localhost:5000");
});
