import React, { useEffect, useRef } from 'react';

const Textarea = () => {
    const iframeRef = useRef(null);

    useEffect(() => {
        // Chèn nội dung form vào bên trong iframe sau khi iframe đã được mount
        const iframeDocument = iframeRef.current.contentDocument;
        iframeDocument.body.innerHTML = `<label for="review">Ghi chú:</label>

<textarea id="review" name="review" rows="4" cols="20">Nhập ghi chú.</textarea>`;
    }, []);

    return (
        <iframe
            ref={iframeRef}
            title="Basic Form Iframe"
            style={{ width: '100%', height: '250px', border: 'none' }}
        />
    );
};

export default Textarea;
