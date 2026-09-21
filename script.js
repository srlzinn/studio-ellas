/**
 * script.js - Centro Odontológico e Estético
 * SPA estável - versão final corrigida
 * =====================================================
 */

// ============================================
// 1. CONFIGURAÇÕES
// ============================================
const CONFIG = {
  nome: "Centro Odontológico e Estético",
  whatsapp: "5586981607614",
  telefone: "(86) 98160-7614",
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
      segunda: ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"],
      terca:   ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"],
      quarta:  ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"],
      quinta:  ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"],
      sexta:   ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"]
    },
    servicos: [
      { id: "prevencao", nome: "Prevenção", categoria: "Odontologia", descricao: "Cuidados preventivos para manter a saúde bucal em dia.", detalhes: ["Avaliação completa","Profilaxia (limpeza)","Aplicação de flúor","Orientação de higiene"], duracao: 60 },
      { id: "estetica-dental", nome: "Estética Dental", categoria: "Odontologia", descricao: "Procedimentos estéticos para transformar seu sorriso.", detalhes: ["Clareamento dental","Restaurações estéticas em resina","Facetas"], duracao: 90 },
      { id: "restauracoes", nome: "Restaurações", categoria: "Odontologia", descricao: "Restauração de dentes danificados por cáries ou traumas.", detalhes: ["Restauração de cáries","Reconstrução dentária"], duracao: 60 },
      { id: "cirurgia", nome: "Cirurgia Oral Menor", categoria: "Odontologia", descricao: "Procedimentos cirúrgicos com segurança e precisão.", detalhes: ["Extrações dentárias","Extração de siso","Remoção de raízes residuais"], duracao: 90 },
      { id: "ortodontia", nome: "Ortodontia", categoria: "Odontologia", descricao: "Correção da posição dos dentes para um sorriso alinhado.", detalhes: ["Avaliação ortodôntica","Aparelho fixo","Aparelho removível","Manutenções","Contenção"], duracao: 60 },
      { id: "facetas-resina", nome: "Facetas em Resina", categoria: "Odontologia", descricao: "Facetas em resina para transformar seu sorriso.", detalhes: ["Avaliação estética","Preparação","Aplicação de resina","Finalização e polimento"], duracao: 90 }
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
      segunda: ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"],
      terca:   ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"],
      quarta:  ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"],
      quinta:  ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"],
      sexta:   ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"]
    },
    servicos: [
      { id: "limpeza-de-pele", nome: "Limpeza de Pele", categoria: "Estética Facial", descricao: "Limpeza profunda com protocolo completo de cuidado facial.", detalhes: ["Higienização","Esfoliação","Emoliência","Vapor de ozônio","Extração","Tonificação","Aromaterapia","Massagem facial","LEDterapia","Cromoterapia","Sons binaurais"], duracao: 90 },
      { id: "massagem-relaxante", nome: "Massagem Relaxante", categoria: "Bem-estar", descricao: "Experiência sensorial de relaxamento profundo e bem-estar.", detalhes: ["Massagem relaxante","Aromaterapia","Cromoterapia","Sons binaurais"], duracao: 60 },
      { id: "dermaplaning", nome: "Dermaplaning", categoria: "Estética Facial", descricao: "Renovação celular com glow imediato e pele lisa.", detalhes: ["Remoção de células mortas","Renovação celular","Remoção dos pelos finos do rosto","Glow imediato"], duracao: 60 },
      { id: "hydra-gloss", nome: "Hydra Gloss / Hydra Color", categoria: "Estética Facial", descricao: "Hidratação intensa com toque de cor e brilho natural.", detalhes: ["Higienização","Esfoliação","Microagulhamento","Sérum com ativos hidratantes","Lábios levemente rosados"], duracao: 75 },
      { id: "ventosaterapia", nome: "Ventosaterapia", categoria: "Bem-estar", descricao: "Técnica terapêutica que estimula a circulação e relaxa.", detalhes: ["Massagem","Aromaterapia","Cromoterapia"], duracao: 60 },
      { id: "microagulhamento", nome: "Microagulhamento", categoria: "Estética Avançada", descricao: "Estímulo de colágeno com ativos de alta performance.", detalhes: ["Limpeza de pele","Microagulhamento","GHK-Cu e exossomos","Rejuvenescimento","Redução da aparência de rugas","Cromoterapia"], duracao: 90 },
      { id: "botox", nome: "Botox", categoria: "Estética Facial", descricao: "Tratamento para suavizar rugas e linhas de expressão.", detalhes: ["Procedimento seguro","Resultados naturais","Efeito duradouro"], duracao: 60 },
      { id: "skinbooster", nome: "Skinbooster", categoria: "Estética Facial", descricao: "Tratamento para hidratação e rejuvenescimento da pele.", detalhes: ["Hidratação profunda","Rejuvenescimento"], duracao: 60 },
      { id: "enzimas-emagrecedoras", nome: "Enzimas Emagrecedoras", categoria: "Estética Corporal", descricao: "Tratamento para redução de gordura localizada.", detalhes: ["Redução de medidas","Resultados progressivos"], duracao: 90 },
      { id: "terapia-ortomolecular", nome: "Terapia Ortomolecular", categoria: "Estética", descricao: "Tratamento com vitaminas e minerais para a saúde e beleza.", detalhes: ["Suplementação personalizada","Bem-estar geral"], duracao: 60 },
      { id: "harmonizacao-corporal", nome: "Harmonização Corporal", categoria: "Estética Corporal", descricao: "Procedimentos para harmonização e modelagem corporal.", detalhes: ["Avaliação corporal","Tratamento personalizado","Resultados naturais"], duracao: 90 }
    ]
  },
  {
    id: "adriana",
    nome: "Adriana Mariah",
    area: "Beleza e Estética",
    titulo: "Especialista em Beleza",
    foto: "img/profissionais/adriana.png",
    descricao: "Especialista em cuidados capilares e estética das unhas, com técnicas modernas para realçar sua beleza.",
    formacao: ["Curso de Especialização em Beleza","Técnicas Avançadas em Cabelos e Unhas"],
    whatsapp: "5586981607614",
    disponibilidade: {
      segunda: ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"],
      terca:   ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"],
      quarta:  ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"],
      quinta:  ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"],
      sexta:   ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"]
    },
    servicos: [
      { id: "alongamento-unhas", nome: "Alongamento de Unhas", categoria: "Beleza", descricao: "Alongamento de unhas com técnicas modernas e naturais.", detalhes: ["Preparação das unhas","Aplicação de gel","Modelagem","Finalização e brilho"], duracao: 90 },
      { id: "banho-gel", nome: "Banho em Gel", categoria: "Beleza", descricao: "Banho de gel para hidratação e fortalecimento dos cabelos.", detalhes: ["Lavagem","Aplicação de gel","Massagem capilar","Finalização"], duracao: 60 },
      { id: "esmaltacao-gel", nome: "Esmaltação em Gel", categoria: "Beleza", descricao: "Esmaltação em gel de longa duração para unhas perfeitas.", detalhes: ["Preparação das unhas","Aplicação de base","Esmaltação em gel","Finalização"], duracao: 60 },
      { id: "manicure-pedicure", nome: "Manicure e Pedicure", categoria: "Beleza", descricao: "Cuidados completos para mãos e pés.", detalhes: ["Limpeza","Corte e lixamento","Hidratação","Esmaltação"], duracao: 90 },
      { id: "selagem-organica", nome: "Selagem Orgânica", categoria: "Beleza", descricao: "Selagem orgânica para cabelos lisos e saudáveis.", detalhes: ["Lavagem","Aplicação do produto","Pré-secagem","Selagem com prancha","Finalização"], duracao: 120 },
      { id: "botox-capilar", nome: "Botox Capilar", categoria: "Beleza", descricao: "Tratamento de botox para cabelos danificados.", detalhes: ["Lavagem","Aplicação do botox","Massagem capilar","Finalização"], duracao: 90 },
      { id: "mechas-luzes", nome: "Mechas ou Luzes", categoria: "Beleza", descricao: "Mechas e luzes para iluminar seu cabelo.", detalhes: ["Avaliação","Aplicação das mechas","Tempo de pausa","Lavagem e finalização"], duracao: 120 },
      { id: "cortes-cabelo", nome: "Cortes de Cabelo", categoria: "Beleza", descricao: "Cortes modernos e personalizados para todos os estilos.", detalhes: ["Avaliação do rosto","Corte personalizado","Finalização"], duracao: 60 }
    ]
  }
];

// ============================================
// 3. AUXILIARES
// ============================================
function getProfissional(id) {
  return PROFISSIONAIS.find(p => p.id === id);
}

function getServico(profissionalId, servicoId) {
  const prof = getProfissional(profissionalId);
  return prof ? prof.servicos.find(s => s.id === servicoId) : null;
}

function formatPreco() { return 'Consultar valor'; }

function getHorariosDisponiveis(profissionalId, data) {
  const prof = getProfissional(profissionalId);
  if (!prof) return [];
  const dias = ['domingo','segunda','terca','quarta','quinta','sexta','sabado'];
  const dataObj = new Date(data + 'T00:00:00');
  const diaSemana = dias[dataObj.getDay()];
  return prof.disponibilidade[diaSemana] || [];
}

function abrirWhatsApp(numero, mensagem) {
  if (!numero) { alert('⚠️ Número de WhatsApp não configurado.'); return; }
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
  return new Date(data + 'T00:00:00').toLocaleDateString('pt-BR', {
    weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'
  });
}

function getIconeCategoria(categoria) {
  const icones = {
    'Odontologia': '🦷', 'Estética Facial': '✨', 'Estética Corporal': '💆',
    'Estética Avançada': '🔬', 'Estética': '🌟', 'Bem-estar': '🌿', 'Beleza': '💅'
  };
  return icones[categoria] || '✦';
}

// ============================================
// 4. COMPROVANTE
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
          <img src="${profissional.foto || 'img/profissionais/default.jpg'}" alt="${profissional.nome}" onerror="this.style.display='none'" />
        </div>
        <div class="recibo-foto-nome">
          <h3>${profissional.nome}</h3>
          <span class="recibo-especialidade">${profissional.area}</span>
        </div>
        <div class="recibo-info-section">
          <h4>👤 Dados do Cliente</h4>
          <div class="recibo-info-linha"><span class="recibo-info-label">Nome:</span><span class="recibo-info-valor">${nome}</span></div>
          <div class="recibo-info-linha"><span class="recibo-info-label">WhatsApp:</span><span class="recibo-info-valor">${whatsapp}</span></div>
          <div class="recibo-info-linha"><span class="recibo-info-label">Emissão:</span><span class="recibo-info-valor">${new Date().toLocaleDateString('pt-BR')} às ${new Date().toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'})}</span></div>
        </div>
        <div class="recibo-info-section">
          <h4>💆 Dados do Atendimento</h4>
          <div class="recibo-info-linha"><span class="recibo-info-label">Profissional:</span><span class="recibo-info-valor">${profissional.nome}</span></div>
          <div class="recibo-info-linha"><span class="recibo-info-label">Especialidade:</span><span class="recibo-info-valor">${profissional.area}</span></div>
          <div class="recibo-info-linha"><span class="recibo-info-label">Serviço:</span><span class="recibo-info-valor">${servico.nome}</span></div>
          <div class="recibo-info-linha"><span class="recibo-info-label">Categoria:</span><span class="recibo-info-valor">${servico.categoria}</span></div>
          <div class="recibo-info-linha"><span class="recibo-info-label">Data:</span><span class="recibo-info-valor">${dataFormatada}</span></div>
          <div class="recibo-info-linha"><span class="recibo-info-label">Horário:</span><span class="recibo-info-valor">${horario}</span></div>
          <div class="recibo-info-linha"><span class="recibo-info-label">Duração:</span><span class="recibo-info-valor">${servico.duracao} minutos</span></div>
        </div>
        <div class="recibo-detalhes-servico">
          <h4>📋 Detalhes do Serviço</h4>
          <ul class="recibo-detalhes-lista">${servico.detalhes.map(d => `<li>✓ ${d}</li>`).join('')}</ul>
        </div>
        ${observacao ? `<div class="recibo-observacao"><p><strong>📝 Observação:</strong> ${observacao}</p></div>` : ''}
      </div>
      <div class="recibo-rodape">
        <div class="recibo-info-contato">
          <p><strong>${CONFIG.nome}</strong></p>
          <p>📍 ${CONFIG.endereco}</p>
          <p>📱 ${CONFIG.telefone}</p>
          <p>📷 @centroodontologicoeestetico</p>
        </div>
        <div class="recibo-assinatura">
          <div class="recibo-linha-assinatura"><span>______________________________</span><span>Assinatura do Cliente</span></div>
          <div class="recibo-linha-assinatura"><span>______________________________</span><span>Assinatura do Profissional</span></div>
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
  if (existingModal) { existingModal.remove(); document.body.classList.remove('no-scroll'); }

  const modal = document.createElement('div');
  modal.className = 'recibo-modal';
  modal.id = 'reciboModal';
  modal.innerHTML = `
    <div class="recibo-content">
      <button class="recibo-close" aria-label="Fechar comprovante">✕</button>
      ${html}
      <div class="recibo-acoes">
        <button onclick="window.print()" class="btn btn-primary"><span class="btn-icon">🖨️</span> Imprimir</button>
        <button onclick="fecharComprovante()" class="btn btn-outline">Fechar</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.classList.add('no-scroll');

  modal.addEventListener('click', function(e) { if (e.target === this) fecharComprovante(); });
  const escHandler = function(e) { if (e.key === 'Escape') { fecharComprovante(); document.removeEventListener('keydown', escHandler); } };
  document.addEventListener('keydown', escHandler);
  const closeBtn = modal.querySelector('.recibo-close');
  if (closeBtn) closeBtn.addEventListener('click', fecharComprovante);
}

window.fecharComprovante = function() {
  const modal = document.getElementById('reciboModal');
  if (modal) { modal.remove(); document.body.classList.remove('no-scroll'); }
};

// ============================================
// 5. PROCESSAR AGENDAMENTO
// ============================================
function processarAgendamento(dados) {
  const { profissionalId, servicoId, data, horario, nome, whatsapp, observacao } = dados;
  const profissional = getProfissional(profissionalId);
  const servico = getServico(profissionalId, servicoId);

  if (!profissional || !servico) { alert('Erro: Profissional ou serviço não encontrado.'); return; }
  if (!nome || !whatsapp || !data || !horario) { alert('Por favor, preencha todos os campos obrigatórios.'); return; }

  const whatsappLimpo = whatsapp.replace(/\D/g, '');
  if (whatsappLimpo.length < 10) { alert('Por favor, informe um número de WhatsApp válido (com DDD).'); return; }

  const numeroRecibo = gerarNumeroRecibo();
  const dataFormatada = formatarData(data);
  const numeroWhatsApp = profissional.whatsapp || CONFIG.whatsapp;

  exibirComprovante({ profissional, servico, data, horario, nome, whatsapp, observacao, numeroRecibo });

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

  setTimeout(() => abrirWhatsApp(numeroWhatsApp, mensagem), 500);
}

// ============================================
// 6. ROUTER
// ============================================
const PageRouter = {
  current: 'home',
  views: {},
  init() {
    this.views = {
      home: document.getElementById('page-home'),
      profissional: document.getElementById('page-profissional'),
      privacidade: document.getElementById('page-privacidade')
    };
  },
  goTo(page, options = {}) {
    if (!this.views[page]) { console.warn(`View "${page}" não encontrada.`); return; }
    Object.values(this.views).forEach(v => v && (v.style.display = 'none'));
    this.views[page].style.display = 'block';
    this.current = page;

    if (options.scrollTo) {
      setTimeout(() => {
        const target = document.getElementById(options.scrollTo);
        if (target) {
          const headerH = document.querySelector('.header')?.offsetHeight || 80;
          const pos = target.getBoundingClientRect().top + window.pageYOffset - headerH;
          window.scrollTo({ top: pos, behavior: 'auto' });
        }
      }, 150);
    } else {
      window.scrollTo(0, 0);
    }

    const titles = {
      home: 'Centro Odontológico e Estético | Parnaíba - PI',
      profissional: 'Profissional | Centro Odontológico e Estético',
      privacidade: 'Política de Privacidade | Centro Odontológico e Estético'
    };
    document.title = titles[page] || titles.home;

    document.querySelector('.menu-mobile')?.classList.remove('open');
    document.querySelector('.menu-mobile-overlay')?.classList.remove('open');
    document.querySelector('.menu-hamburger')?.classList.remove('active');
    document.querySelector('.menu-hamburger')?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  }
};

// ============================================
// 7. RENDER HOME
// ============================================
function renderizarProfissionais() {
  const container = document.getElementById('profissionaisGrid');
  if (!container) return;
  container.innerHTML = PROFISSIONAIS.map(prof => `
    <article class="profissional-card">
      <div class="profissional-imagem">
        <img src="${prof.foto || 'img/profissionais/default.jpg'}" alt="${prof.nome}" loading="lazy" onerror="this.style.display='none'" />
        <div class="profissional-overlay"><span class="profissional-area">${prof.area}</span></div>
      </div>
      <div class="profissional-content">
        <h3>${prof.nome}</h3>
        <span class="profissional-titulo">${prof.titulo}</span>
        <p>${prof.descricao}</p>
        <div class="profissional-servicos">
          ${prof.servicos.slice(0, 4).map(s => `<span class="servico-tag">${s.nome}</span>`).join('')}
          ${prof.servicos.length > 4 ? `<span class="servico-tag">+${prof.servicos.length - 4}</span>` : ''}
        </div>
        <button type="button" class="btn btn-primary btn-ver-perfil" data-profissional="${prof.id}">
          <span class="btn-icon">✦</span> Ver perfil
        </button>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('.btn-ver-perfil').forEach(btn => {
    btn.addEventListener('click', function() {
      abrirPaginaProfissional(this.getAttribute('data-profissional'));
    });
  });
}

function renderizarServicosDestaque() {
  const container = document.getElementById('servicosGrid');
  if (!container) return;

  const DESTAQUE_SABRINA = ["limpeza-de-pele","dermaplaning","hydra-gloss","microagulhamento"];
  const destaques = [];

  const sabrina = getProfissional("sabrina-ribeiro");
  if (sabrina) {
    sabrina.servicos.filter(s => DESTAQUE_SABRINA.includes(s.id))
      .forEach(s => destaques.push({ ...s, profissionalId: sabrina.id, profissionalNome: sabrina.nome }));
  }
  PROFISSIONAIS.forEach(prof => {
    if (prof.id === "sabrina-ribeiro") return;
    prof.servicos.slice(0, 2).forEach(s => destaques.push({ ...s, profissionalId: prof.id, profissionalNome: prof.nome }));
  });

  container.innerHTML = destaques.slice(0, 6).map(s => `
    <article class="servico-card">
      <div class="servico-card-glow"></div>
      <div class="servico-card-top">
        <div class="servico-icon-wrap"><span class="servico-icon">${getIconeCategoria(s.categoria)}</span></div>
        <span class="servico-categoria">${s.categoria}</span>
      </div>
      <div class="servico-card-body">
        <h3 class="servico-titulo">${s.nome}</h3>
        <p class="servico-descricao">${s.descricao}</p>
        <div class="servico-meta">
          <span class="servico-meta-label">Profissional</span>
          <span class="servico-meta-value">${s.profissionalNome}</span>
        </div>
      </div>
      <div class="servico-card-footer">
        <button type="button" class="servico-btn servico-btn-ghost btn-detalhes" data-profissional="${s.profissionalId}" data-servico="${s.id}">Detalhes</button>
        <button type="button" class="servico-btn servico-btn-primary btn-agendar-destaque" data-profissional="${s.profissionalId}">Agendar <span>→</span></button>
      </div>
    </article>
  `).join('');

  container.querySelectorAll('.btn-detalhes').forEach(btn => {
    btn.addEventListener('click', function() {
      abrirModalServico(this.getAttribute('data-profissional'), this.getAttribute('data-servico'));
    });
  });
  container.querySelectorAll('.btn-agendar-destaque').forEach(btn => {
    btn.addEventListener('click', function() {
      abrirPaginaProfissional(this.getAttribute('data-profissional'));
    });
  });
}

// ============================================
// 8. PÁGINA DA PROFISSIONAL
// ============================================
function abrirPaginaProfissional(profId) {
  const prof = getProfissional(profId);
  if (!prof) { console.warn('Profissional não encontrada:', profId); PageRouter.goTo('home'); return; }

  // 1) Renderiza TUDO primeiro
  renderizarPaginaProfissional(prof);

  // 2) Troca a view SEM scroll suave
  const views = {
    home: document.getElementById('page-home'),
    profissional: document.getElementById('page-profissional'),
    privacidade: document.getElementById('page-privacidade')
  };
  Object.values(views).forEach(v => v && (v.style.display = 'none'));
  if (views.profissional) views.profissional.style.display = 'block';
  PageRouter.current = 'profissional';

  document.title = `${prof.nome} | Centro Odontológico e Estético`;

  // 3) Scroll instantâneo pro topo
  window.scrollTo(0, 0);

  // 4) Fecha menu mobile
  document.querySelector('.menu-mobile')?.classList.remove('open');
  document.querySelector('.menu-mobile-overlay')?.classList.remove('open');
  document.querySelector('.menu-hamburger')?.classList.remove('active');
  document.body.classList.remove('no-scroll');

  // 5) Atualiza URL
  try { history.pushState({ page: 'profissional', id: profId }, '', `#profissional?id=${profId}`); } catch (e) {}
}
window.abrirPaginaProfissional = abrirPaginaProfissional;

function renderizarPaginaProfissional(prof) {
  document.title = `${prof.nome} | Centro Odontológico e Estético`;

  // HERO
  const hero = document.getElementById('heroProfissional');
  if (hero) {
    hero.innerHTML = `
      <div class="container hero-profissional-grid">
        <div class="hero-profissional-content">
          <div class="hero-badge"><span class="hero-badge-line"></span>${prof.area}</div>
          <h1 class="hero-title">${prof.nome}</h1>
          <p class="hero-sub">${prof.descricao}</p>
          <div class="hero-profissional-meta">
            <span class="meta-item">✦ ${prof.titulo}</span>
            ${prof.formacao.map(f => `<span class="meta-item">✦ ${f}</span>`).join('')}
          </div>
          <div class="hero-buttons">
            <button type="button" class="btn btn-primary" data-scroll-prof="prof-agendamento">
              <span class="btn-icon">✦</span> Agendar com ${prof.nome.split(' ')[0]}
            </button>
            <button type="button" class="btn btn-outline" data-scroll-prof="prof-servicos">
              Ver serviços <span class="btn-arrow">→</span>
            </button>
          </div>
        </div>
        <div class="hero-profissional-image">
          <div class="hero-profissional-image-frame">
            <div class="hero-profissional-image-frame-inner">
              <img src="${prof.foto || 'img/profissionais/default.jpg'}" alt="${prof.nome}" loading="eager" onerror="this.style.display='none'" />
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // SOBRE
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

  // SERVIÇOS
  const servicosContainer = document.getElementById('servicosProfissionalGrid');
  if (servicosContainer) {
    servicosContainer.innerHTML = prof.servicos.map(s => `
      <div class="servico-profissional-card">
        <h4>${s.nome}</h4>
        <p>${s.descricao}</p>
        <div class="servico-detalhes">${s.detalhes.map(d => `<span>✓ ${d}</span>`).join('')}</div>
        <div class="servico-actions">
          <button type="button" class="btn btn-small btn-primary btn-agendar-servico-profissional" data-servico="${s.id}">
            <span class="btn-icon">✦</span> Agendar
          </button>
        </div>
      </div>
    `).join('');

    servicosContainer.querySelectorAll('.btn-agendar-servico-profissional').forEach(btn => {
      btn.addEventListener('click', function() {
        const servId = this.getAttribute('data-servico');
        const select = document.getElementById('agendaServico');
        if (select) {
          select.value = servId;
          select.dispatchEvent(new Event('change'));
        }
        const agenda = document.getElementById('prof-agendamento');
        if (agenda) {
          const headerH = document.querySelector('.header')?.offsetHeight || 80;
          const pos = agenda.getBoundingClientRect().top + window.pageYOffset - headerH;
          window.scrollTo({ top: pos, behavior: 'smooth' });
        }
      });
    });
  }

  // Botões data-scroll-prof
  document.querySelectorAll('#page-profissional [data-scroll-prof]').forEach(btn => {
    btn.onclick = function() {
      const targetId = this.getAttribute('data-scroll-prof');
      const target = document.getElementById(targetId);
      if (target) {
        const headerH = document.querySelector('.header')?.offsetHeight || 80;
        const pos = target.getBoundingClientRect().top + window.pageYOffset - headerH;
        window.scrollTo({ top: pos, behavior: 'smooth' });
      }
    };
  });

  configurarAgendamentoProfissional(prof);
}

// ============================================
// 9. FORM DE AGENDAMENTO
// ============================================
function configurarAgendamentoProfissional(prof) {
  const form = document.getElementById('formAgendamento');
  if (!form) return;

  const sSelect = document.getElementById('agendaServico');
  const dInput = document.getElementById('agendaData');
  const hSelect = document.getElementById('agendaHorario');
  const nInput = document.getElementById('agendaNome');
  const wInput = document.getElementById('agendaWhatsapp');
  const oInput = document.getElementById('agendaObs');
  const detalhesDiv = document.getElementById('agendaServicoDetalhes');

  form.reset();
  if (detalhesDiv) detalhesDiv.innerHTML = '';
  hSelect.innerHTML = '<option value="">Selecione um horário</option>';

  sSelect.innerHTML = '<option value="">Selecione um serviço</option>';
  prof.servicos.forEach(s => {
    const option = document.createElement('option');
    option.value = s.id;
    option.textContent = s.nome;
    sSelect.appendChild(option);
  });

  sSelect.onchange = function() {
    const servId = this.value;
    const serv = getServico(prof.id, servId);
    if (detalhesDiv && serv) {
      detalhesDiv.innerHTML = `
        <div class="servico-preview">
          <p><strong>Duração:</strong> ${serv.duracao} minutos</p>
          <div class="servico-preview-tags">${serv.detalhes.map(d => `<span>✓ ${d}</span>`).join('')}</div>
        </div>
      `;
    } else if (detalhesDiv) {
      detalhesDiv.innerHTML = '';
    }
  };

  const today = new Date().toISOString().split('T')[0];
  if (dInput) dInput.setAttribute('min', today);

  dInput.onchange = function() {
    const data = this.value;
    hSelect.innerHTML = '<option value="">Selecione um horário</option>';
    if (!data) return;
    const horarios = getHorariosDisponiveis(prof.id, data);
    if (horarios && horarios.length > 0) {
      horarios.forEach(h => {
        const option = document.createElement('option');
        option.value = h;
        option.textContent = h;
        hSelect.appendChild(option);
      });
    } else {
      const option = document.createElement('option');
      option.value = '';
      option.textContent = 'Nenhum horário disponível';
      hSelect.appendChild(option);
    }
  };

  form.onsubmit = function(e) {
    e.preventDefault();
    const servicoId = sSelect.value;
    const data = dInput.value;
    const horario = hSelect.value;
    const nome = nInput.value.trim();
    const whatsapp = wInput.value.trim();
    const observacao = oInput ? oInput.value.trim() : '';

    if (!servicoId) { alert('Por favor, selecione um serviço.'); sSelect.focus(); return; }
    if (!data) { alert('Por favor, selecione uma data.'); dInput.focus(); return; }
    if (!horario) { alert('Por favor, selecione um horário.'); hSelect.focus(); return; }
    if (!nome) { alert('Por favor, informe seu nome completo.'); nInput.focus(); return; }
    if (!whatsapp) { alert('Por favor, informe seu WhatsApp.'); wInput.focus(); return; }

    processarAgendamento({ profissionalId: prof.id, servicoId, data, horario, nome, whatsapp, observacao });
  };

  if (!wInput.dataset.maskApplied) {
    mascaraTelefone(wInput);
    wInput.dataset.maskApplied = 'true';
  }
}

// ============================================
// 10. MODAL
// ============================================
function abrirModalServico(profissionalId, servicoId) {
  const servico = getServico(profissionalId, servicoId);
  const profissional = getProfissional(profissionalId);
  if (!servico || !profissional) return;

  const modal = document.getElementById('modalServico');
  if (!modal) return;

  document.getElementById('modalTitle').textContent = servico.nome;
  document.getElementById('modalDesc').textContent = servico.descricao;
  document.getElementById('modalDetalhes').innerHTML = servico.detalhes.map(d => `<span>✓ ${d}</span>`).join('');
  document.getElementById('modalPreco').textContent = 'Consultar valor';
  document.getElementById('modalProfissionalNome').textContent = profissional.nome;

  const agendarBtn = modal.querySelector('.btn-modal-agendar');
  if (agendarBtn) {
    agendarBtn.onclick = function(e) {
      e.preventDefault();
      fecharModalServico();
      abrirPaginaProfissional(profissionalId);
    };
  }

  modal.classList.add('open');
  document.body.classList.add('no-scroll');

  const closeBtn = modal.querySelector('.modal-close');
  const overlay = modal.querySelector('.modal-overlay');
  if (closeBtn) closeBtn.onclick = fecharModalServico;
  if (overlay) overlay.onclick = fecharModalServico;
}

function fecharModalServico() {
  const modal = document.getElementById('modalServico');
  if (!modal) return;
  modal.classList.remove('open');
  document.body.classList.remove('no-scroll');
}
window.fecharModalServico = fecharModalServico;

// ============================================
// 11. INTERAÇÕES
// ============================================
function configurarFormularioContato() {
  const form = document.getElementById('formContato');
  if (!form) return;
  form.onsubmit = function(e) {
    e.preventDefault();
    const nome = document.getElementById('contatoNome').value.trim();
    const whatsapp = document.getElementById('contatoWhatsapp').value.trim();
    const mensagem = document.getElementById('contatoMensagem').value.trim();
    if (!nome || !whatsapp) { alert('Preencha os campos obrigatórios.'); return; }
    const texto = `Olá! Meu nome é ${nome}.%0A%0AWhatsApp: ${whatsapp}%0A%0AMensagem: ${mensagem || 'Gostaria de agendar um atendimento.'}`;
    abrirWhatsApp(CONFIG.whatsapp, texto);
    form.reset();
  };
}

function headerScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.pageYOffset > 50);
  }, { passive: true });
}

function menuMobile() {
  const hamburger = document.querySelector('.menu-hamburger');
  const menu = document.querySelector('.menu-mobile');
  const overlay = document.querySelector('.menu-mobile-overlay');
  const closeBtn = document.querySelector('.menu-mobile-close');
  if (!hamburger || !menu || !overlay) return;

  const openMenu = () => {
    menu.classList.add('open'); overlay.classList.add('open');
    hamburger.classList.add('active'); hamburger.setAttribute('aria-expanded', 'true');
    document.body.classList.add('no-scroll');
  };
  const closeMenu = () => {
    menu.classList.remove('open'); overlay.classList.remove('open');
    hamburger.classList.remove('active'); hamburger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  };

  hamburger.onclick = () => menu.classList.contains('open') ? closeMenu() : openMenu();
  if (closeBtn) closeBtn.onclick = closeMenu;
  overlay.onclick = closeMenu;
  document.querySelectorAll('.menu-mobile-list a').forEach(a => a.addEventListener('click', closeMenu));
}

function configurarNavegacao() {
  document.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const page = this.getAttribute('data-page');
      if (page === 'home') { try { history.pushState({ page: 'home' }, '', window.location.pathname); } catch (err) {} }
      PageRouter.goTo(page);
    });
  });

  document.querySelectorAll('[data-scroll]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('data-scroll');
      if (PageRouter.current !== 'home') {
        PageRouter.goTo('home', { scrollTo: targetId });
      } else {
        const target = document.getElementById(targetId);
        if (target) {
          const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
          const pos = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({ top: pos, behavior: 'smooth' });
        }
      }
      document.querySelector('.menu-mobile')?.classList.remove('open');
      document.querySelector('.menu-mobile-overlay')?.classList.remove('open');
      document.querySelector('.menu-hamburger')?.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  });
}

function preloader() {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;
  const hide = () => { preloader.classList.add('hidden'); document.body.style.overflow = ''; };
  window.addEventListener('load', () => setTimeout(hide, 600));
  setTimeout(() => { if (!preloader.classList.contains('hidden')) hide(); }, 3000);
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
            const increment = target / 40;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) { num.textContent = target.toString(); clearInterval(timer); }
              else num.textContent = Math.round(current);
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
  const check = () => { bottomBar.style.display = window.innerWidth < 768 ? 'flex' : 'none'; };
  check();
  window.addEventListener('resize', check);
}

function acessibilidadeFoco() {
  document.addEventListener('keydown', (e) => { if (e.key === 'Tab') document.body.classList.add('keyboard-navigation'); });
  document.addEventListener('mousedown', () => document.body.classList.remove('keyboard-navigation'));
}

function mascaraTelefone(input) {
  if (!input) return;
  input.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) value = value.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    else value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    e.target.value = value;
  });
}

function configurarBackToTop() {
  if (document.querySelector('.back-to-top')) return;
  const btn = document.createElement('button');
  btn.className = 'back-to-top';
  btn.innerHTML = '↑';
  btn.setAttribute('aria-label', 'Voltar ao topo');
  btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  document.body.appendChild(btn);
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.pageYOffset > 400);
  }, { passive: true });
}

function adicionarScrollIndicator() {
  const hero = document.querySelector('.hero');
  if (!hero || window.innerWidth < 769 || hero.querySelector('.hero-scroll-indicator')) return;
  const indicator = document.createElement('div');
  indicator.className = 'hero-scroll-indicator';
  indicator.innerHTML = 'Role para explorar';
  hero.appendChild(indicator);
}

function melhorarFormularioContato() {
  const whatsappInput = document.getElementById('contatoWhatsapp');
  if (whatsappInput && !whatsappInput.dataset.maskApplied) {
    mascaraTelefone(whatsappInput);
    whatsappInput.dataset.maskApplied = 'true';
  }
}

function configurarGestosMenuMobile() {
  const menu = document.querySelector('.menu-mobile');
  const overlay = document.querySelector('.menu-mobile-overlay');
  if (!menu || !overlay) return;
  let startX = 0, currentX = 0;
  menu.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  menu.addEventListener('touchmove', (e) => {
    currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    if (diff > 0) menu.style.transform = `translateX(${diff}px)`;
  }, { passive: true });
  menu.addEventListener('touchend', () => {
    const diff = currentX - startX;
    if (diff > 80) {
      menu.classList.remove('open');
      overlay.classList.remove('open');
      document.querySelector('.menu-hamburger')?.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }
    menu.style.transform = '';
  });
}

function melhorarAcessibilidade() {
  document.querySelectorAll('.btn-icon').forEach(icon => {
    if (!icon.getAttribute('aria-hidden')) icon.setAttribute('aria-hidden', 'true');
  });
}

function configurarOrientacao() {
  window.addEventListener('orientationchange', () => {
    setTimeout(() => {
      const hero = document.querySelector('.hero');
      if (hero) hero.style.minHeight = window.innerHeight + 'px';
    }, 200);
  });
}

// ============================================
// 12. POPSTATE
// ============================================
window.addEventListener('popstate', () => {
  const hash = window.location.hash;
  if (hash.startsWith('#profissional')) {
    const params = new URLSearchParams(hash.split('?')[1] || '');
    const id = params.get('id');
    if (id) { abrirPaginaProfissional(id); return; }
  }
  if (hash.startsWith('#privacidade')) { PageRouter.goTo('privacidade'); return; }
  PageRouter.goTo('home');
});

// ============================================
// 13. INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Inicializando site...');

  PageRouter.init();
  preloader();

  try {
    renderizarProfissionais();
    renderizarServicosDestaque();
    configurarFormularioContato();
    adicionarClassesAnimacao();
    animacoesScroll();
    animarNumeros();
    configurarNavegacao();

    const hash = window.location.hash;
    const hashParams = new URLSearchParams(hash.split('?')[1] || '');
    const profIdFromHash = hashParams.get('id');

    if (hash.startsWith('#profissional') && profIdFromHash) {
      abrirPaginaProfissional(profIdFromHash);
    } else if (hash.startsWith('#privacidade')) {
      PageRouter.goTo('privacidade');
    } else {
      PageRouter.goTo('home');
    }

    headerScroll();
    menuMobile();
    configurarMobileBottomBar();
    acessibilidadeFoco();

    setTimeout(() => {
      configurarBackToTop();
      adicionarScrollIndicator();
      melhorarFormularioContato();
      configurarGestosMenuMobile();
      melhorarAcessibilidade();
      configurarOrientacao();
    }, 150);

    console.log('✅ Site inicializado!');
  } catch (error) {
    console.error('❌ Erro:', error);
  }
});

// ============================================
// 14. GLOBAIS
// ============================================
window.CONFIG = CONFIG;
window.PROFISSIONAIS = PROFISSIONAIS;
window.PageRouter = PageRouter;
window.getProfissional = getProfissional;
window.getServico = getServico;
window.abrirWhatsApp = abrirWhatsApp;
window.abrirModalServico = abrirModalServico;
window.fecharModalServico = fecharModalServico;
window.abrirPaginaProfissional = abrirPaginaProfissional;
window.processarAgendamento = processarAgendamento;
window.exibirComprovante = exibirComprovante;
window.gerarComprovanteHTML = gerarComprovanteHTML;