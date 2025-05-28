import { fetchVlanData } from './api.js';
import { createVlanCard } from './ui.js';

export async function loadVlans() {
  try {
    const data = await fetchVlanData();
    const container = document.getElementById('vlan-container');
    container.innerHTML = ''; // Limpa o conteúdo anterior
    data.forEach(vlan => {
      const card = createVlanCard(vlan);
      container.appendChild(card);
    });
  } catch (error) {
    console.error(error);
  }
}
