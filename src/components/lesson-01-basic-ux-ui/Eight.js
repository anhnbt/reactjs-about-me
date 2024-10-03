import { useEffect } from "react";
import NavButtons from "../NavButtons";

export const Eight = () => {
  useEffect(() => {
    document.title = "Căn bản về UX/UI";
  }, []);
  return (
    <div className="app light">
      <div class="greeting centered">Nhóm thông tin</div>
      <div class="container">
        <div class="column left">
          <h2 class="light-heading centered">❌ KHÔNG NÊN</h2>
          <p class="no-grouping">
            Tên: Nguyễn Văn A<br />
            Tuổi: 25
            <br />
            Địa chỉ: 123 Đường ABC, Quận 1, TP. HCM
            <br />
            Điện thoại: 0123456789
            <br />
            Email: example@gmail.com
          </p>
        </div>
        <div class="column right">
          <h2 class="right-heading centered">✔️ NÊN</h2>
          <div class="grouped-info">
            <p>
              <strong>Tên:</strong> Nguyễn Văn A
            </p>
            <p>
              <strong>Tuổi:</strong> 25
            </p>
            <p>
              <strong>Liên hệ:</strong>
            </p>
            <ul>
              <li>Địa chỉ: 123 Đường ABC, Quận 1, TP. HCM</li>
              <li>Điện thoại: 0123456789</li>
              <li>Email: example@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>

      <NavButtons
        isLight={true}
        prev={"/lesson-01-basic-ux-ui/seven"}
        next={"/lesson-01-basic-ux-ui/nine"}
      />
    </div>
  );
};
