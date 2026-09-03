/**
 * script.js - Centro Odontológico e Estético
 * Sistema de Agendamento com Comprovante e WhatsApp
 * =====================================================
 */

// ============================================
// 1. CONFIGURAÇÕES
// ============================================
const CONFIG = {
  nome: "Centro Odontológico e Estético",
  whatsapp: "5586993177410",
  telefone: "(86) 99317-7410",
  endereco: "Parnaíba - PI",
  instagram: "https://www.instagram.com/centroodontologicoeestetico/",
  mensagemPadrao: "Olá! Vim pelo site do Centro Odontológico e Estético e gostaria de agendar um horário.",
  email: "contato@centroodontologico.com.br"
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
    foto: "img/profissionais/erica.jpeg",
    descricao: "Especialista em odontologia com foco em estética dental, ortodontia e cirurgias orais menores.",
    formacao: [
      "Odontologia pela Unifacid",
      "Especialização em Ortodontia",
      "Aperfeiçoamento em Cirurgia Oral Menor",
      "Aperfeiçoamento em Facetas em Resina"
    ],
    whatsapp: "558699317410",
    disponibilidade: {
      segunda: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
      terca: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
      quarta: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
      quinta: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
      sexta: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]
    },
    servicos: [
      { id: "prevencao", nome: "Prevenção", categoria: "Odontologia", descricao: "Cuidados preventivos para manter a saúde bucal em dia.", detalhes: ["Avaliação completa", "Profilaxia (limpeza)", "Aplicação de flúor", "Orientação de higiene"], duracao: 60 },
      { id: "estetica-dental", nome: "Estética Dental", categoria: "Odontologia", descricao: "Procedimentos estéticos para transformar seu sorriso.", detalhes: ["Clareamento dental", "Restaurações estéticas em resina", "Facetas"], duracao: 90 },
      { id: "restauracoes", nome: "Restaurações", categoria: "Odontologia", descricao: "Restauração de dentes danificados por cáries ou traumas.", detalhes: ["Restauração de cáries", "Reconstrução dentária"], duracao: 60 },
      { id: "cirurgia", nome: "Cirurgia Oral Menor", categoria: "Odontologia", descricao: "Procedimentos cirúrgicos com segurança e precisão.", detalhes: ["Extrações dentárias", "Extração de siso", "Remoção de raízes residuais"], duracao: 90 },
      { id: "ortodontia", nome: "Ortodontia", categoria: "Odontologia", descricao: "Correção da posição dos dentes para um sorriso alinhado.", detalhes: ["Avaliação ortodôntica", "Aparelho fixo", "Aparelho removível", "Manutenções", "Contenção"], duracao: 60 },
      { id: "facetas-resina", nome: "Facetas em Resina", categoria: "Odontologia", descricao: "Facetas em resina para transformar seu sorriso.", detalhes: ["Avaliação estética", "Preparação", "Aplicação de resina", "Finalização e polimento"], duracao: 90 }
    ]
  },
  {
    id: "sabrina-ribeiro",
    nome: "Dra. Sabrina Ribeiro",
    area: "Farmacêutica Esteta",
    titulo: "Farmacêutica Esteta",
    foto: "img/profissionais/doutorasab.png",
    descricao: "Especialista em estética facial e corporal com tratamentos avançados e abordagem integrativa.",
    formacao: [
      "Farmácia pelo UNIFSA",
      "Pós-graduada em Estética Avançada",
      "Pós-graduada em Saúde Integrativa",
      "Residência em Harmonização Corporal",
      "Pós-graduada em Farmácia Clínica e Hospitalar"
    ],
    whatsapp: "556193226041",
    disponibilidade: {
      segunda: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
      terca: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
      quarta: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
      quinta: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
      sexta: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]
    },
    servicos: [
      { id: "botox", nome: "Botox", categoria: "Estética Facial", descricao: "Tratamento para suavizar rugas e linhas de expressão.", detalhes: ["Procedimento seguro", "Resultados naturais", "Efeito duradouro"], duracao: 60 },
      { id: "skinbooster", nome: "Skinbooster", categoria: "Estética Facial", descricao: "Tratamento para hidratação e rejuvenescimento da pele.", detalhes: ["Hidratação profunda", "Rejuvenescimento"], duracao: 60 },
      { id: "enzimas-emagrecedoras", nome: "Enzimas Emagrecedoras", categoria: "Estética Corporal", descricao: "Tratamento para redução de gordura localizada.", detalhes: ["Redução de medidas", "Resultados progressivos"], duracao: 90 },
      { id: "terapia-ortomolecular", nome: "Terapia Ortomolecular", categoria: "Estética", descricao: "Tratamento com vitaminas e minerais para a saúde e beleza.", detalhes: ["Suplementação personalizada", "Bem-estar geral"], duracao: 60 },
      { id: "harmonizacao-corporal", nome: "Harmonização Corporal", categoria: "Estética Corporal", descricao: "Procedimentos para harmonização e modelagem corporal.", detalhes: ["Avaliação corporal", "Tratamento personalizado", "Resultados naturais"], duracao: 90 }
    ]
  },
  {
    id: "adriana",
    nome: "Adriana Mariah",
    area: "Beleza e Estética",
    titulo: "Especialista em Beleza",
    foto: "img/profissionais/adriana.png",
    descricao: "Especialista em cuidados capilares e estética das unhas, com técnicas modernas para realçar sua beleza.",
    formacao: ["Curso de Especialização em Beleza", "Técnicas Avançadas em Cabelos e Unhas"],
    whatsapp: "5586993177410",
    disponibilidade: {
      segunda: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
      terca: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
      quarta: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
      quinta: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
      sexta: ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]
    },
    servicos: [
      { id: "alongamento-unhas", nome: "Alongamento de Unhas", categoria: "Beleza", descricao: "Alongamento de unhas com técnicas modernas e naturais.", detalhes: ["Preparação das unhas", "Aplicação de gel", "Modelagem", "Finalização e brilho"], duracao: 90 },
      { id: "banho-gel", nome: "Banho em Gel", categoria: "Beleza", descricao: "Banho de gel para hidratação e fortalecimento dos cabelos.", detalhes: ["Lavagem", "Aplicação de gel", "Massagem capilar", "Finalização"], duracao: 60 },
      { id: "esmaltacao-gel", nome: "Esmaltação em Gel", categoria: "Beleza", descricao: "Esmaltação em gel de longa duração para unhas perfeitas.", detalhes: ["Preparação das unhas", "Aplicação de base", "Esmaltação em gel", "Finalização"], duracao: 60 },
      { id: "manicure-pedicure", nome: "Manicure e Pedicure", categoria: "Beleza", descricao: "Cuidados completos para mãos e pés.", detalhes: ["Limpeza", "Corte e lixamento", "Hidratação", "Esmaltação"], duracao: 90 },
      { id: "selagem-organica", nome: "Selagem Orgânica", categoria: "Beleza", descricao: "Selagem orgânica para cabelos lisos e saudáveis.", detalhes: ["Lavagem", "Aplicação do produto", "Pré-secagem", "Selagem com prancha", "Finalização"], duracao: 120 },
      { id: "botox-capilar", nome: "Botox Capilar", categoria: "Beleza", descricao: "Tratamento de botox para cabelos danificados.", detalhes: ["Lavagem", "Aplicação do botox", "Massagem capilar", "Finalização"], duracao: 90 },
      { id: "mechas-luzes", nome: "Mechas ou Luzes", categoria: "Beleza", descricao: "Mechas e luzes para iluminar seu cabelo.", detalhes: ["Avaliação", "Aplicação das mechas", "Tempo de pausa", "Lavagem e finalização"], duracao: 120 },
      { id: "cortes-cabelo", nome: "Cortes de Cabelo", categoria: "Beleza", descricao: "Cortes modernos e personalizados para todos os estilos.", detalhes: ["Avaliação do rosto", "Corte personalizado", "Finalização"], duracao: 60 }
    ]
  }
];

// ============================================
// 3. FUNÇÕES AUXILIARES
// ============================================
function getProfissional(id) {
  return PROFISSIONAIS.find(p => p.id === id);
}

function getServico(profissionalId, servicoId) {
  const prof = getProfissional(profissionalId);
  return prof ? prof.servicos.find(s => s.id === servicoId) : null;
}

function formatPreco() {
  return 'Consultar valor';
}

function getHorariosDisponiveis(profissionalId, data) {
  const prof = getProfissional(profissionalId);
  if (!prof) return [];
  
  const dias = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];
  const dataObj = new Date(data);
  const diaSemana = dias[dataObj.getDay()];
  
  return prof.disponibilidade[diaSemana] || [];
}

function abrirWhatsApp(numero, mensagem) {
  if (!numero) {
    console.error('Número de WhatsApp não configurado.');
    alert('⚠️ Número de WhatsApp não configurado.');
    return;
  }
  const numeroLimpo = numero.replace(/\D/g, '');
  const texto = encodeURIComponent(mensagem || CONFIG.mensagemPadrao);
  window.open(`https://wa.me/${numeroLimpo}?text=${texto}`, '_blank');
}

function gerarNumeroRecibo() {
  const agora = new Date();
  const ano = agora.getFullYear().toString().slice(-2);
  const mes = String(agora.getMonth() + 1).padStart(2, '0');
  const dia = String(agora.getDate()).padStart(2, '0');
  const hora = String(agora.getHours()).padStart(2, '0');
  const minuto = String(agora.getMinutes()).padStart(2, '0');
  const aleatorio = String(Math.floor(Math.random() * 1000)).padStart(3, '0');
  return `COE-${ano}${mes}${dia}-${hora}${minuto}-${aleatorio}`;
}

function formatarData(data) {
  return new Date(data).toLocaleDateString('pt-BR', {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
}

// ============================================
// 4. GERADOR DE COMPROVANTE
// ============================================
function gerarComprovanteHTML(dados) {
  const { profissional, servico, data, horario, nome, whatsapp, observacao, numeroRecibo } = dados;
  const dataFormatada = formatarData(data);
  
  return `
    <div class="recibo-container">
      <div class="recibo-header">
        <div>
          <span class="recibo-logo-nome">${CONFIG.nome}</span>
          <span class="recibo-logo-sub">${CONFIG.endereco}</span>
        </div>
        <div class="recibo-numero">
          <span class="recibo-label">Nº do Recibo</span>
          <span class="recibo-numero-valor">${numeroRecibo}</span>
        </div>
      </div>
      
      <div class="recibo-titulo">
        <h2>✅ COMPROVANTE DE AGENDAMENTO</h2>
        <p>Este documento confirma o agendamento do seu atendimento</p>
      </div>
      
      <div class="recibo-corpo">
        <div class="recibo-foto">
          <img src="${profissional.foto || 'img/profissionais/default.jpg'}" alt="${profissional.nome}" />
        </div>
        
        <div class="recibo-foto-nome">
          <h3>${profissional.nome}</h3>
          <span class="recibo-especialidade">${profissional.area}</span>
        </div>
        
        <div class="recibo-info-section">
          <h4>👤 Dados do Cliente</h4>
          <div class="recibo-info-linha">
            <span class="recibo-info-label">Nome:</span>
            <span class="recibo-info-valor">${nome}</span>
          </div>
          <div class="recibo-info-linha">
            <span class="recibo-info-label">WhatsApp:</span>
            <span class="recibo-info-valor">${whatsapp}</span>
          </div>
          <div class="recibo-info-linha">
            <span class="recibo-info-label">Data de emissão:</span>
            <span class="recibo-info-valor">${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR', {hour:'2-digit', minute:'2-digit'})}</span>
          </div>
        </div>
        
        <div class="recibo-info-section">
          <h4>💆 Dados do Atendimento</h4>
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
        </div>
        
        <div class="recibo-detalhes-servico">
          <h4>📋 Detalhes do Serviço</h4>
          <ul class="recibo-detalhes-lista">
            ${servico.detalhes.map(d => `<li>✓ ${d}</li>`).join('')}
          </ul>
        </div>
        
        ${observacao ? `
        <div class="recibo-observacao">
          <p><strong>📝 Observação:</strong> ${observacao}</p>
        </div>
        ` : ''}
      </div>
      
      <div class="recibo-rodape">
        <div class="recibo-info-contato">
          <p><strong>${CONFIG.nome}</strong></p>
          <p>📍 ${CONFIG.endereco}</p>
          <p>📱 ${CONFIG.telefone}</p>
          <p>📷 @centroodontologicoeestetico</p>
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
          <p class="recibo-aviso">* Este documento é um comprovante de agendamento.</p>
        </div>
      </div>
    </div>
  `;
}

function exibirComprovante(dados) {
  const html = gerarComprovanteHTML(dados);
  
  const existingModal = document.getElementById('reciboModal');
  if (existingModal) {
    existingModal.remove();
    document.body.classList.remove('no-scroll');
  }
  
  const modal = document.createElement('div');
  modal.className = 'recibo-modal';
  modal.id = 'reciboModal';
  
  modal.innerHTML = `
    <div class="recibo-content">
      <button class="recibo-close" aria-label="Fechar comprovante">✕</button>
      ${html}
      <div class="recibo-acoes">
        <button onclick="window.print()" class="btn btn-primary">
          <span class="btn-icon">🖨️</span> Imprimir
        </button>
        <button onclick="fecharComprovante()" class="btn btn-outline">
          Fechar
        </button>
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  document.body.classList.add('no-scroll');
  
  modal.addEventListener('click', function(e) {
    if (e.target === this) {
      fecharComprovante();
    }
  });
  
  document.addEventListener('keydown', function closeRecibo(e) {
    if (e.key === 'Escape') {
      fecharComprovante();
      document.removeEventListener('keydown', closeRecibo);
    }
  });
  
  const closeBtn = modal.querySelector('.recibo-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', fecharComprovante);
  }
}

window.fecharComprovante = function() {
  const modal = document.getElementById('reciboModal');
  if (modal) {
    modal.remove();
    document.body.classList.remove('no-scroll');
  }
};

// ============================================
// 5. PROCESSAR AGENDAMENTO
// ============================================
function processarAgendamento(dados) {
  const { profissionalId, servicoId, data, horario, nome, whatsapp, observacao } = dados;

  const profissional = getProfissional(profissionalId);
  const servico = getServico(profissionalId, servicoId);
  
  if (!profissional || !servico) {
    alert('Erro: Profissional ou serviço não encontrado.');
    return;
  }

  if (!nome || !whatsapp || !data || !horario) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  const whatsappLimpo = whatsapp.replace(/\D/g, '');
  if (whatsappLimpo.length < 10) {
    alert('Por favor, informe um número de WhatsApp válido (com DDD).');
    return;
  }

  const numeroRecibo = gerarNumeroRecibo();
  const dataFormatada = formatarData(data);
  const numeroWhatsApp = profissional.whatsapp || CONFIG.whatsapp;

  const dadosAgendamento = { profissional, servico, data, horario, nome, whatsapp, observacao, numeroRecibo };

  exibirComprovante(dadosAgendamento);

  const mensagem = `✅ *CONFIRMAÇÃO DE AGENDAMENTO - ${CONFIG.nome}*

📋 *Nº do Recibo:* ${numeroRecibo}

👤 *Cliente:* ${nome}
📱 *WhatsApp:* ${whatsapp}

👩‍⚕️ *Profissional:* ${profissional.nome}
📌 *Especialidade:* ${profissional.area}
💆 *Serviço:* ${servico.nome}
📂 *Categoria:* ${servico.categoria}
⏱ *Duração:* ${servico.duracao} minutos

📅 *Data:* ${dataFormatada}
🕐 *Horário:* ${horario}

${observacao ? `📝 *Observação:* ${observacao}` : ''}

---
📍 ${CONFIG.endereco}
📱 ${CONFIG.telefone}
📷 @centroodontologicoeestetico

*Por favor, confirme seu agendamento respondendo esta mensagem.*

*${CONFIG.nome}* ✨`;

  setTimeout(() => {
    abrirWhatsApp(numeroWhatsApp, mensagem);
  }, 500);
}

// ============================================
// 6. RENDERIZAÇÃO DA PÁGINA INICIAL
// ============================================
function renderizarProfissionais() {
  const container = document.getElementById('profissionaisGrid');
  if (!container) return;
  
  container.innerHTML = PROFISSIONAIS.map(prof => {
    return `
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
  `}).join('');
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
        <div class="servico-placeholder">
          <span class="servico-emoji">✦</span>
          <span class="servico-placeholder-text">${s.categoria}</span>
        </div>
        <span class="servico-tag-categoria">✦ ${s.categoria}</span>
      </div>
      <div class="servico-content">
        <h3>${s.nome}</h3>
        <p>${s.descricao}</p>
        <div class="servico-profissional-nome">Com ${s.profissionalNome}</div>
        <div class="servico-actions">
          <button class="btn btn-small btn-outline btn-detalhes" data-profissional="${s.profissionalId}" data-servico="${s.id}">Detalhes</button>
          <a href="profissional.html?id=${s.profissionalId}" class="btn btn-small btn-primary">Agendar</a>
        </div>
      </div>
    </div>
  `).join('');
  
  document.querySelectorAll('.btn-detalhes').forEach(btn => {
    btn.addEventListener('click', function() {
      abrirModalServico(this.getAttribute('data-profissional'), this.getAttribute('data-servico'));
    });
  });
}

// ============================================
// 7. PÁGINA DA PROFISSIONAL
// ============================================
function renderizarPaginaProfissional() {
  const params = new URLSearchParams(window.location.search);
  const profId = params.get('id');
  const prof = getProfissional(profId);
  
  if (!prof) {
    document.body.innerHTML = '<div style="padding:100px 20px;text-align:center;color:#fff;"><h2>Profissional não encontrada</h2><a href="index.html" style="color:#F0D060;">Voltar para página inicial</a></div>';
    return;
  }
  
  document.title = `${prof.nome} | Centro Odontológico e Estético`;
  
  const hero = document.getElementById('heroProfissional');
  if (hero) {
    hero.innerHTML = `
      <div class="container hero-profissional-grid">
        <div class="hero-profissional-content">
          <div class="hero-badge">
            <span class="hero-badge-line"></span>
            ${prof.area}
          </div>
          <h1 class="hero-title">${prof.nome}</h1>
          <p class="hero-sub">${prof.descricao}</p>
          <div class="hero-profissional-meta">
            <span class="meta-item">✦ ${prof.titulo}</span>
            ${prof.formacao.map(f => `<span class="meta-item">✦ ${f}</span>`).join('')}
          </div>
          <div class="hero-buttons">
            <a href="#agendamento" class="btn btn-primary">
              <span class="btn-icon">✦</span> Agendar com ${prof.nome.split(' ')[0]}
            </a>
            <a href="#servicos" class="btn btn-outline">
              Ver serviços <span class="btn-arrow">→</span>
            </a>
          </div>
        </div>
        <div class="hero-profissional-image">
          <div class="hero-profissional-image-frame">
            <div class="hero-profissional-image-frame-inner">
              <img src="${prof.foto || 'img/profissionais/default.jpg'}" alt="${prof.nome}" loading="eager" />
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  const sobre = document.getElementById('sobreProfissional');
  if (sobre) {
    sobre.innerHTML = `
      <div class="container sobre-profissional-grid">
        <div class="sobre-profissional-texto">
          <span class="section-tag">✦ Formação</span>
          <h2>Conheça a <span class="section-highlight">${prof.nome}</span></h2>
          <div class="sobre-profissional-info">
            <div class="info-item">
              <strong>Formação</strong>
              ${prof.formacao.map(f => `<span>${f}</span>`).join('')}
            </div>
          </div>
        </div>
        <div class="sobre-profissional-citacao">
          <div class="citacao-box">
            <span class="citacao-quote">"</span>
            <p>Excelência e cuidado em cada atendimento.</p>
            <span class="citacao-author">— ${prof.nome}</span>
          </div>
        </div>
      </div>
    `;
  }
  
  const servicosContainer = document.getElementById('servicosProfissionalGrid');
  if (servicosContainer) {
    servicosContainer.innerHTML = prof.servicos.map(s => `
      <div class="servico-profissional-card">
        <h4>${s.nome}</h4>
        <p>${s.descricao}</p>
        <div class="servico-detalhes">
          ${s.detalhes.map(d => `<span>✓ ${d}</span>`).join('')}
        </div>
        <div class="servico-actions">
          <button class="btn btn-small btn-primary btn-agendar-servico-profissional" data-servico="${s.id}">
            <span class="btn-icon">✦</span> Agendar
          </button>
        </div>
      </div>
    `).join('');
    
    servicosContainer.querySelectorAll('.btn-agendar-servico-profissional').forEach(btn => {
      btn.addEventListener('click', function() {
        const servId = this.getAttribute('data-servico');
        const serv = getServico(prof.id, servId);
        if (serv) {
          const select = document.getElementById('agendaServico');
          if (select) {
            select.value = servId;
            const event = new Event('change');
            select.dispatchEvent(event);
          }
          const agendamentoSection = document.getElementById('agendamento');
          if (agendamentoSection) {
            agendamentoSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }
  
  configurarAgendamentoProfissional(prof);
}

// ============================================
// 8. CONFIGURAR AGENDAMENTO
// ============================================
function configurarAgendamentoProfissional(prof) {
  const form = document.getElementById('formAgendamento');
  const servSelect = document.getElementById('agendaServico');
  const dataInput = document.getElementById('agendaData');
  const horarioSelect = document.getElementById('agendaHorario');
  const nomeInput = document.getElementById('agendaNome');
  const whatsappInput = document.getElementById('agendaWhatsapp');
  const obsInput = document.getElementById('agendaObs');
  
  if (!form) return;
  
  servSelect.innerHTML = '<option value="">Selecione um serviço</option>';
  prof.servicos.forEach(s => {
    const option = document.createElement('option');
    option.value = s.id;
    option.textContent = s.nome;
    servSelect.appendChild(option);
  });
  
  servSelect.addEventListener('change', function() {
    const servId = this.value;
    const serv = getServico(prof.id, servId);
    const detalhesDiv = document.getElementById('agendaServicoDetalhes');
    if (detalhesDiv && serv) {
      detalhesDiv.innerHTML = `
        <div class="servico-preview" style="background:rgba(240,208,96,0.05);padding:16px;border-radius:8px;border:1px solid rgba(240,208,96,0.15);margin-bottom:16px;">
          <p><strong>Duração:</strong> ${serv.duracao} minutos</p>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:8px;">
            ${serv.detalhes.map(d => `<span style="font-size:0.8rem;color:rgba(255,255,255,0.7);background:rgba(255,255,255,0.04);padding:4px 12px;border-radius:50px;border:1px solid rgba(240,208,96,0.08);">✓ ${d}</span>`).join('')}
          </div>
        </div>
      `;
    } else if (detalhesDiv) {
      detalhesDiv.innerHTML = '';
    }
  });
  
  const today = new Date().toISOString().split('T')[0];
  if (dataInput) {
    dataInput.setAttribute('min', today);
  }
  
  dataInput.addEventListener('change', function() {
    const data = this.value;
    horarioSelect.innerHTML = '<option value="">Selecione um horário</option>';
    if (!data) return;
    
    const horarios = getHorariosDisponiveis(prof.id, data);
    if (horarios && horarios.length > 0) {
      horarios.forEach(h => {
        const option = document.createElement('option');
        option.value = h;
        option.textContent = h;
        horarioSelect.appendChild(option);
      });
    } else {
      const option = document.createElement('option');
      option.value = '';
      option.textContent = 'Nenhum horário disponível';
      horarioSelect.appendChild(option);
    }
  });
  
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const servicoId = servSelect.value;
    const data = dataInput.value;
    const horario = horarioSelect.value;
    const nome = nomeInput.value.trim();
    const whatsapp = whatsappInput.value.trim();
    const observacao = obsInput ? obsInput.value.trim() : '';
    
    if (!servicoId) { 
      alert('Por favor, selecione um serviço.'); 
      servSelect.focus();
      return; 
    }
    if (!data) { 
      alert('Por favor, selecione uma data.'); 
      dataInput.focus();
      return; 
    }
    if (!horario) { 
      alert('Por favor, selecione um horário.'); 
      horarioSelect.focus();
      return; 
    }
    if (!nome) { 
      alert('Por favor, informe seu nome completo.'); 
      nomeInput.focus();
      return; 
    }
    if (!whatsapp) { 
      alert('Por favor, informe seu WhatsApp.'); 
      whatsappInput.focus();
      return; 
    }
    
    processarAgendamento({
      profissionalId: prof.id,
      servicoId: servicoId,
      data: data,
      horario: horario,
      nome: nome,
      whatsapp: whatsapp,
      observacao: observacao
    });
  });
}

// ============================================
// 9. MODAL DE SERVIÇO
// ============================================
function abrirModalServico(profissionalId, servicoId) {
  const servico = getServico(profissionalId, servicoId);
  const profissional = getProfissional(profissionalId);
  if (!servico || !profissional) return;
  
  const modal = document.getElementById('modalServico');
  if (!modal) return;
  
  const title = document.getElementById('modalTitle');
  const desc = document.getElementById('modalDesc');
  const detalhes = document.getElementById('modalDetalhes');
  const preco = document.getElementById('modalPreco');
  const profNome = document.getElementById('modalProfissionalNome');
  
  if (title) title.textContent = servico.nome;
  if (desc) desc.textContent = servico.descricao;
  if (detalhes) detalhes.innerHTML = servico.detalhes.map(d => `<span>✓ ${d}</span>`).join('');
  if (preco) preco.textContent = 'Consultar valor';
  if (profNome) profNome.textContent = profissional.nome;
  
  const agendarBtn = document.querySelector('.btn-modal-agendar');
  if (agendarBtn) {
    agendarBtn.setAttribute('data-profissional', profissionalId);
    agendarBtn.setAttribute('data-servico', servicoId);
    
    agendarBtn.onclick = function(e) {
      e.preventDefault();
      modal.classList.remove('open');
      document.body.classList.remove('no-scroll');
      window.location.href = `profissional.html?id=${profissionalId}`;
    };
  }
  
  modal.classList.add('open');
  document.body.classList.add('no-scroll');
}

// ============================================
// 10. INTERAÇÕES GERAIS
// ============================================
function configurarFormularioContato() {
  const form = document.getElementById('formContato');
  if (!form) return;
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('contatoNome')?.value.trim() || '';
    const whatsapp = document.getElementById('contatoWhatsapp')?.value.trim() || '';
    const mensagem = document.getElementById('contatoMensagem')?.value.trim() || '';
    
    if (!nome || !whatsapp) { 
      alert('Preencha os campos obrigatórios.'); 
      return; 
    }
    
    const texto = `Olá! Meu nome é ${nome}.%0A%0AWhatsApp: ${whatsapp}%0A%0AMensagem: ${mensagem || 'Gostaria de agendar um atendimento.'}`;
    abrirWhatsApp(CONFIG.whatsapp, texto);
  });
}

function headerScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
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
  
  function openMenu() { 
    menu.classList.add('open'); 
    overlay.classList.add('open'); 
    hamburger.classList.add('active'); 
    hamburger.setAttribute('aria-expanded', 'true'); 
    body.classList.add('no-scroll'); 
  }
  
  function closeMenu() { 
    menu.classList.remove('open'); 
    overlay.classList.remove('open'); 
    hamburger.classList.remove('active'); 
    hamburger.setAttribute('aria-expanded', 'false'); 
    body.classList.remove('no-scroll'); 
    hamburger.focus(); 
  }
  
  hamburger.addEventListener('click', () => { 
    menu.classList.contains('open') ? closeMenu() : openMenu(); 
  });
  
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);
  links.forEach(link => link.addEventListener('click', closeMenu));
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
    });
  });
}

function preloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  
  const hidePreloader = () => {
    preloader.classList.add('hidden');
    document.body.style.overflow = '';
  };
  
  window.addEventListener('load', () => {
    setTimeout(hidePreloader, 600);
  });
  
  setTimeout(() => {
    if (!preloader.classList.contains('hidden')) {
      hidePreloader();
    }
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
    { selector: '.apresentacao-grid', class: 'fade-up' },
    { selector: '.profissionais-grid', class: 'fade-up' },
    { selector: '.servicos-grid', class: 'fade-up' },
    { selector: '.diferenciais-grid', class: 'fade-up' },
    { selector: '.contato-grid', class: 'fade-up' },
    { selector: '.cta-inner', class: 'fade-up' }
  ];
  
  animations.forEach(({ selector, class: className }) => {
    const el = document.querySelector(selector);
    if (el && !el.classList.contains(className)) el.classList.add(className);
  });
  
  document.querySelectorAll('.profissional-card, .servico-card, .diferencial-card').forEach((el, i) => {
    if (!el.classList.contains('fade-up')) { 
      el.classList.add('fade-up'); 
      el.style.transitionDelay = `${Math.min(i * 60, 400)}ms`; 
    }
  });
}

function animarNumeros() {
  const numbers = document.querySelectorAll('.trust-number');
  if (!numbers.length) return;
  
  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        numbers.forEach(num => {
          const target = parseFloat(num.getAttribute('data-target') || num.textContent);
          if (!isNaN(target) && target > 0) {
            let current = 0;
            const steps = 40;
            const increment = target / steps;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) { 
                num.textContent = target.toString(); 
                clearInterval(timer); 
              } else { 
                num.textContent = Math.round(current); 
              }
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
  
  const checkMobile = () => { 
    bottomBar.style.display = window.innerWidth < 768 ? 'flex' : 'none'; 
  };
  
  checkMobile();
  window.addEventListener('resize', checkMobile);
}

function acessibilidadeFoco() {
  document.addEventListener('keydown', (e) => { 
    if (e.key === 'Tab') document.body.classList.add('keyboard-navigation'); 
  });
  document.addEventListener('mousedown', () => document.body.classList.remove('keyboard-navigation'));
}

// ============================================
// 11. INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Inicializando site...');
  
  preloader();
  
  const isProfissionalPage = window.location.pathname.includes('profissional.html');
  
  try {
    if (isProfissionalPage) {
      renderizarPaginaProfissional();
    } else {
      renderizarProfissionais();
      renderizarServicosDestaque();
      configurarFormularioContato();
      adicionarClassesAnimacao();
      animacoesScroll();
      animarNumeros();
    }
    
    headerScroll();
    menuMobile();
    scrollSuave();
    configurarMobileBottomBar();
    acessibilidadeFoco();
    
    console.log('✅ Site inicializado com sucesso!');
    
  } catch (error) {
    console.error('❌ Erro ao inicializar o site:', error);
  }
});

// EXPORTAÇÕES
window.CONFIG = CONFIG;
window.PROFISSIONAIS = PROFISSIONAIS;
window.getProfissional = getProfissional;
window.getServico = getServico;
window.formatPreco = formatPreco;
window.abrirWhatsApp = abrirWhatsApp;
window.abrirModalServico = abrirModalServico;
window.processarAgendamento = processarAgendamento;
window.exibirComprovante = exibirComprovante;
window.gerarComprovanteHTML = gerarComprovanteHTML;