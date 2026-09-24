import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import "./Navbar.css";

export default function Navbar() {
  const { language, nextLanguage, t, toggleLanguage } = useLanguage();
  const [isHidden, setIsHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isAtTop = currentScrollY <= 12;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      const hasMovedEnough = Math.abs(currentScrollY - lastScrollY.current) > 6;

      if (isAtTop || isMenuOpen) {
        setIsHidden(false);
      } else if (hasMovedEnough && isScrollingDown && currentScrollY > 120) {
        setIsHidden(true);
      } else if (hasMovedEnough && !isScrollingDown) {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);
  const handleToggleLanguage = () => {
    toggleLanguage();
    closeMenu();
  };

  return (
    <>
      <nav
        className={`auto-navbar navbar navbar-expand-lg navbar-dark sticky-top${
          isHidden ? " auto-navbar--hidden" : ""
        }${isMenuOpen ? " auto-navbar--open" : ""}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand font-anton text-uppercase" href="#" onClick={closeMenu}>
            Andres Gzz
          </a>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNavAltMarkup"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse${isMenuOpen ? " show" : ""}`}
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav ms-auto align-items-lg-center">
              <a
                className="nav-link active font-barlow text-uppercase"
                aria-current="page"
                href="#projects"
                onClick={closeMenu}
              >
                {t.nav.projects}
              </a>
              <a
                className="nav-link font-barlow text-uppercase"
                href="#sobremi"
                onClick={closeMenu}
              >
                {t.nav.about}
              </a>
              <a
                className="nav-link font-barlow text-uppercase"
                href="#habilidades"
                onClick={closeMenu}
              >
                {t.nav.skills}
              </a>
              <a
                className="nav-link font-barlow text-uppercase"
                href="#contacto"
                onClick={closeMenu}
              >
                {t.nav.contact}
              </a>
              <button
                type="button"
                className="language-toggle ms-lg-3 font-barlow-bold"
                onClick={handleToggleLanguage}
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
                <span className="visually-hidden">
                  ({language.toUpperCase()})
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
