import { loadVlans } from './vlanController.js';

loadVlans();

// Atualiza os dados a cada 10 segundos
setInterval(loadVlans, 10000);
