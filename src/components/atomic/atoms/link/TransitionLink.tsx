'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import Anchor from './Anchor';

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
}

const TransitionLink: React.FC<TransitionLinkProps> = ({ href, children }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        router.push(href);
      });
    } else {
      router.push(href);
    }
  };

  return (
    <Anchor href={href} onClick={handleClick}>
      {children}
    </Anchor>
  );
};

export default TransitionLink;

