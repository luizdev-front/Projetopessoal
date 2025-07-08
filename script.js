   document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const numeroWhatsApp = '5513988799046'; // Seu número com DDI (55) e DDD, sem espaços
    const texto = `Olá, meu nome é ${nome}.%0AEmail: ${email}%0AMensagem: ${mensagem}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
  });