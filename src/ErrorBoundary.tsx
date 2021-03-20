/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unused-state */
import React, { Component, ErrorInfo } from 'react';

interface ErrorBoundaryState {
  error: null | Error;
  errorInfo: null | ErrorInfo;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

const handleError = (ctx: any): React.ReactNode => (
  <div className="flex flex-1 justify-center items-center">
    <h2>Something went wrong.</h2>
    <details style={{ whiteSpace: 'pre-wrap' }}>
      {ctx.state.error && ctx.state.error.toString()}
      <br />
      {ctx.state.errorInfo.componentStack}
    </details>
  </div>
);

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch = (error: Error, errorInfo: ErrorInfo): void =>
    this.setState({
      error,
      errorInfo,
    });

  render(): React.ReactNode {
    const { errorInfo } = this.state;
    const { children } = this.props;
    if (errorInfo) {
      return handleError(this);
    }
    return children;
  }
}
