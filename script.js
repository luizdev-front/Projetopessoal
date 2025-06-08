function enviarForm() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validação simples
    if (!nome || !email || !mensagem) {
        alert('Todos os campos são obrigatórios!');
        return;
    }

    alert('Formulário enviado com sucesso!');
    // Aqui você pode adicionar a lógica para enviar o formulário via API ou email
}