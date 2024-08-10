import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { navList } from "./data/nav";


export default function Home() {
  return (
    <ul className="navList">
      {navList.map((item) => {
        return (
          <li key={item}>
            <Link href={`/${item}`}>
              {item}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
