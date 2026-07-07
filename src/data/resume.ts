export type Lang = 'pt' | 'en'

export interface SkillGroup {
  label: string
  items: string[]
}

export interface RoleStage {
  title: string
  period: string
}

export interface Experience {
  company: string
  period: string
  roles: RoleStage[]
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
    copyPhone: string
    copied: string
    present: string
    contents: string
    expandAll: string
    collapseAll: string
    viewRepo: string
    switchToLight: string
    switchToDark: string
    call: string
    sendEmail: string
    expandSidebar: string
    collapseSidebar: string
    expandSection: string
    collapseSection: string
  }
}

export const profile = {
  name: 'Pedro Delavechia Risso',
  phone: '+55 (35) 99142-8572',
  email: 'p.delavechia.r@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pedro-delavechia-risso-431369225',
  github: 'https://github.com/PedroDelaRisso',
  repo: 'https://github.com/PedroDelaRisso/resume',
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
        items: ['.NET (Web API)', 'ASP.NET Core', 'C#', 'Entity Framework', 'LINQ', 'EF Migrations', 'Identity', 'JWT / Authentication', 'REST APIs', 'Service Integration', 'SQL Server', 'Unit Testing (xUnit)'],
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
        company: 'Grupo SOITIC',
        period: '2021 – Present',
        roles: [
          { title: 'Programming Intern', period: 'Aug 2021 – Sep 2021' },
          { title: 'Entry-level Fullstack Developer', period: 'Sep 2021 – Jan 2023' },
          { title: 'Fullstack Developer', period: 'Jan 2023 – Present' },
        ],
        highlights: [
          {
            title: "Responsible for MetraCloud's development and maintenance",
            text: 'with a strong focus on modularity, enabling the reuse of code and components that simplifies the development team\'s work.',
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
            title: 'Implemented Domain-Driven Design (DDD)',
            text: 'principles to decouple business logic from infrastructure, enhancing code maintainability and team scalability.',
          },
          {
            title: 'Collaborated in an Agile environment',
            text: 'actively participating in sprints and code reviews to maintain high quality-assurance standards.',
          },
          {
            title: 'Built CI/CD pipelines',
            text: 'for automated build and deployment workflows across the full software development lifecycle (SDLC).',
          },
        ],
      },
    ],
    educationHeading: 'Academic Background',
    education: [
      {
        institution: 'Unifran',
        degree: 'Bachelor of Computer Science',
        period: '2023 – 2028',
      },
      {
        institution: 'PUC Minas',
        period: '2019 – 2022',
        focus: 'Focus: Algorithms, Data Structures, and Software Engineering.',
      },
    ],
    labels: {
      copyEmail: 'Copy email',
      copyPhone: 'Copy phone',
      copied: 'Copied!',
      present: 'Present',
      contents: 'Contents',
      expandAll: 'Expand all',
      collapseAll: 'Collapse all',
      viewRepo: 'View source repository',
      switchToLight: 'Switch to light mode',
      switchToDark: 'Switch to dark mode',
      call: 'Call',
      sendEmail: 'Send email',
      expandSidebar: 'Expand sidebar',
      collapseSidebar: 'Collapse sidebar',
      expandSection: 'Expand section',
      collapseSection: 'Collapse section',
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
        items: ['.NET (Web API)', 'ASP.NET Core', 'C#', 'Entity Framework', 'LINQ', 'EF Migrations', 'Identity', 'JWT / Autenticação', 'REST APIs', 'Integração entre Serviços', 'SQL Server', 'Testes Unitários (xUnit)'],
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
        company: 'Grupo SOITIC',
        period: '2021 – Presente',
        roles: [
          { title: 'Estagiário de Programação', period: 'ago 2021 – set 2021' },
          { title: 'Desenvolvedor Fullstack Júnior', period: 'set 2021 – jan 2023' },
          { title: 'Desenvolvedor Fullstack Pleno', period: 'jan 2023 – Presente' },
        ],
        highlights: [
          {
            title: 'Responsável pelo desenvolvimento e manutenção do MetraCloud',
            text: 'com forte foco em modularidade, viabilizando a reutilização de código e componentes que simplifica o trabalho da equipe de desenvolvimento.',
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
            title: 'Implementação de princípios de Domain-Driven Design (DDD)',
            text: 'para desacoplar a lógica de negócio da infraestrutura, melhorando a manutenibilidade do código e a escalabilidade do time.',
          },
          {
            title: 'Colaboração em ambiente Ágil',
            text: 'participando ativamente de sprints e revisões de código (code reviews) para manter altos padrões de garantia de qualidade.',
          },
          {
            title: 'Construção de pipelines CI/CD',
            text: 'para automação de build e deploy em todo o ciclo de vida de desenvolvimento de software (SDLC).',
          },
        ],
      },
    ],
    educationHeading: 'Formação Acadêmica',
    education: [
      {
        institution: 'Unifran',
        degree: 'Bacharelado em Ciência da Computação',
        period: '2023 – 2028',
      },
      {
        institution: 'PUC Minas',
        period: '2019 – 2022',
        focus: 'Foco: Algoritmos, Estruturas de Dados e Engenharia de Software.',
      },
    ],
    labels: {
      copyEmail: 'Copiar e-mail',
      copyPhone: 'Copiar telefone',
      copied: 'Copiado!',
      present: 'Presente',
      contents: 'Índice',
      expandAll: 'Expandir tudo',
      collapseAll: 'Recolher tudo',
      viewRepo: 'Ver repositório fonte',
      switchToLight: 'Mudar para modo claro',
      switchToDark: 'Mudar para modo escuro',
      call: 'Ligar',
      sendEmail: 'Enviar e-mail',
      expandSidebar: 'Expandir barra lateral',
      collapseSidebar: 'Recolher barra lateral',
      expandSection: 'Expandir seção',
      collapseSection: 'Recolher seção',
    },
  },
}
