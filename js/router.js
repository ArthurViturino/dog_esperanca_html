// Importa os textos do templates.js
import { templates } from './templates.js';

// Função principal
export function navegar() {
    // Pega o hash da URL, remove o #
    // Se não houver hash, define como 'inicio'
    const hash = window.location.hash.replace('#', '') || 'inicio';
    const conteudoPrincipal = document.querySelector('main');

    if (templates[hash]) {
        conteudoPrincipal.innerHTML = templates[hash]();
    if (hash === 'cadastro') {
    }

    }else{
        conteudoPrincipal.innerHTML = '<section><h2>Página não encontrada</h2></section>';
    }
}