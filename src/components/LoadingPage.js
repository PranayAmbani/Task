import React from 'react';
import { Spinner } from 'react-bootstrap'; // Assuming you are using Bootstrap

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <Spinner animation="border" role="status" variant="primary">
        <span className="sr-only">Loading...</span>
      </Spinner>
      <h2>Loading...</h2>
    </div>
  );
};

export default LoadingPage;
