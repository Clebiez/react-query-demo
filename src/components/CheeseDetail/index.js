import VoteButton from "../VoteButton";

const CheeseDetail = ({
  cheese,
  onClickDeleteCheese,
  milkType,
  onClickOnVoteCheese,
  isVoted,
}) => {
  return (
    <div className="max-w-lg m-auto">
      <h1 className="text-3xl text-center font-bold">{cheese.name}</h1>
      <img
        className="w-80 mt-4 mx-auto rounded shadow-xl"
        src={cheese.picture}
        alt={`${cheese.name}`}
      />
      <div className="mt-8">
        <p className="text-lg">
          Région: <strong>{cheese.area}</strong>
        </p>
        <p className="text-lg">
          Lait de <strong>{milkType?.name}</strong>
        </p>
        <p className="mt-4">{cheese.description}</p>
        <div className="flex justify-center gap-4 mt-4">
          <button onClick={onClickDeleteCheese} className="btn btn-error">
            Supprimer
          </button>
          <VoteButton
            vote={cheese.vote}
            onClick={onClickOnVoteCheese}
            disabled={isVoted}
          />
        </div>
      </div>
    </div>
  );
};

export default CheeseDetail;
