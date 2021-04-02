import Section from '../section/Section';
import Title from '../title/Title';
import Bouton from '../bouton/Bouton';

function SectionAbout() {
  return (
    <Section section="about" extremite={false} first={false}>
      <div className="picture d-flex" data-aos="fade-up">
        <img src="marinehansart.jpg" alt="Marine Hansart" />
      </div>
      <div className="content-container">
        <Title titleBalise="a-propos" title="À propos" first={false} />
        <div className="text-content" data-aos="fade-up">
          <p>De nature <span className="bold">créative</span> et <span className="bold">mathématique</span>, le domaine du web m&apos;intéressait depuis longtemps.
            Ma formation au sein d&apos;interface3 a transformé cet intérêt en véritable passion.
            J&apos;aime <span className="bold">me challenger, résoudre des problèmes</span> et faire <span className="bold">attention au moindre détail.</span>
          </p>
          <p>Quand je ne code pas, je <span className="bold">rénove</span> ma maison, je <span className="bold">couds</span> ma garde-robe ou je lance des
            disques avec mon équipe d&apos;<span className="bold">Ultimate Frisbee</span>.
            Je serais heureuse d&apos;en discuter avec vous.
          </p>
        </div>
        <div className="balise script" data-aos="fade-up">&lt;script&gt;</div>
        <div className="array balise" data-aos="fade-up">
          <div><span className="const">const</span> quiSuisJe = &#123;</div>
          <div className="characteristics"><span className="category">nom</span> : &quot;<span className="balise-class-name">Marine</span>&quot;,</div>
          <div className="characteristics"><span className="category">age</span> : &quot;<span className="balise-class-name">Quelque part dans la vingtaine</span>&quot;,</div>
          <div className="characteristics"><span className="category">localisation</span> : <span className="balise-number">1420</span>,</div>
          <div className="characteristics"><span className="category">formation</span> : &quot;<span className="balise-class-name">Front-End Developer</span>&quot;,</div>
          <div className="array-closing">&#125;;</div>
        </div>
        <div data-aos="fade-up" className="balise script closing">&lt;/script&gt;</div>
        <div data-aos="fade-up" className="div-btn"><Bouton link="#contact" target={false} content="Contactez-moi" /></div>
        <div data-aos="fade-up" className="balise section-name">
          &lt;<span className="balise-name">/div</span>&gt;
        </div>
      </div>

    </Section>
  );
}

export default SectionAbout;
