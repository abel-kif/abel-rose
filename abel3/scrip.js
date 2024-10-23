<script>
    // Toggle FAQ items
    document.querySelectorAll('.faq-question').forEach(question => {
      question.addEventListener('click', () => {
        const item = question.closest('.faq-item');
        item.classList.toggle('active');
      });
    });
  
    // Dark mode toggle
    const darkModeToggle = document.querySelector('.toggle-switch');
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      darkModeToggle.setAttribute('aria-checked', darkModeToggle.getAttribute('aria-checked') === 'true' ? 'false' : 'true');
    });
  </script>
