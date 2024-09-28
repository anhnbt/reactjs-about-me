import { useEffect } from "react";
import NavButtons from "../../NavButtons";

export const Nine = () => {
  useEffect(() => {
    document.title = "Căn bản về UX/UI";
  }, []);
  return (
    <div className="app light">
      <div class="greeting centered">Khoảng cách dòng(Leading)</div>
      <div class="container">
        <div class="column left">
          <h2 class="light-heading centered">❌ KHÔNG NÊN</h2>
          <p class="too-spaced">
            Khoảng cách dòng quá lớn sẽ làm cho văn bản trở nên khó theo dõi.
            <br />
            Người đọc phải di chuyển mắt rất nhiều để đọc.
            <br />
            Điều này có thể làm giảm khả năng tiếp nhận thông tin.
          </p>
        </div>
        <div class="column right">
          <h2 class="right-heading centered">✔️ NÊN</h2>
          <p class="just-right">
            Khoảng cách dòng hợp lý giúp văn bản trở nên dễ đọc hơn.
            <br />
            Người đọc có thể theo dõi nội dung một cách tự nhiên và thoải mái.
            <br />
            Tăng cường khả năng tiếp nhận thông tin một cách hiệu quả.
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
