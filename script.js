/**
 * script.js - Centro Odontológico e Estético
 * Dados baseados no Instagram @centroodontologicoeestetico
 * =====================================================
 */

// ============================================
// 1. CONFIGURAÇÕES
// ============================================
const CONFIG = {
  nome: "Centro Odontológico e Estético",
  whatsapp: "5586993177410", // (86) 99317-7410
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
    foto: "img/profissionais/doutora-sabrina.jpeg",
    descricao: "Especialista em odontologia com foco em estética dental, prevenção e atendimento humanizado.",
    formacao: ["Odontologia pela UFPI", "Especialização em Estética Dental"],
    especializacoes: ["Estética Dental", "Prevenção", "Atendimento Infantil"],
    experiencia: "8 anos de experiência",
    citacao: "Cada paciente é único e merece um tratamento que valorize sua história, suas necessidades e seu sorriso.",
    diferenciais: ["Atendimento personalizado", "Tecnologia de ponta", "Ambiente acolhedor"],
    whatsapp: "5586993177410",
    disponibilidade: {
      segunda: ["08:00", "09:00", "10:00", "14:00", "15:00", "16:00"],
      terca: ["08:00", "09:00", "14:00", "15:00", "16:00"],
      quarta: ["08:00", "09:00", "10:00", "14:00", "15:00"],
      quinta: ["08:00", "09:00", "15:00", "16:00"],
      sexta: ["08:00", "09:00", "10:00", "14:00", "15:00"]
    },
    servicos: [
      { id: "prevencao", nome: "Prevenção", categoria: "Odontologia", descricao: "Cuidados preventivos para manter a saúde bucal em dia.", detalhes: ["Avaliação completa", "Profilaxia (limpeza)", "Aplicação de flúor", "Orientação de higiene"], preco: 150, tipoPreco: "fixo", imagem: "img/servicos/prevencao.jpg", duracao: 60 },
      { id: "estetica-dental", nome: "Estética Dental", categoria: "Odontologia", descricao: "Procedimentos estéticos para transformar seu sorriso.", detalhes: ["Clareamento dental", "Restaurações estéticas em resina", "Facetas"], preco: 350, tipoPreco: "a_partir_de", imagem: "img/servicos/estetica-dental.jpg", duracao: 90 },
      { id: "restauracoes", nome: "Restaurações", categoria: "Odontologia", descricao: "Restauração de dentes danificados por cáries ou traumas.", detalhes: ["Restauração de cáries", "Reconstrução dentária"], preco: 250, tipoPreco: "a_partir_de", imagem: "", duracao: 60 },
      { id: "cirurgia", nome: "Cirurgia", categoria: "Odontologia", descricao: "Procedimentos cirúrgicos com segurança e precisão.", detalhes: ["Extrações dentárias", "Extração de siso", "Remoção de raízes residuais"], preco: 400, tipoPreco: "a_partir_de", imagem: "", duracao: 90 },
      { id: "ortodontia", nome: "Ortodontia", categoria: "Odontologia", descricao: "Correção da posição dos dentes para um sorriso alinhado.", detalhes: ["Avaliação", "Aparelho fixo", "Manutenções", "Contenção"], preco: 500, tipoPreco: "a_partir_de", imagem: "", duracao: 60 }
    ]
  },
  {
    id: "sabrina-ribeiro",
    nome: "Sabrina Ribeiro",
    area: "Farmacêutica Esteta",
    titulo: "Farmacêutica Esteta",
    foto: "img/profissionais/doutorasab.png",
    descricao: "Especialista em estética facial e corporal com tratamentos avançados.",
    formacao: ["Farmácia pela UFPI", "Especialização em Estética Avançada"],
    especializacoes: ["Estética Facial", "Estética Corporal", "Harmonização"],
    experiencia: "6 anos de experiência",
    citacao: "A beleza está em realçar o que você já tem de melhor, com segurança e naturalidade.",
    diferenciais: ["Tecnologia avançada", "Resultados naturais", "Atendimento personalizado"],
    whatsapp: "5586993177410",
    disponibilidade: {
      segunda: ["09:00", "10:00", "14:00", "15:00", "16:00"],
      terca: ["09:00", "10:00", "14:00", "15:00"],
      quarta: ["09:00", "14:00", "15:00", "16:00"],
      quinta: ["09:00", "10:00", "14:00", "15:00"],
      sexta: ["09:00", "10:00", "14:00", "15:00", "16:00"]
    },
    servicos: [
      { id: "botox", nome: "Botox", categoria: "Estética Facial", descricao: "Tratamento para suavizar rugas e linhas de expressão.", detalhes: ["Procedimento seguro", "Resultados naturais", "Efeito duradouro"], preco: 450, tipoPreco: "a_partir_de", imagem: "img/servicos/botox.jpg", duracao: 60 },
      { id: "skinbooster", nome: "Skinbooster", categoria: "Estética Facial", descricao: "Tratamento para hidratação e rejuvenescimento da pele.", detalhes: ["Hidratação profunda", "Rejuvenescimento"], preco: 350, tipoPreco: "a_partir_de", imagem: "", duracao: 60 },
      { id: "enzimas-emagrecedoras", nome: "Enzimas Emagrecedoras", categoria: "Estética Corporal", descricao: "Tratamento para redução de gordura localizada.", detalhes: ["Redução de medidas", "Resultados progressivos"], preco: 250, tipoPreco: "a_partir_de", imagem: "", duracao: 90 },
      { id: "terapia-ortomolecular", nome: "Terapia Ortomolecular", categoria: "Estética", descricao: "Tratamento com vitaminas e minerais para a saúde e beleza.", detalhes: ["Suplementação personalizada", "Bem-estar geral"], preco: 180, tipoPreco: "fixo", imagem: "", duracao: 60 }
    ]
  },
  {
    id: "beatriz-menezes",
    nome: "Beatriz Menezes",
    area: "Massoterapia / Beleza",
    titulo: "Massoterapeuta",
    foto: "img/profissionais/doutorasabrina.jpeg",
    descricao: "Especialista em massoterapia e tratamentos de beleza para bem-estar.",
    formacao: ["Massoterapia pela UFPI", "Especialização em Beleza e Estética"],
    especializacoes: ["Massoterapia", "Beleza", "Bem-estar"],
    experiencia: "5 anos de experiência",
    citacao: "Cuidar de si mesmo é o primeiro passo para uma vida mais leve e feliz.",
    diferenciais: ["Atendimento personalizado", "Técnicas avançadas", "Ambiente acolhedor"],
    whatsapp: "5586993177410",
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
      { id: "microagulhamento", nome: "Microagulhamento", categoria: "Beleza", descricao: "Procedimento para rejuvenescimento e redução de rugas.", detalhes: ["Limpeza de pele", "GHK-Cu e Exossomos", "Rejuvenescimento e redução de rugas"], preco: 300, tipoPreco: "a_partir_de", imagem: "", duracao: 90 }
    ]
  }
];

// ============================================
// 3. FUNÇÕES AUXILIARES (mantidas do script original)
// ============================================
function getProfissional(id) {
  return PROFISSIONAIS.find(p => p.id === id);
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

function abrirWhatsApp(mensagem) {
  const numero = CONFIG.whatsapp.replace(/\D/g, '');
  const texto = encodeURIComponent(mensagem || CONFIG.mensagemPadrao);
  window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
}

// ============================================
// 4. RENDERIZAÇÃO
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
          <a href="https://wa.me/${CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Gostaria de agendar o serviço: ' + s.nome)}" target="_blank" class="btn btn-small btn-primary">Agendar</a>
        </div>
      </div>
    </div>
  `).join('');
  
  document.querySelectorAll('.btn-detalhes').forEach(btn => {
    btn.addEventListener('click', () => {
      abrirModalServico(btn.getAttribute('data-profissional'), btn.getAttribute('data-servico'));
    });
  });
}

function renderizarPaginaProfissional() {
  const params = new URLSearchParams(window.location.search);
  const profId = params.get('id');
  const prof = getProfissional(profId);
  
  if (!prof) {
    document.body.innerHTML = '<div style="padding:100px 20px;text-align:center;color:#fff;"><h2>Profissional não encontrada</h2><a href="index.html" style="color:#F0D060;">Voltar para página inicial</a></div>';
    return;
  }
  
  document.title = `${prof.nome} | Centro Odontológico e Estético`;
  
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
            <a href="https://wa.me/${CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Gostaria de agendar com ' + prof.nome)}" target="_blank" class="btn btn-primary btn-hero-cta">
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
          <a href="https://wa.me/${CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Gostaria de agendar o serviço: ' + s.nome + ' com ' + prof.nome)}" target="_blank" class="btn btn-small btn-primary">
            <span class="btn-icon">✦</span> Agendar
          </a>
        </div>
      </div>
    `).join('');
  }
}

// ============================================
// 5. MODAL
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
  document.getElementById('modalProfissionalNome').textContent = profissional.nome;
  
  const agendarBtn = document.querySelector('.btn-modal-agendar');
  agendarBtn.href = `https://wa.me/${CONFIG.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá! Gostaria de agendar o serviço: ' + servico.nome + ' com ' + profissional.nome)}`;
  
  modal.classList.add('open');
  document.body.classList.add('no-scroll');
}

// ============================================
// 6. INTERAÇÕES GERAIS
// ============================================
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
    abrirWhatsApp(texto);
  });
}

function sliderDepoimentos() {
  // Função mantida para compatibilidade
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
  });
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
    { selector: '.contato-grid', class: 'fade-up' },
    { selector: '.cta-inner', class: 'fade-up' }
  ];
  animations.forEach(({ selector, class: className }) => {
    const el = document.querySelector(selector);
    if (el && !el.classList.contains(className)) el.classList.add(className);
  });
  document.querySelectorAll('.profissional-card, .servico-card, .diferencial-card, .faq-item').forEach((el, i) => {
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

document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function() {
    const modal = this.closest('.modal');
    if (modal) { modal.classList.remove('open'); document.body.classList.remove('no-scroll'); }
  });
});

// ============================================
// 7. INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  preloader();
  
  if (window.location.pathname.includes('profissional.html')) {
    renderizarPaginaProfissional();
  } else {
    renderizarProfissionais();
    renderizarServicosDestaque();
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
  
  console.log('🦷 Centro Odontológico e Estético - Site inicializado');
  console.log('📱 WhatsApp: (86) 99317-7410');
});

// EXPORTAÇÕES
window.CONFIG = CONFIG;
window.PROFISSIONAIS = PROFISSIONAIS;
window.getProfissional = getProfissional;
window.getServico = getServico;
window.formatPreco = formatPreco;
window.abrirWhatsApp = abrirWhatsApp;
window.abrirModalServico = abrirModalServico;