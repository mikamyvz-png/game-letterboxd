import "./layout.js";
import { carregarJogos, caminhoImagem, nomesPlataforma } from "./dados.js";

const alvo = document.getElementById("jogo");
const id = new URLSearchParams(location.search).get("id");
const jogos = await carregarJogos();
const j = jogos.find((x) => x.id === id);

if (!j) {
  alvo.innerHTML = `<p class="vazio">Jogo não encontrado. <a href="index.html">Voltar para a galeria</a></p>`;
} else {
  document.title = `${j.nome} | Game Tracker`;
  const capa = caminhoImagem(j, j.capa);
  const banner = caminhoImagem(j, j.banner) || capa;

  // Chips: mude ou adicione campos aqui
  const chips = ["Zerado", j.loja, j.ano, j.nota, j.platina ? "🏆" : null]
    .filter(Boolean)
    .map((c) => `<span class="chip">${c}</span>`).join("");

  alvo.innerHTML = `
    <a class="voltar" href="index.html">Voltar para a galeria</a>
    <div class="banner" style="--banner:url('${banner}')"></div>
    <div class="detalhe">
      <img class="detalhe-capa" src="${capa}" alt="Capa de ${j.nome}" onerror="this.remove()">
      <div>
        <h1>${j.nome}</h1>
        <div class="chips">${chips}</div>
        <dl class="infos">
          <dt>Lançamento</dt><dd>${j.lancamento ?? "-"}</dd>
          <dt>Gênero</dt><dd>${(j.generos ?? []).join(", ") || "-"}</dd>
          <dt>Plataforma</dt><dd>${nomesPlataforma[j.plataforma] ?? j.plataforma}</dd>
        </dl>
      </div>
    </div>`;
}
