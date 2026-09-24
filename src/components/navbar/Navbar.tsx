import { useLanguage } from "../../i18n/LanguageContext";

export default function Navbar() {
  const { language, nextLanguage, t, toggleLanguage } = useLanguage();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand font-anton text-uppercase" href="#">
            Andres Gzz
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto align-items-lg-center">
              <a
                className="nav-link active font-barlow text-uppercase"
                aria-current="page"
                href="#projects"
              >
                {t.nav.projects}
              </a>
              <a className="nav-link font-barlow text-uppercase" href="#sobremi">
                {t.nav.about}
              </a>
              <a className="nav-link font-barlow text-uppercase" href="#habilidades">
                {t.nav.skills}
              </a>
              <a className="nav-link font-barlow text-uppercase" href="#contacto">
                {t.nav.contact}
              </a>
              <button
                type="button"
                className="language-toggle ms-lg-3 font-barlow-bold"
                onClick={toggleLanguage}
                aria-label={t.nav.switchLabel}
                title={t.nav.switchLabel}
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10" />
                </svg>
                <span>{nextLanguage.toUpperCase()}</span>
                <span className="visually-hidden">({language.toUpperCase()})</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
