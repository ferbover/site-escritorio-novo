// script.js - Contabilidade Rezende

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const nome = form.querySelector("input[name='nome']")?.value.trim();
      const email = form.querySelector("input[name='email']")?.value.trim();
      const mensagem = form.querySelector("textarea[name='mensagem']")?.value.trim();

      if (!nome || !email || !mensagem) {
        alert("Por favor, preencha todos os campos antes de enviar.");
        return;
      }

      // Simulação de envio (ex: integração futura com EmailJS, Formspree, etc)
      document.getElementById("mensagem-sucesso").classList.remove("oculto");

      form.reset();
    });
  }

  // Scroll suave para os links internos
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

// Scroll suave para os links internos
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const href = this.getAttribute("href");

    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

function fecharMensagem() {
  document.getElementById("mensagem-sucesso").classList.add("oculto");
}
// Adiciona o evento de clique para fechar a mensagem de sucesso