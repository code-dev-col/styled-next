import React, { memo } from 'react';

interface MemoWrapperProps {
  children: React.ReactNode;
}

const MemoWrapper: React.FC<MemoWrapperProps> = memo(({ children }) => {
  return <>{children}</>;
});

export default MemoWrapper;