import { useEffect, useState } from "react";
import Board from "./components/Board";
import Loading from "./components/Loading";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container font bg-dark text-white min-vh-100 min-vw-100 d-flex flex-column justify-content-center align-items-center">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h1 className="my-4 text-white">Tic Tac Toe</h1>
          <Board />
        </>
      )}
    </div>
  );
}
