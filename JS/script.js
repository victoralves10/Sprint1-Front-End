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
