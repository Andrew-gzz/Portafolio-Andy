import { useLanguage } from "../../i18n/LanguageContext";
import type { Game } from "../../i18n/translations";
import "./Landing.css";

function Landing() {
  const { t } = useLanguage();
  const [featuredGame, secondGame, thirdGame, fourthGame, fifthGame] = t.games;

  return (
    <>
      <section
        id="Hero"
        className="position-relative d-flex align-items-end py-5 overflow-hidden"
      >
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark">
          <img
            src="https://images.unsplash.com/photo-1733412505442-36cfa59a4240?w=1920&h=1080&fit=crop&auto=format"
            alt={t.hero.imageAlt}
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
            className="d-flex align-items-center gap-3 mb-5 font-barlow"
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
              {t.hero.eyebrow}
            </span>
          </div>

          <h1
            className="text-white mb-5 font-anton"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(58px, 11vw, 148px)",
              lineHeight: 0.88,
              letterSpacing: "0.025em",
            }}
          >
            {t.hero.titleTop}
            <br />
            <span className="text-danger">{t.hero.titleAccent}</span>
            <br />
            {t.hero.titleBottom}
          </h1>

          <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-4 gap-sm-5">
            <p
              className="small text-secondary lh-lg mb-0 font-inter"
              style={{ maxWidth: "20rem" }}
            >
              {t.hero.body}
            </p>
            <div className="d-flex gap-3 flex-shrink-0">
              <a
                href="#projects"
                className="btn btn-danger d-inline-flex align-items-center gap-2 px-4 py-2 text-uppercase fw-bold rounded-0 font-barlow-bold"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "12px",
                  letterSpacing: "0.2em",
                }}
              >
                {t.hero.primaryCta}
              </a>
              <a
                href="#contacto"
                className="btn btn-outline-light d-inline-flex align-items-center px-4 py-2 text-uppercase fw-bold rounded-0 font-barlow-bold"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "12px",
                  letterSpacing: "0.2em",
                }}
              >
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-5">
        <div className="container-xxl px-4 px-lg-5 mb-5">
          <span
            className="d-block text-danger text-uppercase fw-semibold mb-1 font-barlow"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.35em",
            }}
          >
            {t.projects.eyebrow}
          </span>
          <h2
            className="text-white mb-0 font-anton"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(36px, 5vw, 60px)",
              letterSpacing: "0.02em",
            }}
          >
            {t.projects.title}
          </h2>
        </div>

        <div className="container-xxl px-4 px-lg-5">
          <div className="row g-2 g-lg-3">
            <div className="col-12">
              <GameCard
                game={featuredGame}
                height="clamp(380px, 48vw, 520px)"
              />
            </div>
            <div className="col-12 col-lg-7">
              <GameCard game={secondGame} height="380px" />
            </div>
            <div className="col-12 col-lg-5">
              <GameCard game={thirdGame} height="380px" />
            </div>
            <div className="col-12 col-lg-4">
              <GameCard game={fifthGame} height="420px" />
            </div>
            <div className="col-12 col-lg-8">
              <GameCard game={fourthGame} height="420px" />
            </div>
          </div>
        </div>
      </section>

      <section id="sobremi" className="py-5 about-section">
        <div className="container-xxl px-4 px-lg-5 mb-5">
          <div className="row g-4 g-lg-5 align-items-stretch">
            <div className="col-12 col-lg-7">
              <span
                className="d-block text-danger text-uppercase fw-semibold mb-1 font-barlow"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.35em",
                }}
              >
                {t.about.eyebrow}
              </span>
              <h2
                className="text-white mb-0 font-anton"
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "clamp(36px, 5vw, 60px)",
                  letterSpacing: "0.02em",
                }}
              >
                {t.about.title}
              </h2>
              <div className="about-copy d-flex flex-column align-items-start mt-4">
                {t.about.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="small text-secondary font-inter"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="about-stats d-flex flex-row gap-5 border-top border-opacity-25 pt-4 mt-4">
                {t.about.stats.map(({ value, label }) => (
                  <div key={label}>
                    <div
                      className="display-5 text-danger lh-1 font-anton"
                      style={{ fontFamily: "'Anton', sans-serif" }}
                    >
                      {value}
                    </div>
                    <div
                      className="small text-light text-uppercase mt-2 font-barlow"
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
            <div className="col-12 col-lg-5 text-light">
              <img
                src="https://images.unsplash.com/photo-1733412505442-36cfa59a4240?w=1920&h=1080&fit=crop&auto=format"
                alt={t.about.imageAlt}
                className="about-image w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="habilidades" className="py-5">
        <div className="container-xxl px-4 px-lg-5">
          <div className="mb-5">
            <span
              className="d-block text-danger text-uppercase fw-semibold mb-1 font-barlow"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.35em",
              }}
            >
              {t.skills.eyebrow}
            </span>
            <h2
              className="text-white mb-0 font-anton"
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(36px, 5vw, 60px)",
                letterSpacing: "0.02em",
              }}
            >
              {t.skills.title}
            </h2>
          </div>

          <div className="row g-0">
            {t.skills.groups.map(({ category, items }) => (
              <div key={category} className="col-12 col-sm-6 col-lg-3">
                <div className="h-100 p-4 p-lg-5">
                  <h3
                    className="text-danger text-uppercase fw-semibold mb-4 font-barlow"
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
                        className="skill-item d-flex align-items-center gap-3 font-inter"
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

      <section id="contacto" className="py-5 contact-section">
        <div className="container-xxl px-4 px-lg-5 mb-5">
          <div className="row g-4 g-lg-3 align-items-start">
            <div className="col-12 col-lg-7">
              <span
                className="d-block text-danger text-uppercase fw-semibold mb-1 font-barlow"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.35em",
                }}
              >
                {t.contact.eyebrow}
              </span>
              <h2
                className="text-white mb-0 font-anton"
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "clamp(36px, 5vw, 60px)",
                  letterSpacing: "0.02em",
                }}
              >
                {t.contact.title}
              </h2>
              <div className="contact-copy d-flex flex-column align-items-start mt-4">
                {t.contact.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="small text-secondary font-inter"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div className="contact-actions col-12 col-lg-6 d-flex gap-3 justify-content-start justify-content-lg-start">
              <button
                type="button"
                className="btn btn-danger font-anton text-uppercase"
              >
                {t.contact.emailCta}
              </button>
              <button
                type="button"
                className="btn btn-outline-light font-barlow-bold text-uppercase"
              >
                {t.contact.githubCta}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function GameCard({ game, height }: { game: Game; height: string }) {
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
          className="badge rounded-0 bg-danger text-white text-uppercase fw-bold px-3 py-2 font-barlow-bold"
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
          className="badge rounded-0 border border-light border-opacity-25 text-white-50 text-uppercase fw-semibold px-3 py-2 font-barlow"
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
          className="text-white-50 text-uppercase mb-2 font-barlow"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.25em",
          }}
        >
          {game.engine}&nbsp;&nbsp;-&nbsp;&nbsp;{game.genre}
        </div>
        <h3
          className="text-white lh-1 mb-0 font-anton"
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
            className="small text-white-50 lh-base mb-3 font-inter"
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
                className="border border-danger border-opacity-50 text-danger text-uppercase px-2 py-1 font-barlow"
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
