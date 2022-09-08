import React from 'react';
import { LoadingState } from './interfaces';
import { Error } from './error';


class ErrorBoundary extends React.Component {
  state: LoadingState = {
    hasError: false,
  };
  constructor(props: any) {
    super(props);
  }

  static getDerivedStateFromError(error: any) {
    console.error('Error', error);
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <Error/>
      
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
