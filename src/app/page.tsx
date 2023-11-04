"use client";

import x from "./style/fb.module.css";
import y from "./style/style.module.css";

import Link from "next/link";
export default function Home() {

  return (
    <div>
      <ul>
        <li className={x["red"]}>
          <Link href={"/facebook"}>
            <span className={y["red"]}>facebook</span>
          </Link>{" "}
        </li>
        <li>
          <Link href={"/youtube"}>
            <span>youtube</span>
          </Link>{" "}
        </li>

        <li>
          <Link href={"/tiktok"}>
            <span>Tiktok</span>
          </Link>{" "}
        </li>
      </ul>
    </div>
  );
}
