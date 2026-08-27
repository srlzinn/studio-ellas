/**
 * script.js - Studio Ellas
 * Sistema de Agendamento com Recibo
 * =====================================================
 */

// ============================================
// 1. CONFIGURAÇÕES
// ============================================
const CONFIG = {
  nome: "Studio Ellas",
  whatsapp: "5586999999999", // Número geral do estúdio (fallback)
  telefone: "(86) 99999-9999",
  endereco: "Parnaíba - PI",
  instagram: "https://www.instagram.com/studioellas_2025/",
  mensagemPadrao: "Olá! Vim pelo site do Studio Ellas e gostaria de agendar um horário.",
  email: "contato@studioellas.com.br"
};

// ============================================
// 2. PROFISSIONAIS E SERVIÇOS
// ============================================
const PROFISSIONAIS = [
  {
    id: "erica-lima",
    nome: "Dra. Erica Lima",
    area: "Odontologia",
    titulo: "Cirurgiã-Dentista",
    foto: "img/profissionais/erica-lima.jpg",
    descricao: "Especialista em odontologia com foco em estética dental, prevenção e atendimento humanizado.",
    formacao: ["Odontologia pela UFPI", "Especialização em Estética Dental"],
    especializacoes: ["Estética Dental", "Prevenção", "Atendimento Infantil"],
    experiencia: "8 anos de experiência",
    citacao: "Cada paciente é único e merece um tratamento que valorize sua história, suas necessidades e seu sorriso.",
    diferenciais: ["Atendimento personalizado", "Tecnologia de ponta", "Ambiente acolhedor"],
    // NÚMERO DE WHATSAPP DA PROFISSIONAL
    whatsapp: "558699317410", // 55 86 9931-7410
    disponibilidade: {
      segunda: ["08:00", "09:00", "10:00", "14:00", "15:00", "16:00"],
      terca: ["08:00", "09:00", "14:00", "15:00", "16:00"],
      quarta: ["08:00", "09:00", "10:00", "14:00", "15:00"],
      quinta: ["08:00", "09:00", "15:00", "16:00"],
      sexta: ["08:00", "09:00", "10:00", "14:00", "15:00"]
    },
    servicos: [
      { id: "prevencao", nome: "Prevenção", categoria: "Odontologia", descricao: "Cuidados preventivos para manter a saúde bucal em dia.", detalhes: ["Avaliação completa", "Profilaxia (limpeza)", "Aplicação de flúor", "Orientação de higiene"], preco: 150, tipoPreco: "fixo", imagem: "img/servicos/prevencao.jpg", duracao: 60 },
      { id: "estetica-dental", nome: "Estética Dental", categoria: "Odontologia", descricao: "Procedimentos estéticos para transformar seu sorriso.", detalhes: ["Clareamento dental", "Restaurações estéticas em resina"], preco: 350, tipoPreco: "a_partir_de", imagem: "img/servicos/estetica-dental.jpg", duracao: 90 },
      { id: "tratamento-gengiva", nome: "Tratamento da Gengiva", categoria: "Odontologia", descricao: "Cuidados especializados para a saúde da gengiva.", detalhes: ["Limpeza profunda", "Raspagem periodontal"], preco: 200, tipoPreco: "fixo", imagem: "", duracao: 60 },
      { id: "restauracoes", nome: "Restaurações", categoria: "Odontologia", descricao: "Restauração de dentes danificados por cáries ou traumas.", detalhes: ["Restauração de cáries", "Reconstrução dentária"], preco: 250, tipoPreco: "a_partir_de", imagem: "", duracao: 60 },
      { id: "cirurgia", nome: "Cirurgia", categoria: "Odontologia", descricao: "Procedimentos cirúrgicos com segurança e precisão.", detalhes: ["Extrações dentárias", "Extração de siso", "Remoção de raízes residuais"], preco: 400, tipoPreco: "a_partir_de", imagem: "", duracao: 90 },
      { id: "facetas-resina", nome: "Facetas em Resina", categoria: "Odontologia", descricao: "Restauração estética com facetas em resina para um sorriso perfeito.", detalhes: ["Aplicação de facetas", "Correção de formato e cor"], preco: 450, tipoPreco: "a_partir_de", imagem: "", duracao: 120 },
      { id: "ortodontia", nome: "Ortodontia", categoria: "Odontologia", descricao: "Correção da posição dos dentes para um sorriso alinhado.", detalhes: ["Avaliação", "Aparelho fixo", "Manutenções", "Contenção"], preco: 500, tipoPreco: "a_partir_de", imagem: "", duracao: 60 },
      { id: "atendimento-infantil", nome: "Atendimento Infantil", categoria: "Odontologia", descricao: "Atendimento especializado para crianças com cuidado e acolhimento.", detalhes: ["Avaliação infantil", "Prevenção", "Restaurações"], preco: 150, tipoPreco: "fixo", imagem: "", duracao: 60 }
    ]
  },
  {
    id: "sabrina-ribeiro",
    nome: "Sabrina Ribeiro",
    area: "Farmacêutica Esteta",
    titulo: "Farmacêutica Esteta",
    foto: "img/profissionais/sabrina-ribeiro.jpg",
    descricao: "Especialista em estética facial e corporal com tratamentos avançados.",
    formacao: ["Farmácia pela UFPI", "Especialização em Estética Avançada"],
    especializacoes: ["Estética Facial", "Estética Corporal", "Harmonização"],
    experiencia: "6 anos de experiência",
    citacao: "A beleza está em realçar o que você já tem de melhor, com segurança e naturalidade.",
    diferenciais: ["Tecnologia avançada", "Resultados naturais", "Atendimento personalizado"],
    // NÚMERO DE WHATSAPP DA PROFISSIONAL
    whatsapp: "556193226041", // 55 61 9322-6041
    disponibilidade: {
      segunda: ["09:00", "10:00", "14:00", "15:00", "16:00"],
      terca: ["09:00", "10:00", "14:00", "15:00"],
      quarta: ["09:00", "14:00", "15:00", "16:00"],
      quinta: ["09:00", "10:00", "14:00", "15:00"],
      sexta: ["09:00", "10:00", "14:00", "15:00", "16:00"]
    },
    servicos: [
      { id: "botox", nome: "Botox", categoria: "Estética Facial", descricao: "Tratamento para suavizar rugas e linhas de expressão.", detalhes: ["Procedimento seguro", "Resultados naturais", "Efeito duradouro"], preco: 450, tipoPreco: "a_partir_de", imagem: "img/servicos/botox.jpg", duracao: 60 },
      { id: "protocolo-capilar", nome: "Protocolo Capilar", categoria: "Estética Capilar", descricao: "Tratamento para fortalecimento e crescimento capilar.", detalhes: ["Estimulação capilar", "Fortalecimento dos fios"], preco: 200, tipoPreco: "a_partir_de", imagem: "", duracao: 90 },
      { id: "harmonizacao-gluteos", nome: "Harmonização de Glúteos", categoria: "Estética Corporal", descricao: "Procedimento para realçar e harmonizar a região glútea.", detalhes: ["Resultados naturais", "Procedimento seguro"], preco: 600, tipoPreco: "a_partir_de", imagem: "", duracao: 120 },
      { id: "eletroterapia", nome: "Eletroterapia", categoria: "Estética Corporal", descricao: "Tratamento com estímulos elétricos para rejuvenescimento.", detalhes: ["Estimulação celular", "Rejuvenescimento"], preco: 180, tipoPreco: "fixo", imagem: "", duracao: 60 },
      { id: "enzimas-emagrecedoras", nome: "Enzimas Emagrecedoras", categoria: "Estética Corporal", descricao: "Tratamento para redução de gordura localizada.", detalhes: ["Redução de medidas", "Resultados progressivos"], preco: 250, tipoPreco: "a_partir_de", imagem: "", duracao: 90 },
      { id: "terapia-ortomolecular", nome: "Terapia Ortomolecular", categoria: "Estética", descricao: "Tratamento com vitaminas e minerais para a saúde e beleza.", detalhes: ["Suplementação personalizada", "Bem-estar geral"], preco: 180, tipoPreco: "fixo", imagem: "", duracao: 60 },
      { id: "skinbooster", nome: "Skinbooster", categoria: "Estética Facial", descricao: "Tratamento para hidratação e rejuvenescimento da pele.", detalhes: ["Hidratação profunda", "Rejuvenescimento"], preco: 350, tipoPreco: "a_partir_de", imagem: "", duracao: 60 }
    ]
  },
  {
    id: "beatriz-menezes",
    nome: "Beatriz Menezes",
    area: "Massoterapia / Beleza",
    titulo: "Massoterapeuta",
    foto: "img/profissionais/beatriz-menezes.jpg",
    descricao: "Especialista em massoterapia e tratamentos de beleza para bem-estar.",
    formacao: ["Massoterapia pela UFPI", "Especialização em Beleza e Estética"],
    especializacoes: ["Massoterapia", "Beleza", "Bem-estar"],
    experiencia: "5 anos de experiência",
    citacao: "Cuidar de si mesmo é o primeiro passo para uma vida mais leve e feliz.",
    diferenciais: ["Atendimento personalizado", "Técnicas avançadas", "Ambiente acolhedor"],
    // NÚMERO DE WHATSAPP DA PROFISSIONAL (fallback para o geral)
    whatsapp: CONFIG.whatsapp,
    disponibilidade: {
      segunda: ["09:00", "10:00", "14:00", "15:00", "16:00"],
      terca: ["09:00", "10:00", "14:00", "15:00"],
      quarta: ["09:00", "14:00", "15:00", "16:00"],
      quinta: ["09:00", "10:00", "14:00", "15:00"],
      sexta: ["09:00", "10:00", "14:00", "15:00", "16:00"]
    },
    servicos: [
      { id: "limpeza-pele", nome: "Limpeza de Pele", categoria: "Beleza", descricao: "Procedimento completo para limpeza e renovação da pele.", detalhes: ["Higienização", "Esfoliação", "Emoliência", "Vapor de ozônio", "Extração", "Tonificação", "Aromaterapia", "Massagem facial", "LED terapia"], preco: 200, tipoPreco: "fixo", imagem: "img/servicos/limpeza-pele.jpg", duracao: 90 },
      { id: "massagem-relaxante", nome: "Massagem Relaxante", categoria: "Massoterapia", descricao: "Massagem para alívio de tensões e bem-estar.", detalhes: ["Aromaterapia", "Cromoterapia", "Sons binaurais"], preco: 160, tipoPreco: "fixo", imagem: "", duracao: 60 },
      { id: "ventosaterapia", nome: "Ventosaterapia", categoria: "Massoterapia", descricao: "Terapia com ventosas para alívio de dores e relaxamento.", detalhes: ["Massagem", "Aromaterapia", "Cromoterapia"], preco: 180, tipoPreco: "fixo", imagem: "", duracao: 60 },
      { id: "dermaplaning", nome: "Dermaplaning", categoria: "Beleza", descricao: "Procedimento para remoção de pele morta e renovação celular.", detalhes: ["Limpeza de pele", "Remoção de pele morta", "Renovação celular", "Remove pelinhos finos", "Glow imediato"], preco: 220, tipoPreco: "fixo", imagem: "", duracao: 60 },
      { id: "hydra-gloss", nome: "Hydra Gloss / Hydra Color", categoria: "Beleza", descricao: "Tratamento para hidratação e coloração dos lábios.", detalhes: ["Higienização", "Esfoliação", "Microagulhamento", "Sérum hidratante", "Lábios rosados"], preco: 150, tipoPreco: "fixo", imagem: "", duracao: 60 },
      { id: "microagulhamento", nome: "Microagulhamento", categoria: "Beleza", descricao: "Procedimento para rejuvenescimento e redução de rugas.", detalhes: ["Limpeza de pele", "GHK-Cu e Exossomos", "Rejuvenescimento e redução de rugas"], preco: 300, tipoPreco: "a_partir_de", imagem: "", duracao: 90 }
    ]
  }
];

// ============================================
// 3. FUNÇÕES AUXILIARES
// ============================================
function getProfissional(id) {
  return PROFISSIONAIS.find(p => p.id === id);
}

function getProfissionalPorServico(servicoId) {
  for (const prof of PROFISSIONAIS) {
    const servico = prof.servicos.find(s => s.id === servicoId);
    if (servico) return prof;
  }
  return null;
}

function getServico(profissionalId, servicoId) {
  const prof = getProfissional(profissionalId);
  return prof ? prof.servicos.find(s => s.id === servicoId) : null;
}

function formatPreco(preco, tipoPreco) {
  if (preco && tipoPreco === 'fixo') {
    return `R$ ${preco.toFixed(2).replace('.', ',')}`;
  } else if (preco && tipoPreco === 'a_partir_de') {
    return `A partir de R$ ${preco.toFixed(2).replace('.', ',')}`;
  } else {
    return 'Consultar valor';
  }
}

function getPrecoNumerico(preco, tipoPreco) {
  return preco || 0;
}

function getHorariosDisponiveis(profissionalId, data) {
  const prof = getProfissional(profissionalId);
  if (!prof) return [];
  const dias = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
  const diaSemana = dias[new Date(data).getDay()];
  return prof.disponibilidade[diaSemana] || [];
}

function gerarNumeroRecibo() {
  const agora = new Date();
  const ano = agora.getFullYear().toString().slice(-2);
  const mes = String(agora.getMonth() + 1).padStart(2, '0');
  const dia = String(agora.getDate()).padStart(2, '0');
  const hora = String(agora.getHours()).padStart(2, '0');
  const minuto = String(agora.getMinutes()).padStart(2, '0');
  const aleatorio = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
  return `SE-${ano}${mes}${dia}-${hora}${minuto}-${aleatorio}`;
}

function formatarData(data) {
  return new Date(data).toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
}

function formatarHora(hora) {
  return hora;
}

// ============================================
// 4. SISTEMA DE RECIBO
// ============================================
function gerarRecibo(dados) {
  const {
    profissional,
    servico,
    data,
    horario,
    nome,
    whatsapp,
    email,
    observacao,
    numeroRecibo
  } = dados;

  const preco = getPrecoNumerico(servico.preco, servico.tipoPreco);
  const precoFormatado = formatPreco(servico.preco, servico.tipoPreco);
  const dataFormatada = formatarData(data);
  
  return `
    <div class="recibo-container">
      <div class="recibo-header">
        <div class="recibo-logo">
          <span class="recibo-logo-nome">Studio Ellas</span>
          <span class="recibo-logo-sub">Beleza e Cuidados</span>
        </div>
        <div class="recibo-numero">
          <span class="recibo-label">Nº do Recibo</span>
          <span class="recibo-numero-valor">${numeroRecibo}</span>
        </div>
      </div>
      
      <div class="recibo-titulo">
        <h2>COMPROVANTE DE AGENDAMENTO</h2>
        <p>Este documento confirma o agendamento do seu atendimento no Studio Ellas</p>
      </div>
      
      <div class="recibo-corpo">
        <div class="recibo-info-cliente">
          <h3>Dados do Cliente</h3>
          <div class="recibo-info-linha">
            <span class="recibo-info-label">Nome:</span>
            <span class="recibo-info-valor">${nome}</span>
          </div>
          <div class="recibo-info-linha">
            <span class="recibo-info-label">WhatsApp:</span>
            <span class="recibo-info-valor">${whatsapp}</span>
          </div>
          ${email ? `
          <div class="recibo-info-linha">
            <span class="recibo-info-label">E-mail:</span>
            <span class="recibo-info-valor">${email}</span>
          </div>
          ` : ''}
        </div>
        
        <div class="recibo-info-atendimento">
          <h3>Dados do Atendimento</h3>
          <div class="recibo-info-linha">
            <span class="recibo-info-label">Profissional:</span>
            <span class="recibo-info-valor">${profissional.nome}</span>
          </div>
          <div class="recibo-info-linha">
            <span class="recibo-info-label">Especialidade:</span>
            <span class="recibo-info-valor">${profissional.area}</span>
          </div>
          <div class="recibo-info-linha">
            <span class="recibo-info-label">Serviço:</span>
            <span class="recibo-info-valor">${servico.nome}</span>
          </div>
          <div class="recibo-info-linha">
            <span class="recibo-info-label">Categoria:</span>
            <span class="recibo-info-valor">${servico.categoria}</span>
          </div>
          <div class="recibo-info-linha">
            <span class="recibo-info-label">Data:</span>
            <span class="recibo-info-valor">${dataFormatada}</span>
          </div>
          <div class="recibo-info-linha">
            <span class="recibo-info-label">Horário:</span>
            <span class="recibo-info-valor">${horario}</span>
          </div>
          <div class="recibo-info-linha">
            <span class="recibo-info-label">Duração:</span>
            <span class="recibo-info-valor">${servico.duracao} minutos</span>
          </div>
          <div class="recibo-info-linha">
            <span class="recibo-info-label">Valor:</span>
            <span class="recibo-info-valor recibo-valor-destaque">${precoFormatado}</span>
          </div>
          ${observacao ? `
          <div class="recibo-info-linha">
            <span class="recibo-info-label">Observação:</span>
            <span class="recibo-info-valor">${observacao}</span>
          </div>
          ` : ''}
        </div>
        
        <div class="recibo-detalhes-servico">
          <h3>Detalhes do Serviço</h3>
          <ul class="recibo-detalhes-lista">
            ${servico.detalhes.map(d => `<li>✓ ${d}</li>`).join('')}
          </ul>
        </div>
      </div>
      
      <div class="recibo-rodape">
        <div class="recibo-info-contato">
          <p><strong>Studio Ellas</strong></p>
          <p>📍 ${CONFIG.endereco}</p>
          <p>📱 ${CONFIG.telefone}</p>
          <p>📧 ${CONFIG.email}</p>
          <p>📷 @studioellas_2025</p>
        </div>
        <div class="recibo-assinatura">
          <div class="recibo-linha-assinatura">
            <span>______________________________</span>
            <span>Assinatura do Cliente</span>
          </div>
          <div class="recibo-linha-assinatura">
            <span>______________________________</span>
            <span>Assinatura do Profissional</span>
          </div>
        </div>
        <div class="recibo-data-emissao">
          <p>Emitido em: ${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'})}</p>
          <p class="recibo-aviso">* Este documento é um comprovante de agendamento. O valor pode ser ajustado conforme avaliação presencial.</p>
        </div>
      </div>
    </div>
  `;
}

// ============================================
// 5. ENVIO DE CONFIRMAÇÃO POR WHATSAPP
// ============================================
function enviarConfirmacaoWhatsApp(dados) {
  const {
    profissional,
    servico,
    data,
    horario,
    nome,
    whatsapp,
    observacao,
    numeroRecibo
  } = dados;

  const dataFormatada = formatarData(data);
  const precoFormatado = formatPreco(servico.preco, servico.tipoPreco);

  // Usar o WhatsApp da profissional ou o fallback
  const numeroWhatsApp = profissional.whatsapp || CONFIG.whatsapp;

  const mensagem = `✅ *CONFIRMAÇÃO DE AGENDAMENTO - STUDIO ELLAS*

📋 *Nº do Recibo:* ${numeroRecibo}

👤 *Cliente:* ${nome}
📱 *WhatsApp:* ${whatsapp}

👩‍⚕️ *Profissional:* ${profissional.nome}
📌 *Especialidade:* ${profissional.area}
💆 *Serviço:* ${servico.nome}
📂 *Categoria:* ${servico.categoria}
⏱ *Duração:* ${servico.duracao} minutos
💰 *Valor:* ${precoFormatado}

📅 *Data:* ${dataFormatada}
🕐 *Horário:* ${horario}

${observacao ? `📝 *Observação:* ${observacao}` : ''}

---
📍 ${CONFIG.endereco}
📱 ${CONFIG.telefone}
📷 @studioellas_2025

*Por favor, confirme seu agendamento respondendo esta mensagem.*

*Studio Ellas - Beleza e Cuidados* ✨`;

  // Abrir WhatsApp com o número da profissional
  abrirWhatsAppComNumero(numeroWhatsApp, mensagem);
}

// ============================================
// 5.1 FUNÇÃO PARA ABRIR WHATSAPP COM NÚMERO ESPECÍFICO
// ============================================
function abrirWhatsAppComNumero(numero, mensagem) {
  if (!numero) {
    console.error('Número de WhatsApp não configurado para esta profissional.');
    alert('⚠️ Número de WhatsApp não configurado para esta profissional.');
    return;
  }
  // Limpar formatação do número
  const numeroLimpo = numero.replace(/\D/g, '');
  const texto = encodeURIComponent(mensagem || CONFIG.mensagemPadrao);
  window.open(`https://wa.me/${numeroLimpo}?text=${texto}`, '_blank');
}

// ============================================
// 6. EXIBIÇÃO DO RECIBO NA TELA
// ============================================
function exibirRecibo(dados) {
  const reciboHTML = gerarRecibo(dados);
  
  // Criar modal do recibo
  const modal = document.createElement('div');
  modal.className = 'modal recibo-modal open';
  modal.id = 'reciboModal';
  modal.style.cssText = 'position:fixed;inset:0;z-index:5000;display:flex;align-items:center;justify-content:center;opacity:1;visibility:visible;';
  
  modal.innerHTML = `
    <div class="modal-overlay" style="position:absolute;inset:0;background:rgba(65,49,50,0.6);backdrop-filter:blur(8px);"></div>
    <div class="modal-content recibo-modal-content" style="position:relative;background:var(--surface);border-radius:var(--radius-lg);padding:40px;max-width:800px;width:95%;max-height:90vh;overflow-y:auto;box-shadow:var(--shadow-xl);transform:scale(1) translateY(0);">
      <button class="modal-close" style="position:sticky;top:0;float:right;background:none;border:none;font-size:1.8rem;cursor:pointer;color:var(--text-light);transition:all var(--transition);padding:4px;z-index:10;" onclick="document.getElementById('reciboModal').remove();document.body.classList.remove('no-scroll');">
        ✕
      </button>
      <div class="recibo-wrapper">
        ${reciboHTML}
      </div>
      <div class="recibo-acoes" style="display:flex;gap:12px;margin-top:24px;padding-top:20px;border-top:1px solid var(--border-light);flex-wrap:wrap;">
        <button onclick="window.print()" class="btn btn-primary" style="flex:1;min-width:140px;">
          <span class="btn-icon">🖨️</span> Imprimir Recibo
        </button>
        <button onclick="document.getElementById('reciboModal').remove();document.body.classList.remove('no-scroll');" class="btn btn-outline" style="flex:1;min-width:140px;">
          Fechar
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  document.body.classList.add('no-scroll');
  
  // Fechar ao clicar no overlay
  modal.querySelector('.modal-overlay').addEventListener('click', () => {
    modal.remove();
    document.body.classList.remove('no-scroll');
  });
  
  // Fechar com ESC
  document.addEventListener('keydown', function closeRecibo(e) {
    if (e.key === 'Escape') {
      const reciboModal = document.getElementById('reciboModal');
      if (reciboModal) {
        reciboModal.remove();
        document.body.classList.remove('no-scroll');
      }
      document.removeEventListener('keydown', closeRecibo);
    }
  });
}

// ============================================
// 7. PROCESSAMENTO DO AGENDAMENTO
// ============================================
function processarAgendamento(dados) {
  const {
    profissionalId,
    servicoId,
    data,
    horario,
    nome,
    whatsapp,
    email,
    observacao
  } = dados;

  const profissional = getProfissional(profissionalId);
  const servico = getServico(profissionalId, servicoId);
  
  if (!profissional || !servico) {
    alert('Erro: Profissional ou serviço não encontrado.');
    return;
  }

  // Validar dados
  if (!nome || !whatsapp || !data || !horario) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  // Gerar número do recibo
  const numeroRecibo = gerarNumeroRecibo();

  // Preparar dados do agendamento
  const dadosAgendamento = {
    profissional,
    servico,
    data,
    horario,
    nome,
    whatsapp,
    email: email || '',
    observacao: observacao || '',
    numeroRecibo
  };

  // Enviar confirmação por WhatsApp para a profissional
  enviarConfirmacaoWhatsApp(dadosAgendamento);

  // Exibir recibo na tela
  setTimeout(() => {
    exibirRecibo(dadosAgendamento);
  }, 500);
}

// ============================================
// 8. RENDERIZAÇÃO DA PÁGINA INICIAL
// ============================================
function renderizarProfissionais() {
  const container = document.getElementById('profissionaisGrid');
  if (!container) return;
  
  container.innerHTML = PROFISSIONAIS.map(prof => `
    <div class="profissional-card">
      <div class="profissional-imagem">
        <img src="${prof.foto || 'img/profissionais/default.jpg'}" alt="${prof.nome}" loading="lazy" />
        <div class="profissional-overlay">
          <span class="profissional-area">${prof.area}</span>
        </div>
      </div>
      <div class="profissional-content">
        <h3>${prof.nome}</h3>
        <span class="profissional-titulo">${prof.titulo}</span>
        <p>${prof.descricao}</p>
        <div class="profissional-servicos">
          ${prof.servicos.slice(0, 4).map(s => `<span class="servico-tag">${s.nome}</span>`).join('')}
          ${prof.servicos.length > 4 ? `<span class="servico-tag">+${prof.servicos.length - 4}</span>` : ''}
        </div>
        <a href="profissional.html?id=${prof.id}" class="btn btn-primary btn-ver-perfil">
          <span class="btn-icon">✦</span> Ver perfil
        </a>
      </div>
    </div>
  `).join('');
}

function renderizarServicosDestaque() {
  const container = document.getElementById('servicosGrid');
  if (!container) return;
  
  const destaques = [];
  PROFISSIONAIS.forEach(prof => {
    prof.servicos.slice(0, 2).forEach(s => {
      destaques.push({ ...s, profissionalId: prof.id, profissionalNome: prof.nome });
    });
  });
  
  container.innerHTML = destaques.slice(0, 6).map(s => `
    <div class="servico-card">
      <div class="servico-image">
        <img src="${s.imagem || 'img/servicos/default.jpg'}" alt="${s.nome}" loading="lazy" />
        <span class="servico-tag-categoria">✦ ${s.categoria}</span>
      </div>
      <div class="servico-content">
        <h3>${s.nome}</h3>
        <p>${s.descricao}</p>
        <div class="servico-profissional-nome">Com ${s.profissionalNome}</div>
        <div class="servico-preco">${formatPreco(s.preco, s.tipoPreco)}</div>
        <div class="servico-actions">
          <button class="btn btn-small btn-outline btn-detalhes" data-profissional="${s.profissionalId}" data-servico="${s.id}">Detalhes</button>
          <button class="btn btn-small btn-primary btn-agendar-servico" data-profissional="${s.profissionalId}" data-servico="${s.id}">Agendar</button>
        </div>
      </div>
    </div>
  `).join('');
  
  document.querySelectorAll('.btn-detalhes').forEach(btn => {
    btn.addEventListener('click', () => {
      abrirModalServico(btn.getAttribute('data-profissional'), btn.getAttribute('data-servico'));
    });
  });
  
  document.querySelectorAll('.btn-agendar-servico').forEach(btn => {
    btn.addEventListener('click', () => {
      const profId = btn.getAttribute('data-profissional');
      const servId = btn.getAttribute('data-servico');
      const prof = getProfissional(profId);
      const serv = getServico(profId, servId);
      if (prof && serv) {
        document.getElementById('agendaProfissional').value = profId;
        carregarServicos(profId, servId);
        document.getElementById('agendamento').scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// ============================================
// 9. PÁGINA DA PROFISSIONAL
// ============================================
function renderizarPaginaProfissional() {
  const params = new URLSearchParams(window.location.search);
  const profId = params.get('id');
  const prof = getProfissional(profId);
  
  if (!prof) {
    document.body.innerHTML = '<div style="padding:100px 20px;text-align:center;"><h2>Profissional não encontrada</h2><a href="index.html">Voltar para página inicial</a></div>';
    return;
  }
  
  document.title = `${prof.nome} | Studio Ellas`;
  
  // Hero
  const hero = document.getElementById('heroProfissional');
  if (hero) {
    hero.innerHTML = `
      <div class="container hero-profissional-inner" style="display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;">
        <div class="hero-profissional-content">
          <div class="hero-badge-wrap">
            <span class="hero-badge">✦ ${prof.area}</span>
          </div>
          <h1 class="hero-title">${prof.nome}</h1>
          <p class="hero-sub">${prof.descricao}</p>
          <div class="hero-profissional-meta">
            <span class="meta-item">✦ ${prof.titulo}</span>
            ${prof.diferenciais.map(d => `<span class="meta-item">✦ ${d}</span>`).join('')}
          </div>
          <div class="hero-buttons">
            <a href="#agendamento" class="btn btn-primary btn-hero-cta">
              <span class="btn-icon">✦</span> Agendar com ${prof.nome.split(' ')[0]}
            </a>
            <a href="#servicos" class="btn btn-outline btn-hero-secondary">
              Ver serviços <span class="btn-arrow">→</span>
            </a>
          </div>
        </div>
        <div class="hero-profissional-image">
          <div class="hero-image-wrap">
            <img src="${prof.foto || 'img/profissionais/default.jpg'}" alt="${prof.nome}" loading="eager" />
            <div class="hero-image-overlay"></div>
          </div>
          <div class="hero-deco deco-1"></div>
          <div class="hero-deco deco-2"></div>
        </div>
      </div>
    `;
  }
  
  // Sobre
  const sobre = document.getElementById('sobreProfissional');
  if (sobre) {
    sobre.innerHTML = `
      <div class="container sobre-profissional-grid" style="display:grid;grid-template-columns:2fr 1fr;gap:48px;align-items:start;">
        <div class="sobre-profissional-texto">
          <span class="section-tag">✦ Sobre</span>
          <h2>Conheça a <span class="section-highlight">${prof.nome}</span></h2>
          <p>${prof.descricao}</p>
          <div class="sobre-profissional-info">
            <div class="info-item">
              <strong>Formação</strong>
              ${prof.formacao.map(f => `<span>${f}</span>`).join('')}
            </div>
            <div class="info-item">
              <strong>Especializações</strong>
              ${prof.especializacoes.map(e => `<span>${e}</span>`).join('')}
            </div>
            <div class="info-item">
              <strong>Experiência</strong>
              <span>${prof.experiencia}</span>
            </div>
          </div>
          <div class="sobre-profissional-diferenciais">
            ${prof.diferenciais.map(d => `<span class="diferencial">✦ ${d}</span>`).join('')}
          </div>
        </div>
        <div class="sobre-profissional-citacao">
          <div class="citacao-box">
            <span class="citacao-quote">"</span>
            <p>${prof.citacao}</p>
            <span class="citacao-author">— ${prof.nome}</span>
          </div>
        </div>
      </div>
    `;
  }
  
  // Serviços
  const servicosContainer = document.getElementById('servicosProfissionalGrid');
  if (servicosContainer) {
    servicosContainer.innerHTML = prof.servicos.map(s => `
      <div class="servico-profissional-card">
        <h4>${s.nome}</h4>
        <p>${s.descricao}</p>
        <div class="servico-detalhes">
          ${s.detalhes.map(d => `<span>✓ ${d}</span>`).join('')}
        </div>
        <div class="servico-preco">${formatPreco(s.preco, s.tipoPreco)}</div>
        <div class="servico-actions">
          <button class="btn btn-small btn-primary btn-agendar-servico-profissional" data-servico="${s.id}">
            <span class="btn-icon">✦</span> Agendar
          </button>
        </div>
      </div>
    `).join('');
    
    servicosContainer.querySelectorAll('.btn-agendar-servico-profissional').forEach(btn => {
      btn.addEventListener('click', () => {
        const servId = btn.getAttribute('data-servico');
        const serv = getServico(prof.id, servId);
        if (serv) {
          const select = document.getElementById('servicoSelect');
          if (select) {
            select.value = servId;
            const event = new Event('change');
            select.dispatchEvent(event);
          }
          document.getElementById('agendamento').scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }
  
  // Agendamento
  const agendamentoForm = document.getElementById('formAgendamentoProfissional');
  if (agendamentoForm) {
    const servSelect = document.getElementById('servicoSelect');
    const dataInput = document.getElementById('dataSelect');
    const horarioSelect = document.getElementById('horarioSelect');
    const nomeInput = document.getElementById('nomeCliente');
    const whatsappInput = document.getElementById('whatsappCliente');
    const emailInput = document.getElementById('emailCliente');
    const obsInput = document.getElementById('obsCliente');
    
    // Preencher serviços
    prof.servicos.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.id;
      opt.textContent = `${s.nome} - ${formatPreco(s.preco, s.tipoPreco)}`;
      servSelect.appendChild(opt);
    });
    
    // Evento de mudança de serviço para mostrar detalhes
    servSelect.addEventListener('change', function() {
      const servId = this.value;
      const serv = getServico(prof.id, servId);
      if (serv) {
        const detalhesDiv = document.getElementById('servicoDetalhesPreview');
        if (detalhesDiv) {
          detalhesDiv.innerHTML = `
            <div class="servico-preview">
              <p><strong>Duração:</strong> ${serv.duracao} minutos</p>
              <p><strong>Valor:</strong> ${formatPreco(serv.preco, serv.tipoPreco)}</p>
              <div class="servico-preview-detalhes">
                ${serv.detalhes.map(d => `<span>✓ ${d}</span>`).join('')}
              </div>
            </div>
          `;
        }
      } else {
        const detalhesDiv = document.getElementById('servicoDetalhesPreview');
        if (detalhesDiv) detalhesDiv.innerHTML = '';
      }
    });
    
    // Evento de data para carregar horários
    dataInput.addEventListener('change', function() {
      const horarios = getHorariosDisponiveis(prof.id, this.value);
      horarioSelect.innerHTML = '<option value="">Selecione um horário</option>';
      horarios.forEach(h => {
        const opt = document.createElement('option');
        opt.value = h;
        opt.textContent = h;
        horarioSelect.appendChild(opt);
      });
    });
    
    // Submit do agendamento
    agendamentoForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const servicoId = servSelect.value;
      const data = dataInput.value;
      const horario = horarioSelect.value;
      const nome = nomeInput.value.trim();
      const whatsapp = whatsappInput.value.trim();
      const email = emailInput ? emailInput.value.trim() : '';
      const observacao = obsInput ? obsInput.value.trim() : '';
      
      if (!servicoId) { alert('Por favor, selecione um serviço.'); return; }
      if (!data) { alert('Por favor, selecione uma data.'); return; }
      if (!horario) { alert('Por favor, selecione um horário.'); return; }
      if (!nome) { alert('Por favor, informe seu nome completo.'); return; }
      if (!whatsapp) { alert('Por favor, informe seu WhatsApp.'); return; }
      
      // Processar agendamento
      processarAgendamento({
        profissionalId: prof.id,
        servicoId: servicoId,
        data: data,
        horario: horario,
        nome: nome,
        whatsapp: whatsapp,
        email: email,
        observacao: observacao
      });
    });
  }
}

// ============================================
// 10. MODAL DE SERVIÇO
// ============================================
function abrirModalServico(profissionalId, servicoId) {
  const servico = getServico(profissionalId, servicoId);
  const profissional = getProfissional(profissionalId);
  if (!servico || !profissional) return;
  
  const modal = document.getElementById('modalServico');
  document.getElementById('modalTitle').textContent = servico.nome;
  document.getElementById('modalDesc').textContent = servico.descricao;
  document.getElementById('modalDetalhes').innerHTML = servico.detalhes.map(d => `<span>✓ ${d}</span>`).join('');
  document.getElementById('modalPreco').textContent = formatPreco(servico.preco, servico.tipoPreco);
  document.getElementById('modalDuracao').textContent = `${servico.duracao} minutos`;
  document.getElementById('modalProfissionalNome').textContent = profissional.nome;
  
  const agendarBtn = document.querySelector('.btn-modal-agendar');
  agendarBtn.setAttribute('data-profissional', profissionalId);
  agendarBtn.setAttribute('data-servico', servicoId);
  
  agendarBtn.onclick = function(e) {
    e.preventDefault();
    const profId = this.getAttribute('data-profissional');
    const servId = this.getAttribute('data-servico');
    const prof = getProfissional(profId);
    const serv = getServico(profId, servId);
    if (prof && serv) {
      // Fechar modal
      modal.classList.remove('open');
      document.body.classList.remove('no-scroll');
      
      // Ir para agendamento na página principal
      const profSelect = document.getElementById('agendaProfissional');
      if (profSelect) {
        profSelect.value = profId;
        carregarServicos(profId, servId);
        document.getElementById('agendamento').scrollIntoView({ behavior: 'smooth' });
      } else {
        // Se estiver na página da profissional
        const servSelect = document.getElementById('servicoSelect');
        if (servSelect) {
          servSelect.value = servId;
          const event = new Event('change');
          servSelect.dispatchEvent(event);
          document.getElementById('agendamento').scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };
  
  modal.classList.add('open');
  document.body.classList.add('no-scroll');
}

// ============================================
// 11. AGENDAMENTO PRINCIPAL
// ============================================
function carregarServicos(profissionalId, servicoSelecionado) {
  const servSelect = document.getElementById('agendaServico');
  if (!servSelect) return;
  
  servSelect.innerHTML = '<option value="">Selecione um serviço</option>';
  if (!profissionalId) return;
  
  const prof = getProfissional(profissionalId);
  if (!prof) return;
  
  prof.servicos.forEach(s => {
    const option = document.createElement('option');
    option.value = s.id;
    option.textContent = `${s.nome} - ${formatPreco(s.preco, s.tipoPreco)}`;
    if (s.id === servicoSelecionado) option.selected = true;
    servSelect.appendChild(option);
  });
}

function configurarAgendamento() {
  const form = document.getElementById('formAgendamento');
  const profSelect = document.getElementById('agendaProfissional');
  const servSelect = document.getElementById('agendaServico');
  const dataInput = document.getElementById('agendaData');
  const horarioSelect = document.getElementById('agendaHorario');
  const nomeInput = document.getElementById('agendaNome');
  const whatsappInput = document.getElementById('agendaWhatsapp');
  const emailInput = document.getElementById('agendaEmail');
  const obsInput = document.getElementById('agendaObs');
  
  if (!form) return;
  
  // Preencher profissionais
  PROFISSIONAIS.forEach(prof => {
    const option = document.createElement('option');
    option.value = prof.id;
    option.textContent = prof.nome;
    profSelect.appendChild(option);
  });
  
  // Evento de mudança de profissional
  profSelect.addEventListener('change', () => {
    const profId = profSelect.value;
    carregarServicos(profId);
    
    // Limpar horários
    horarioSelect.innerHTML = '<option value="">Selecione um horário</option>';
    dataInput.value = '';
  });
  
  // Evento de mudança de serviço para mostrar detalhes
  servSelect.addEventListener('change', function() {
    const profId = profSelect.value;
    const servId = this.value;
    const serv = getServico(profId, servId);
    const detalhesDiv = document.getElementById('agendaServicoDetalhes');
    if (detalhesDiv && serv) {
      detalhesDiv.innerHTML = `
        <div class="servico-preview">
          <p><strong>Duração:</strong> ${serv.duracao} minutos</p>
          <p><strong>Valor:</strong> ${formatPreco(serv.preco, serv.tipoPreco)}</p>
          <div class="servico-preview-detalhes">
            ${serv.detalhes.map(d => `<span>✓ ${d}</span>`).join('')}
          </div>
        </div>
      `;
    } else if (detalhesDiv) {
      detalhesDiv.innerHTML = '';
    }
  });
  
  // Evento de data para carregar horários
  dataInput.addEventListener('change', function() {
    const profId = profSelect.value;
    const data = this.value;
    horarioSelect.innerHTML = '<option value="">Selecione um horário</option>';
    if (!profId || !data) return;
    const horarios = getHorariosDisponiveis(profId, data);
    horarios.forEach(h => {
      const option = document.createElement('option');
      option.value = h;
      option.textContent = h;
      horarioSelect.appendChild(option);
    });
  });
  
  // Submit do agendamento
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const profissionalId = profSelect.value;
    const servicoId = servSelect.value;
    const data = dataInput.value;
    const horario = horarioSelect.value;
    const nome = nomeInput.value.trim();
    const whatsapp = whatsappInput.value.trim();
    const email = emailInput ? emailInput.value.trim() : '';
    const observacao = obsInput ? obsInput.value.trim() : '';
    
    if (!profissionalId) { alert('Por favor, selecione uma profissional.'); return; }
    if (!servicoId) { alert('Por favor, selecione um serviço.'); return; }
    if (!data) { alert('Por favor, selecione uma data.'); return; }
    if (!horario) { alert('Por favor, selecione um horário.'); return; }
    if (!nome) { alert('Por favor, informe seu nome completo.'); return; }
    if (!whatsapp) { alert('Por favor, informe seu WhatsApp.'); return; }
    
    // Processar agendamento
    processarAgendamento({
      profissionalId: profissionalId,
      servicoId: servicoId,
      data: data,
      horario: horario,
      nome: nome,
      whatsapp: whatsapp,
      email: email,
      observacao: observacao
    });
  });
}

// ============================================
// 12. INTERAÇÕES GERAIS
// ============================================
function configurarBotoesWhatsApp() {
  document.querySelectorAll('.btn-hero-cta, .btn-whatsapp-header, .btn-whatsapp-mobile, .btn-bottom-wa, .btn-bottom-agendar, .btn-agendamento, .btn-form, .whatsapp-float, .footer-wa, .contato-wa').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Para os botões que não são de agendamento, usar o número geral
      abrirWhatsAppComNumero(CONFIG.whatsapp);
    });
  });
}

function configurarFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

function configurarFormularioContato() {
  const form = document.getElementById('formContato');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('contatoNome').value.trim();
    const whatsapp = document.getElementById('contatoWhatsapp').value.trim();
    const mensagem = document.getElementById('contatoMensagem').value.trim();
    if (!nome || !whatsapp) { alert('Preencha os campos obrigatórios.'); return; }
    const texto = `Olá! Meu nome é ${nome}.%0A%0AWhatsApp: ${whatsapp}%0A%0AMensagem: ${mensagem || 'Gostaria de agendar um atendimento.'}`;
    abrirWhatsAppComNumero(CONFIG.whatsapp, texto);
  });
}

function abrirWhatsApp(mensagem) {
  abrirWhatsAppComNumero(CONFIG.whatsapp, mensagem);
}

function sliderDepoimentos() {
  const track = document.getElementById('depoTrack');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');
  const dotsContainer = document.getElementById('sliderDots');
  if (!track || !prevBtn || !nextBtn) return;
  
  let currentSlide = 0, slides = track.children, totalSlides = slides.length, visibleSlides = 3, maxIndex = Math.max(0, totalSlides - visibleSlides), autoPlayInterval, isTransitioning = false;
  
  function getVisibleCount() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  }
  
  function updateSlider() {
    if (isTransitioning) return;
    isTransitioning = true;
    visibleSlides = getVisibleCount();
    maxIndex = Math.max(0, totalSlides - visibleSlides);
    currentSlide = Math.min(currentSlide, maxIndex);
    const slideWidth = 100 / visibleSlides;
    const gap = 24;
    const containerWidth = track.parentElement.offsetWidth;
    const offset = currentSlide * (slideWidth + (gap / containerWidth * 100));
    track.style.transform = `translateX(-${offset}%)`;
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.slider-dot');
      const activeIndex = Math.min(currentSlide, dots.length - 1);
      dots.forEach((dot, i) => dot.classList.toggle('active', i === activeIndex));
    }
    setTimeout(() => { isTransitioning = false; }, 500);
  }
  
  function nextSlide() { if (isTransitioning) return; currentSlide = currentSlide < maxIndex ? currentSlide + 1 : 0; updateSlider(); }
  function prevSlide() { if (isTransitioning) return; currentSlide = currentSlide > 0 ? currentSlide - 1 : maxIndex; updateSlider(); }
  
  function setupSlides() {
    const count = getVisibleCount();
    for (let slide of slides) slide.style.flex = `0 0 ${100 / count}%`;
  }
  
  setupSlides();
  prevBtn.addEventListener('click', prevSlide);
  nextBtn.addEventListener('click', nextSlide);
  
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => { setupSlides(); updateSlider(); }, 250);
  });
  
  function startAutoPlay() { if (autoPlayInterval) clearInterval(autoPlayInterval); autoPlayInterval = setInterval(nextSlide, 5000); }
  function stopAutoPlay() { if (autoPlayInterval) { clearInterval(autoPlayInterval); autoPlayInterval = null; } }
  
  const sliderContainer = document.querySelector('.depoimentos-slider');
  if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', stopAutoPlay);
    sliderContainer.addEventListener('mouseleave', startAutoPlay);
  }
  
  updateSlider();
  startAutoPlay();
}

function headerScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  let ticking = false, lastScrollY = 0, isHidden = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        const isMobile = window.innerWidth < 768;
        if (scrollY > 50) header.classList.add('scrolled'); else header.classList.remove('scrolled');
        if (isMobile) {
          if (scrollY > 100 && scrollY > lastScrollY && !isHidden) {
            header.style.transform = 'translateY(-100%)';
            header.style.transition = 'transform 0.4s ease';
            isHidden = true;
          } else if ((scrollY < lastScrollY || scrollY < 100) && isHidden) {
            header.style.transform = 'translateY(0)';
            isHidden = false;
          }
        } else { header.style.transform = 'translateY(0)'; isHidden = false; }
        lastScrollY = scrollY;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

function menuMobile() {
  const hamburger = document.querySelector('.menu-hamburger');
  const menu = document.querySelector('.menu-mobile');
  const overlay = document.querySelector('.menu-mobile-overlay');
  const closeBtn = document.querySelector('.menu-mobile-close');
  const links = document.querySelectorAll('.nav-link-mobile');
  const body = document.body;
  if (!hamburger || !menu || !overlay) return;
  
  function openMenu() { menu.classList.add('open'); overlay.classList.add('open'); hamburger.classList.add('active'); hamburger.setAttribute('aria-expanded', 'true'); body.classList.add('no-scroll'); }
  function closeMenu() { menu.classList.remove('open'); overlay.classList.remove('open'); hamburger.classList.remove('active'); hamburger.setAttribute('aria-expanded', 'false'); body.classList.remove('no-scroll'); hamburger.focus(); }
  
  hamburger.addEventListener('click', () => { menu.classList.contains('open') ? closeMenu() : openMenu(); });
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  links.forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && menu.classList.contains('open')) closeMenu(); });
}

function scrollSuave() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const menu = document.querySelector('.menu-mobile');
      if (menu && menu.classList.contains('open')) {
        menu.classList.remove('open');
        document.querySelector('.menu-mobile-overlay')?.classList.remove('open');
        document.querySelector('.menu-hamburger')?.classList.remove('active');
        document.body.classList.remove('no-scroll');
      }
      const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      if (history.pushState) history.pushState(null, null, targetId);
    });
  });
}

function preloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  window.addEventListener('load', () => {
    setTimeout(() => { preloader.classList.add('hidden'); document.body.style.overflow = ''; }, 600);
  });
  setTimeout(() => {
    if (!preloader.classList.contains('hidden')) { preloader.classList.add('hidden'); document.body.style.overflow = ''; }
  }, 3000);
}

function animacoesScroll() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.fade-up, .fade-in').forEach(el => el.classList.add('visible'));
    return;
  }
  const elements = document.querySelectorAll('.fade-up, .fade-in');
  if (!elements.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), Math.min(index * 80, 500));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  elements.forEach(el => observer.observe(el));
}

function adicionarClassesAnimacao() {
  const animations = [
    { selector: '.hero-content', class: 'fade-up' },
    { selector: '.hero-image', class: 'fade-in' },
    { selector: '.apresentacao-inner', class: 'fade-up' },
    { selector: '.profissionais-grid', class: 'fade-up' },
    { selector: '.servicos-grid', class: 'fade-up' },
    { selector: '.depoimentos-slider', class: 'fade-up' },
    { selector: '.faq-list', class: 'fade-up' },
    { selector: '.agendamento-container', class: 'fade-up' },
    { selector: '.contato-grid', class: 'fade-up' },
    { selector: '.cta-inner', class: 'fade-up' }
  ];
  animations.forEach(({ selector, class: className }) => {
    const el = document.querySelector(selector);
    if (el && !el.classList.contains(className)) el.classList.add(className);
  });
  document.querySelectorAll('.profissional-card, .servico-card, .depoimento-card, .faq-item').forEach((el, i) => {
    if (!el.classList.contains('fade-up')) { el.classList.add('fade-up'); el.style.transitionDelay = `${Math.min(i * 60, 400)}ms`; }
  });
}

function animarNumeros() {
  const numbers = document.querySelectorAll('.trust-number');
  if (!numbers.length) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    numbers.forEach(num => num.textContent = num.getAttribute('data-target') || num.textContent);
    return;
  }
  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        numbers.forEach(num => {
          const target = parseFloat(num.getAttribute('data-target') || num.textContent);
          if (!isNaN(target) && target > 0) {
            let current = 0;
            const steps = 40, increment = target / steps;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) { num.textContent = target.toString(); clearInterval(timer); } 
              else { num.textContent = Math.round(current); }
            }, 30);
          }
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  const trustContainer = document.querySelector('.hero-trust');
  if (trustContainer) observer.observe(trustContainer);
}

function configurarMobileBottomBar() {
  const bottomBar = document.getElementById('mobileBottomBar');
  if (!bottomBar) return;
  const checkMobile = () => { bottomBar.style.display = window.innerWidth < 768 ? 'flex' : 'none'; };
  checkMobile();
  window.addEventListener('resize', checkMobile);
}

function acessibilidadeFoco() {
  document.addEventListener('keydown', (e) => { if (e.key === 'Tab') document.body.classList.add('keyboard-navigation'); });
  document.addEventListener('mousedown', () => document.body.classList.remove('keyboard-navigation'));
}

// Fechar modais com ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.open').forEach(modal => {
      modal.classList.remove('open');
      document.body.classList.remove('no-scroll');
    });
  }
});

// Fechar modais ao clicar no overlay
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function() {
    const modal = this.closest('.modal');
    if (modal) { modal.classList.remove('open'); document.body.classList.remove('no-scroll'); }
  });
});

// ============================================
// 13. INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  preloader();
  
  if (window.location.pathname.includes('profissional.html')) {
    renderizarPaginaProfissional();
  } else {
    renderizarProfissionais();
    renderizarServicosDestaque();
    configurarAgendamento();
    configurarBotoesWhatsApp();
    configurarFaq();
    configurarFormularioContato();
    sliderDepoimentos();
    adicionarClassesAnimacao();
    animacoesScroll();
    animarNumeros();
  }
  
  headerScroll();
  menuMobile();
  scrollSuave();
  configurarMobileBottomBar();
  acessibilidadeFoco();
  
  console.log('💄 Studio Ellas - Plataforma Digital inicializada');
  console.log('👩‍⚕️ Profissionais:', PROFISSIONAIS.length);
  console.log('💼 Serviços:', PROFISSIONAIS.reduce((acc, p) => acc + p.servicos.length, 0));
  console.log('📋 Sistema de Agendamento com Recibo ativo');
  console.log('📱 WhatsApp da Dra. Erica Lima: 55 86 9931-7410');
  console.log('📱 WhatsApp da Sabrina Ribeiro: 55 61 9322-6041');
});

// EXPORTAÇÕES
window.CONFIG = CONFIG;
window.PROFISSIONAIS = PROFISSIONAIS;
window.getProfissional = getProfissional;
window.getProfissionalPorServico = getProfissionalPorServico;
window.getServico = getServico;
window.formatPreco = formatPreco;
window.abrirWhatsApp = abrirWhatsApp;
window.abrirWhatsAppComNumero = abrirWhatsAppComNumero;
window.abrirModalServico = abrirModalServico;
window.processarAgendamento = processarAgendamento;
window.gerarRecibo = gerarRecibo;
window.exibirRecibo = exibirRecibo;