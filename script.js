document.querySelectorAll('.link-button').forEach(button => {
    button.addEventListener('click', () => {
      const link = button.getAttribute('data-link');
      window.open(link, '_blank');
    });
  });
  