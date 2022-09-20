const codes = document.querySelectorAll('.code');
codes[0].focus();

codes[0].addEventListener('paste', (event) => {
  event.preventDefault();
  let paste = (event.clipboardData || window.clipboardData).getData('text');
  paste = paste.toUpperCase();
  paste = paste.split('');
  console.log(paste);
  codes.forEach((code, idx) => {
    code.value = paste[idx];
  });
});

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (event) => {
    if (event.key >= 0 && event.key <= 9) {
      codes[idx].value = '';
      setTimeout(() => {
        codes[idx + 1].focus();
      }, 10);
    } else if (event.key === 'Backspace') {
      setTimeout(() => {
        codes[idx - 1].focus();
      }, 10);
    }
  });
});
