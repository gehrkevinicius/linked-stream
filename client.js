// client.js
import http from "http";

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/",
  method: "GET",
};

const req = http.request(options, (res) => {
  console.log("Conectado ao servidor.");
  /* 4) Crie uma lista encadeada vazia aqui */

  res.on("data", (chunk) => {
    /* 5) Utilize o método add para guardar cada chunk na lista encadeada */
    console.log(`Dado recebido: ${chunk}\n`);
  });

  /* 10) Utilize o método getAt para mostrar o que existe nos índices 3 e 20 */
  /* 11) Utilize o método getSize para mostrar o tamanho da lista encadeada */
  /* 12) Utilize o método search para mostrar o primeiro índice da cor "verde" */
  /* 13) Utilize o método search para mostrar o último índice da cor "verde" */
  /* 14) Utilize o método removeAt para remover o elemento de índice 2 */
  /* 15) Utilize o método pop para remove o último elemento mostre o que foi removido */
  /* 16) Utilize o método toArray para mostrar a lista encadeada como um vetor */

  res.on("end", () => {
    console.log("\nTransmissão finalizada.");
  });
});

req.on("error", (e) => {
  console.error(`Problema com a requisição: ${e.message}`);
});

req.end();
