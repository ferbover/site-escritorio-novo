document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contato");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = form.querySelector("input[type='text']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();
    const mensagem = form.querySelector("textarea").value.trim();

    // Validação simples
    if (!nome || !email || !mensagem) {
      alert("Por favor, preencha todos os campos antes de enviar.");
      return;
    }

    // Simulação de envio (exemplo de integração futura com EmailJS, Formspree, etc)
    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Em breve entraremos em contato pelo e-mail: ${email}.`);

    // Resetar o formulário
    form.reset();
  });

  // Pequeno UX improvement: foco no primeiro campo ao abrir a página
  form.querySelector("input[type='text']").focus();
});
