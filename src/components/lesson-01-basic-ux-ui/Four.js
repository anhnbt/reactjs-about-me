import { useEffect } from "react";
import NavButtons from "../../NavButtons";

export const Four = () => {
  useEffect(() => {
    document.title = "Căn bản về UX/UI";
  }, []);
  return (
    <div className="app light">
      <div class="greeting centered">Kiểu dáng trang trí không phải lúc nào cũng đẹp</div>
      <div class="container">
        <div class="column left">
          <h2 class="light-heading centered decorative">❌ KHÔNG NÊN</h2>
          <p class="decorative">
            ❌ Sử dụng kiểu dáng trang trí không phù hợp:
          </p>
          <p class="decorative">
            ✧✧✧ Kiểu chữ trang trí này có thể làm nội dung khó đọc. ✧✧✧
          </p>
        </div>
        <div class="column right">
          <h2 class="right-heading centered">✔️ NÊN</h2>
          <p>✔️ Sử dụng kiểu chữ đơn giản và dễ đọc cho nội dung chính.</p>
          <p class="normal-text">
            Ví dụ: Arial, Helvetica, hoặc Times New Roman.
          </p>
        </div>
      </div>

      <NavButtons
        isLight={true}
        prev={"/lesson-01-basic-ux-ui/three"}
        next={"/lesson-01-basic-ux-ui/five"}
      />
    </div>
  );
};
