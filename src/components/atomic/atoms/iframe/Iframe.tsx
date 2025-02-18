import React, { useMemo } from 'react';
import styled from 'styled-components';

interface StyledIframeProps {
  width?: string;
  height?: string;
}

const StyledIframe = styled.iframe<StyledIframeProps>`
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100vh'};
  border: none;

  // scroll css custom
  &::-webkit-scrollbar-track {
    border: 1px solid transparent;
    padding: 2px 0;
    background-color: ${(props) => props.theme.colors.background};
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.colors.background};
    border: 1px solid ${(props) => props.theme.colors.textSoft};
  }
`;

interface IframeProps {
  src: string;
  width?: string;
  height?: string;
}

const Iframe: React.FC<IframeProps> = ({ src, width, height }) => {
  const memoizedSrc = useMemo(() => src, [src]);

  return <StyledIframe src={memoizedSrc} width={width} height={height} />;
};

export default Iframe;
