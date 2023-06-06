import Image from "next/image";
import reactLogo from "../img/react-logo.png";

export default function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <Image src={reactLogo} alt="React Logo" width={60} height={60} />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
