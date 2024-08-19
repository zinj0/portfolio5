document.addEventListener("DOMContentLoaded", function() {
    // Seleciona os elementos do header e do nome do proprietário
    const headerElements = document.querySelectorAll('header nav ul li, #name');
    // Seleciona os elementos das redes sociais e do link de download do currículo
    const bottomElements = document.querySelectorAll('#social-media ul li, #resume');

    // Função para animar os elementos do topo (header e nome)
    headerElements.forEach(element => {
        element.style.transform = 'translateY(-100%)';
        element.style.opacity = '0';
        element.style.transition = 'transform 0.2s ease-out, opacity 0.2s ease-out';
        setTimeout(() => {
            element.style.transform = 'translateY(0)';
            element.style.opacity = '1';
        }, 100); // Delay para garantir que a animação ocorra após o carregamento
    });

    // Função para animar os elementos de baixo (redes sociais e resume)
    bottomElements.forEach(element => {
        element.style.transform = 'translateY(100%)';
        element.style.opacity = '0';
        element.style.transition = 'transform 0.2s ease-out, opacity 0.2s ease-out';
        setTimeout(() => {
            element.style.transform = 'translateY(0)';
            element.style.opacity = '1';
        }, 100); // Delay para garantir que a animação ocorra após o carregamento
    });
});