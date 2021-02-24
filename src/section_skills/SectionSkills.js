import { useRef, useState } from 'react';
import Title from '../title/Title';
import Section from '../section/Section';

import logos from './logos';
import capitalize from '../functions/string';
import { ReactComponent as Coeur } from './svg/like.svg';

function SectionSkills() {
  const languageMastery = useRef();
  const [colorId, setColor] = useState(null);
  const [text, setText] = useState('Affinités');
  const showMastery = (e) => {
    let arr;
    const containerSkills = e.target.closest('.skills-line');
    if (containerSkills.classList.contains('languages')) arr = logos.langages;
    else if (containerSkills.classList.contains('tools')) arr = logos.outils;
    else if (containerSkills.classList.contains('design')) arr = logos.design;

    const tab = arr.findIndex((x) => x.nom.toLowerCase() === e.target.classList.value);
    const mastery = arr[tab].maitrise;
    const idSvg = arr[tab].id;
    setText(capitalize(e.target.classList.value));
    languageMastery.current.style.width = `${mastery * 10}%`;
    setColor(idSvg);
  };
  return (
    <Section section="skills" extremite={false} first={false}>
      <div className="picture" />
      <div className="content-container">
        <Title titleBalise="competences" title="Compétences" first={false} />
        <div className="logos-skills" data-aos="fade-up">
          <div className="languages d-flex skills-line">{logos.langages.map((x) => {
            const color = Number(x.id) === colorId ? '#f3a106' : null;
            return <x.logo style={{ fill: color }} key={x.id} className={x.nom.toLowerCase()} onClick={showMastery} />;
          })}
          </div>
          <div className="tools d-flex skills-line">{logos.outils.map((x) => {
            const color = Number(x.id) === colorId ? '#f3a106' : null;
            return <x.logo style={{ fill: color }} key={x.id} className={x.nom.toLowerCase()} onClick={showMastery} />;
          })}
          </div>
          <div className="design d-flex skills-line">
            {logos.design.map((x) => {
              const color = Number(x.id) === colorId ? '#f3a106' : null;

              return <x.logo style={{ fill: color }} key={x.id} className={x.nom.toLowerCase()} onClick={showMastery} />;
            })}
          </div>
          <div className="mastery-skills d-flex"><div className="language">{text}</div><div className="line-container"><div className="width-mastery" ref={languageMastery}><Coeur /></div></div></div>
        </div>
        <div data-aos="fade-up" className="balise section-name balise-closing">
          &lt;<span className="balise-name">/div</span>&gt;
        </div>
      </div>

    </Section>
  );
}

export default SectionSkills;
