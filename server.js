import http from "http";
import { LinkedList } from "./linked-list/linked-list.js";

/*
7) Faça com que data seja uma instância de lista encadeada
8) Utilize o método add para adicionar:
"verde", "azul", "amarelo", "branco", "preto", "roxo", "verde", "vermelho"
Precisa ser nesta ordem, exatamente igual!
*/
const data = new LinkedList();
data.add("Verde");
data.add("Azul");
data.add("Amarelo");
data.add("Branco");
data.add("Preto");
data.add("Roxo");
data.add("Verde");
data.add("Vermelho");

const server = http.createServer(async (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
    "Transfer-Encoding": "chunked",
  });

  /*
  9) Faça enviar todas as cores para o cliente,
  com uma pausa de 2 segundos por envio
  */
  let currentNode = data.head;
  while (currentNode !== null) {
    res.write(currentNode.value);
    await delay(2);
    currentNode = currentNode.next;
  }

  res.end(); // Essa função finaliza a comunicação com o cliente
  console.log("Transmissão concluída pelo servidor.");
  server.close();
});

async function delay(seconds) {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000.");
  console.log("Acesse http://localhost:3000 com o cliente.");
});
