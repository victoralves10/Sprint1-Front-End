document.addEventListener("DOMContentLoaded", function () {
    const perguntas = document.querySelectorAll(".faq-question");

    perguntas.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault(); // evita o pulo da página

            const resposta = btn.nextElementSibling;

            if (resposta.style.maxHeight) {
                resposta.style.maxHeight = null;
            } else {
                document.querySelectorAll(".faq-answer").forEach((item) => {
                    item.style.maxHeight = null;
                });

                resposta.style.maxHeight = resposta.scrollHeight + "px";
            }
        });
    });
});

// -----

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contato");
    const mensagem = document.getElementById("form-msg");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const msg = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || msg === "") {
            mensagem.textContent = "Por favor, preencha todos os campos.";
            mensagem.style.color = "red";
            return;
        }

        mensagem.textContent = "Mensagem enviada com sucesso!";
        mensagem.style.color = "green";

        form.reset(); // limpa os campos
    });
});

