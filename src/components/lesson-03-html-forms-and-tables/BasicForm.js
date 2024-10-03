import React, { useEffect, useRef } from 'react';

const BasicForm = () => {
    const iframeRef = useRef(null);

    useEffect(() => {
        // Chèn nội dung form vào bên trong iframe sau khi iframe đã được mount
        const iframeDocument = iframeRef.current.contentDocument;
        iframeDocument.body.innerHTML = `
      <form action="" method="post" name="basicForm">
        <fieldset>
          <legend>Thông tin cá nhân</legend>
  
          <label for="name">Họ và tên:</label>
          <input type="text" id="name" name="name" />
          <br />

          <label for="email">Email:</label>
          <input type="email" id="email" name="email" />
          <br />

          <label for="phone">Số điện thoại:</label>
          <input type="tel" id="phone" name="phone" />
          <br />
        </fieldset>

        <fieldset>
          <legend>Địa chỉ giao hàng</legend>

          <label for="address">Địa chỉ:</label>
          <input type="text" id="address" name="address" />
          <br />

          <label for="city">Thành phố:</label>
          <input type="text" id="city" name="city" />
          <br />

          <label for="province">Tỉnh:</label>
          <input type="text" id="province" name="province" />
          <br />
        </fieldset>

        <button type="button">Gửi thông tin</button>
      </form>
    `;
    }, []);

    return (
        <iframe
            ref={iframeRef}
            title="Basic Form Iframe"
            style={{ width: '100%', height: '300px', border: 'none' }}
        />
    );
};

export default BasicForm;
