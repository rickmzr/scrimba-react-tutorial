import Image from "next/image";
import styles from "./page.module.css";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

export default function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
