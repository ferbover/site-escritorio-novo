document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = form.querySelector("input[type='text']");
    const email = form.querySelector("input[type='email']");
    const mensagem = form.querySelector("textarea");

    let formValido = true;

    // Limpa erros antigos
    [nome, email, mensagem].forEach((campo) => {
      campo.style.borderColor = "#ccc";
    });

    // Validação simples
    if (nome.value.trim() === "") {
      nome.style.borderColor = "red";
      formValido = false;
    }

    if (email.value.trim() === "" || !email.value.includes("@")) {
      email.style.borderColor = "red";
      formValido = false;
    }

    if (mensagem.value.trim() === "") {
      mensagem.style.borderColor = "red";
      formValido = false;
    }

    if (!formValido) {
      alert("Por favor, preencha corretamente todos os campos.");
      return;
    }

    // Simulação de envio (aqui você pode integrar futuramente com API real)
    alert(`Obrigado, ${nome.value}! Sua mensagem foi enviada com sucesso. Em breve entraremos em contato.`);

    form.reset();
  });
});
