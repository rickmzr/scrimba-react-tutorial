import Image from "next/image";
import reactIcon from "../../img/react-logo.png";

export default function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <Image
          src={reactIcon}
          alt="React Icon"
          className="logo"
          height={30}
          width={30}
        />
        <h3>ReactFacts</h3>
        <h4>React Course - Project 1</h4>
      </nav>
    </header>
  );
}
