export default function Footer() {
  return (
    <footer className="text-white py-5">
      {/* BOTTOM SECTION - Columns */}
      <div className="container">
        <div className="row g-4">
          {/* Logo & Address */}
          <div className="col-lg-5 col-md-12">
            <div className="d-flex align-items-center mb-4">
              <a className="navbar-brand" href="#">
                Andres Gzz
              </a>
            </div>
          </div>

          {/* Second Column */}
          <div className="col-lg-7 col-md-12 text-end">
            <p className="small mb-0" style={{ opacity: 0.6 }}>
              © {new Date().getFullYear()} Andy portafolio. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
