// Menu animação
const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("#header-main");
const navLinks = document.querySelectorAll("#nav-list a");

hamburger.addEventListener("click", () => {
    nav.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        // Previne o comportamento padrão do link
        event.preventDefault();

        // Fecha o menu
        nav.classList.remove('active');

        // Obtém o ID da seção para a qual você está rolando
        const targetId = link.getAttribute("href").substring(1);

        // Encontra o elemento correspondente
        const targetElement = document.getElementById(targetId);

        // Rola até a seção
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});

function enviarEmail() {
    var nome = document.getElementsByName("nome")[0].value;
    var email = document.getElementById("emailcliente").value;
    var assunto = document.getElementById("assunto").value;
    var descricao = document.getElementsByName("descricao")[0].value;

    // Monta o link "mailto:"
    var linkEmail = "mailto:" + email +
                    "?subject=" + encodeURIComponent(assunto) +
                    "&body=" + encodeURIComponent("Nome: " + nome + "\n\nMensagem: " + descricao);

    // Abre a tela de email do usuário
    window.location.href = linkEmail;

    // Limpa os campos do form
    document.getElementById("contact-form").reset();
}


// redireciona btn

function redirectToPage(url) {
    window.open(url, '_blank');
}

