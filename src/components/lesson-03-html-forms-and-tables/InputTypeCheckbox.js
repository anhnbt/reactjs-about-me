import React, { useEffect, useRef } from 'react';

const InputTypeCheckbox = () => {
    const iframeRef = useRef(null);

    useEffect(() => {
        // Chèn nội dung form vào bên trong iframe sau khi iframe đã được mount
        const iframeDocument = iframeRef.current.contentDocument;
        iframeDocument.body.innerHTML = `<form>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label><br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
  <label for="vehicle2"> I have a car</label><br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> I have a boat</label>
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

export default InputTypeCheckbox;
