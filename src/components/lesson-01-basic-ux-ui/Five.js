import { useEffect } from "react";
import NavButtons from "../../NavButtons";

export const Five = () => {
  useEffect(() => {
    document.title = "Căn bản về UX/UI";
  }, []);
  return (
    <div className="app light">
      <div class="greeting centered">
        Không nên để cỡ chữ quá lớn hoặc quá nhỏ
      </div>
      <div class="container">
        <div class="column left">
          <h2 class="light-heading centered">❌ KHÔNG NÊN</h2>
          <p class="large-text">
            ❌ Cỡ chữ quá lớn có thể làm cho nội dung khó tiếp nhận.
          </p>
          <p class="small-text">
            ❌ Cỡ chữ quá nhỏ có thể khiến người đọc gặp khó khăn khi nhìn.
          </p>
        </div>
        <div class="column right">
          <h2 class="right-heading centered">✔️ NÊN</h2>
          <p>
            ✔️ Sử dụng cỡ chữ vừa phải để dễ đọc và thân thiện với người dùng.
          </p>
          <p class="normal-text">Ví dụ: 16px cho văn bản chính.</p>
        </div>
      </div>

      <NavButtons
        isLight={true}
        prev={"/lesson-01-basic-ux-ui/four"}
        next={"/lesson-01-basic-ux-ui/six"}
      />
    </div>
  );
};
