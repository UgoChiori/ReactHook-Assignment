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

export default ErrorFallback