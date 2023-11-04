"use client";

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const facebook = () => {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/");
  };
  return (
    <div>
      <p>Facebook</p>
      <div>
        <Button variant="primary">Hỏi Hồ Văn Đi</Button>
        <button onClick={() => handleBtn()}> back home</button>
      </div>
    </div>
  );
};

export default facebook;
