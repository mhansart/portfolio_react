import Title from '../title/Title';
import Section from '../section/Section';

const { default: Bouton } = require('../bouton/Bouton');

function SectionWork() {
  return (
    <Section section="work" extremite={false} first={false}>
      <div className="content-container">
        <Title titleBalise="mon-travail" title="Mon travail" first={false} />
        <div className="cube-container d-flex">
          <div className="d-flex w-100" data-aos="fade-up">
            <div className="one-work">
              <img
                src="jollyseed.gif"
                alt="jolly-seed site"

              />
            </div>
            <div className="text-work">
              <div className="work-title">Jolly Seed</div>
              <p>Site réalisé à la moitié de la formation Front-End Developper chez Interface3. Projet de groupe (3 personnes).
                <span className="bold">Connectez-vous</span> pour en voir plus !
              </p>
              <div className="balise">
                <span className="const">const</span> login =  &#123; <p className="characteristic"><span className="category">mdp</span> : &quot;<span className="balise-class-name">admin</span>&quot;, <span className="category">email</span> : &quot;<span className="balise-class-name">admin@gmail.com</span>&quot;</p><span className="balise-closing"> &#125;;</span>
              </div>
              <p className="bold">Html, Scss, Php, Javascript, Ajax, MySql</p>
              <div className="d-flex button-class">
                <Bouton link="https://jolly-seed.herokuapp.com/" content="Le site" target />
                <Bouton link="https://github.com/mhansart/jolly_seed" content="Le code" target />
              </div>
            </div>
          </div>
          <div className="d-flex w-100" data-aos="fade-up">
            <div className="text-work">
              <div className="work-title">Skywalkers - Ultimate mixed team</div>
              <p>Single page application réalisée pour mon équipe d&apos;<span className="bold">Ultimate Frisbee</span>. Le design n&apos;est pas le mien, juste le code.</p>
              <p className="bold">Html, Scss, React, Javascript, React-router</p>
              <div className="d-flex button-class">
                <Bouton link="http://ultimate-skywalkers.be/#/" content="Le site" target />
                <Bouton link="https://github.com/mhansart/skywalkers-react-router-nodemailer" content="Le code" target />
              </div>
            </div>
            <div className="one-work">
              <img
                src="skywalkers.png"
                alt="skywalkers site"

              />
            </div>
          </div>
          <div className="d-flex w-100" data-aos="fade-up">
            <div className="one-work">
              <img
                src="hackerflix.gif"
                alt="exercice js"

              />
            </div>
            <div className="text-work">
              <div className="work-title">Hackerflix</div>
              <p>Application regroupant tous les <span className="bold">films parlant d&apos;informatique</span>. Vous pouvez les <span className="bold">trier</span> suivant plusieurs critères, les <span className="bold">liker</span>, et le carrousel affiche les films en <span className="bold">fonction de vos affinités</span>.</p>
              <p className="bold">Html, Scss, Javascript</p>
              <div className="d-flex button-class">
                <Bouton link="https://mhansart.github.io/epreuve-blanche-js-if3/" content="Le site" target />
                <Bouton link="https://github.com/mhansart/epreuve-blanche-js-if3" content="Le code" target />
              </div>
            </div>
          </div>
          <div className="d-flex w-100" data-aos="fade-up">
            <div className="text-work">
              <div className="work-title">Balise-Man</div><p>Jeu réalisé en groupe, en 2 jours et demi, dans le cadre du <span className="bold">hackathon</span> d&apos;interface3 sur le thème &quot;Apprendre le code de manière ludique&quot;. </p>
              <p className="bold">Html, Scss, Javascript, Jquery</p>
              <div className="d-flex button-class">
                <Bouton link="https://emontaigne.github.io/hackathon_if3/" content="Le site" target />
                <Bouton link="https://github.com/emontaigne/hackathon_if3/tree/master" content="Le code" target />
              </div>
            </div>
            <div className="one-work">
              <img
                src="hackathon.png"
                alt="hackathon site"

              />
            </div>
          </div>
        </div>
        <div
          className="balise balise-closing"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          &lt;<span className="balise-name">/div</span>&gt;
        </div>
      </div>
      <div />
    </Section>
  );
}

export default SectionWork;
