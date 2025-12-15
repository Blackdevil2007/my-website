function openContactModal() {
  // If already exists remove it
  const oldModal = document.getElementById('contact-modal-dialog');
  if (oldModal) oldModal.remove();

  const modal = document.createElement('div');
  modal.id = 'contact-modal-dialog';
  modal.style.position = 'fixed';
  modal.style.left = '0';
  modal.style.top = '0';
  modal.style.width = '100vw';
  modal.style.height = '100vh';
  modal.style.background = 'rgba(0,0,0,0.67)';
  modal.style.zIndex = '9999';
  modal.style.display = 'flex';
  modal.style.alignItems = 'center';
  modal.style.justifyContent = 'center';

  modal.innerHTML = `
    <div style="background:#fff;border-radius:12px;max-width:94vw;padding:32px 18px 20px 18px;text-align:center;box-shadow:0 8px 48px rgba(33,33,33,0.16);">
      <h3 style='font-size:1.4em;margin-bottom:16px;color:#333;font-family:inherit;'>Contact NEUROFLARE</h3>
      <div style="margin-bottom:20px;font-family:inherit;">Choose how you'd like to connect with us:</div>
      <a href="https://wa.me/919728649125" target="_blank" rel="noopener" style="display:inline-block;background:#25D366;color:#fff;text-decoration:none;padding:12px 26px 12px 52px;margin:8px 18px 8px 0;border:0;border-radius:6px;font-size:1em;position:relative;font-weight:600;box-shadow:0 1px 6px 0 #bbb;transition:.2s;vertical-align:middle;">
        <span style="position:absolute;left:18px;top:11px;font-size:1.3em;">💬</span>
        WhatsApp
      </a>
      <a href="mailto:nikhildagar855@gmail.com" style="display:inline-block;background:#1976d2;color:#fff;text-decoration:none;padding:12px 26px 12px 52px;margin:8px 0;border:0;border-radius:6px;font-size:1em;position:relative;font-weight:600;box-shadow:0 1px 6px 0 #bbb;transition:.2s;vertical-align:middle;">
        <span style="position:absolute;left:18px;top:11px;font-size:1.3em;">✉️</span>
        Email
      </a>
      <div style="margin-top:30px;text-align:center;">
        <button onclick="document.getElementById('contact-modal-dialog').remove();" style="background:none;border:0;color:#333;font-size:1em;padding:8px 24px;margin-top:6px;border-radius:6px;cursor:pointer;">Cancel</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
}

