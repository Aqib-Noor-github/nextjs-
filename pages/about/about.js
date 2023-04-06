import React from "react";
import Head from "next/head";
import aboutlayout from "./aboutlayout";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function about() {
  return (
    <>
      {aboutlayout()}
      <div className={styles.main}>
        <h1> My About </h1>
        <Link href="/">
          <h1>Back TO HOme </h1>
        </Link>
      </div>
    </>
  );
}
