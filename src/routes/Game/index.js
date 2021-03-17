const GamePage = ({ onChangePage }) => {
  const handleClick = () => {
    onChangePage && onChangePage('home');
  }

  return (
    <div>
      This is Game Page;
      <button onClick={handleClick}>
        Back Home
      </button>
    </div>
  );
};

export default GamePage;