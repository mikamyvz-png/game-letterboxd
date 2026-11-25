# Game Tracker

Galeria dos jogos que eu zerei.

## Rodar
O site usa `fetch` nos JSON, então não abre direto com duplo clique.
Use a extensão Live Server do VS Code, ou `python3 -m http.server` na pasta do projeto.
Funciona no GitHub Pages.

## Adicionar um jogo
1. Coloque a capa em `assets/img/<plataforma>/` (pc, xbox ou playstation).
2. Adicione um bloco no JSON da plataforma: `assets/data/pc.json`, `xbox.json` ou `playstation.json`.
   - Use um `id` único (não mude depois).
   - Não precisa escrever a plataforma: ela vem do nome do arquivo.

## Onde mexer
- `assets/js/layout.js`: cabeçalho e rodapé
- `assets/js/dados.js`: leitura dos JSON e caminhos das imagens
- `assets/js/main.js`: galeria e filtros
- `assets/js/jogo.js`: página do jogo
- `assets/css/style.css`: visual (cores no topo, em `:root`)
