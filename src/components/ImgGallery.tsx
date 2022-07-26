import React from "react";
import ReactDOM from "react-dom";
import { Controller, Scene } from "react-scrollmagic";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useWindowSize } from "react-use";
import { useTrail, animated } from "react-spring";
import Sequence from './Sequence'

import "./gallery.scss";

const items = ["Will Adobe XD", "kill Sketch", "and InVision"];
const config = { mass: 2, tension: 2000, friction: 200 };

const ImgGallery = () => {
  const size = useWindowSize();
  const sideRef = React.useRef(null);
  const controllerRef = React.useRef(null);

  const [scrollWidth, setScrollWidth] = React.useState(0);
  const [toggle, set] = React.useState(true);
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 40 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });

  React.useLayoutEffect(() => {
    if (sideRef.current) {
      let boxWidth = 0;

      [...sideRef.current.children].forEach(c => {
        const childBox = c.getBoundingClientRect();
        boxWidth = boxWidth + childBox.width;
      });

      const w =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

      const totalScrollWidth = boxWidth > w ? boxWidth - w : 0;

      setScrollWidth(totalScrollWidth);
    }
  }, [size.height, size.width]);

  return (
    <ParallaxProvider>
      <div className="App">
        <div className="content-block">
          <Parallax tagOuter="div" y={[0, 70]} className="intro-text">
            <h1 style={{ minHeight: items.length * 40 }}>
              {trail.map(({ x, height, ...rest }, index) => (
                <animated.span
                  key={items[index]}
                  className="trails-text"
                  style={{
                    ...rest,
                    transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
                  }}
                >
                  <animated.span style={{ height }}>
                    {items[index]}
                  </animated.span>
                </animated.span>
              ))}
            </h1>
            <p>
              There are many other UX/UI design tools outside of Sketch and
              InVision. Figma, Framer and Protopie to name a few, but Sketch and
              InVision seem to be dominating the field. The question we need to
              ask is, is their reign about to come to an end?
            </p>
          </Parallax>
          <Parallax y={[0, 100]} tagInner="figure" className="intro-image">
            <img
              alt="toet"
              src="https://images.unsplash.com/photo-1568093858174-0f391ea21c45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            />
          </Parallax>
        </div>

        <Controller ref={controllerRef}>
          <Scene
            duration={scrollWidth}
            pin
            triggerHook={0.25}
            enabled={size.width > 768}
          >
            {progress => {
              return (
                <div>
                  <div
                    className="cnt"
                    style={{
                      transform: `translate3d(-${scrollWidth *
                        progress}px, 0, 0)`
                    }}
                  >
                    <div
                      className="content"
                      ref={sideRef}
                      style={{ width: scrollWidth }}
                    >
                      <div style={{ height: "100%", width: "560vh" }}>
                        <Sequence />
                        {/* <img src="/assets/back.png" alt="t" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }}
          </Scene>
        </Controller>
      </div>
    </ParallaxProvider>
  );
}

export default ImgGallery
