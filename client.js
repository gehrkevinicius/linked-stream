import http from "http";
import { LinkedList } from "./linked-list/linked-list.js";

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/",
  method: "GET",
};

const req = http.request(options, (res) => {
  console.log("Conectado ao servidor.");
  /* 4) Crie uma lista encadeada vazia aqui */
  const novaListaEncadeada = new LinkedList();

  res.on("data", (chunk) => {
    /* 5) Utilize o método add para guardar cada chunk na lista encadeada */
    const data = chunk.toString();
    novaListaEncadeada.add(data);
    console.log(`Dado recebido: ${data}\n`);
  });

  res.on("end", () => {
    console.log("Início da Transmissão");

    /* 10) Utilize o método getAt para mostrar o que existe nos índices 3 e 20 */
    console.log("Elemento no índice 3:", novaListaEncadeada.getAt(3));
    console.log("Elemento no índice 20:", novaListaEncadeada.getAt(20));

    /* 11) Utilize o método getSize para mostrar o tamanho da lista encadeada */
    console.log("Tamanho da lista:", novaListaEncadeada.getSize());

    /* 12) Utilize o método search para mostrar o primeiro índice da cor "verde" */
    console.log(
      'Primeiro índice de "Verde":',
      novaListaEncadeada.search("Verde")
    );

    /* 13) Utilize o método searchLast para mostrar o último índice da cor "verde" */
    console.log(
      'Último índice de "Verde":',
      novaListaEncadeada.searchLast("Verde")
    );

    /* 14) Utilize o método removeAt para remover o elemento de índice 2 */
    console.log(
      "Removido o elemento do índice 2:",
      novaListaEncadeada.removeAt(2)
    );

    /* 15) Utilize o método pop para remove o último elemento mostre o que foi removido */
    console.log("Removido o último elemento:", novaListaEncadeada.pop());

    /* 16) Utilize o método toArray para mostrar a lista encadeada como um vetor */
    console.log("Array Final:", novaListaEncadeada.toArray());

    console.log("Transmissão finalizada.");
  });
});

req.on("error", (e) => {
  console.error(`Problema com a requisição: ${e.message}`);
});

req.end();
