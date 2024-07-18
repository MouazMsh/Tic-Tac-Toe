export default function Square({ value, onSquareClick }) {
  return (
    <button className="square btn btn-light" onClick={onSquareClick}>
      {value}
    </button>
  );
}
