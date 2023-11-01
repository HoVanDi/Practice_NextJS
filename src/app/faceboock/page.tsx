"use client";

import { useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

const faceboock = () => {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/");
  };
  return (
    <div>
      <p>Facebock</p>
      <div>
        <Button variant="primary">Hỏi Hồ Văn Đi</Button>
        <button onClick={() => handleBtn()}> back home</button>
      </div>
    </div>
  );
};

export default faceboock;
