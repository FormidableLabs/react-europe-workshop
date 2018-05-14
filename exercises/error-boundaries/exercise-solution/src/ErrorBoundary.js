import React, {Component} from 'react';

export default class ErrorBoundary extends Component {
  state = {error: null, info: null};

  componentDidCatch(error, info) {
    const {onError} = this.props;
    if (onError) {
      onError(error, info);
    }
    this.setState({error, info});
  }

  render() {
    const {children, Fallback} = this.props;
    const {error, info} = this.state;
    if (error !== null) {
      return (
        <Fallback
          error={error}
          componentStack={info.componentStack}
        />
      );
    }
    return children;
  }
}

export function withErrorBoundary(
  WrappedComponent,
  Fallback,
  onError,
) {
  // Didn't hoist statics...woops
  return React.forwardRef((props, ref) => (
    <ErrorBoundary Fallback={Fallback} onError={onError}>
      <WrappedComponent ref={ref} {...props} />
    </ErrorBoundary>
  ));
}
