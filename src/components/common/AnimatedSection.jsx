import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

const AnimatedSection = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const springs = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 50,
    config: { tension: 200, friction: 20 }
  });

  return (
    <animated.div ref={ref} style={{
      opacity: springs.opacity,
      transform: springs.y.to(y => `translateY(${y}px)`)
    }}>
      {children}
    </animated.div>
  );
};