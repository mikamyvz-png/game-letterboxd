// Tudo que mexe com os dados fica aqui.
// Um JSON por plataforma em assets/data/<plataforma>.json
// Para adicionar um console novo (ex.: nintendo), coloque o nome na lista abaixo e crie o arquivo.
const PLATAFORMAS = ["pc", "xbox", "playstation"];

export const nomesPlataforma = { pc: "PC", xbox: "Xbox", playstation: "PlayStation" };

export async function carregarJogos() {
  const listas = await Promise.all(
    PLATAFORMAS.map(async (plataforma) => {
      try {
        const resposta = await fetch(`assets/data/${plataforma}.json`);
        if (!resposta.ok) return [];
        const jogos = await resposta.json();
        // a plataforma vem do nome do arquivo, não precisa repetir em cada jogo
        return jogos.map((j) => ({ ...j, plataforma }));
      } catch (erro) {
        console.error(`Erro ao ler ${plataforma}.json:`, erro);
        return [];
      }
    })
  );
  return listas.flat();
}

// Imagens ficam em assets/img/<plataforma>/<arquivo>
export function caminhoImagem(jogo, arquivo) {
  return arquivo ? `assets/img/${jogo.plataforma}/${arquivo}` : "";
}
