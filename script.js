// Arquivo: script.js

const regulamentoData = {
    // PENALIDADES E DISPOSIÇÕES GERAIS
    "Tipos de Penalidades e Valores": "A violação do Regulamento sujeita a: 1. Advertência Verbal; 2. Notificação formal; 3. Aplicação de Multa (leve, média e grave). Os valores são: Leve (1 contribuição mensal base lote 300m²), Média (3 contribuições), Grave (5 contribuições).",
    "Obrigatoriedade da Taxa Associativa": "Todos os USUÁRIOS são obrigados a contribuir para despesas comuns, taxa associativa e custeio de obras. Inclui a taxa de roçada para terrenos vagos. [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Deveres Gerais dos Usuários": "É dever cumprir e fazer cumprir as determinações, acatar deliberações de Assembleia e tratar colaboradores com respeito (Art. 3º e 6º). [Penalidade: Advertência/Multa Geral (Art. 64º)]",

    // ACESSO E SEGURANÇA
    "Controle de Entrada e Saída": "Os portões permanecem fechados sob controle da Portaria. A entrada de veículos ou pessoas depende de cadastro e comprovação de sua condição (Art. 9º e 10º). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Uso de Crachá/Cartão de Acesso": "É obrigatório o uso do crachá/cartão para automóvel, afixado no para-brisa (Art. 40º). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Uso de Controle Remoto por Terceiros": "O USUÁRIO não pode fornecer o controle remoto aos prestadores de serviços para burlar as restrições de horários (Art. 44º, § 7º). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Aluguel por Temporada (Regras)": "Permitido, desde que o proprietário garanta o cumprimento de todas as normas. O não cumprimento dos procedimentos de controle de acesso (Art. 69º). [Penalidade: **Multa Grave** (5 contribuições)]",

    // MEIO-AMBIENTE E LIXO
    "Proibição de Descarte (Entulho)": "É proibido o depósito de entulho, restos de construção, madeiras ou qualquer outro material nas ruas e terrenos vazios (Art. 15º). [Penalidade: **Multa** (pena especificada no Art. 15º)]",
    "Coleta Seletiva (Separação do Lixo)": "Moradores devem separar lixo seco (plástico, papel, vidro) e 'molhados' (orgânico) e acondicioná-los nas lixeiras do Residencial (Art. 24º e 25º). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Animais Silvestres": "É proibida a caça, captura ou transporte de pássaros e animais silvestres na área do Residencial (Art. 23º). [Penalidade: Advertência/Multa Geral (Art. 64º)]",

    // SISTEMA VIÁRIO E CONVIVÊNCIA
    "Limite de Velocidade": "A velocidade máxima permitida nas vias públicas é de **20 Km/h** (Art. 26º). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Horário de Silêncio (Barulho)": "É vedado produzir sons que causem perturbação ao sossego, das **23h00m às 08h00m**, exceto em datas previamente aprovadas (Art. 28º). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Regras de Animais Domésticos": "Permitida a criação. O condutor é responsável pelo recolhimento imediato das fezes durante passeios (Art. 29º e 31º). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Uso de Armas e Fogos": "É vedado o uso de armas de fogo. Proibido o ingresso/uso de explosivos/fogos de artifício (exceto pirotecnia doméstica) (Art. 32º e 33º). [Penalidade: Advertência/Multa Geral (Art. 64º)]",

    // MUDANÇAS E OBRAS (Regulamento Interno)
    "Horário de Mudanças": "De Segunda a Sexta (08h00m às 17h00m) e Sábados (08h00m às 12h00m). Devem ser agendadas com 48 horas de antecedência (Art. 34º e 35º). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Obras, Reformas e Aprovação": "Qualquer projeto, obra ou reforma deve obedecer ao Código de Obras e ter aprovação prévia da Administração (Art. 48º). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Horário de Entrega de Materiais de Construção": "Entrada de material é permitida das **08h00m às 16h00m** nos dias úteis. Caminhões de concreto até as 17h00m (Art. 48º, § 3º e 4º). [Penalidade: Advertência/Multa Geral (Art. 64º)]",

    // CÓDIGO DE OBRAS (Trabalhadores e Canteiro) - NOVAS REGRAS DETALHADAS
    "Cadastro e Circulação de Funcionários": "Os funcionários de obra devem ser **cadastrados previamente** na Administração. A circulação é limitada ao lote da obra, sendo proibida a permanência (pernoite) no Residencial (Item 5 e 6.c). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Vestimenta de Funcionários": "É obrigatório que os trabalhadores estejam **devidamente trajados**. É **expressamente proibida a circulação sem camisa e descalços** no Residencial (Item 6.f). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Limpeza do Canteiro e Depósito de Materiais": "É proibido utilizar **lotes vizinhos como depósito** de materiais, estacionamento ou canteiro de obras. O responsável pela obra deve fazer a **limpeza semanal** do passeio e das vias adjacentes (Item 6.g e 6.h). [Penalidade: Multa Leve (Art. 15º / 65º)]",
    "Instalações Provisórias na Obra": "É obrigatório providenciar **sanitário químico/provisório** no fundo do lote e dispor de contentores para água pluvial. As instalações devem ter o mínimo de impacto visual (Item 5 e 6.e). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Início da Obra (Requisito Muro)": "A obra deve iniciar pela **execução do muro** (mínimo 1,80m e máximo 2,70m), conforme padrão Residencial (Item 5). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    
    // CÓDIGO DE OBRAS (Parâmetros Construtivos)
    "Fluxo de Aprovação de Obra (Código de Obras)": "Projeto deve ser aprovado pelo profissional do Residencial (com taxa), depois pela Prefeitura, e cópias aprovadas devem ser entregues à Administração (Itens 2, 3 e 4). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Área Mínima e Altura da Construção": "Mínimo de **140,00m²** (sem edículas/terraços). Máximo de **dois pavimentos** e altura máxima de **10,00m** do meio fio (Art. 7º e 9º). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Recuos de Construção": "Para lotes de testada igual ou superior a 12,00m: Frontal: **5,00m**; Laterais: **2,00m**; Fundos: **4,00m** (Art. 15º). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Muros e Fechamento Frontal": "**Proibido** muro, cerca ou gradil na frente do lote. Muros laterais/fundo devem ter altura máxima de **2,70m** e mínima de **1,80m** (Art. 14º). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Regras de Edículas": "Térreas (pé direito máx. 3,50m). Projeção horizontal máx. de **12%** da área do terreno. Afastamento mínimo de **2,00m** da principal (Art. 10º). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Regras sobre Piscinas": "Devem ser cercadas (segurança) e mantidas limpas/tratadas. Distância mínima de **1,5m** do muro do vizinho (35ª). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Regras de Caçambas de Entulho": "O responsável deve solicitar troca da caçamba antes do limite. Proibido deixar pedaços de ferro em áreas de passeio (34ª). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Ligações Elétricas e Cabos": "As ligações externas (energia elétrica, telefone, TV a cabo ou similares) serão **obrigatoriamente subterrâneas** (Artigo 12º). [Penalidade: Advertência/Multa Geral (Art. 64º)]",

    // ÁREAS DE LAZER E CONVIVÊNCIA
    "Horário Centro de Convivência": "O horário de utilização do Centro de Convivência (quadras esportivas e quiosques) é das **07h00m às 23h00m** (Art. 52º, § 1º). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Agendamento de Quadras Esportivas": "A utilização das quadras aos sábados, domingos, feriados e outros dias de maior movimento, deverá ser agendada na Portaria (Art. 56º, § 1º). [Penalidade: Advertência/Multa Geral (Art. 64º)]",
    "Horário do Playground": "O horário de funcionamento do Playground é das **08h00m às 22h00m** (Art. 59º). [Penalidade: Advertência/Multa Geral (Art. 64º)]"
};

document.addEventListener('DOMContentLoaded', () => {
    const chatBody = document.getElementById('chat-body');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const clearBtn = document.getElementById('clear-btn');
    const topicBtn = document.getElementById('topic-btn');
    const topicModal = document.getElementById('topic-modal');
    const topicList = document.getElementById('topic-list');
    const closeModalBtn = topicModal.querySelector('.close-btn');

    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.innerHTML = text;
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
        return messageDiv;
    }

    function addShareButton(messageElement, textToShare) {
        const shareBtn = document.createElement('button');
        shareBtn.textContent = '🔗 Compartilhar Resposta';
        shareBtn.className = 'share-btn';
        shareBtn.onclick = () => {
            const fullText = `Resposta do ChatBelize sobre o Regulamento: \n\n${textToShare.trim()}`; 
            
            if (navigator.share) {
                navigator.share({
                    title: 'ChatBelize - Regulamento Interno',
                    text: fullText,
                }).catch((error) => console.error('Erro ao compartilhar', error));
            } else {
                navigator.clipboard.writeText(fullText).then(() => {
                    alert('Resposta copiada para a área de transferência!');
                }).catch(err => {
                    alert('Seu navegador não suporta cópia automática. Copie o texto:\n\n' + fullText);
                });
            }
        };
        messageElement.appendChild(shareBtn);
    }

    function generateResponse(query) {
        let response = "Desculpe, não encontrei informações específicas sobre isso no regulamento. Tente usar o botão '📑 Tópicos' ou reformular sua pergunta com palavras-chave.";
        
        // 1. Busca por Tópico exato
        if (regulamentoData[query]) {
            response = regulamentoData[query];
        } else {
            // 2. Busca por palavra-chave (simples)
            const normalizedQuery = query.toLowerCase();
            for (const topic in regulamentoData) {
                // Se a palavra-chave estiver no tópico ou na resposta (para casos mais complexos)
                if (topic.toLowerCase().includes(normalizedQuery) || regulamentoData[topic].toLowerCase().includes(normalizedQuery)) {
                    response = regulamentoData[topic];
                    break;
                }
            }
        }

        const botMessageElement = addMessage(response, 'bot');
        addShareButton(botMessageElement, response);
    }

    // --- Eventos ---
    sendBtn.addEventListener('click', () => {
        const query = userInput.value.trim();
        if (query) {
            addMessage(query, 'user');
            userInput.value = '';
            generateResponse(query);
        }
    });

    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendBtn.click();
        }
    });

    clearBtn.addEventListener('click', () => {
        userInput.value = '';
        userInput.focus();
    });

    topicBtn.addEventListener('click', () => {
        topicList.innerHTML = '';
        // Cria e popula os botões de tópico
        for (const topic in regulamentoData) {
            const topicButton = document.createElement('button');
            topicButton.textContent = `➡️ ${topic}`;
            topicButton.className = 'topic-item-btn';
            topicButton.onclick = () => {
                topicModal.style.display = 'none';
                addMessage(topic, 'user');
                generateResponse(topic);
            };
            topicList.appendChild(topicButton);
        }
        topicModal.style.display = 'block';
    });

    closeModalBtn.addEventListener('click', () => {
        topicModal.style.display = 'none';
    });
    window.onclick = (event) => {
        if (event.target === topicModal) {
            topicModal.style.display = 'none';
        }
    };
});
