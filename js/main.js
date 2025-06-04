import { carregarVLANs, renderizarVLANs } from './vlanService.js';
import { renderizarGrafico } from './chart.js';

document.addEventListener('DOMContentLoaded', async () => {
  const vlans = await carregarVLANs();
  renderizarVLANs(vlans);
  renderizarGrafico('vlanChart');
});
