import React, { useEffect, useState } from "react";
import { SortButton } from "../library/SortButton";

const propComparator = (propName, bool) => {
  // asc
  if (bool)
    return (a, b) => {
      if (
        !a[propName] ||
        !b[propName] ||
        a[propName] === "" ||
        b[propName] === ""
      )
        return -1;
      if (a[propName].toUpperCase() < b[propName].toUpperCase()) return 1;
      if (a[propName].toUpperCase() > b[propName].toUpperCase()) return 0;
    };

  // desc
  return (a, b) => {
    if (
      !a[propName] ||
      !b[propName] ||
      a[propName] === "" ||
      b[propName] === ""
    )
      return 1;
    if (a[propName].toUpperCase() < b[propName].toUpperCase()) return -1;
    if (a[propName].toUpperCase() > b[propName].toUpperCase()) return 0;
  };
};

export default function Users() {
  const list = [
    { name: "Luna", fat: true },
    { name: "", fat: true },
    { name: "", fat: true },
    { name: null, fat: true },
    { name: null, fat: false },
    { name: null, fat: false },
    { name: "Test", fat: true },
    { name: "Miou", fat: true },
    { name: "Mimosa", fat: false },
    { name: "Elsa", fat: true },
  ];

  const [sortList, setSortList] = useState(list);
  const [sortName, setSortName] = useState(false);

  useEffect(() => {
    const newList = [].concat(sortList);
    const list = newList.sort(propComparator("name", sortName));
    setSortList(list);
  }, [sortName]);

  return (
    <table>
      <thead>
        <tr>
          <th>
            name{" "}
            <button onClick={() => setSortName((prevState) => !prevState)}>
              sort!
            </button>
            <SortButton />
          </th>
          <th>fat</th>
        </tr>
      </thead>
      <tbody>
        {sortList.map((item, index) => {
          const { name, fat } = item;
          return (
            <tr key={index}>
              <td>{name}</td>
              <td>{fat ? "true" : "false"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
