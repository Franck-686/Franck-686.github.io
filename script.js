
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();


const translations = {
  pt: {
    "nav.about": "Sobre",
    "nav.experience": "Experiência",
    "nav.projects": "Projetos",
    "nav.credentials": "Credenciais",
    "nav.contact": "Contato",

    "hero.lead": "Construindo ferramentas e processos que tornam operações de TI mais automatizadas, observáveis e seguras.",
    "hero.cta": "EXPLORE WORK →",

    "about.title": "Quem está por trás da rede.",
    "about.p1": "Profissional de Tecnologia da Informação com trajetória iniciada em suporte técnico e evolução para infraestrutura corporativa.",
    "about.p2": "Atualmente atuo com sustentação, redes, ambientes Microsoft, segurança, endpoints, Active Directory e automação de processos.",
    "about.p3": "Em paralelo, desenvolvo projetos próprios de automação e IA, enquanto avanço em observabilidade e cybersecurity.",
    "about.infra": "Servidores, endpoints, Microsoft, AD e redes corporativas.",
    "about.automation": "PowerShell, integrações, rotinas e ferramentas internas.",
    "about.security": "Endpoint, criptografia, cybersecurity e hardening.",
    "about.ai": "Agentes, LLMs, análise de dados e automação inteligente.",

    "experience.title": "Da sustentação à construção.",
    "experience.supportRole": "Técnico de Suporte Pleno",
    "experience.supportDesc": "Base da minha carreira em TI, com atuação em suporte N1/N2, troubleshooting, redes, estações e gestão de chamados.",
    "experience.infraRole": "Analista de Infraestrutura",
    "experience.infraDesc": "Sustentação, monitoramento e evolução do ambiente tecnológico, com foco em disponibilidade, segurança e desempenho dos serviços de TI.",

    "projects.title": "Meu ecossistema técnico.",
    "projects.centralName": "Central de Automação",
    "projects.centralDesc": "Plataforma desenvolvida para centralizar operações administrativas, auditorias e ferramentas de infraestrutura em uma única interface.",
    "projects.adModule": "Criação automatizada de usuários",
    "projects.networkAudit": "Portas, serviços e acessibilidade",
    "projects.unifi": "Clientes, APs e conectividade",
    "projects.observabilityDesc": "A próxima camada da Central de Automação será voltada à coleta de métricas, visualização e alertas com Grafana.",
    "projects.forgeDesc": "Plataforma de inteligência aplicada a dados empresariais, criada para transformar planilhas, relatórios e documentos em análises estruturadas para diferentes perspectivas de decisão.",
    "projects.cyberDesc": "Laboratório pessoal voltado ao desenvolvimento prático em cybersecurity, redes, análise de vulnerabilidades e fundamentos de segurança ofensiva em ambientes controlados.",

    "common.nextStep": "Próxima etapa",

    "cases.title": "Infraestrutura aplicada.",
    "cases.orgTitle": "Organograma Corporativo",
    "cases.orgDesc": "Automação da hierarquia entre Active Directory, gestores e Microsoft 365.",
    "cases.endpointDesc": "Implantação, operação e troubleshooting de criptografia e endpoint security.",
    "cases.networkTitle": "Rede Matriz / Filial",
    "cases.networkDesc": "Conectividade, VPN, IPsec e políticas de comunicação entre ambientes corporativos.",
    "cases.provisioningTitle": "Provisionamento de Notebooks",
    "cases.provisioningDesc": "Padronização e automação do processo de preparação de novos equipamentos.",

    "credentials.cyberDesc": "Cybersecurity, ameaças, vulnerabilidades e princípios de defesa.",
    "credentials.agentsDesc": "Agentes corporativos, inteligência artificial e automação.",
    "credentials.microsoftDesc": "Inteligência artificial e automação no ecossistema Microsoft.",
    "credentials.networkingDesc": "Protocolos, redes, componentes e conectividade.",
    "credentials.promptDesc": "IA responsável, prompting e aplicações estratégicas.",
    "credentials.udemyDesc": "Cybersecurity, ethical hacking, redes e laboratório prático.",

    "stack.title": "Ferramentas do sistema.",

    "contact.title": "Vamos conectar <span>os pontos?</span>",
    "contact.desc": "Infraestrutura, automação, observabilidade, cybersecurity, IA ou projetos de tecnologia.",
    "contact.email": "EMAIL →",

    "theme.toLight": "Ativar modo claro",
    "theme.toDark": "Ativar modo escuro",
    "theme.title": "Alternar tema",

    "meta.description": "Portfólio de Vinicius Franck — infraestrutura, automação, observabilidade, inteligência artificial e cybersecurity.",
    "aria.nav": "Navegação principal",
    "aria.language": "Selecionar idioma",
    "aria.projectMap": "Mapa dos principais projetos",
    "aria.centralImage": "Central de Automação de Infraestrutura",
    "aria.forgeImage": "Interface do ForgeMindAI"
  },

  en: {
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.credentials": "Credentials",
    "nav.contact": "Contact",

    "hero.lead": "Building tools and processes that make IT operations more automated, observable and secure.",
    "hero.cta": "EXPLORE WORK →",

    "about.title": "Behind the network.",
    "about.p1": "IT professional whose career started in technical support and evolved into corporate infrastructure.",
    "about.p2": "I currently work with infrastructure operations, networking, Microsoft environments, security, endpoints, Active Directory and process automation.",
    "about.p3": "Alongside my professional work, I build automation and AI projects while expanding my knowledge in observability and cybersecurity.",
    "about.infra": "Servers, endpoints, Microsoft, AD and corporate networks.",
    "about.automation": "PowerShell, integrations, operational routines and internal tools.",
    "about.security": "Endpoint security, encryption, cybersecurity and hardening.",
    "about.ai": "Agents, LLMs, data analysis and intelligent automation.",

    "experience.title": "From support to building systems.",
    "experience.supportRole": "Technical Support Specialist",
    "experience.supportDesc": "The foundation of my IT career, working with N1/N2 support, troubleshooting, networking, workstations and ticket management.",
    "experience.infraRole": "Infrastructure Analyst",
    "experience.infraDesc": "Supporting, monitoring and evolving the technology environment, with a focus on availability, security and IT service performance.",

    "projects.title": "My technical ecosystem.",
    "projects.centralName": "Automation Hub",
    "projects.centralDesc": "A platform built to centralize administrative operations, audits and infrastructure tools in a single interface.",
    "projects.adModule": "Automated user provisioning",
    "projects.networkAudit": "Ports, services and accessibility",
    "projects.unifi": "Clients, access points and connectivity",
    "projects.observabilityDesc": "The next layer of the Automation Hub will focus on metrics collection, visualization and alerting with Grafana.",
    "projects.forgeDesc": "An enterprise intelligence platform built to transform spreadsheets, reports and documents into structured analyses for different decision-making perspectives.",
    "projects.cyberDesc": "A personal lab focused on practical cybersecurity development, networking, vulnerability analysis and offensive security fundamentals in controlled environments.",

    "common.nextStep": "Next step",

    "cases.title": "Infrastructure in practice.",
    "cases.orgTitle": "Corporate Org Chart Automation",
    "cases.orgDesc": "Automation of the hierarchy between Active Directory, managers and Microsoft 365.",
    "cases.endpointDesc": "Implementation, operation and troubleshooting of encryption and endpoint security.",
    "cases.networkTitle": "HQ / Branch Network",
    "cases.networkDesc": "Connectivity, VPN, IPsec and communication policies between corporate environments.",
    "cases.provisioningTitle": "Notebook Provisioning",
    "cases.provisioningDesc": "Standardization and automation of the new-device preparation process.",

    "credentials.cyberDesc": "Cybersecurity fundamentals, threats, vulnerabilities and defense principles.",
    "credentials.agentsDesc": "Enterprise agents, artificial intelligence and workflow automation.",
    "credentials.microsoftDesc": "Artificial intelligence and automation in the Microsoft ecosystem.",
    "credentials.networkingDesc": "Protocols, networks, components and connectivity.",
    "credentials.promptDesc": "Responsible AI, prompting techniques and strategic applications.",
    "credentials.udemyDesc": "Cybersecurity, ethical hacking, networking and practical security labs.",

    "stack.title": "System toolkit.",

    "contact.title": "Let's connect <span>the dots?</span>",
    "contact.desc": "Infrastructure, automation, observability, cybersecurity, AI or technology projects.",
    "contact.email": "EMAIL →",

    "theme.toLight": "Enable light mode",
    "theme.toDark": "Enable dark mode",
    "theme.title": "Switch theme",

    "meta.description": "Vinicius Franck's portfolio — infrastructure, automation, observability, artificial intelligence and cybersecurity.",
    "aria.nav": "Main navigation",
    "aria.language": "Select language",
    "aria.projectMap": "Main projects map",
    "aria.centralImage": "Infrastructure Automation Hub interface",
    "aria.forgeImage": "ForgeMindAI interface"
  }
};

let currentLanguage = "pt";

function t(key) {
  return translations[currentLanguage]?.[key] ?? translations.pt[key] ?? key;
}

function getSavedLanguage() {
  try {
    return localStorage.getItem("vf-webops-lang") === "en" ? "en" : "pt";
  } catch (e) {
    return "pt";
  }
}

function applyLanguage(lang, persist = true) {
  currentLanguage = lang === "en" ? "en" : "pt";
  const dict = translations[currentLanguage];

  document.documentElement.lang = currentLanguage === "en" ? "en" : "pt-BR";
  document.documentElement.dataset.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  const langPT = document.getElementById("langPT");
  const langEN = document.getElementById("langEN");

  langPT?.classList.toggle("active", currentLanguage === "pt");
  langEN?.classList.toggle("active", currentLanguage === "en");
  langPT?.setAttribute("aria-pressed", String(currentLanguage === "pt"));
  langEN?.setAttribute("aria-pressed", String(currentLanguage === "en"));

  const mainNav = document.getElementById("mainNav");
  const languageToggle = document.querySelector(".language-toggle");
  const projectMap = document.getElementById("projectMap");
  const centralImage = document.getElementById("centralImage");
  const forgeImage = document.getElementById("forgeImage");
  const metaDescription = document.querySelector('meta[name="description"]');

  mainNav?.setAttribute("aria-label", t("aria.nav"));
  languageToggle?.setAttribute("aria-label", t("aria.language"));
  projectMap?.setAttribute("aria-label", t("aria.projectMap"));
  centralImage?.setAttribute("alt", t("aria.centralImage"));
  forgeImage?.setAttribute("alt", t("aria.forgeImage"));
  metaDescription?.setAttribute("content", t("meta.description"));

  if (persist) {
    try {
      localStorage.setItem("vf-webops-lang", currentLanguage);
    } catch (e) {}
  }

  if (typeof updateThemeToggle === "function") updateThemeToggle();
}

/* Theme toggle */
const themeToggle = document.getElementById("themeToggle");
const themeToggleLabel = document.getElementById("themeToggleLabel");

function getTheme() {
  return document.documentElement.getAttribute("data-theme") === "light"
    ? "light"
    : "dark";
}

function updateThemeToggle() {
  const theme = getTheme();
  const isLight = theme === "light";

  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      isLight ? t("theme.toDark") : t("theme.toLight")
    );
    themeToggle.setAttribute("title", t("theme.title"));
  }

  if (themeToggleLabel) {
    themeToggleLabel.textContent = isLight ? "LIGHT" : "DARK";
  }
}

function setTheme(theme) {
  const safeTheme = theme === "light" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", safeTheme);

  try {
    localStorage.setItem("vf-webops-theme", safeTheme);
  } catch (e) {}

  updateThemeToggle();
}

themeToggle?.addEventListener("click", () => {
  setTheme(getTheme() === "dark" ? "light" : "dark");
});

document.getElementById("langPT")?.addEventListener("click", () => applyLanguage("pt"));
document.getElementById("langEN")?.addEventListener("click", () => applyLanguage("en"));

applyLanguage(getSavedLanguage(), false);
updateThemeToggle();

/* Boot */
const boot = document.getElementById("bootScreen");
window.addEventListener("load", () => {
  setTimeout(() => boot?.classList.add("hide"), 1050);
});

/* Scroll progress + header */
const progress = document.getElementById("scrollProgress");
const header = document.getElementById("siteHeader");

function updateScrollUI() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = max > 0 ? window.scrollY / max : 0;

  if (progress) {
    progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
  }

  header?.classList.toggle("scrolled", window.scrollY > 20);
}

window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();

/* Reveal */
const revealTargets = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.10 }
);

revealTargets.forEach((el) => revealObserver.observe(el));

/* Sense pulse */
const sensePulse = document.getElementById("sensePulse");
const senseTargets = document.querySelectorAll(".sense-target");

function movePulse(event) {
  if (!sensePulse) return;
  sensePulse.style.left = `${event.clientX}px`;
  sensePulse.style.top = `${event.clientY}px`;
}

senseTargets.forEach((target) => {
  target.addEventListener("mouseenter", (event) => {
    sensePulse?.classList.add("active");
    movePulse(event);
  });

  target.addEventListener("mousemove", movePulse);

  target.addEventListener("mouseleave", () => {
    sensePulse?.classList.remove("active");
  });
});

/* Interactive web/network canvas */
const canvas = document.getElementById("networkCanvas");
const ctx = canvas.getContext("2d", { alpha: true });

let width = 0;
let height = 0;
let dpr = Math.min(window.devicePixelRatio || 1, 2);
let nodes = [];
let mouse = { x: -9999, y: -9999 };
let slingMode = false;

function resizeCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;

  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);

  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const count = width < 760 ? 28 : 54;

  nodes = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.12,
    vy: (Math.random() - 0.5) * 0.12,
    r: Math.random() * 1.15 + 0.55
  }));
}

function drawNetwork() {
  ctx.clearRect(0, 0, width, height);

  const maxDist = width < 760 ? 105 : 145;
  const mouseDist = width < 760 ? 110 : 170;

  for (const node of nodes) {
    node.x += node.vx;
    node.y += node.vy;

    if (node.x < -20) node.x = width + 20;
    if (node.x > width + 20) node.x = -20;
    if (node.y < -20) node.y = height + 20;
    if (node.y > height + 20) node.y = -20;
  }

  const lightTheme =
    document.documentElement.getAttribute("data-theme") === "light";

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i];
      const b = nodes[j];
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const dist = Math.hypot(dx, dy);

      if (dist < maxDist) {
        const alpha = (1 - dist / maxDist) * (slingMode ? 0.18 : 0.10);

        ctx.strokeStyle = slingMode
          ? `rgba(217,47,59,${lightTheme ? alpha * 1.15 : alpha})`
          : lightTheme
            ? `rgba(8,127,196,${alpha * 1.15})`
            : `rgba(98,232,255,${alpha})`;

        ctx.lineWidth = 0.7;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    const n = nodes[i];
    const md = Math.hypot(n.x - mouse.x, n.y - mouse.y);

    if (md < mouseDist) {
      const alpha = (1 - md / mouseDist) * 0.26;

      ctx.strokeStyle = slingMode
        ? `rgba(217,47,59,${lightTheme ? alpha * 1.1 : alpha})`
        : lightTheme
          ? `rgba(8,127,196,${alpha})`
          : `rgba(25,167,255,${alpha})`;

      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(n.x, n.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    }

    ctx.fillStyle = slingMode
      ? (lightTheme ? "rgba(217,47,59,.28)" : "rgba(229,57,69,.30)")
      : (lightTheme ? "rgba(8,127,196,.22)" : "rgba(98,232,255,.24)");

    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fill();
  }

  requestAnimationFrame(drawNetwork);
}

window.addEventListener("resize", resizeCanvas);

window.addEventListener("mousemove", (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});

window.addEventListener("mouseleave", () => {
  mouse.x = -9999;
  mouse.y = -9999;
});

resizeCanvas();
drawNetwork();

/* Easter egg: typing "web" or "spider" */
const egg = document.getElementById("easterEgg");
let typed = "";
let eggTimer;

function triggerWebSling() {
  slingMode = true;
  document.body.classList.add("web-sling");

  egg?.classList.add("show");

  clearTimeout(eggTimer);

  eggTimer = setTimeout(() => {
    egg?.classList.remove("show");
    document.body.classList.remove("web-sling");
    slingMode = false;
  }, 3500);
}

window.addEventListener("keydown", (event) => {
  if (event.key.length !== 1) return;

  typed = (typed + event.key.toLowerCase()).slice(-10);

  if (typed.endsWith("web") || typed.endsWith("spider")) {
    typed = "";
    triggerWebSling();
  }
});
