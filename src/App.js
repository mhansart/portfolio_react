// import './App.scss';
import React, { useEffect, useRef, useState } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './styles/style.scss';
import Menu from './menu/Menu';
import SectionHome from './section_home/SectionHome';

import SectionAbout from './section_about/SectionAbout';
import SectionSkills from './section_skills/SectionSkills';
import SectionWork from './section_work/SectionWork';
import SectionContact from './section_contact/SectionContact';

function App() {
  const [isReady, setIsReady] = useState(false);
  const appContainer = useRef();
  const allSections = document.querySelectorAll('section');
  const sectionsHeight = [];
  const sectionsTop = [0];
  allSections.forEach((section) => {
    sectionsHeight.push(section.offsetHeight);
    const prevSectionHeight = sectionsHeight.reduce((a, b) => a + b, 0);
    sectionsTop.push(prevSectionHeight - 10);
  });
  const menuLinks = document.querySelectorAll('.link-menu');
  menuLinks.forEach((link, i) => {
    if (
      window.pageYOffset >= sectionsTop[i]
      && window.pageYOffset < sectionsTop[i + 1]
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  window.addEventListener('scroll', () => {
    menuLinks.forEach((link, i) => {
      if (
        window.pageYOffset >= sectionsTop[i]
        && window.pageYOffset < sectionsTop[i + 1]
      ) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target.innerHTML === 'CONTACT') {
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest',
        });
      } else {
        document.querySelector(e.target.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });
      }
    });
  });
  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 800,
      delay: 200,
      once: true,
    });
    AOS.refresh();
    setTimeout(() => {
      setIsReady(document.readyState === 'complete');
    }, 1000);
  }, []);
  window.addEventListener('resize', () => {
    setIsReady(!setIsReady);
    setTimeout(() => {
      setIsReady(true);
    }, 100);
  });

  return (
    <div className="app" ref={appContainer} {...isReady}>
      <Menu />
      <SectionHome />
      <SectionAbout />
      <SectionSkills />
      <SectionWork />
      <SectionContact />
    </div>
  );
}

export default App;
