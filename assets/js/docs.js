const searchInput = document.querySelector('#docs-search');
const sections = [...document.querySelectorAll('[data-doc-section]')];
const noResults = document.querySelector('#docs-no-results');

searchInput?.addEventListener('input', () => {
  const query = searchInput.value.trim().toLowerCase();
  let matches = 0;
  sections.forEach((section) => {
    const visible = !query || section.textContent.toLowerCase().includes(query);
    section.hidden = !visible;
    if (visible) matches += 1;
  });
  noResults.hidden = matches !== 0;
});

document.querySelectorAll('.docs-sidebar a').forEach((link) => link.addEventListener('click', () => {
  document.querySelectorAll('.docs-sidebar a').forEach((item) => item.classList.remove('active'));
  link.classList.add('active');
}));
