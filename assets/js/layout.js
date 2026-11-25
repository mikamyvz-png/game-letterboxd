// Cabeçalho e rodapé em um lugar só: mude aqui e muda em todas as páginas.
const header = `
  <header class="topo">
    <a href="index.html" class="logo">Game Tracker</a>
    <span class="sub">Jogos que eu zerei</span>
  </header>`;

const footer = `<footer class="rodape">Feito por mikamy</footer>`;

document.getElementById("header").innerHTML = header;
document.getElementById("footer").innerHTML = footer;
