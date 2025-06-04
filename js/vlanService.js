// Simula requisição assíncrona para carregar VLANs
export async function carregarVLANs() {
  // Simulação com delay opcional
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { id: 10, nome: 'Financeiro', status: 'Ativa', traffic: 40 },
        { id: 20, nome: 'TI', status: 'Inativa', traffic: 5 },
        { id: 30, nome: 'RH', status: 'Ativa', traffic: 25 },
        { id: 40, nome: 'Marketing', status: 'Ativa', traffic: 10 }
      ]);
    }, 300);
  });
}

export function renderizarVLANs(vlans) {
  const dashboard = document.getElementById('vlan-dashboard');
  dashboard.innerHTML = '';

  vlans.forEach(vlan => {
    const card = document.createElement('div');
    card.className = `vlan-card ${vlan.status.toLowerCase()}`;
    card.innerHTML = `
      <h3>VLAN ${vlan.id} - ${vlan.nome}</h3>
      <p>Status: <span class="status">${vlan.status}</span></p>
      <p>Tráfego: ${vlan.traffic} Mbps</p>
      <button class="toggle-status">Alternar Status</button>
    `;

    const botao = card.querySelector('.toggle-status');
    botao.addEventListener('click', () => {
      vlan.status = vlan.status === 'Ativa' ? 'Inativa' : 'Ativa';
      renderizarVLANs(vlans); // Re-renderiza após alternar status
    });

    dashboard.appendChild(card);
  });
}
