function Title({ first, titleBalise, title }) {
  const delayBalise = first ? 2050 : 100;
  const appearBalise = first ? 'fade-right' : 'fade-up';
  return (
    <div>
      <div data-aos={appearBalise} data-aos-delay={delayBalise} className="balise section-name">
        &lt;<span className="balise-name">div</span>{' '}
        <span className="balise-class">class</span> = &quot;
        <span className="balise-class-name">{titleBalise}</span>&quot;&gt;
      </div>{' '}
      { first ? (
        <div data-aos="fade-left" data-aos-delay="2300" className="balise section-h d-flex">
          <div>&lt;<span className="balise-name">h1 </span>{' '}
            <span className="balise-class">class</span> = &quot;
            <span className="balise-class-name">dire-bonjour</span>&quot;&gt;
          </div>
          <div className="big-title">Bonjour !</div>
          <div className="balise closing">
            &lt;<span className="balise-name">/h1</span>&gt;
          </div>
        </div>
      ) : (
        <div data-aos="fade-up" className="balise section-h d-flex">
          <div>&lt;<span className="balise-name">h2</span>
            &gt;
          </div>
          <span className="big-title">{title}</span>
          <span className="balise closing">
            <div>&lt;<span className="balise-name">/h2</span>&gt;</div>
          </span>
        </div>
      ) }
    </div>
  );
}

export default Title;
