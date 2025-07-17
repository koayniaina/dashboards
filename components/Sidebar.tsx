"use client";
import Link from "next/link";
import styles from "@/styles/Dashboard.module.css";
export default function Sidebar() {
  return (
    <div>
      <div className={styles.navLink}>
        <div className={styles.logo}>
          <span className="material-symbols-outlined">package_2</span>
        </div>
        <ul>
          <li>
            <Link
              href="/"
              className="tooltip tooltip-right"
              data-tip="Dashboard"
            >
              <span className="material-symbols-outlined">dashboard</span>
            </Link>
          </li>

          <li>
            <Link
              href="/post"
              className="tooltip tooltip-right"
              data-tip="Post"
            >
              <span className="material-symbols-outlined">local_mall</span>
            </Link>
          </li>
          <li>
            <Link
              href="/student"
              className="tooltip tooltip-right"
              data-tip="Student"
            >
              <span className="material-symbols-outlined">school</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
