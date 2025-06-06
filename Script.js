// =================== Efeito de luz do mouse na navbar ===================
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    if (navbar) {
        const highlightBg = document.createElement('div');
        highlightBg.className = 'highlight-bg';
        navbar.appendChild(highlightBg);

        navbar.addEventListener('mousemove', (e) => {
            const rect = navbar.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            highlightBg.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.08), transparent 80%)`;
        });

        navbar.addEventListener('mouseleave', () => {
            highlightBg.style.background = 'none';
        });
    }
});

// =================== Mobile Navigation Toggle ===================
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const scrollTopBtn = document.getElementById('scroll-top');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // =================== Smooth Scrolling ===================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // =================== Reveal Animation ===================
    const reveal = () => {
        const reveals = document.querySelectorAll('.project-card, .course-item, .contact-item');
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        reveals.forEach(element => {
            if (element.getBoundingClientRect().top < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', reveal);
    reveal(); // Run on page load

    // =================== Scroll to Top Button ===================
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            scrollTopBtn.classList.toggle('active', window.pageYOffset > 300);
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // =================== Animation Delays ===================
    const setAnimationDelay = (elements, delay) => {
        elements.forEach((element, index) => {
            element.style.animationDelay = `${index * delay}s`;
        });
    };

    setAnimationDelay(document.querySelectorAll('.project-card'), 0.2);
    setAnimationDelay(document.querySelectorAll('.course-item'), 0.1);
    setAnimationDelay(document.querySelectorAll('.contact-item'), 0.1);
});

// =================== WhatsApp Button Animation ===================
document.addEventListener('DOMContentLoaded', () => {
    const whatsappBtn = document.querySelector('.whatsapp-btn');

    if (whatsappBtn) {
        setTimeout(() => {
            whatsappBtn.classList.add('animate-in');
        }, 1000);

        whatsappBtn.addEventListener('click', () => {
            console.log('WhatsApp button clicked');
            // Pode adicionar analytics aqui
        });
    }
});

// =================== Efeito de luz do mouse no hero ===================
document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero');

    if (hero) {
        // Efeito 1: Highlight Background
        const highlightBg = document.createElement('div');
        highlightBg.className = 'hero-highlight-bg';
        hero.appendChild(highlightBg);

        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            highlightBg.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.08), transparent 80%)`;
        });

        hero.addEventListener('mouseleave', () => {
            highlightBg.style.background = 'none';
        });

        // Efeito 2: Variáveis CSS para posição do mouse
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / hero.offsetWidth) * 100;
            const y = ((e.clientY - rect.top) / hero.offsetHeight) * 100;
            hero.style.setProperty('--mouse-x', `${x}%`);
            hero.style.setProperty('--mouse-y', `${y}%`);
        });

        // Efeito 3: Cursor de luz personalizado
        const cursorLight = document.createElement('div');
        cursorLight.id = 'hero-cursor-light';
        document.body.appendChild(cursorLight);

        hero.addEventListener('mousemove', (e) => {
            cursorLight.style.display = 'block';
            cursorLight.style.left = `${e.clientX}px`;
            cursorLight.style.top = `${e.clientY}px`;
        });

        hero.addEventListener('mouseleave', () => {
            cursorLight.style.display = 'none';
        });
    }
});

// Objeto com as traduções
// No objeto translations, adicione as traduções das categorias
const translations = {
    pt: {
        nav: {
            profile: 'Perfil',
            about: 'Sobre mim',
            projects: 'Projetos',
            contact: 'Contato'
        },
        hero: {
            role: 'Full Stack Developer & Freelancer'
        },
        about: {
            title: 'Sobre mim',
            personalInfo: 'Informações pessoais',
            name: 'Nome',
            address: 'Endereço',
            courses: 'Cursos e Certificações'
        },
        projects: {
            title: 'Meus Projetos',
            liveDemo: 'Live Demo',
            description: 'Site portfólio desenvolvido por mim para apresentar meus projetos, habilidades e trajetória profissional.'
        },
        contact: {
            title: 'Contato',
            location: 'Localização'
        },
        courseCategories: {
            web: "Desenvolvimento Web",
            programming: "Linguagens de Programação",
            database: "Banco de Dados e Ferramentas"
        },
        courses: {
            webDev: {
                title: "Desenvolvimento Web (HTML, CSS) - Avançado",
                institution: "Eniac - 2023"
            },
            javascript: {
                title: "JavaScript - Intermediário",
                institution: "Eniac - 2023"
            },
            react: {
                title: "React.js - Intermediário",
                institution: "Eniac - 2023"
            },
            python: {
                title: "Python - Básico",
                institution: "Eniac - 2023"
            },
            csharp: {
                title: "Linguagem C / C# - Básico",
                institution: "Eniac - 2024"
            },
            java: {
                title: "Java - Básico",
                institution: "Eniac - 2024"
            },
            database: {
                title: "Banco de Dados - Básico",
                institution: "Eniac - 2023"
            },
            office: {
                title: "Pacote Office - Intermediário",
                institution: "Eniac - 2023"
            }
        }
    },
    en: {
        nav: {
            profile: 'Profile',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact'
        },
        hero: {
            role: 'Full Stack Developer & Freelancer'
        },
        about: {
            title: 'About Me',
            personalInfo: 'Personal Information',
            name: 'Name',
            address: 'Address',
            courses: 'Courses and Certifications'
        },
        projects: {
            title: 'My Projects',
            liveDemo: 'Live Demo',
            description: 'Portfolio website developed by me to showcase my projects, skills and professional journey.'
        },
        contact: {
            title: 'Contact',
            location: 'Location'
        },
        courseCategories: {
            web: "Web Development",
            programming: "Programming Languages",
            database: "Database and Tools"
        },
        courses: {
            webDev: {
                title: "Web Development (HTML, CSS) - Advanced",
                institution: "Eniac - 2023"
            },
            javascript: {
                title: "JavaScript - Intermediate",
                institution: "Eniac - 2023"
            },
            react: {
                title: "React.js - Intermediate",
                institution: "Eniac - 2023"
            },
            python: {
                title: "Python - Basic",
                institution: "Eniac - 2023"
            },
            csharp: {
                title: "C / C# Programming - Basic",
                institution: "Eniac - 2024"
            },
            java: {
                title: "Java - Basic",
                institution: "Eniac - 2024"
            },
            database: {
                title: "Database - Basic",
                institution: "Eniac - 2023"
            },
            office: {
                title: "Office Suite - Intermediate",
                institution: "Eniac - 2023"
            }
        }
    }
};


// Função para trocar o idioma
function toggleLanguage() {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === 'pt-br' ? 'en' : 'pt-br';
    const langText = document.querySelector('.lang-text');
    
    document.documentElement.lang = newLang;
    langText.textContent = newLang === 'en' ? 'PT' : 'EN';
    
    // Atualiza os textos com o novo idioma
    updateTexts(newLang === 'en' ? 'en' : 'pt');
    
    // Atualiza todos os cursos de uma vez
    const courseItems = document.querySelectorAll('.course-item');
    const courseKeys = ['webDev', 'javascript', 'react', 'python', 'csharp', 'java', 'database', 'office'];
    
    courseItems.forEach((item, index) => {
        const courseKey = courseKeys[index];
        if (courseKey && translations[newLang === 'en' ? 'en' : 'pt'].courses[courseKey]) {
            const courseData = translations[newLang === 'en' ? 'en' : 'pt'].courses[courseKey];
            const titleElement = item.querySelector('h4');
            const institutionElement = item.querySelector('p');
            
            if (titleElement) titleElement.textContent = courseData.title;
            if (institutionElement) institutionElement.textContent = courseData.institution;
        }
    });
}

// Função para atualizar os textos
// Na função updateTexts, adicione a atualização dos títulos das categorias
function updateTexts(lang) {
    // Navegação
    document.querySelector('a[href="#home"]').textContent = translations[lang].nav.profile;
    document.querySelector('a[href="#about"]').textContent = translations[lang].nav.about;
    document.querySelector('a[href="#projects"]').textContent = translations[lang].nav.projects;
    document.querySelector('a[href="#contact"]').textContent = translations[lang].nav.contact;
    
    // Hero Section
    document.querySelector('.tagline').textContent = translations[lang].hero.role;
    
    // About Section
    document.querySelector('#about .section-title').textContent = translations[lang].about.title;
    document.querySelector('.personal-info h3').textContent = translations[lang].about.personalInfo;
    document.querySelector('.courses h3').textContent = translations[lang].about.courses;
    
    // Projects Section
    document.querySelector('#projects .section-title').textContent = translations[lang].projects.title;
    document.querySelectorAll('.btn').forEach(btn => {
        if(btn.textContent === 'Live Demo' || btn.textContent === 'Demo ao vivo') {
            btn.textContent = translations[lang].projects.liveDemo;
        }
    });
    
    // Contact Section
    document.querySelector('#contact .section-title').textContent = translations[lang].contact.title;
    document.querySelector('.contact-item:last-child h3').textContent = translations[lang].contact.location;

    // Atualiza os títulos das categorias dos cursos
    const categoryTitles = document.querySelectorAll('.course-category h4.category-title');
    categoryTitles.forEach((title, index) => {
        const categoryKeys = ['web', 'programming', 'database'];
        const categoryKey = categoryKeys[index];
        if (categoryKey && translations[lang].courseCategories[categoryKey]) {
            title.textContent = translations[lang].courseCategories[categoryKey];
        }
    });
}

// Adiciona o evento de clique ao botão de idioma
document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', toggleLanguage);
    }
});
