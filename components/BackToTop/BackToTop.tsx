'use client';

import { useEffect, useState } from 'react';
import { Floating } from './BackToTop.styled';

/** Botão flutuante que rola a página suavemente até o topo. */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Floating
      type="button"
      $visible={visible}
      onClick={scrollToTop}
      aria-label="Voltar ao topo da página"
      tabIndex={visible ? 0 : -1}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M12 19V5m0 0l-6 6m6-6l6 6"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Floating>
  );
};

export default BackToTop;
