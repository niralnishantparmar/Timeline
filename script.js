document.querySelectorAll('.timeline-item').forEach(item => {
  item.addEventListener('click', () => {
    const title = item.getAttribute('data-title');
    const content = item.getAttribute('data-content');
    const imageSrc = item.getAttribute('data-image'); // 

    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-content').textContent = content;

    const imageElement = document.getElementById('modal-image');
    if (imageSrc) {
      imageElement.src = imageSrc;
      imageElement.alt = title;
      imageElement.style.display = 'block';
    } else {
      imageElement.src = '';
      imageElement.alt = '';
      imageElement.style.display = 'none';
    }

    const overlay = document.getElementById('overlay');
    const modal = document.getElementById('modal');
    overlay.classList.add('active');
    setTimeout(() => modal.classList.add('active'), 50);
  });
});

document.querySelector('.close').addEventListener('click', () => {
  const overlay = document.getElementById('overlay');
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  setTimeout(() => overlay.classList.remove('active'), 200);
});

window.addEventListener('click', (e) => {
  const overlay = document.getElementById('overlay');
  const modal = document.getElementById('modal');
  if (e.target === overlay) {
    modal.classList.remove('active');
    setTimeout(() => overlay.classList.remove('active'), 200);
  }
});
