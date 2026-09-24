import { navegar } from './router.js';

// Escuta a alteração do URL sempre que clicas no menu
window.addEventListener('hashchange', navegar);

// Executa a função diretamente para desenhar o ecrã inicial logo na abertura
navegar();