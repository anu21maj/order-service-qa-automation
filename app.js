const http = require("http");

function processOrder(orderId, amount) {
  if (!orderId || amount <= 0) {
    return { status: "FAILED", message: "Invalid order parameters" };
  }
  return { status: "SUCCESS", orderId: orderId, total: amount };
}

const server = http.createServer((req, res) => {
  if (req.url === "/health" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "UP", service: "ERP-Order-Module" }));
  } else {
    res.writeHead(404);
    res.end();
  }
});

const PORT = process.env.PORT || 3000;
if (require.main === module) {
  server.listen(PORT, () => console.log("Server running on port " + PORT));
}

module.exports = { processOrder, server };
