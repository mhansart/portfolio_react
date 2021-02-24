import { useRef, useEffect } from 'react';

function Loader() {
  const h = window.innerHeight;
  const loader = useRef();
  useEffect(() => {
    window.addEventListener('resize', () => {
      const windowHeight = window.innerHeight;
      if (loader.current !== null) {
        loader.current.style.height = `${windowHeight}px`;
      }
    });
  }, []);
  return (
    <div className="loader-container d-flex" ref={loader} style={{ height: h }}>
      <div className="loader">
        <div className="d-flex word">
          <p>Chargement</p>
          <div className="points d-flex">
            <div className="point dot1" />
            <div className="point dot2" />
            <div className="point dot3" />
          </div>
        </div>
        <div className="loader-bar">
          <div className="progress-bar" />
        </div>
      </div>
    </div>
  );
}

export default Loader;
