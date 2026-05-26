import "./Landing.css";

const games = [
  {
    id: 1,
    title: "VOID PROTOCOL",
    genre: "Sci-Fi Action RPG",
    year: "2024",
    engine: "Unity",
    role: "Lead Developer",
    description:
      "Core combat systems and procedural dungeon generation for a dystopian RPG where humanity's last AI systems wage war across fractured server-worlds.",
    image:
      "https://images.unsplash.com/photo-1536768311822-a83af8cee62d?w=1400&h=700&fit=crop&auto=format",
    tags: ["Unity", "C#", "Procedural Gen", "Multiplayer"],
  },
  {
    id: 2,
    title: "NEON SIEGE",
    genre: "Cyberpunk Tower Defense",
    year: "2023",
    engine: "Unreal Engine 5",
    role: "Gameplay Programmer",
    description:
      "Enemy AI pathfinding via flow fields and a modular tower upgrade system. Shipped to Steam with 12k+ positive reviews.",
    image:
      "https://images.unsplash.com/photo-1761845081361-57b8453ce682?w=900&h=700&fit=crop&auto=format",
    tags: ["Unreal 5", "C++", "AI", "Blueprint"],
  },
  {
    id: 3,
    title: "ABYSSAL DEPTHS",
    genre: "Underwater Horror",
    year: "2023",
    engine: "Godot 4",
    role: "Solo Developer",
    description:
      "Solo horror experience 11,000 meters below the surface. Custom water shaders, procedural ambient audio, and tension-driven level design.",
    image:
      "https://images.unsplash.com/photo-1703057642023-b6a60a5dfb8b?w=900&h=700&fit=crop&auto=format",
    tags: ["Godot 4", "GDScript", "Shader", "Solo"],
  },
  {
    id: 4,
    title: "THE LAST MERIDIAN",
    genre: "Open World RPG",
    year: "2022",
    engine: "Unity",
    role: "Systems Designer",
    description:
      "Branching quest architecture and faction reputation economy for an open-world set in a civilization frozen mid-collapse.",
    image:
      "https://images.unsplash.com/photo-1508925831690-f33f79533e7c?w=700&h=1000&fit=crop&auto=format",
    tags: ["Unity", "Systems Design", "Narrative"],
  },
  {
    id: 5,
    title: "CIRCUIT BREAKER",
    genre: "Action Platformer",
    year: "2022",
    engine: "Unreal Engine 5",
    role: "Level Designer",
    description:
      "24 precision platformer levels inside a collapsing power grid - escalating mechanical complexity with optimized speed-run routing.",
    image:
      "https://images.unsplash.com/photo-1597839219216-a773cb2473e4?w=1400&h=700&fit=crop&auto=format",
    tags: ["Unreal 5", "Level Design", "Blueprint"],
  },
];

function Landing() {
  return (
    <>
      <section className="position-relative d-flex align-items-end py-5 overflow-hidden">
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
              4 anos desarrollando juegos en Unity, Unreal and Three.js - desde
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
            01 - Selected Works
          </span>
          <h2
            className="text-white mb-0"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(36px, 5vw, 60px)",
              letterSpacing: "0.02em",
            }}
          >
            PROJECTS
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
              <GameCard game={games[3]} height="420px" />
            </div>
            <div className="col-12 col-lg-8">
              <GameCard game={games[4]} height="420px" />
            </div>
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
