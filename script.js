// MENU TOGGLE
let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// TRADUCTIONS
const translations = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_contact: "Contact Me",
    hero_hi: "Hi, It's",
    hero_role: "Web Developer",
    hero_desc: "Passionate Computer Science student at <strong>ESI Algiers</strong>, deeply interested in web development, especially the <strong>backend</strong>. Always eager to learn and grow, I love building meaningful, efficient, and creative digital solutions. Let's turn ideas into impact!",
    btn_hire: "Hire",
    btn_contact: "Contact",
    about_title: "About",
    about_span: "Me",
    about_desc: "Passionate Computer Science student at <strong>ESI Algiers</strong>, deeply interested in web development, especially the <strong>backend</strong>. Always eager to learn and grow, I love building meaningful, efficient, and creative digital solutions. Let's turn ideas into impact!",
    btn_cv: "View My CV",
    services_title: "Services",
    service1_title: "UI / UX Design",
    service1_desc: "Crafting intuitive and engaging user experiences with a focus on usability and aesthetics.",
    service2_title: "Frontend Development",
    service2_desc: "Building responsive and interactive web interfaces using the latest technologies and best practices.",
    service3_title: "Backend Development",
    service3_desc: "Developing robust and scalable server-side applications with a focus on performance and security.",
    projects_title: "Projects",
    p1_title: "Project 1",
    p1_desc: "Regulatory Monitoring System is a full-stack web application built for Algeria's General Directorate of Customs, designed to centralize and automate the tracking of legislative and regulatory texts. It replaces a manual process with a modern platform featuring multicriteria search, automated alerts and role-based access.",
    p1_btn: "Review Project",
    p2_title: "Project 2",
    p2_desc: "DPI Management System is a full-stack web application designed to simplify and centralize the management of patients' medical records for healthcare professionals. It provides an intuitive interface for doctors, nurses, radiologists, and administrative staff to access and update patient data, track medical history, and manage treatments efficiently.",
    p2_btn: "Review Project",
    p3_title: "Project 3",
    p3_desc: "Blogify is a modern blogging platform designed to help authors easily create, manage, and publish articles through a clean and responsive interface. It features secure authentication, personalized dashboards, and a streamlined writing experience — built using Django, MySQL and Tailwind CDN.",
    p3_btn: "Review Project",
    p4_title: "Project 4",
    p4_desc: "SHOP.CO is a responsive e-commerce web application developed using Angular and Django REST Framework. It features a modern home page, product detail views, category-based browsing, and a fully functional shopping cart. Designed with a mobile-first approach.",
    p4_btn: "Review Project",
    p5_title: "Project 5",
    p5_desc: "Legends of Camelot is a turn-based adventure game inspired by Advance Wars, set in a rich medieval fantasy world. Developed with Unity and C#, players explore mystical lands and complete epic quests combining strategic gameplay with immersive storytelling.",
    p5_btn: "Review Project",
    p6_title: "Project 6",
    p6_desc: "Mirai is a modern static website created to showcase a fictional company specializing in innovative digital solutions. Built using only HTML, CSS and responsive design techniques.",
    p6_btn: "Review Project",
    contact_title: "Contact",
    contact_span: "Me",
    placeholder_name: "Full Name",
    placeholder_email: "Email",
    placeholder_phone: "Phone Number",
    placeholder_subject: "Subject",
    placeholder_message: "Your Message",
    btn_send: "Send Message",
    footer_copy: "© 2025 Sara Barkat | All rights reserved."
  },

  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_services: "Services",
    nav_projects: "Projets",
    nav_contact: "Me Contacter",
    hero_hi: "Bonjour, c'est",
    hero_role: "Développeuse Web",
    hero_desc: "Étudiante passionnée en informatique à <strong>l'ESI Alger</strong>, profondément intéressée par le développement web, notamment le <strong>backend</strong>. Toujours avide d'apprendre et d'évoluer, j'aime créer des solutions numériques utiles, efficaces et créatives. Transformons les idées en impact !",
    btn_hire: "Recruter",
    btn_contact: "Contact",
    about_title: "À",
    about_span: "Propos",
    about_desc: "Étudiante passionnée en informatique à <strong>l'ESI Alger</strong>, profondément intéressée par le développement web, notamment le <strong>backend</strong>. Toujours avide d'apprendre et d'évoluer, j'aime créer des solutions numériques utiles, efficaces et créatives. Transformons les idées en impact !",
    btn_cv: "Voir mon CV",
    services_title: "Services",
    service1_title: "Design UI / UX",
    service1_desc: "Concevoir des expériences utilisateur intuitives et engageantes, avec un accent sur l'ergonomie et l'esthétique.",
    service2_title: "Développement Frontend",
    service2_desc: "Création d'interfaces web responsives et interactives en utilisant les technologies modernes et les meilleures pratiques.",
    service3_title: "Développement Backend",
    service3_desc: "Développement d'applications côté serveur robustes et évolutives, avec un focus sur la performance et la sécurité.",
    projects_title: "Projets",
    p1_title: "Projet 1",
    p1_desc: "Système de Veille Réglementaire est une application web full-stack développée pour la Direction Générale des Douanes algérienne, conçue pour centraliser et automatiser le suivi des textes législatifs et réglementaires. Elle remplace un processus manuel par une plateforme moderne intégrant une recherche multicritère, des alertes automatisées et un accès basé sur les rôles.",
    p1_btn: "Voir le Projet",
    p2_title: "Projet 2",
    p2_desc: "DPI Management System est une application web full-stack conçue pour simplifier et centraliser la gestion des dossiers médicaux des patients pour les professionnels de santé. Elle offre une interface intuitive permettant aux médecins, infirmières, radiologues et personnels administratifs d'accéder et de mettre à jour les données patients.",
    p2_btn: "Voir le Projet",
    p3_title: "Projet 3",
    p3_desc: "Blogify est une plateforme de blog moderne conçue pour aider les auteurs à créer, gérer et publier des articles via une interface propre et responsive. Elle intègre une authentification sécurisée, des tableaux de bord personnalisés — développée avec Django, MySQL et Tailwind CDN.",
    p3_btn: "Voir le Projet",
    p4_title: "Projet 4",
    p4_desc: "SHOP.CO est une application web e-commerce responsive développée avec Angular et Django REST Framework. Elle propose une page d'accueil moderne, des fiches produits détaillées, une navigation par catégories et un panier d'achat entièrement fonctionnel. Conçue avec une approche mobile-first.",
    p4_btn: "Voir le Projet",
    p5_title: "Projet 5",
    p5_desc: "Legends of Camelot est un jeu d'aventure au tour par tour inspiré d'Advance Wars, dans un univers fantasy médiéval riche. Développé avec Unity et C#, le joueur incarne un chevalier explorant des terres mystiques et accomplissant des quêtes épiques.",
    p5_btn: "Voir le Projet",
    p6_title: "Projet 6",
    p6_desc: "Mirai est un site web statique moderne créé pour présenter une entreprise fictive spécialisée dans les solutions numériques innovantes. Développé uniquement en HTML, CSS et techniques de design responsive.",
    p6_btn: "Voir le Projet",
    contact_title: "Me",
    contact_span: "Contacter",
    placeholder_name: "Nom complet",
    placeholder_email: "Email",
    placeholder_phone: "Numéro de téléphone",
    placeholder_subject: "Sujet",
    placeholder_message: "Votre message",
    btn_send: "Envoyer le message",
    footer_copy: "© 2025 Sara Barkat | Tous droits réservés."
  },

};

// FONCTION DE TRADUCTION
function applyTranslation(lang) {
  const t = translations[lang];
  const isAr = lang === 'ar';

  // Direction RTL pour l'arabe
  document.documentElement.setAttribute('dir', isAr ? 'rtl' : 'ltr');

  // Navbar
  document.querySelector('.navbar a[href="#home"]').textContent = t.nav_home;
  document.querySelector('.navbar a[href="#about"]').textContent = t.nav_about;
  document.querySelector('.navbar a[href="#services"]').textContent = t.nav_services;
  document.querySelector('.navbar a[href="#projects"]').textContent = t.nav_projects;
  document.querySelector('.gradient-btn').textContent = t.nav_contact;

  // Hero
  document.querySelector('.home-content h1').innerHTML = `${t.hero_hi} <span>Sara</span>`;
  document.querySelector('.home-content h3').innerHTML = `Je suis <span>${t.hero_role}</span>`;
  document.querySelector('.home-content p').innerHTML = t.hero_desc;
  const btnGroup = document.querySelectorAll('.btn-group .btn');
  btnGroup[0].textContent = t.btn_hire;
  btnGroup[1].textContent = t.btn_contact;

  // About
  document.querySelector('.about-content h2').innerHTML = `${t.about_title} <span>${t.about_span}</span>`;
  document.querySelector('.about-content p').innerHTML = t.about_desc;
  document.querySelector('.about-content .btn').textContent = t.btn_cv;

  // Services
  document.querySelector('.services .heading').textContent = t.services_title;
  const serviceBoxes = document.querySelectorAll('.service-info');
  serviceBoxes[0].querySelector('h4').textContent = t.service1_title;
  serviceBoxes[0].querySelector('p').textContent = t.service1_desc;
  serviceBoxes[1].querySelector('h4').textContent = t.service2_title;
  serviceBoxes[1].querySelector('p').textContent = t.service2_desc;
  serviceBoxes[2].querySelector('h4').textContent = t.service3_title;
  serviceBoxes[2].querySelector('p').textContent = t.service3_desc;

  // Projects
  document.querySelector('.projects .heading').textContent = t.projects_title;
  const cards = document.querySelectorAll('.project-card');
  const projectKeys = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'];
  cards.forEach((card, i) => {
    const key = projectKeys[i];
    card.querySelector('h3').textContent = t[`${key}_title`];
    card.querySelector('p').textContent = t[`${key}_desc`];
    card.querySelector('.btn').textContent = t[`${key}_btn`];
  });

  // Contact
  document.querySelector('.contact .heading').innerHTML = `${t.contact_title} <span>${t.contact_span}</span>`;
  document.querySelector('input[name="name"]').placeholder = t.placeholder_name;
  document.querySelector('input[name="email"]').placeholder = t.placeholder_email;
  document.querySelector('input[name="phone"]').placeholder = t.placeholder_phone;
  document.querySelector('input[name="subject"]').placeholder = t.placeholder_subject;
  document.querySelector('textarea[name="message"]').placeholder = t.placeholder_message;
  document.querySelector('input[type="submit"]').value = t.btn_send;

  // Footer
  document.querySelector('.footer .list li:nth-child(1) a').textContent = t.nav_services;
  document.querySelector('.footer .list li:nth-child(2) a').textContent = t.nav_projects;
  document.querySelector('.footer .list li:nth-child(3) a').textContent = t.nav_contact;
  document.querySelector('.footer .copyright').textContent = t.footer_copy;
}

// ÉCOUTEUR SUR LE SÉLECTEUR DE LANGUE
document.getElementById('languageSwitcher').addEventListener('change', function () {
  applyTranslation(this.value);
});

// LANGUE PAR DÉFAUT
applyTranslation('fr');