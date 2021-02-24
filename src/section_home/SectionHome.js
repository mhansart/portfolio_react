import Section from '../section/Section';
import Title from '../title/Title';

const { default: Bouton } = require('../bouton/Bouton');

function SectionHome() {
  return (
    <Section section="home" extremite first>
      <div className="content-container">
        <div className="balise body">&lt;body&gt;</div>
        <Title titleBalise="accueil" title="Bonjour" first />
        <div data-aos="fade-up" data-aos-delay="2600" className="presentation">
          <p>
            Je suis <span className="m">M</span><span className="my-name">arine,</span>
          </p>
          <p>Front-End Developer Junior.</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="2600"><Bouton link="#contact" content="Contactez-moi" target={false} /></div>
        <div className="balise" data-aos="fade-right" data-aos-delay="2200">
          &lt;<span className="balise-name">/div</span>&gt;
        </div>
      </div>
      <div />

    </Section>
  );
}

export default SectionHome;
