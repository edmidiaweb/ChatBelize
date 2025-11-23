// Arquivo: script.js

const regulamentoData = {
    // DISPOSIÇÕES GERAIS E OBRIGAÇÕES
    "Obrigatoriedade Taxa Associativa": "Artigo 1º: Todos os usuários são obrigados a contribuir para as despesas comuns e para a taxa associativa mensal, bem como para o custeio de obras.",
    "Deveres dos Usuários": "Artigo 3º: É dever de todos os USUÁRIOS prestigiar e acatar as deliberações da Assembleia Geral, Ordinária e Extraordinária.",
    "Cópia do Regulamento em Contratos": "Artigo 4º: Uma cópia do Regulamento Interno deverá obrigatoriamente fazer parte integrante dos contratos de locação, comodatos ou vendas de unidades autônomas.",
    "Respeito a Colaboradores": "Artigo 6º: Todos os USUÁRIOS têm o dever de tratar com respeito todos os colaboradores, prestadores de serviços do Residencial.",

    // ENTRADA, SAÍDA E SEGURANÇA
    "Controle de Entrada e Saída": "Artigo 9º e 10º: Os portões permanecem fechados sob controle da Portaria. A entrada de veículos ou pessoas depende de cadastro, documentos e da comprobatória de sua condição (propriedade, locação, etc.).",
    "Uso de Crachá/Cartão de Acesso": "Artigo 40º: É obrigatório o uso do crachá/cartão para automóvel, com identificação da 'Residencial Belize', que deverá ser afixado no para-brisa.",
    "Uso de Controle Remoto por Terceiros": "Artigo 44º, § 7º: O USUÁRIO não pode usar o subterfúgio de fornecer o controle remoto aos prestadores de serviços para burlar as restrições de horários do Residencial.",

    // MEIO-AMBIENTE E LIXO
    "Proibição de Descarte (Entulho)": "Artigo 15º: É proibido o depósito de entulho, restos de construção, madeiras ou qualquer outro material nas ruas e terrenos vazios, sob pena de multa.",
    "Taxa de Roçada (Lotes Vazios)": "Artigo 20º: A manutenção e corte da vegetação de lotes vazios é executada pela Associação e cobrada mensalmente dos USUÁRIOS (Taxa Associativa de Roçada).",
    "Coleta Seletiva (Separação do Lixo)": "Artigo 24º e 25º: Os moradores devem separar lixo seco (plástico, papel, vidro) e 'molhados' (orgânico) e acondicioná-los em sacos plásticos nas lixeiras do Residencial.",
    "Proibição de Caça/Captura de Animais Silvestres": "Artigo 23º: É proibida a caça, captura ou transporte de pássaros e animais silvestres na área do Residencial.",

    // SISTEMA VIÁRIO E REGRAS DE CONVIVÊNCIA
    "Limites de Velocidade": "Artigo 26º: A velocidade máxima permitida nas vias públicas é de **20 Km/h**.",
    "Horário de Barulho": "Artigo 28º: É vedado produzir sons que causem perturbação ao sossego, das **23h00m às 08h00m**, exceto em datas previamente aprovadas.",
    "Animais Domésticos (Permissão)": "Artigo 29º: É permitida a criação de animais domésticos (cães, gatos e pássaros), respeitando limites de higiene, segurança e poluição sonora.",
    "Recolhimento de Fezes de Animais": "Artigo 31º: Ao passear com o animal, o condutor será responsável pelo recolhimento imediato das fezes.",
    "Armas e Fogos de Artifício": "Artigo 32º e 33º: É vedado o uso de armas de fogo e proibido o ingresso/uso de explosivos/fogos de artifício (exceto pirotecnia para uso doméstico).",
    
    // MUDANÇAS E OBRAS
    "Horário de Mudanças": "Artigo 34º e 35º: As mudanças só podem ser realizadas de Segunda a Sexta (08h00m às 17h00m) e Sábados (08h00m às 12h00m). Devem ser agendadas com 48 horas de antecedência.",
    "Obras e Reformas (Aprovação)": "Artigo 48º: Qualquer projeto, obra ou reforma deve obedecer ao Código de Obras e ter aprovação prévia da Administração.",
    "Horário de Entrega de Materiais de Construção": "Artigo 48º, § 3º: A entrada de material de construção é permitida das **08h00m às 16h00m** nos dias úteis.",
    "Horário de Caminhões de Concreto": "Artigo 48º, § 4º: Caminhões que transportam concreto serão permitidos até as 17h00m.",
    "Proibição de Permanência de Trabalhadores": "Artigo 48º, § 1º: Não é permitida a permanência de trabalhadores de obras ou reforma no Residencial ou pernoite no local.",

    // ÁREAS DE LAZER E CONVIVÊNCIA
    "Horário Centro de Convivência": "Artigo 52º, § 1º: O horário de utilização do Centro de Convivência (quadras esportivas e quiosques) será das **07h00m às 23h00m**.",
    "Agendamento de Quadras Esportivas": "Artigo 56º, § 1º: A utilização das quadras esportivas aos sábados, domingos, feriados e outros dias de maior movimento, deverá ser agendada na Portaria.",
    "Horário do Playground": "Artigo 59º: O horário de funcionamento do Playground é das **08h00m às 22h00m**.",

    // PENALIDADES
    "Tipos de Penalidades": "Artigo 64º: A violação do Regulamento sujeita a penalidades: 1. Advertência Verbal; 2. Notificação formal; 3. Aplicação de Multa (leve, média e grave).",
    "Valores das Multas": "Artigo 65º: As multas leves são de 1 contribuição mensal base lote 300m², médias de 3 contribuições e graves de 5 contribuições.",

    // DISPOSIÇÕES FINAIS
    "Alteração do Regulamento": "Artigo 70º: Este Regulamento Interno somente poderá ser alterado através de Assembleia Geral."
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
            // CORREÇÃO APLICADA AQUI: O .replace() com erro de sintaxe foi removido,
            // pois os dados fornecidos não contêm mais as citações, tornando-o desnecessário.
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
