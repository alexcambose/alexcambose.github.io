import * as React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
interface IViewportEnterProps {
  el: React.FunctionComponent<any>;
  [key: string]: any;
}

const ViewportEnter: React.FunctionComponent<IViewportEnterProps> = ({
  el: El,
  ...props
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);
  return <El ref={ref} animate={controls} {...props} />;
};

export default ViewportEnter;
