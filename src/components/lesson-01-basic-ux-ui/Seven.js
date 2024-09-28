import { useEffect } from "react";
import NavButtons from "../../NavButtons";

export const Seven = () => {
  useEffect(() => {
    document.title = "Căn bản về UX/UI";
  }, []);
  return (
    <div className="app light">
      <div class="greeting centered">Màu sắc</div>
      <div class="container">
        <div class="column left seven">
          <h2 class="light-heading centered">❌ KHÔNG NÊN</h2>
          <p class="bad-color">
            ❌ Sử dụng màu chữ đỏ trên nền xanh lá cây có thể làm cho văn bản
            khó đọc.
          </p>
          <p class="bad-color">
            Nó có thể gây khó chịu cho người đọc và làm giảm khả năng tiếp nhận
            thông tin.
          </p>
        </div>
        <div class="column right seven">
          <h2 class="right-heading centered">✔️ NÊN</h2>
          <p>✔️ Sử dụng màu chữ đen trên nền trắng để dễ đọc hơn.</p>
          <p class="normal-text">
            Màu sắc tương phản giúp cải thiện khả năng tiếp nhận thông tin.
          </p>
        </div>
      </div>

      <NavButtons
        isLight={true}
        prev={"/lesson-01-basic-ux-ui/six"}
        next={"/lesson-01-basic-ux-ui/eight"}
      />
    </div>
  );
};
