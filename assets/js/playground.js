const workspace = document.querySelector('#playground-workspace');
const tools = document.querySelectorAll('.device-tool');
const clearButton = document.querySelector('#clear-playground');
const message = document.querySelector('#workspace-message');
let selectedDevice = 'router';
let deviceCount = 0;

tools.forEach((tool) => tool.addEventListener('click', () => {
  tools.forEach((item) => item.classList.remove('active'));
  tool.classList.add('active');
  selectedDevice = tool.dataset.device;
}));

workspace?.addEventListener('click', (event) => {
  if (event.target.closest('.demo-node, .added-node')) return;
  const bounds = workspace.getBoundingClientRect();
  const labels = { router: ['R', 'Router'], switch: ['S', 'Switch'], client: ['PC', 'Client'] };
  const [shortLabel, name] = labels[selectedDevice];
  deviceCount += 1;
  const node = document.createElement('div');
  node.className = 'added-node';
  node.style.left = `${Math.max(5, Math.min(event.clientX - bounds.left - 55, bounds.width - 135))}px`;
  node.style.top = `${Math.max(5, Math.min(event.clientY - bounds.top - 25, bounds.height - 65))}px`;
  node.innerHTML = `<b>${shortLabel}</b><span>${name}-${String(deviceCount).padStart(2, '0')}<small>nicht konfiguriert</small></span>`;
  workspace.appendChild(node);
  message.textContent = `${name} hinzugefügt · Demonstrationsmodus`;
});

clearButton?.addEventListener('click', () => {
  workspace.querySelectorAll('.added-node').forEach((node) => node.remove());
  deviceCount = 0;
  message.textContent = 'Vorschau: Klicke auf die Fläche, um ein Gerät hinzuzufügen.';
});
