     document.getElementById('whatsappForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const numeroWhatsApp = '5513988799046'; // Seu número com DDI + DDD

    const texto = `Olá, meu nome é ${nome} Mensagem: ${mensagem}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
  });