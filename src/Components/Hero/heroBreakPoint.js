import { useState, useEffect } from 'react';

 const  UseheroBreakPoint = () => {

  const [breakpoint, setBreakpoint] = useState(window.innerWidth);

  useEffect(() => {
    
    const handleResize = () => setBreakpoint(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return breakpoint;
};

export default UseheroBreakPoint;