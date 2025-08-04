// servidor_http.c
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <arpa/inet.h>

int main() {
    int socket_servidor, socket_cliente;
    struct sockaddr_in servidor, cliente;
    socklen_t tamanho_cliente;

    char buffer[2048];

    // Cria o socket
    socket_servidor = socket(AF_INET, SOCK_STREAM, 0);

    // Define as informações do servidor
    servidor.sin_family = AF_INET;
    servidor.sin_port = htons(8080); // Porta 8080
    servidor.sin_addr.s_addr = INADDR_ANY;

    // Liga o socket à porta
    bind(socket_servidor, (struct sockaddr*)&servidor, sizeof(servidor));

    // Começa a escutar (máx 5 clientes em espera)
    listen(socket_servidor, 5);
    printf("Servidor HTTP a correr em http://localhost:8080\n");

    while (1) {
        // Aceita ligação de cliente
        tamanho_cliente = sizeof(cliente);
        socket_cliente = accept(socket_servidor, (struct sockaddr*)&cliente, &tamanho_cliente);

        // Lê o pedido
        recv(socket_cliente, buffer, sizeof(buffer) - 1, 0);

        // Resposta HTTP
        char resposta[] =
            "HTTP/1.1 200 OK\r\n"
            "Content-Type: text/html\r\n\r\n"
            "<html><body><h1>Olá do meu servidor HTTP em C!</h1></body></html>";

        // Envia resposta
        send(socket_cliente, resposta, strlen(resposta), 0);

        // Fecha a ligação com o cliente
        close(socket_cliente);
    }

    // Fecha o socket do servidor
    close(socket_servidor);

    return 0;
}
