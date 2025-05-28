export function createVlanCard(vlan) {
  const div = document.createElement('div');
  div.className = `vlan-card ${vlan.status === 'ativo' ? 'vlan-active' : 'vlan-inactive'}`;
  div.innerHTML = `
    <h3>VLAN ${vlan.id}</h3>
    <p><strong>Status:</strong> ${vlan.status}</p>
    <p><strong>Tráfego:</strong> ${vlan.trafego} Mbps</p>
  `;
  return div;
}
