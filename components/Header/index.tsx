import Link from "next/link";
import style from "./style.module.scss";
import Image from "next/image";

export default function Header() {
  return (
    <div className="container">
      <header className={style.header}>
        <nav className={style.headerNav}>
          <Link href="/">Home</Link>
          <Link href="/">Teachers</Link>
          <Link href="/">Students</Link>
        </nav>
        <Image src="/logo.png" alt="Logo" width={32} height={40} />
        <button className={style.headerButton}>Contact Us</button>
      </header>
    </div>
  );
}
