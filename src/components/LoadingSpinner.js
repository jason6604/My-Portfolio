import '../styles/LoadingSpinner.css';

const LoadingSpinner = () => (
  <div className="spinner-container">
    <div className="spinner" />
    <div className="loading-text">Loading...</div>
  </div>
);

export default LoadingSpinner;