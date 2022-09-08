import React from "react";
import ErrorBoundary from "../../components/ErrorBoundary";



const LazyComponent: React.FC = 
  ({ children }) => {

  return (
    <ErrorBoundary>
      <React.Suspense fallback="Loading Button">
      { children }
      </React.Suspense>
    </ErrorBoundary>
  );
}

export default LazyComponent;