import './Banner.css';

/**
 * Banner principal com branding tambaqui (curso).
 */
export function Banner() {
  return (
    <header className="banner" role="banner">
      <img
        src="/imagens/tambaqui.png"
        alt="Banner principal do Organograma do Condomínio — logo Tambaqui"
      />
      <div className="banner__titulo">
        <h1>Organograma do Condomínio</h1>
        <p>Cadastre a equipe e visualize papéis no condomínio</p>
      </div>
    </header>
  );
}

export default Banner;
