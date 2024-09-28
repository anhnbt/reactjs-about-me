import { useEffect } from "react";
import NavButtons from "../../NavButtons";

export const One = () => {
  useEffect(() => {
    document.title = "Căn bản về UX/UI";
  }, []);
  return (
    <div className="app light">
      <div class="greeting centered">Không nên sử dụng nhiều kiểu dáng chữ</div>
      <div class="container">
        <div class="column left">
          <h2 class="light-heading centered">❌ KHÔNG NÊN</h2>
          <p class="multiple-fonts">
            ❌ Sử dụng nhiều kiểu chữ khác nhau như:{" "}
            <span class="font1">Arial</span>,{" "}
            <span class="font2">Times New Roman</span>,{" "}
            <span class="font3">Courier New</span>,{" "}
            <span class="font4">Georgia</span>.
          </p>
        </div>
        <div class="column right">
          <h2 class="right-heading centered">✔️ NÊN</h2>
          <p>✔️ Sử dụng từ 2-3 kiểu chữ để giữ sự nhất quán.</p>
        </div>
      </div>
      
      <NavButtons isLight={true} prev={'/'} next={"/lesson-01-basic-ux-ui/two"} />
    </div>
  );
};
