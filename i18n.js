import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    pt: {
      translation: {
        nav: {
          home: "Home",
          about: "Sobre",
          projects: "Projetos",
          contact: "Contato"
        },

        hero: {
          greeting: "Olá, eu sou",
          roles: [
            "Desenvolvedora Front-End",
            "Cientista de Dados",
            "Designer UI/UX"
          ]
        },

        about: {
          p1: "Eu sou Ianca Carregosa, curiosa por natureza e apaixonada por transformar ideias em experiências digitais. Estudo Ciência da Computação e me encantei pelo universo do front-end, do UI/UX e também pela área de dados.",
          p2: "Gosto de unir criatividade e lógica para dar vida a projetos que sejam bonitos, funcionais e que realmente façam sentido para quem usa. Com minhas habilidades, desenvolvo sites para e-commerce, aplicativos, landing pages, blogs e muito mais, sempre com o objetivo de criar algo que conecte pessoas e tecnologia de forma leve e intuitiva. Se interessou? Seu projeto pode ser o próximo!"
        },

        projects: {
          repo: "Repositório",
          demo: "Ver Projeto",

          blog: {
            title: "Blog Tema WordPress",
            desc: "Desenvolvimento de tema para um blog pessoal no WordPress."
          },

          arquiteto: {
            title: "Portfólio Arquiteto",
            desc: "Desenvolvimento de um portfólio responsivo para um graduando de arquitetura e urbanismo."
          },

          publicitario: {
            title: "Portfólio Publicitário",
            desc: "Desenvolvimento de um portfólio responsivo para um publicitário fictício, com modo escuro e claro."
          }
        }
      }
    },

    en: {
      translation: {
        nav: {
          home: "Home",
          about: "About",
          projects: "Projects",
          contact: "Contact"
        },

        hero: {
          greeting: "Hi, I'm",
          roles: [
            "Frontend Developer",
            "Data Scientist",
            "UI/UX Designer"
          ]
        },

        about: {
          p1: "I'm Ianca Carregosa, naturally curious and passionate about turning ideas into digital experiences. I study Computer Science and fell in love with front-end, UI/UX, and also the data field.",
          p2: "I enjoy combining creativity and logic to build projects that are beautiful, functional, and truly meaningful for users. With my skills, I develop e-commerce websites, apps, landing pages, blogs, and more, always aiming to connect people and technology in a smooth and intuitive way. Interested? Let’s build something amazing together."
        },

        projects: {
          repo: "Repository",
          demo: "Live Demo",

          blog: {
            title: "WordPress Blog Theme",
            desc: "Development of a theme for a personal WordPress blog."
          },

          arquiteto: {
            title: "Architect Portfolio",
            desc: "Development of a responsive portfolio for an architecture student."
          },

          publicitario: {
            title: "Advertising Portfolio",
            desc: "Development of a responsive portfolio for a fictional advertiser, with dark and light mode."
          }
        }
      }
    }
  },

  lng: "pt",
  fallbackLng: "pt",

  interpolation: {
    escapeValue: false
  }
});

export default i18n;