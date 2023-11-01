import x from "./style/fb.module.css";
import y from "./style/style.module.css";
import Table from "../component/app.table"

import Link from "next/link";
export default function Home() {
  return (
    <div>
      <ul>
        <li className={x["red"]}>
          <Link href={"/faceboock"}>
            <span className={y["red"]}>faceboock</span>
          </Link>{" "}
          {/*  giống như cảm giác nó không load lại trang */}
        </li>
        <li>
          <a href="/youtube">youtube</a>
        </li>
        <li>
          <a href="/tiktok">Tiktok</a>
        </li>
      </ul>
    <Table />
    </div>
  );
}
