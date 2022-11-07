import React from "react";

const ErrorFallback
 = ({ children }) => {
  const [error, setError] = React.useState(null);

  if (error) {
    return (
      <div>
        <h1>Something went wrong</h1>
        <pre>{error.message}</pre>
        <button onClick={() => setError(null)}>Try again</button>
      </div>
    );
  }

  return children;
};

export default ErrorFallback;

// class ErrorBoundary extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {

//     return { hasError: false};
//   }

//   componentDidCatch(error, info) {

//   }

//   render() {
//     if (this.state.hasError) {

//       return <h1>Something went wrong.</h1>;
//     }

//     return this.props.children;
//   }
// }

// export default ErrorBoundary
