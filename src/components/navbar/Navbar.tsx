export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-transparent sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
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
            <div className="navbar-nav ms-auto">
              <a
                className="nav-link active"
                aria-current="page"
                href="#projects"
              >
                Proyectos
              </a>
              <a className="nav-link" href="#sobremi">
                Sobre mi
              </a>
              <a className="nav-link" href="#habilidades">
                Habilidades
              </a>
              <a className="nav-link" href="#contacto">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
