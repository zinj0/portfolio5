document.addEventListener("DOMContentLoaded", function () {
    const popupLinks = document.querySelectorAll(".popup-link");
    const popups = document.querySelectorAll(".popup-box");
    const closeButtons = document.querySelectorAll(".close-button");

    // Função para abrir o popup
    function openPopup(popupId) {
        document.getElementById(popupId).style.display = "block";
    }

    // Função para fechar o popup
    function closePopup(popup) {
        popup.style.display = "none";
    }

    // Adicionar ouvintes de evento a cada link do popup
    popupLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const popupId = link.getAttribute("data-popup");
            openPopup(popupId);
        });
    });

    // Adicionar ouvintes de evento a cada botão de fechar
    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            const popup = button.closest(".popup-box");
            closePopup(popup);
        });
    });

    // Fechar o popup ao clicar fora dele, no body ou na div com classe "grainy"
    document.body.addEventListener("click", function (e) {
        // Verifica se o elemento clicado é a div com classe "grainy" ou body
        if (e.target === document.body || e.target.classList.contains("grainy")) {
            popups.forEach(popup => {
                closePopup(popup);
            });
        }
    });

    // Prevenir o fechamento do popup ao clicar dentro do popup
    popups.forEach(popup => {
        popup.addEventListener("click", function (e) {
            e.stopPropagation();
        });
    });
});