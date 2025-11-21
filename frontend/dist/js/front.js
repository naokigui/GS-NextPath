async function buscarProfissoes() {
    try {
        const resp = await fetch("http://localhost:3000/profissoes");

        if (!resp.ok) {
            throw new Error(`Erro ao carregar dados (${resp.status})`);
        }

        const dados = await resp.json();
        return dados;

    } catch (erro) {
        console.error("Erro de comunicação com backend:", erro);

        exibirErro("Não foi possível carregar as profissões. Verifique a API e tente novamente.");
        return [];
    }
}

function exibirErro(msg) {
    const container = document.getElementById("cards-container");
    container.innerHTML = `
        <div class="col-span-full text-center bg-red-200 dark:bg-red-900 text-red-900 dark:text-red-200 p-4 rounded-lg shadow">
            <strong>Erro:</strong> ${msg}
        </div>
    `;
}

document.addEventListener("DOMContentLoaded", async () => {

    const cardsContainer = document.getElementById("cards-container");
    const filtersContainer = document.getElementById("filters");

    let profissoes = await buscarProfissoes();
    let profissoesFiltradas = [...profissoes];

    const idToArea = {
        "filter-todos": "Todos",
        "filter-tecnologia": "Tecnologia e Inovação",
        "filter-sustentabilidade": "Sustentabilidade e Meio Ambiente",
        "filter-saude": "Educação, Saúde e Desenvolvimento Humano",
        "filter-negocios": "Negócios, Dados e Economia Digital",
        "filter-industria": "Indústria, Engenharia e Produção"
    };

    function formatarSalario(valor) {
        if (!valor) return "—";
        const numero = parseFloat(String(valor).replace(/\D/g, ""));
        if (isNaN(numero)) return "—";
        
        return numero.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
            minimumFractionDigits: 0
        });
    }

    function renderCards(lista) {
        cardsContainer.innerHTML = "";

        if (!lista.length) {
            cardsContainer.innerHTML = `
                <p class="col-span-full text-center text-gray-600 dark:text-gray-300">
                    Nenhuma profissão encontrada.
                </p>
            `;
            return;
        }

        lista.forEach(p => {
            const card = document.createElement("div");
            card.className =
                "border border-gray-300 dark:border-gray-800 rounded-lg shadow bg-white dark:bg-gray-900 overflow-hidden transition hover:scale-105";

            card.innerHTML = `
                <img src="${p.imagem}" class="w-full h-40 object-cover">
                <div class="p-4">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">${p.titulo}</h3>
                    <p class="text-sm text-gray-700 dark:text-gray-300"><strong>Área:</strong> ${p.area}</p>
                    <p class="text-sm text-gray-700 dark:text-gray-300"><strong>Descrição:</strong> ${p.descricao}</p>
                    <p class="text-sm text-gray-700 dark:text-gray-300"><strong>Salário:</strong> ${formatarSalario(p.mediaSalarial)}</p>
                </div>
            `;

            cardsContainer.appendChild(card);
        });
    }

    if (filtersContainer) {
        filtersContainer.querySelectorAll("button").forEach(btn => {
            btn.addEventListener("click", () => {
                const area = idToArea[btn.id];

                if (area === "Todos") {
                    profissoesFiltradas = [...profissoes];
                } else {
                    profissoesFiltradas = profissoes.filter(p => p.area === area);
                }

                renderCards(profissoesFiltradas);
            });
        });
    }

    renderCards(profissoesFiltradas);
});
