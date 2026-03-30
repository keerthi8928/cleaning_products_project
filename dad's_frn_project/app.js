document.addEventListener('DOMContentLoaded', function () {
        const toggle = document.querySelector('.nav-toggle');
        const menu = document.querySelector('.nav-menu');
        toggle.addEventListener('click', function () {
          const expanded = this.getAttribute('aria-expanded') === 'true';
          this.setAttribute('aria-expanded', String(!expanded));
          menu.classList.toggle('show');
        });
        // Close menu after clicking a link (mobile)
        document.querySelectorAll('.nav-menu a').forEach(a => a.addEventListener('click', () => {
          menu.classList.remove('show');
          toggle.setAttribute('aria-expanded', 'false');
        }));
      });