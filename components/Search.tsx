import React from "react";
import styles from "@/styles/Table.module.css";
import { FaSearch } from "react-icons/fa";
import Bottons from "./Bottons";

export default function Search() {
  return (
    <main className={styles.search}>
      <section className={styles.puts}>
        <div className="flex w-full border-gray-300 border-1 p-1.5 gap-2 px-2 rounded-sm items-center">
          <FaSearch className="cursor-pointer text-gray-600" />
          <input type="search" placeholder="Search" className="w-full outline-0 border-0" />
        </div>
        <Bottons />
      </section>
    </main>
  );
}
