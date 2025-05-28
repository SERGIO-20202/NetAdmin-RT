export async function fetchVlanData() {
  const response = await fetch('../data/vlans.json');
  if (!response.ok) {
    throw new Error('Erro ao carregar dados das VLANs');
  }
  return await response.json();
}
