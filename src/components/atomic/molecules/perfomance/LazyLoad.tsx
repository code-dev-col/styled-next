import React, { ReactNode, Suspense } from 'react';
import styled from 'styled-components';
import Spinner from '../../atoms/animated/Spinner';
import Text from '../../atoms/text/Text';

const SuspenseWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* Asegúrate de que ocupe el 100% del contenedor padre */
  width: 100%;
  height: 100%;
`;

interface LazyLoadProps {
  children: ReactNode;
  fallback?: ReactNode;
  useSpinnerFallback?: boolean;
}

/**
 * LazyLoad component is a wrapper that uses React Suspense to lazy load components.
 *
 * Si se establece `useSpinnerFallback` en true, se usará el componente Spinner como fallback.
 * En otro caso, se usará el fallback pasado en la prop o uno por defecto.
 *
 * Ejemplo de uso:
 *
 * import { lazy } from 'react';
 * const HeavyComponent = lazy(() => import('./HeavyComponent'));
 *
 * <LazyLoad useSpinnerFallback>
 *   <HeavyComponent />
 * </LazyLoad>
 */
const LazyLoad: React.FC<LazyLoadProps> = ({
  children,
  fallback,
  useSpinnerFallback = true,
}) => {
  const defaultFallback = useSpinnerFallback ? (
    <Spinner />
  ) : (
    <Text>Cargando Elementos...</Text>
  );
  return (
    <Suspense
      fallback={
        <SuspenseWrapper>{fallback || defaultFallback}</SuspenseWrapper>
      }>
      {children}
    </Suspense>
  );
};

export default LazyLoad;

