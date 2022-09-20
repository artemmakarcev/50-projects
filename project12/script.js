/* const faqs = document.querySelectorAll('.faq');

function removeActiveFAQ(){
  faqs.forEach((faq) => {
    faq.classList.remove('active');
  });
}

function tonggleFAQ(faq) {
  removeActiveFAQ()
  this.classList.add('active');
}

faqs.forEach((faq) => {
  faq.addEventListener('click', (tonggleFAQ));
}); */

/* const panels = document.querySelectorAll('.panel');

function removeActive() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}

function tonggleCard(panel) {
  removeActive();
  this.classList.add('active');
}

panels.forEach((panel) => {
  panel.addEventListener('click', tonggleCard);
}); */

const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
