import { useEffect } from "react";
import NavButtons from "../NavButtons";

export const Ten = () => {
  useEffect(() => {
    document.title = "Căn bản về UX/UI";
  }, []);
  return (
    <div className="app light">
      <div class="greeting centered">Khoảng cách chữ (Kerning)</div>
      <div class="container">
        <div class="column left">
          <h2 class="light-heading centered">❌ KHÔNG NÊN</h2>
          <p class="too-tight">KHOẢNG CÁCH CHỮ QUÁ GẦN!</p>
        </div>
        <div class="column right">
          <h2 class="right-heading centered">✔️ NÊN</h2>
          <p class="just-right">
            Khoảng cách chữ hợp lý giúp văn bản trở nên dễ đọc hơn.
          </p>
        </div>
      </div>

      <NavButtons
        isLight={true}
        prev={"/lesson-01-basic-ux-ui/eight"}
        next={"/lesson-01-basic-ux-ui/ten"}
      />
    </div>
  );
};
