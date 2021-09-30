import { config, useSpring, animated } from 'react-spring'
import './App.css';
import { useState } from 'react';

function App() {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  })
  return (
    <div className="animation">
      <animated.h1 style={props}>hello</animated.h1>
    </div>)
}

export default App;
