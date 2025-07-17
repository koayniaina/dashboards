import Contacts from "@/components/Contacts";
import Search from "@/components/Search";
import styles from "@/styles/Table.module.css";
import React from "react";

export default function StudentPage() {
  return (
    <div>
      <div className="relative m-3">
        <div className={styles.Herosearch}>
          <Search/>
          <Contacts />
        </div>
      </div>
    </div>
  );
}
