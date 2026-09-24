import { useLanguage } from "../../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5 col-md-12">
            <div className="d-flex align-items-center mb-4">
              <a className="navbar-brand font-anton text-uppercase" href="#">
                Andres Gzz
              </a>
            </div>
          </div>

          <div className="col-lg-7 col-md-12 text-end">
            <p className="small mb-0 font-barlow" style={{ opacity: 0.6 }}>
              &copy; {new Date().getFullYear()} {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
