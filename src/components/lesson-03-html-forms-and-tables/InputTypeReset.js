import React, { useEffect, useRef } from 'react';

const InputTypeReset = () => {
    const iframeRef = useRef(null);

    useEffect(() => {
        // Chèn nội dung form vào bên trong iframe sau khi iframe đã được mount
        const iframeDocument = iframeRef.current.contentDocument;
        iframeDocument.body.innerHTML = `<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="Anh"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Tuấn"><br><br>
  <input type="submit" value="Submit">
  <input type="reset" value="Reset">
</form>`;
    }, []);

    return (
        <iframe
            ref={iframeRef}
            title="Basic Form Iframe"
            style={{ width: '100%', height: '250px', border: 'none' }}
        />
    );
};

export default InputTypeReset;
