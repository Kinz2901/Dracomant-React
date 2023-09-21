import { Link } from "react-router-dom";
import styles from "./index.module.css";

export default function Navbar() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="contato">Contato</Link>
        </li>
        <li>
          <Link to="curiosidades">Curiosidades</Link>
        </li>
        <li>
          <Link to="ajuda">Ajuda</Link>
        </li>
      </ul>
    </>
  );
}
