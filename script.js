 const faqItems = document.querySelectorAll('.faq-item.toggle');

  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      // Fecha outros itens
      faqItems.forEach(i => {
        if(i !== item) i.classList.remove('active');
      });
      // Toggle do item clicado
      item.classList.toggle('active');
    });
  });
