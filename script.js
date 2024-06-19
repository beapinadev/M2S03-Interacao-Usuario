document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-btn");
    const messageDiv = document.getElementById("message");

    startButton.addEventListener("click", () => {
        const name = prompt("Por favor, insira seu nome:");

        if (!name) {
            showMessage("Erro: Você não inseriu seu nome.", "error");
            return;
        }

        const proceed = confirm("Deseja continuar com a sua interação, " + name + "?");

        if (proceed) {
            showMessage("Obrigado por continuar, " + name + "!", "success");
        } else {
            showMessage("Sua interação foi encerrada.", "info");
        }
    });

    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = "";
        messageDiv.classList.add(type);
        messageDiv.classList.remove("hidden");
    }
});