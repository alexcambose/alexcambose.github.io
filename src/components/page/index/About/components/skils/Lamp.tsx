import * as React from 'react';
import styled from 'styled-components';
import throttle from 'lodash/throttle';
import HalfCircle0 from '@/images/light0.png';
import HalfCircle1 from '@/images/light1.png';
import HalfCircle2 from '@/images/light2.png';
interface ILampProps {
  color?: 0 | 1 | 2;
  onLampMove: (x: number, y: number) => void;
}

const LampContainer = styled.div`
  flex: 1;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;

import { useEffect, useRef } from 'react';
import {
  Engine,
  Render,
  Runner,
  Body,
  Composite,
  Composites,
  Events,
  Constraint,
  MouseConstraint,
  Mouse,
  Bodies,
} from 'matter-js';

const Lamp: React.FunctionComponent<ILampProps> = ({
  color = 0,
  onLampMove,
}) => {
  const scene = useRef();
  const sceneContainer = useRef();
  useEffect(() => {
    // create engine
    const engine = Engine.create(),
      world = engine.world;
    const canvasWidth = sceneContainer.current.getBoundingClientRect().width;
    const canvasHeight = sceneContainer.current.getBoundingClientRect().width;
    // create renderer
    const render = Render.create({
      element: scene.current,
      engine: engine,
      options: {
        background: 'transparent',
        wireframeBackground: 'transparent',
        wireframes: false,
        // showBounds: true,
        enableSleeping: true,
        height: 800,
        width: canvasWidth,
        // showIds: true,
      },
    });

    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);
    const context = render.canvas.getContext('2d');

    // add bodies

    const group = Body.nextGroup(true);

    const ropeC = Composites.stack(
      canvasWidth / 2,
      0,
      1,
      6,
      0,
      0,
      function (x, y) {
        return Bodies.rectangle(x, y, 10, 5, {
          collisionFilter: { group: group },
          chamfer: 0,
          density: 40,
          render: {
            strokeStyle: 'transparent',
            fillStyle: '#C0C0C0',
          },
        });
      }
    );
    Composite.add(
      ropeC,
      Bodies.rectangle(canvasWidth / 2, -10, 60, 50, {
        collisionFilter: { group: group },
        chamfer: 4,
        density: 10,
        angle: 1.5708 * 3,
        frinctionAir: 0,
        render: {
          sprite: {
            texture: [HalfCircle0, HalfCircle1, HalfCircle2][color],
            xScale: 0.6,
            yScale: 0.6,
          },
        },
      })
    );

    Composites.chain(ropeC, 0.4, 0, -0.4, 0, {
      // stiffness: 1,
      length: 0,
      // angularStiffness: 0.4,
      damping: 1.3,
      render: {
        visible: false,
      },
    });
    ropeC.bodies = ropeC.bodies.sort((a, b) => {
      const zIndexA =
        a.render && typeof a.render.zIndex !== 'undefined'
          ? a.render.zIndex
          : 0;
      const zIndexB =
        b.render && typeof b.render.zIndex !== 'undefined'
          ? b.render.zIndex
          : 0;
      return zIndexA - zIndexB;
    });
    Composite.add(
      ropeC,
      Constraint.create({
        bodyB: ropeC.bodies[0],
        pointB: { x: 0, y: 0 },
        pointA: {
          x: ropeC.bodies[0].position.x,
          y: ropeC.bodies[0].position.y,
        },
        stiffness: 1,
        render: {
          visible: false,
        },
      })
    );

    Composite.add(world, [ropeC]);

    // add mouse control
    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.05,
          render: {
            visible: false,
          },
        },
      });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;
    mouseConstraint.mouse.element.removeEventListener(
      'mousewheel',
      mouseConstraint.mouse.mousewheel
    );
    mouseConstraint.mouse.element.removeEventListener(
      'DOMMouseScroll',
      mouseConstraint.mouse.mousewheel
    );
    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: canvasWidth, y: 800 },
    });
    // const callback = throttle(() => {
    //   const allBodies = Composite.allBodies(engine.world);
    //   const lastBody = allBodies[allBodies.length - 1];
    //   const { x, y } = lastBody.position;
    //   onLampMove(Math.floor(x), Math.floor(y));
    // }, 100);
    // Events.on(engine, 'afterUpdate', callback);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      render.canvas.remove();
      render.canvas = null;
      render.context = null;
      render.textures = {};
    };
  }, []);
  return (
    <LampContainer ref={sceneContainer}>
      <div ref={scene} style={{ width: '100%' }} />
    </LampContainer>
  );
};

export default Lamp;
