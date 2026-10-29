import './style.css';

const copy = {
  en: {
    navApps: 'Our apps', navServices: 'Services', navAbout: 'About', navContact: 'Contact',
    eyebrow: 'SOFTWARE • AUTOMATION • DIGITAL PRODUCTS',
    heroTitle: 'Practical software.<br><span>Built for real work.</span>',
    heroText: 'We create useful applications, automate repetitive tasks, and build custom digital tools that help people and businesses work smarter.',
    explore: 'Explore our apps', contact: 'Discuss a project',
    trust: 'Small, focused tools. Clear solutions. Thoughtful engineering.',
    appsEyebrow: 'OUR PRODUCTS', appsTitle: 'Tools made to be useful',
    appsText: 'Explore our software products. More tools and updates will be added here as they become available.',
    sajilTag: 'Productivity app', sajilTitle: 'Sajil', sajilText: 'A practical app project designed to make everyday workflows simpler. Product details, screenshots, and download links will be added before public release.',
    status: 'In development', learnMore: 'Request information',
    servicesEyebrow: 'WHAT WE DO', servicesTitle: 'From idea to working solution',
    service1Title: 'Software development', service1Text: 'Web apps, desktop utilities, internal tools, and focused software built around your workflow.',
    service2Title: 'Automation & integrations', service2Text: 'Reduce repetitive work with scripts, bots, integrations, and reliable task automation.',
    service3Title: 'Custom tools', service3Text: 'Purpose-built utilities and prototypes that solve a specific business or personal problem.',
    processEyebrow: 'HOW WE WORK', processTitle: 'A clear, practical process',
    step1: 'Understand', step1Text: 'We clarify the problem, users, and success criteria.',
    step2: 'Build', step2Text: 'We develop a focused first version and share progress.',
    step3: 'Improve', step3Text: 'We test, refine, and plan the next useful improvements.',
    aboutEyebrow: 'ABOUT THE COMPANY', aboutTitle: 'Technology should make work easier.',
    aboutText: 'We focus on practical software, useful automation, and digital products designed around real needs. Our approach is straightforward: understand the problem, build the right-sized solution, and keep improving it.',
    contactEyebrow: 'HAVE A PROJECT IN MIND?', contactTitle: 'Let’s build something useful.',
    contactText: 'Tell us what you want to improve or build. Email is the simplest way to start a conversation.',
    emailButton: 'Email us', emailNote: 'info@twotick.com — email setup required before receiving messages.',
    footerText: 'Software development • Automation • Custom tools',
    privacy: 'Privacy', rights: 'All rights reserved.',
    language: 'العربية', emailSubject: 'Project inquiry',
    privacyText: 'This starter website does not collect or store form submissions. If you add analytics, forms, accounts, or payments later, update this page and your privacy practices accordingly.'
  },
  ar: {
    navApps: 'تطبيقاتنا', navServices: 'خدماتنا', navAbout: 'من نحن', navContact: 'تواصل معنا',
    eyebrow: 'برمجيات • أتمتة • منتجات رقمية',
    heroTitle: 'برمجيات عملية.<br><span>مصممة لإنجاز العمل.</span>',
    heroText: 'نطوّر تطبيقات مفيدة، ونؤتمت المهام المتكررة، ونبني أدوات رقمية مخصصة تساعد الأفراد والشركات على العمل بكفاءة أكبر.',
    explore: 'استكشف تطبيقاتنا', contact: 'ناقش مشروعك معنا',
    trust: 'أدوات واضحة. حلول عملية. تطوير باهتمام بالتفاصيل.',
    appsEyebrow: 'منتجاتنا', appsTitle: 'أدوات صُممت لتكون مفيدة',
    appsText: 'تعرّف على منتجاتنا البرمجية. سنضيف المزيد من الأدوات والتحديثات عند توفرها.',
    sajilTag: 'تطبيق للإنتاجية', sajilTitle: 'سجّل — Sajil', sajilText: 'مشروع تطبيق عملي يهدف إلى تبسيط سير العمل اليومي. ستُضاف التفاصيل والصور وروابط التنزيل قبل الإطلاق العام.',
    status: 'قيد التطوير', learnMore: 'اطلب معلومات',
    servicesEyebrow: 'ماذا نقدم؟', servicesTitle: 'من الفكرة إلى الحل العملي',
    service1Title: 'تطوير البرمجيات', service1Text: 'تطبيقات ويب، وأدوات لسطح المكتب، وأنظمة داخلية مصممة بما يناسب طريقة عملك.',
    service2Title: 'الأتمتة والربط', service2Text: 'تقليل المهام المتكررة باستخدام السكربتات والبوتات وربط الأنظمة وأتمتة المهام.',
    service3Title: 'أدوات مخصصة', service3Text: 'أدوات ونماذج أولية تُبنى لمعالجة احتياج محدد في العمل أو الاستخدام الشخصي.',
    processEyebrow: 'آلية العمل', processTitle: 'خطوات واضحة وعملية',
    step1: 'الفهم', step1Text: 'نحدد المشكلة والمستخدمين والنتيجة المطلوبة.',
    step2: 'التطوير', step2Text: 'نبني نسخة أولية مركزة ونشاركك التقدم.',
    step3: 'التحسين', step3Text: 'نختبر الحل ونحسّنه ونحدد الخطوات التالية.',
    aboutEyebrow: 'عن الشركة', aboutTitle: 'التقنية يجب أن تجعل العمل أسهل.',
    aboutText: 'نركز على البرمجيات العملية والأتمتة المفيدة والمنتجات الرقمية المبنية على احتياجات حقيقية. أسلوبنا واضح: نفهم المشكلة، ونبني الحل المناسب، ثم نواصل تحسينه.',
    contactEyebrow: 'هل لديك مشروع؟', contactTitle: 'لنبنِ شيئًا مفيدًا معًا.',
    contactText: 'أخبرنا بما تريد تطويره أو تحسينه. البريد الإلكتروني هو أبسط طريقة لبدء التواصل.',
    emailButton: 'راسلنا عبر البريد', emailNote: 'info@twotick.com — يلزم إعداد البريد لاستقبال الرسائل.',
    footerText: 'تطوير البرمجيات • الأتمتة • الأدوات المخصصة',
    privacy: 'الخصوصية', rights: 'جميع الحقوق محفوظة.',
    language: 'English', emailSubject: 'استفسار عن مشروع',
    privacyText: 'لا يجمع هذا الموقع التجريبي بيانات النماذج ولا يخزنها. إذا أضفت التحليلات أو النماذج أو الحسابات أو الدفع لاحقًا، فحدّث هذه الصفحة وممارسات الخصوصية.'
  }
};

let lang = 'en';
const email = 'info@twotick.com';
const year = new Date().getFullYear();

function render() {
  const t = copy[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.title = lang === 'ar'
    ? 'TwoTick — التطبيقات والأتمتة والبرمجيات المخصصة'
    : 'TwoTick — Apps, Automation & Custom Software';

  document.querySelector('#app').innerHTML = `
    <header class="site-header">
      <div class="container nav-wrap">
        <a class="brand" href="#home" aria-label="TwoTick home"><img class="brand-logo" src="/twotick-logo.png" alt="" width="40" height="40"><span>TwoTick</span></a>
        <nav class="main-nav" aria-label="Main navigation">
          <a href="#apps">${t.navApps}</a><a href="#services">${t.navServices}</a><a href="#about">${t.navAbout}</a>
        </nav>
        <div class="nav-actions">
          <button class="lang-toggle" id="language-toggle" type="button">${t.language}</button>
          <a class="button button-small button-dark" href="#contact">${t.navContact}</a>
        </div>
      </div>
    </header>

    <main>
      <section class="hero section" id="home">
        <div class="container hero-grid">
          <div class="hero-copy">
            <div class="eyebrow"><span class="eyebrow-dot"></span>${t.eyebrow}</div>
            <h1>${t.heroTitle}</h1>
            <p class="hero-text">${t.heroText}</p>
            <div class="hero-actions"><a class="button button-primary" href="#apps">${t.explore}<span aria-hidden="true">↗</span></a><a class="button button-outline" href="#contact">${t.contact}</a></div>
            <p class="hero-note"><span class="note-line"></span>${t.trust}</p>
          </div>
          <div class="hero-art" aria-label="Abstract software interface illustration">
            <div class="art-glow"></div>
            <div class="dashboard-card">
              <div class="dash-top"><div class="dash-dots"><i></i><i></i><i></i></div><span>WORKSPACE / 01</span><span class="live-pill">● READY</span></div>
              <div class="dash-heading"><div><small>YOUR NEXT IDEA</small><h3>Make it work.</h3></div><div class="dash-icon">✳</div></div>
              <div class="dash-lines"><span></span><span></span><span></span></div>
              <div class="dash-bottom"><div class="mini-stat"><span class="stat-icon">↗</span><div><small>WORKFLOW</small><strong>Optimized</strong></div></div><div class="mini-chart"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
            </div>
            <div class="floating-chip chip-top"><span class="chip-symbol">⌘</span><span><small>LESS REPETITION</small><strong>More momentum</strong></span></div>
            <div class="floating-chip chip-bottom"><span class="chip-check">✓</span><span><small>BUILT WITH PURPOSE</small><strong>Made for real work</strong></span></div>
            <div class="art-orbit orbit-one"></div><div class="art-orbit orbit-two"></div>
          </div>
        </div>
      </section>

      <section class="app-section section" id="apps">
        <div class="container">
          <div class="section-heading"><div><div class="eyebrow">${t.appsEyebrow}</div><h2>${t.appsTitle}</h2></div><p>${t.appsText}</p></div>
          <article class="product-card">
            <div class="product-visual"><div class="app-window"><div class="app-window-bar"><span></span><span></span><span></span><b>SAJIL</b></div><div class="app-window-content"><div class="app-side"><i></i><i></i><i></i><i></i></div><div class="app-main"><div class="app-main-title"></div><div class="app-main-subtitle"></div><div class="app-widget-row"><div></div><div></div><div></div></div><div class="app-task"></div><div class="app-task short"></div><div class="app-task"></div></div></div></div><div class="product-orb">S</div></div>
            <div class="product-info"><div class="product-meta"><span class="product-tag">${t.sajilTag}</span><span class="status"><i></i>${t.status}</span></div><h3>${t.sajilTitle}</h3><p>${t.sajilText}</p><a class="text-link" href="mailto:${email}?subject=${encodeURIComponent(t.emailSubject)}">${t.learnMore} <span aria-hidden="true">↗</span></a></div>
          </article>
        </div>
      </section>

      <section class="services-section section" id="services">
        <div class="container">
          <div class="section-heading"><div><div class="eyebrow">${t.servicesEyebrow}</div><h2>${t.servicesTitle}</h2></div></div>
          <div class="service-grid">
            <article class="service-card"><div class="service-icon">&lt;/&gt;</div><h3>${t.service1Title}</h3><p>${t.service1Text}</p><span class="service-number">01</span></article>
            <article class="service-card"><div class="service-icon">↻</div><h3>${t.service2Title}</h3><p>${t.service2Text}</p><span class="service-number">02</span></article>
            <article class="service-card"><div class="service-icon">✳</div><h3>${t.service3Title}</h3><p>${t.service3Text}</p><span class="service-number">03</span></article>
          </div>
        </div>
      </section>

      <section class="process-section section">
        <div class="container">
          <div class="eyebrow">${t.processEyebrow}</div><h2>${t.processTitle}</h2>
          <div class="process-grid"><article><span>01</span><h3>${t.step1}</h3><p>${t.step1Text}</p></article><article><span>02</span><h3>${t.step2}</h3><p>${t.step2Text}</p></article><article><span>03</span><h3>${t.step3}</h3><p>${t.step3Text}</p></article></div>
        </div>
      </section>

      <section class="about-section section" id="about">
        <div class="container about-grid"><div><div class="eyebrow">${t.aboutEyebrow}</div><h2>${t.aboutTitle}</h2></div><p>${t.aboutText}</p></div>
      </section>

      <section class="contact-section section" id="contact">
        <div class="container contact-box"><div><div class="eyebrow">${t.contactEyebrow}</div><h2>${t.contactTitle}</h2><p>${t.contactText}</p></div><div class="contact-action"><a class="button button-white" href="mailto:${email}?subject=${encodeURIComponent(t.emailSubject)}">${t.emailButton} <span aria-hidden="true">↗</span></a><small>${t.emailNote}</small></div><div class="contact-decoration">✓✓</div></div>
      </section>
    </main>

    <footer class="site-footer"><div class="container footer-top"><a class="brand" href="#home" aria-label="TwoTick home"><img class="brand-logo" src="/twotick-logo.png" alt="" width="40" height="40"><span>TwoTick</span></a><p>${t.footerText}</p><a href="#privacy" id="privacy-link">${t.privacy}</a></div><div class="container footer-bottom"><span>© ${year} TwoTick. ${t.rights}</span><span>Designed for clarity.</span></div><div class="privacy-note" id="privacy"><div class="container"><p>${t.privacyText}</p></div></div></footer>
  `;

  document.querySelector('#language-toggle').addEventListener('click', () => {
    lang = lang === 'en' ? 'ar' : 'en';
    render();
  });
  document.querySelector('#privacy-link').addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector('#privacy').classList.toggle('is-visible');
  });
}

render();