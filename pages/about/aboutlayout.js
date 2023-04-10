import Link from "next/link";

import MyComponent from "./fetchjson";
export default function aboutlayout() {
  return (
    <>
      <nav>
        <h1> About Nav Bar </h1>
        <Link href="./fetchjson">
          <button> fetch data{MyComponent}</button>
        </Link>
      </nav>
    </>
  );
}
