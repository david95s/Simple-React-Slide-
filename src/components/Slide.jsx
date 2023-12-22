import React from "react";
import theStyles from "./Slide.module.css";
import MySGV from "./MySGV";

const Slide = ({ slides }) => {
  const [active, setActive] = React.useState(0);
  const [position, setPosition] = React.useState(0);
  const contentRef = React.useRef();

  React.useEffect(() => {
    const { width } = contentRef.current.getBoundingClientRect();
    setPosition(-(width * active));
  }, [active]);

  function slidePrev() {
    if (active > 0) {
      setActive(active - 1);
    }
  }

  function slideNext() {
    if (active < slides.length - 1) {
      setActive(active + 1);
    }
  }

  return (
    <section className={theStyles.container}>
      <div className={theStyles.wrapperSgv}>
        <MySGV color="gold" />
      </div>
      <div
        ref={contentRef}
        className={theStyles.content}
        style={{ transform: `translateX(${position}px)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className={theStyles.item}>
            <img src={slide.src} alt="" />
          </div>
        ))}
      </div>
      <nav className={theStyles.nav}>
        <button onClick={slidePrev}>Anterior</button>
        <button onClick={slideNext}>Próximo</button>
      </nav>
    </section>
  );
};

export default Slide;
