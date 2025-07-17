import React from "react";
import styles from "@/styles/Table.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function Contacts() {
  return (
    <div className={styles.tables}>
      <table className="table items-center text-center">
        <thead className="text-center bg-gray-600 text-white">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <th>1</th>
            <td>Ethane</td>
            <td>Ambohipo</td>
            <td className="text-center flex items-center justify-center gap-4">
              <FaEdit className="text-blue-700 cursor-pointer size-4" />
              <FaTrash className="text-red-500 cursor-pointer size-4" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
