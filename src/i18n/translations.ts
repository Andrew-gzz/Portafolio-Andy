export type Language = "es" | "en";

export const translations = {
  es: {
    nav: {
      projects: "Proyectos",
      about: "Sobre mi",
      skills: "Habilidades",
      contact: "Contacto",
      switchLabel: "Cambiar idioma a ingles",
    },
    hero: {
      eyebrow: "Desarrollador de videojuegos",
      titleTop: "CREANDO",
      titleAccent: "MUNDOS",
      titleBottom: "EN CODIGO",
      body: "4 anos desarrollando juegos en Unity, Unreal y Three.js, desde sistemas de combate hasta mecanicas de juego.",
      primaryCta: "Ver Trabajo",
      secondaryCta: "Contacto",
      imageAlt: "Espacio de trabajo de desarrollador",
    },
    projects: {
      eyebrow: "01 - Mis ultimos trabajos",
      title: "PROYECTOS",
    },
    about: {
      eyebrow: "02 - Sobre mi",
      title: "EL DESARROLLADOR DETRAS DE LOS JUEGOS",
      imageAlt: "Imagen de Andy",
      paragraphs: [
        "Soy un desarrollador con 4 anos de experiencia desarrollando videojuegos en diversas plataformas y diversos generos. Me enfoco en gameplay, diseno de sistemas y arquitectura de nivel.",
        "Comence con el desarrollo de videojuegos entrando a la Mini Game Work Jam usando Unity. Desde ahi segui desarrollando y me especialice mas en Unreal Engine 5 usando blueprints, con un enfoque a diseno de mecanicas y gameplay.",
      ],
      stats: [
        { value: "4+", label: "Anos de Exp." },
        { value: "3", label: "Motores Graficos" },
      ],
    },
    skills: {
      eyebrow: "03 - Habilidades",
      title: "HERRAMIENTAS Y DESARROLLO",
      groups: [
        {
          category: "MOTORES GRAFICOS",
          items: ["Unity 6", "Unreal Engine 5", "Three.js"],
        },
        {
          category: "LENGUAJES",
          items: ["C#", "C++", "BLUEPRINTS", "HLSL / GLSL"],
        },
        {
          category: "DISCIPLINAS",
          items: [
            "Gameplay Programming",
            "Systems Design",
            "Level Design",
            "Shader Development",
          ],
        },
        {
          category: "HERRAMIENTAS",
          items: ["Git", "Affinity", "Blender", "Filmora"],
        },
      ],
    },
    contact: {
      eyebrow: "04 - Contacto",
      title: "CONSTRUYAMOS ALGO JUNTOS",
      paragraphs: [
        "Si tienes un proyecto de juego, prototipo o experiencia interactiva en mente, puedo ayudarte a llevarlo desde la idea hasta una version jugable.",
        "Estoy disponible para colaborar en gameplay, sistemas, prototipos, level design y experiencias 3D para web, PC o VR.",
      ],
      emailCta: "Enviame un Email",
      githubCta: "Github",
    },
    footer: {
      copyright: "Andy portafolio. Todos los derechos reservados.",
    },
    games: [
      {
        id: 1,
        title: "Purrrge Crusade",
        genre: "Multijugador online, shooter, fantasia, gatos",
        year: "2026",
        engine: "Unreal 5",
        role: "Lider Desarrollador",
        description:
          "Desarrollo de sistema de combate, mecanicas principales y multijugador con servidores de Steam.",
        image: "src/assets/PurrgeCrusade.webp",
        tags: ["Unreal Engine", "Blueprints", "C#", "Multiplayer"],
      },
      {
        id: 2,
        title: "VR Experience",
        genre: "VR, simulacion, experiencia, futbol",
        year: "2026",
        engine: "Unreal 5",
        role: "Level Design y mecanicas",
        description:
          "Proyecto desarrollado principalmente para VR y un dispositivo haptico para simular un penalti de futbol.",
        image: "src/assets/VRExperience.webp",
        tags: ["Unreal 5", "VR", "Haptico", "Blueprint", "Simulador"],
      },
      {
        id: 3,
        title: "Tickets Now",
        genre: "Shooter, simulacion, World Cup",
        year: "2025",
        engine: "Unreal 5",
        role: "Mechanics, AI developer",
        description:
          "Tickets Now es un simulador de guardia de seguridad en un estadio: atiende aficionados y revisa que todo este en orden.",
        image: "src/assets/Tickets_Now.webp",
        tags: ["Unreal Engine 5", "IA", "Simulador", "Shooter"],
      },
      {
        id: 4,
        title: "Across the Stars",
        genre: "Runner, web, multijugador online, PC",
        year: "2025",
        engine: "Three.js",
        role: "Level Design",
        description:
          "Runner multijugador donde debes llegar a la meta lo mas rapido posible viajando entre niveles cada vez mas dificiles.",
        image: "src/assets/Across_the_Stars.webp",
        tags: ["Three.js", "Multiplayer", "Web", "3D"],
      },
      {
        id: 5,
        title: "Potion Frenzy",
        genre: "Fantasia, crafting, cozy game",
        year: "2025",
        engine: "DirectX",
        role: "Lead Developer",
        description:
          "Juego desarrollado con DirectX donde eres un mago preparando pociones: recolecta los ingredientes correctos para ganar.",
        image: "src/assets/Potion_Frenzy.webp",
        tags: ["DirectX", "Shaders propios", "C++", "Cozy"],
      },
    ],
  },
  en: {
    nav: {
      projects: "Projects",
      about: "About",
      skills: "Skills",
      contact: "Contact",
      switchLabel: "Switch language to Spanish",
    },
    hero: {
      eyebrow: "Game developer",
      titleTop: "CRAFTING",
      titleAccent: "WORLDS",
      titleBottom: "IN CODE",
      body: "4 years building games in Unity, Unreal and Three.js, from combat systems to core gameplay mechanics.",
      primaryCta: "View Work",
      secondaryCta: "Contact",
      imageAlt: "Developer workspace",
    },
    projects: {
      eyebrow: "01 - Latest work",
      title: "PROJECTS",
    },
    about: {
      eyebrow: "02 - About me",
      title: "THE DEVELOPER BEHIND THE GAMES",
      imageAlt: "Image of Andy",
      paragraphs: [
        "I am a developer with 4 years of experience creating video games across different platforms and genres. I focus on gameplay, system design and level architecture.",
        "I started building games at the Mini Game Work Jam using Unity. Since then I kept developing and specialized further in Unreal Engine 5 with Blueprints, focusing on mechanics and gameplay design.",
      ],
      stats: [
        { value: "4+", label: "Years Exp." },
        { value: "3", label: "Game Engines" },
      ],
    },
    skills: {
      eyebrow: "03 - Skills",
      title: "TOOLS & CRAFT",
      groups: [
        {
          category: "GAME ENGINES",
          items: ["Unity 6", "Unreal Engine 5", "Three.js"],
        },
        {
          category: "LANGUAGES",
          items: ["C#", "C++", "BLUEPRINTS", "HLSL / GLSL"],
        },
        {
          category: "DISCIPLINES",
          items: [
            "Gameplay Programming",
            "Systems Design",
            "Level Design",
            "Shader Development",
          ],
        },
        {
          category: "TOOLS",
          items: ["Git", "Affinity", "Blender", "Filmora"],
        },
      ],
    },
    contact: {
      eyebrow: "04 - Contact",
      title: "LET'S BUILD SOMETHING TOGETHER",
      paragraphs: [
        "If you have a game project, prototype or interactive experience in mind, I can help take it from the idea stage to a playable version.",
        "I am available to collaborate on gameplay, systems, prototypes, level design and 3D experiences for web, PC or VR.",
      ],
      emailCta: "Send Email",
      githubCta: "Github",
    },
    footer: {
      copyright: "Andy portfolio. All rights reserved.",
    },
    games: [
      {
        id: 1,
        title: "Purrrge Crusade",
        genre: "Online multiplayer, shooter, fantasy, cats",
        year: "2026",
        engine: "Unreal 5",
        role: "Lead Developer",
        description:
          "Combat system development, core mechanics and multiplayer implementation with Steam servers.",
        image: "src/assets/PurrgeCrusade.webp",
        tags: ["Unreal Engine", "Blueprints", "C#", "Multiplayer"],
      },
      {
        id: 2,
        title: "VR Experience",
        genre: "VR, simulation, experience, soccer",
        year: "2026",
        engine: "Unreal 5",
        role: "Level Design and mechanics",
        description:
          "A VR-focused project with a haptic device designed to simulate taking a soccer penalty.",
        image: "src/assets/VRExperience.webp",
        tags: ["Unreal 5", "VR", "Haptic", "Blueprint", "Simulator"],
      },
      {
        id: 3,
        title: "Tickets Now",
        genre: "Shooter, simulation, World Cup",
        year: "2025",
        engine: "Unreal 5",
        role: "Mechanics, AI developer",
        description:
          "Tickets Now is a stadium security guard simulator where you assist fans and make sure everything is in order.",
        image: "src/assets/Tickets_Now.webp",
        tags: ["Unreal Engine 5", "AI", "Simulator", "Shooter"],
      },
      {
        id: 4,
        title: "Across the Stars",
        genre: "Runner, web, online multiplayer, PC",
        year: "2025",
        engine: "Three.js",
        role: "Level Design",
        description:
          "A multiplayer runner where you race to reach the finish line as quickly as possible across increasingly difficult levels.",
        image: "src/assets/Across_the_Stars.webp",
        tags: ["Three.js", "Multiplayer", "Web", "3D"],
      },
      {
        id: 5,
        title: "Potion Frenzy",
        genre: "Fantasy, crafting, cozy game",
        year: "2025",
        engine: "DirectX",
        role: "Lead Developer",
        description:
          "A DirectX game where you play as a wizard making potions: collect the right ingredients to win.",
        image: "src/assets/Potion_Frenzy.webp",
        tags: ["DirectX", "Custom shaders", "C++", "Cozy"],
      },
    ],
  },
} as const;

export type Translation = (typeof translations)[Language];
export type Game = Translation["games"][number];
