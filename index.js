const fastify = require("fastify")({ logger: false });

fastify.get("/", async (request, reply) => {
  return "oi";
});

const PORT = process.env.PORT || 3000;

fastify.listen(PORT, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Servidor rodando em ${address}`);
});