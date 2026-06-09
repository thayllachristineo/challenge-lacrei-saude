'use client';

import dynamic from 'next/dynamic';

const BackToTop = dynamic(() => import('./BackToTop'), { ssr: false });

/** Wrapper com lazy loading do botão voltar ao topo. */
const LazyBackToTop = () => <BackToTop />;

export default LazyBackToTop;
