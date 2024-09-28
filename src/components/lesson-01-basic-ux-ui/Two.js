import { useEffect } from "react";
import NavButtons from "../../NavButtons";

export const Two = () => {
  useEffect(() => {
    document.title = "Căn bản về UX/UI";
  }, []);
  return (
    <div className="app light">
      <div class="greeting centered">Không nên để các chữ quá sát nhau hoặc quá thưa</div>
      <div class="container">
        <div class="column left">
          <h2 class="light-heading centered">❌ KHÔNG NÊN</h2>
          <p class="tight">❌ Sử dụng khoảng cách chữ quá sát nhau.</p>
          <p class="wide">❌ Sử dụng khoảng cách chữ quá thưa.</p>
        </div>
        <div class="column right">
          <h2 class="right-heading centered">✔️ NÊN</h2>
          <p>✔️ Sử dụng khoảng cách chữ hợp lý.</p>
        </div>
      </div>

      <NavButtons
        isLight={true}
        prev={"/lesson-01-basic-ux-ui/one"}
        next={"/lesson-01-basic-ux-ui/three"}
      />
    </div>
  );
};
