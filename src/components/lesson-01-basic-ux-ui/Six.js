import { useEffect } from "react";
import NavButtons from "../NavButtons";

export const Six = () => {
  useEffect(() => {
    document.title = "Căn bản về UX/UI";
  }, []);
  return (
    <div className="app light">
      <div class="greeting centered">Khả năng đọc</div>
      <div class="container">
        <div class="column left six">
          <h2 class="light-heading centered">❌ KHÔNG NÊN</h2>
          <p class="difficult-text">
            ❌ Nền hình ảnh có thể làm cho văn bản khó đọc, đặc biệt là khi màu
            chữ không tương phản đủ.
          </p>
          <p class="difficult-text">
            Ví dụ: <span class="highlight">Chữ màu sáng trên nền sáng.</span>
          </p>
        </div>
        <div class="column right six">
          <h2 class="right-heading centered">✔️ NÊN</h2>
          <p>
            ✔️ Sử dụng nền đồng nhất và màu chữ tương phản cao để dễ đọc hơn.
          </p>
          <p class="normal-text">Ví dụ: Chữ màu đen trên nền trắng.</p>
        </div>
      </div>

      <NavButtons
        isLight={true}
        prev={"/lesson-01-basic-ux-ui/five"}
        next={"/lesson-01-basic-ux-ui/seven"}
      />
    </div>
  );
};
