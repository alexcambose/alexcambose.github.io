import * as React from 'react';
import { useTransform, useViewportScroll, motion } from 'framer-motion';
import { useState, useLayoutEffect, useRef } from 'react';
import { isBrowser } from './misc';

interface IParallaxProps {
  children: React.ReactNode;
  amount: number;
}

const Parallax: React.FunctionComponent<IParallaxProps> = ({
  children,
  amount,
}) => {
  const [elementTop, setElementTop] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();
  let y;
  if (isBrowser()) {
    y = useTransform(
      scrollY,
      [elementTop - window.innerHeight, elementTop + amount + elementHeight],
      [0, amount]
    );
  }
  useLayoutEffect(() => {
    const element = ref.current;
    setElementTop(
      element.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top
    );
    setElementHeight(
      element.firstElementChild.firstElementChild.getBoundingClientRect().height
    );
    console.log(
      element.firstElementChild.firstElementChild.getBoundingClientRect().height
    );
  }, [ref]);
  return (
    <div ref={ref}>
      <motion.div style={{ translateY: y }}>{children}</motion.div>
    </div>
  );
};

export default Parallax;
