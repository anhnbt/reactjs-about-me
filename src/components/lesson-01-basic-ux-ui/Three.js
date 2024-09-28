import { useEffect } from "react";
import NavButtons from "../../NavButtons";

export const Three = () => {
  useEffect(() => {
    document.title = "Căn bản về UX/UI";
  }, []);
  return (
    <div className="app light">
      <div class="greeting centered">Không nên căn giữa mọi thứ</div>
      <div class="container">
        <div class="column left">
          <h2 class="light-heading centered">❌ KHÔNG NÊN</h2>
          <p class="centered">❌ Căn giữa mọi thứ, từ tiêu đề đến nội dung.</p>
          <p class="centered">
            Ví dụ:{" "}
            <span class="text-centered">
              Tất cả các dòng đều được căn giữa.
            </span>
          </p>
        </div>
        <div class="column right">
          <h2 class="right-heading centered">✔️ NÊN</h2>
          <p>✔️ Sử dụng căn trái cho văn bản và căn giữa cho tiêu đề.</p>
        </div>
      </div>

      <NavButtons
        isLight={true}
        prev={"/lesson-01-basic-ux-ui/two"}
        next={"/lesson-01-basic-ux-ui/four"}
      />
    </div>
  );
};
