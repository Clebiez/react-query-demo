import Button from "../ui/Button";

const VoteButton = ({ vote, onClick, className, ...props }) => (
  <div className="indicator">
    <span className="indicator-item badge badge-secondary">{vote}</span>
    <Button variant="primary" onClick={onClick} {...props}>
      Voter
    </Button>
  </div>
);

export default VoteButton;
