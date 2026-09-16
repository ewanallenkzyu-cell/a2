/**
 * FISHTAIL OUTER • Technical Outerwear & Mobile Navigation
 */
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('drawer-close');
  const backdrop = document.getElementById('drawer-backdrop');

  function openDrawer() {
    if (drawer) drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  // Accordion interactions
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
      if (!isActive) item.classList.add('active');
    });
  });

  // Outerwear consultation form handler
  const contactForm = document.getElementById('outerwear-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const feedback = document.getElementById('form-feedback');
      if (feedback) {
        feedback.style.display = 'block';
        feedback.innerHTML = '<div style="background:#1f2e22;color:#4ade80;padding:1rem;border-radius:2px;margin-top:1rem;font-weight:500;border:1px solid #22c55e;">Thank you. Your bespoke outerwear consultation request has been lodged. Our Master Tailor will contact you within 24 hours.</div>';
        contactForm.reset();
      }
    });
  }
});
