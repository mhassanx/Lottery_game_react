import { useState } from "react";
import { genTicket, sum } from "./helper";

export default function Lottery() {
  let [ticket, setTicket] = useState(genTicket(3));
  let isWinning = sum(ticket) === 15;

  let butTicket = () => {
    setTicket(genTicket(3));
  };
  return (
    <>
      <h2>Lottery Game</h2>

      <div>
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>

      <button onClick={butTicket}>Generate Ticket</button>
      <h3>{isWinning && "Congratulations! You won!"}</h3>
    </>
  );
}
