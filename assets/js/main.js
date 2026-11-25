import "./layout.js";
import { carregarJogos, caminhoImagem, nomesPlataforma } from "./dados.js";

const grade = document.getElementById("grade");
const contagem = document.getElementById("contagem");
const busca = document.getElementById("busca");
const selPlataforma = document.getElementById("plataforma");
const selAno = document.getElementById("ano");

let jogos = [];

function cardHTML(j) {
  const capa = caminhoImagem(j, j.capa);
  return `
    <a class="card" href="jogo.html?id=${j.id}">
      <img src="${capa}" alt="" loading="lazy" onerror="this.remove()">
      <div class="card-info">
        <h3>${j.nome}</h3>
        <p>${j.platina ? "🏆 " : ""}${j.nota ?? ""}</p>
      </div>
    </a>`;
}

function desenhar() {
  const texto = busca.value.trim().toLowerCase();
  const lista = jogos.filter((j) =>
    j.nome.toLowerCase().includes(texto) &&
    (!selPlataforma.value || j.plataforma === selPlataforma.value) &&
    (!selAno.value || String(j.ano) === selAno.value)
  );
  grade.innerHTML = lista.length
    ? lista.map(cardHTML).join("")
    : `<p class="vazio">Nenhum jogo encontrado. Tente limpar os filtros.</p>`;
  contagem.textContent = `${lista.length} de ${jogos.length} jogos`;
}

function preencherFiltros() {
  const plataformas = [...new Set(jogos.map((j) => j.plataforma))];
  const anos = [...new Set(jogos.map((j) => j.ano))].sort((a, b) => b - a);
  selPlataforma.innerHTML += plataformas
    .map((p) => `<option value="${p}">${nomesPlataforma[p] ?? p}</option>`).join("");
  selAno.innerHTML += anos.map((a) => `<option value="${a}">${a}</option>`).join("");
}

jogos = await carregarJogos();
preencherFiltros();
desenhar();
[busca, selPlataforma, selAno].forEach((el) => el.addEventListener("input", desenhar));
