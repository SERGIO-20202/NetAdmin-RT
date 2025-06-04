import { carregarVLANs } from './vlanService.js';

export async function renderizarGrafico(canvasId) {
  const vlans = await carregarVLANs();
  const ctx = document.getElementById(canvasId).getContext('2d');

  const dados = {
    labels: vlans.map(v => `VLAN ${v.id}`),
    datasets: [{
      label: 'Tráfego (Mbps)',
      data: vlans.map(v => v.traffic),
      backgroundColor: vlans.map(v => v.status === 'Ativa' ? 'rgba(75, 192, 192, 0.6)' : 'rgba(255, 99, 132, 0.6)'),
      borderColor: vlans.map(v => v.status === 'Ativa' ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)'),
      borderWidth: 1
    }]
  };

  new Chart(ctx, {
    type: 'bar',
    data: dados,
    options: {
      responsive: true,
      plugins: {
        legend: { display: true },
        title: { display: true, text: 'Tráfego por VLAN' }
      }
    }
  });
}
