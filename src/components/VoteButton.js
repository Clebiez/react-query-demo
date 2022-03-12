const VoteButton = ({ vote, onClick, className, ...props }) => (
  <div className="indicator">
    <span className="indicator-item badge badge-secondary">{vote}</span>
    <button
      className={`btn btn-primary ${className}`}
      onClick={onClick}
      {...props}
    >
      Voter
    </button>
  </div>
);

export default VoteButton;
