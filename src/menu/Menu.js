import { useRef, useEffect } from 'react';
import { ReactComponent as MarineLogo } from './favicon.svg';
import { ReactComponent as GithubLogo } from './github.svg';
import { ReactComponent as LinkedinLogo } from './linkedin.svg';
import { ReactComponent as Download } from './download.svg';

function Menu() {
  const h = window.innerHeight;
  const myLogo = useRef();
  const menuPrincipal = useRef();
  const menuLogo = useRef();
  const socialLogo = useRef();
  const background = useRef();

  useEffect(() => {
    const app = document.querySelector('.app');
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 10) {
        myLogo.current.classList.add('toLeft');
        background.current.classList.add('scrolling');
      } else {
        myLogo.current.classList.remove('toLeft');
        background.current.classList.remove('scrolling');
      }
      if (window.pageYOffset > app.offsetHeight - h - 10) {
        socialLogo.current.style.paddingBottom = '65px';
      } else {
        socialLogo.current.style.paddingBottom = '25px';
      }
    });
    window.addEventListener('resize', () => {
      const windowHeight = window.innerHeight;
      menuPrincipal.current.style.height = `${windowHeight}px`;
    });
    if (window.pageYOffset > 10) {
      myLogo.current.classList.add('toLeft');
      background.current.classList.add('scrolling');
    } else {
      myLogo.current.classList.remove('toLeft');
      background.current.classList.remove('scrolling');
    }
    if (window.pageYOffset > app.offsetHeight - h - 10) {
      socialLogo.current.style.paddingBottom = '65px';
    } else {
      socialLogo.current.style.paddingBottom = '25px';
    }
  }, [h]);

  function showMenu() {
    socialLogo.current.classList.toggle('colored');
    menuPrincipal.current.classList.toggle('show-menu');
    menuPrincipal.current
      .querySelector('.menu-word')
      .classList.toggle('rotate-word');
    menuLogo.current.classList.contains('opened')
      ? menuLogo.current.classList.add('closing')
      : menuLogo.current.classList.add('opening');

    setTimeout(() => {
      menuLogo.current.classList.add('closed');
      if (menuLogo.current.classList.contains('opened')) {
        menuLogo.current.classList.remove('opened');
        menuLogo.current.classList.remove('closing');
      } else {
        menuLogo.current.classList.add('opened');
        menuLogo.current.classList.remove('closed');
        menuLogo.current.classList.remove('opening');
      }
    }, 600);
  }
  const toTop = () => {
    document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  return (
    <header style={{ height: h }} className="menu-principal" ref={menuPrincipal}>
      <div className="menu-links">
        <ul>
          <li>
            <a href="#home" className="home-link link-menu active" alt="Lien vers accueil" onClick={showMenu}>
              ACCUEIL
            </a>
          </li>
          <li>
            <a href="#about" className="home-link link-menu" alt="Lien vers à propos" onClick={showMenu}>
              À PROPOS
            </a>
          </li>
          <li>
            <a href="#skills" className="home-link link-menu" alt="lien vers compétences" onClick={showMenu}>
              COMPÉTENCES
            </a>
          </li>
          <li>
            <a href="#work" className="home-link link-menu" alt="Lien vers Travail" onClick={showMenu}>
              MON TRAVAIL
            </a>
          </li>
          <li>
            <a href="#contact" className="home-link link-menu" alt="Lien vers contact" onClick={showMenu}>
              CONTACT
            </a>
          </li>
        </ul>
        <a href="cv_marinehansart.pdf" className="d-flex download-cv" download><Download /><p>Mon CV</p></a>
      </div>
      <div className="menu-logo closed" ref={menuLogo} onClick={showMenu}>
        <div className="circle-logo">
          <div className="circle" />
          <div className="line first-line" />
          <div className="circle circle-decale" />
          <div className="line second-line" />
          <div className="circle" />
        </div>
        <div className="menu-word-container">
          <div className="menu-word">
            <span>M</span>
            <span>E</span>
            <span>N</span>
            <span>U</span>
          </div>
        </div>
      </div>
      <div className="background-logo" ref={background} onClick={toTop} />
      <h1 className="logo-central" ref={myLogo} onClick={toTop}>
        <MarineLogo />
      </h1>
      <div className="logo-social" ref={socialLogo}>
        <a target="_blank" rel="noreferrer" alt="Profil Github" href="https://github.com/mhansart">
          <GithubLogo />
        </a>
        <a target="_blank" rel="noreferrer" alt="Page Linkedin de Marine Hansart" href="https://www.linkedin.com/in/marine-hansart-6a860310a/">
          <LinkedinLogo />
        </a>
      </div>
    </header>
  );
}
export default Menu;
