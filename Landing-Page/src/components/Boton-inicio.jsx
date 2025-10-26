import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { ArrowUp } from 'react-bootstrap-icons';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible && (
    <Button
      variant="primary"
      onClick={scrollToTop}
      className="scroll-to-top-btn"
    >
      <ArrowUp />
    </Button>
  );
};

export default ScrollToTopButton;
