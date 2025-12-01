/**
 * ARQUIVO: script.js
 * Lógica para revelar a "carta surpresa" quando o gatinho é clicado.
 */

function revelarSurpresa() {
    // 1. Pega os elementos da página
    const conteudo = document.getElementById('carta-conteudo-gato');
    const mensagemClique = document.getElementById('mensagem-clique');
    
    // 2. Verifica se a carta já está revelada
    if (!conteudo.classList.contains('revelado')) {
        // 3. Adiciona a classe 'revelado' para mostrar o conteúdo (CSS)
        conteudo.classList.add('revelado');
        
        // 4. Esconde a mensagem de "Clique"
        mensagemClique.style.opacity = '0';
        
        // 5. Opcional: Remove o cursor de clique após a revelação
        document.getElementById('envelope-gatinho').style.cursor = 'default';
        
    } else {
        // Opcional: Se a carta já estiver aberta, pode-se adicionar uma função para fechar aqui
        // Mas o padrão para uma surpresa é que ela fique aberta.
        console.log("A surpresa já foi revelada!");
    }
}