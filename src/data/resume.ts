export type Lang = 'pt' | 'en'

export interface SkillGroup {
  label: string
  items: string[]
}

export interface Experience {
  role: string
  company: string
  period: string
  highlights: { title: string; text: string }[]
}

export interface Education {
  institution: string
  degree?: string
  period: string
  focus?: string
}

export interface ResumeContent {
  title: string
  summaryHeading: string
  summary: string
  skillsHeading: string
  skills: SkillGroup[]
  experienceHeading: string
  experience: Experience[]
  educationHeading: string
  education: Education[]
  labels: {
    copyEmail: string
    copied: string
    present: string
    contents: string
    expandAll: string
    collapseAll: string
  }
}

export const profile = {
  name: 'Pedro Delavechia Risso',
  phone: '+55 (35) 99142-8572',
  email: 'p.delavechia.r@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pedro-delavechia-risso-431369225',
  github: 'https://github.com/PedroDelaRisso',
}

export const content: Record<Lang, ResumeContent> = {
  en: {
    title: 'Fullstack Developer',
    summaryHeading: 'Professional Summary',
    summary:
      'Performance-driven Fullstack Developer with over 4 years of experience developing scalable web applications. Expert in ASP.NET Core and Vue.js ecosystems and modular architecture with a focus on REST APIs, DDD and system integration.',
    skillsHeading: 'Technical Skills',
    skills: [
      {
        label: 'Backend',
        items: ['.NET (Web API)', 'ASP.NET Core', 'C#', 'Entity Framework', 'LINQ', 'EF Migrations', 'Identity', 'JWT / Authentication', 'REST APIs', 'Service Integration', 'SQL Server'],
      },
      {
        label: 'Frontend',
        items: ['Vue.js (2 & 3)', 'React', 'TypeScript', 'JavaScript', 'Pinia', 'Vuex', 'Tailwind CSS', 'Vuetify', 'Bootstrap', 'HTML5 & CSS3', 'SPA', 'Vite'],
      },
      {
        label: 'Architecture & Tools',
        items: ['Domain-Driven Design', 'SOLID', 'CI/CD', 'Agile/Scrum', 'Git/GitHub', 'SSMS', 'JetBrains Suite (Rider, DataGrip)', 'Visual Studio Code'],
      },
      {
        label: 'Languages',
        items: ['Portuguese (Native)', 'English (Fluent)'],
      },
    ],
    experienceHeading: 'Professional Experience',
    experience: [
      {
        role: 'Full Stack Web Developer',
        company: 'Avs LTDA (formerly Viana & CIA)',
        period: '2021 – Present',
        highlights: [
          {
            title: 'Development team',
            text: 'responsible for diverse enterprise-level SaaS solutions, focusing on the transition from legacy systems to modern .NET/Vue.js stacks.',
          },
          {
            title: 'Engineered robust Web APIs',
            text: 'using .NET, implementing Entity Framework for complex data modeling and migration-based versioning to ensure data integrity.',
          },
          {
            title: 'Developed dynamic UIs',
            text: 'using Vue 2 with Vuex and Vue 3 (Composition API) with Pinia.',
          },
          {
            title: 'CI/CD pipelines',
            text: 'for automated build and deployment workflows.',
          },
          {
            title: 'Implemented Domain-Driven Design (DDD)',
            text: 'principles to decouple business logic from infrastructure, enhancing code maintainability and team scalability.',
          },
          {
            title: 'Collaborated in an Agile environment',
            text: 'actively participating in sprints and code reviews to maintain high quality-assurance standards.',
          },
        ],
      },
    ],
    educationHeading: 'Academic Background',
    education: [
      {
        institution: 'University of Franca (Unifran)',
        degree: 'Bachelor of Computer Science',
        period: '2023 – 2028',
      },
      {
        institution: 'Pontifical Catholic University of Minas Gerais (PUC Minas)',
        period: '2019 – 2022',
        focus: 'Focus: Algorithms, Data Structures, and Software Engineering.',
      },
    ],
    labels: {
      copyEmail: 'Copy email',
      copied: 'Copied!',
      present: 'Present',
      contents: 'Contents',
      expandAll: 'Expand all',
      collapseAll: 'Collapse all',
    },
  },
  pt: {
    title: 'Desenvolvedor Fullstack',
    summaryHeading: 'Resumo Profissional',
    summary:
      'Desenvolvedor Fullstack focado em performance, com mais de 4 anos de experiência no desenvolvimento de aplicações web escaláveis. Especialista nos ecossistemas ASP.NET Core e Vue.js e arquiteturas modulares com foco em REST APIs, DDD e integração de sistemas.',
    skillsHeading: 'Habilidades Técnicas',
    skills: [
      {
        label: 'Backend',
        items: ['.NET (Web API)', 'ASP.NET Core', 'C#', 'Entity Framework', 'LINQ', 'EF Migrations', 'Identity', 'JWT / Autenticação', 'REST APIs', 'Integração entre Serviços', 'SQL Server'],
      },
      {
        label: 'Frontend',
        items: ['Vue.js (2 & 3)', 'React', 'TypeScript', 'JavaScript', 'Pinia', 'Vuex', 'Tailwind CSS', 'Vuetify', 'Bootstrap', 'HTML5 & CSS3', 'SPA', 'Vite'],
      },
      {
        label: 'Arquitetura & Ferramentas',
        items: ['Domain-Driven Design', 'SOLID', 'CI/CD', 'Agile/Scrum', 'Git/GitHub', 'SSMS', 'JetBrains Suite (Rider, DataGrip)', 'Visual Studio Code'],
      },
      {
        label: 'Idiomas',
        items: ['Português (Nativo)', 'Inglês (Fluente)'],
      },
    ],
    experienceHeading: 'Experiência Profissional',
    experience: [
      {
        role: 'Desenvolvedor Web Full Stack',
        company: 'Avs LTDA (antiga Viana & CIA)',
        period: '2021 – Presente',
        highlights: [
          {
            title: 'Integrante da equipe de desenvolvimento',
            text: 'responsável por diversas soluções SaaS corporativas, com foco na transição de sistemas legados para stacks modernas em .NET/Vue.js.',
          },
          {
            title: 'Desenvolvimento de Web APIs robustas',
            text: 'utilizando .NET, implementando Entity Framework para modelagem de dados complexos e versionamento baseado em migrations para garantir a integridade dos dados.',
          },
          {
            title: 'Desenvolvimento de interfaces (UIs) dinâmicas',
            text: 'utilizando Vue 2 com Vuex e Vue 3 (Composition API) com Pinia.',
          },
          {
            title: 'Pipelines CI/CD',
            text: 'para automação de build e deploy.',
          },
          {
            title: 'Implementação de princípios de Domain-Driven Design (DDD)',
            text: 'para desacoplar a lógica de negócio da infraestrutura, melhorando a manutenibilidade do código e a escalabilidade do time.',
          },
          {
            title: 'Colaboração em ambiente Ágil',
            text: 'participando ativamente de sprints e revisões de código (code reviews) para manter altos padrões de garantia de qualidade.',
          },
        ],
      },
    ],
    educationHeading: 'Formação Acadêmica',
    education: [
      {
        institution: 'Universidade de Franca (Unifran)',
        degree: 'Bacharelado em Ciência da Computação',
        period: '2023 – 2028',
      },
      {
        institution: 'Pontifícia Universidade Católica de Minas Gerais (PUC Minas)',
        period: '2019 – 2022',
        focus: 'Foco: Algoritmos, Estruturas de Dados e Engenharia de Software.',
      },
    ],
    labels: {
      copyEmail: 'Copiar e-mail',
      copied: 'Copiado!',
      present: 'Presente',
      contents: 'Índice',
      expandAll: 'Expandir tudo',
      collapseAll: 'Recolher tudo',
    },
  },
}
