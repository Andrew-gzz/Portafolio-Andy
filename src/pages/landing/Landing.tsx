import "./Landing.css";

const games = [
  {
    id: 1,
    title: "Purrrge Crusade",
    genre: "Multiplayer Online, Shotter, Fantasy, Cats ",
    year: "2026",
    engine: "Unreal 5",
    role: "Lider Desarrollador",
    description:
      "Desarrollo de sistema de combate, mecanicas principales y desarrollo para multijugador con servidores de steam",
    image: "src/assets/PurrgeCrusade.webp",
    tags: ["Unreal Engine", "Blueprints", "C#", "Multiplayer"],
  },
  {
    id: 2,
    title: "VR Experiencie",
    genre: "VR, Simulation, Experiencie, Soccer",
    year: "2026",
    engine: "Unreal 5",
    role: "Level Design and Experiencie, Mechanics",
    description:
      "Proyecto desarrollado principalmente para VR y un haptico para simular un penalty de futbol",
    image: "src/assets/VRExperience.webp",
    tags: ["Unreal 5", "VR", "Haptico", "Blueprint", "Simulador"],
  },
  {
    id: 3,
    title: "Tickets Now",
    genre: "Shotter, Simulation, WorldCup",
    year: "2025",
    engine: "Unreal 5",
    role: "Mechanics, AI developer",
    description:
      "Tickets Now es un juego de simulador de guardia de seguridad en un estadio, deberas atender aficionados y revisar que todo este en orden.",
    image: "src/assets/Tickets_Now.webp",
    tags: ["Unreal Engine 5", "IA", "Simulador", "Shotter"],
  },
  {
    id: 4,
    title: "Across the Stars",
    genre: "Runner, Web, Multiplayer Online, PC",
    year: "2025",
    engine: "Three.js",
    role: "Level Design",
    description:
      "Across the Stars es un juego Runner multijugador que consiste en llegar a la meta lo mas rapido que puedas viajando entre niveles cada vez mas dificiles",
    image: "src/assets/Across_the_Stars.webp",
    tags: ["Three.js", "Multiplayer", "Web", "3D"],
  },
  {
    id: 5,
    title: "Potion Frency",
    genre: "Fanstasia, Crafting, Cozy Game ",
    year: "2025",
    engine: "DirectX",
    role: "Lead Developer",
    description:
      "Potion Frency es un juego sencillo desarrollado enteramente con Direct X, eres un mago intentando realizar una pociones, recolecta las correctas para ganar.",
    image: "src/assets/Potion_Frenzy.webp",
    tags: ["DirectX", "Shaders propios", "C++", "Cozy"],
  },
];
const skills = [
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
    items: ["Git ", "Affinity", "Blender", "Filmora"],
  },
];
function Landing() {
  return (
    <>
      <section
        id="Hero"
        className="position-relative d-flex align-items-end py-5 overflow-hidden"
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark">
          <img
            src="https://images.unsplash.com/photo-1733412505442-36cfa59a4240?w=1920&h=1080&fit=crop&auto=format"
            alt="Developer workspace"
            className="w-100 h-100 object-fit-cover opacity-25"
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background:
                "linear-gradient(to top, #07070e 0%, rgba(7, 7, 14, 0.6) 55%, rgba(7, 7, 14, 0.1) 100%)",
            }}
          />
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background:
                "linear-gradient(to right, rgba(7, 7, 14, 0.85) 0%, transparent 100%)",
            }}
          />
        </div>

        <div className="position-relative z-1 container-xxl px-4 px-lg-5 w-100">
          <div
            className="d-flex align-items-center gap-3 mb-5"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            <span
              className="d-inline-block bg-danger"
              style={{ width: "1.5rem", height: "1px" }}
            />
            <span
              className="text-danger text-uppercase fw-semibold"
              style={{ fontSize: "11px", letterSpacing: "0.35em" }}
            >
              Desarrollador de videojuegos
            </span>
          </div>

          <h1
            className="text-white mb-5"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(58px, 11vw, 148px)",
              lineHeight: 0.88,
              letterSpacing: "0.025em",
            }}
          >
            CREANDO
            <br />
            <span className="text-danger">MUNDOS</span>
            <br />
            EN CODIGO
          </h1>

          <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-4 gap-sm-5">
            <p
              className="small text-secondary lh-lg mb-0"
              style={{ maxWidth: "20rem" }}
            >
              4 años desarrollando juegos en Unity, Unreal and Three.js - desde
              sistema de combates y mecanicas de juego.
            </p>
            <div className="d-flex gap-3 flex-shrink-0">
              <a
                href="#projects"
                className="btn btn-danger d-inline-flex align-items-center gap-2 px-4 py-2 text-uppercase fw-bold rounded-0"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "12px",
                  letterSpacing: "0.2em",
                }}
              >
                Ver Trabajo
              </a>
              <a
                href="#contact"
                className="btn btn-outline-light d-inline-flex align-items-center px-4 py-2 text-uppercase fw-bold rounded-0"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "12px",
                  letterSpacing: "0.2em",
                }}
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-5">
        <div className="container-xxl px-4 px-lg-5 mb-5">
          <span
            className="d-block text-danger text-uppercase fw-semibold mb-1"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.35em",
            }}
          >
            01 - Mis ultimos trabajos
          </span>
          <h2
            className="text-white mb-0"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(36px, 5vw, 60px)",
              letterSpacing: "0.02em",
            }}
          >
            PROYECTOS
          </h2>
        </div>

        <div className="container-xxl px-4 px-lg-5">
          <div className="row g-2 g-lg-3">
            <div className="col-12">
              <GameCard game={games[0]} height="clamp(380px, 48vw, 520px)" />
            </div>
            <div className="col-12 col-lg-7">
              <GameCard game={games[1]} height="380px" />
            </div>
            <div className="col-12 col-lg-5">
              <GameCard game={games[2]} height="380px" />
            </div>
            <div className="col-12 col-lg-4">
              <GameCard game={games[4]} height="420px" />
            </div>
            <div className="col-12 col-lg-8">
              <GameCard game={games[3]} height="420px" />
            </div>
          </div>
        </div>
      </section>
      <section id="sobremi" className="py-5">
        <div className="container-xxl px-4 px-lg-5 mb-5">
          <div className="row">
            <div className="col-7">
              <span
                className="d-block text-danger text-uppercase fw-semibold mb-1"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.35em",
                }}
              >
                02 - Sobre mí
              </span>
              <h2
                className="text-white mb-0"
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "clamp(36px, 5vw, 60px)",
                  letterSpacing: "0.02em",
                }}
              >
                EL DESARROLLADOR <br /> DETRÁS <br /> DE LOS JUEGOS
              </h2>
              <div className="d-flex flex-lg-column align-items-start align-items-sm-center">
                <p className="small text-secondary">
                  Soy un desarrollador con 4 años de experiencia desarrollando
                  videojuegos en diversas plataformas y diversos generos. Me
                  enfoco en desarrollo en el gameplay, diseño de sitemas y
                  arquitectura de nivel.
                </p>
                <p className="small text-secondary">
                  Comenze con el desarrollo de videojuegos entrando a la Mini
                  Game work JAM usando Unity y de ahi no paré, segui
                  desarrollando y me especialice mas en Unreal Engine 5 usando
                  blueprint con un enfoque a diseño de mecanicas y diseño de
                  gameplay.
                </p>
              </div>
              <div className="d-flex flex-row gap-5 border-top border-opacity-25 pt-4 mt-4">
                {[
                  { value: "4+", label: "Años de Exp." },
                  { value: "3", label: "Motores Gráficos" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <div
                      className="display-5 text-danger lh-1"
                      style={{ fontFamily: "'Anton', sans-serif" }}
                    >
                      {value}
                    </div>
                    <div
                      className="small text-light text-uppercase mt-2"
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        letterSpacing: "0.25em",
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-5 text-light">
              <img
                src="https://images.unsplash.com/photo-1733412505442-36cfa59a4240?w=1920&h=1080&fit=crop&auto=format"
                alt="Imagen de Andy"
                className="w-100 h-100 object-fit-cover"
              ></img>
            </div>
          </div>
        </div>
      </section>
      <section id="habilidades" className="py-5">
        <div className="container-xxl px-4 px-lg-5">
          <div className="mb-5">
            <span
              className="d-block text-danger text-uppercase fw-semibold mb-1"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.35em",
              }}
            >
              03 - Habilidades
            </span>
            <h2
              className="text-white mb-0"
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(36px, 5vw, 60px)",
                letterSpacing: "0.02em",
              }}
            >
              HERRAMIENTAS Y DESARROLLO
            </h2>
          </div>

          <div className="row g-0">
            {skills.map(({ category, items }) => (
              <div key={category} className="col-12 col-sm-6 col-lg-3">
                <div className="h-100 p-4 p-lg-5">
                  <h3
                    className="text-danger text-uppercase fw-semibold mb-4"
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.3em",
                    }}
                  >
                    {category}
                  </h3>
                  <ul className="list-unstyled d-grid gap-3 mb-0">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="skill-item d-flex align-items-center gap-3"
                      >
                        <span className="skill-dot flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function GameCard({
  game,
  height,
}: {
  game: (typeof games)[0];
  height: string;
}) {
  return (
    <div
      className="game-card position-relative overflow-hidden bg-dark"
      style={{ minHeight: height }}
    >
      <img
        src={game.image}
        alt={`${game.title} - ${game.genre}`}
        className="game-card-image position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
      />
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.25) 55%, rgba(0, 0, 0, 0.1) 100%)",
        }}
      />
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background:
            "linear-gradient(to right, rgba(0, 0, 0, 0.3) 0%, transparent 100%)",
        }}
      />

      <div className="position-absolute top-0 start-0 z-1 p-3">
        <span
          className="badge rounded-0 bg-danger text-white text-uppercase fw-bold px-3 py-2"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.2em",
          }}
        >
          {game.role}
        </span>
      </div>

      <div className="position-absolute top-0 end-0 z-1 p-3">
        <span
          className="badge rounded-0 border border-light border-opacity-25 text-white-50 text-uppercase fw-semibold px-3 py-2"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.2em",
          }}
        >
          {game.year}
        </span>
      </div>

      <div className="position-absolute bottom-0 start-0 end-0 z-1 p-4 p-lg-5">
        <div
          className="text-white-50 text-uppercase mb-2"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.25em",
          }}
        >
          {game.engine}&nbsp;&nbsp;-&nbsp;&nbsp;{game.genre}
        </div>
        <h3
          className="text-white lh-1 mb-0"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(22px, 2.6vw, 40px)",
            letterSpacing: "0.02em",
          }}
        >
          {game.title}
        </h3>

        <div className="game-card-details mt-3">
          <p
            className="small text-white-50 lh-base mb-3"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {game.description}
          </p>
          <div className="d-flex flex-wrap gap-2">
            {game.tags.map((tag) => (
              <span
                key={tag}
                className="border border-danger border-opacity-50 text-danger text-uppercase px-2 py-1"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.15em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="game-card-border position-absolute top-0 start-0 w-100 h-100 border border-danger pe-none" />
    </div>
  );
}

export default Landing;
