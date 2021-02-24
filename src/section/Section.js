import { useRef, useState } from 'react';

function Section({
  section, children, extremite, first,
}) {
  const sectionContainer = useRef();
  const [size, setSize] = useState(window.innerHeight);
  let h;
  if (window.innerWidth < 576 && !first) {
    h = '';
  } else if (window.innerWidth > 576 && extremite) {
    h = size;
  } else if (first) {
    h = size;
  }
  window.addEventListener('resize', () => {
    const windowHeight = window.innerHeight;
    setSize(windowHeight);
  });

  return (
    <section id={section} ref={sectionContainer} className={`${section} one-section`} style={{ height: h }}>
      <div className="section-container">
        <div className={`d-flex section-${section}`}>{children}</div>
      </div>
    </section>
  );
}

export default Section;
