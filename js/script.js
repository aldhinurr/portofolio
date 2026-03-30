// SCROLL PROGRESS
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  document.getElementById('scrollBar').style.width = progress + '%';
});

// FADE IN OBSERVER
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

function closeModalById(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}

// PROJECT FILTER
function filterProjects(cat, btn) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.classList.add('visible');
    } else {
      card.classList.remove('visible');
    }
  });
}

// EXPERIENCE TABS
function showExp(id, btn) {
  document.querySelectorAll('.exp-tab').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.exp-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(id).classList.add('active');
}

// MODAL
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(e, id) {
  if (e.target === document.getElementById(id)) {
    document.getElementById(id).classList.remove('open');
    document.body.style.overflow = '';
  }
}