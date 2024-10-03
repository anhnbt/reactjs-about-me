import React, { useEffect, useRef } from 'react';

const InputTypeOther = () => {
    const iframeRef = useRef(null);

    useEffect(() => {
        // Chèn nội dung form vào bên trong iframe sau khi iframe đã được mount
        const iframeDocument = iframeRef.current.contentDocument;
        iframeDocument.body.innerHTML = `<form>
  <label for="favcolor">Select your favorite color:</label>
  <input type="color" id="favcolor" name="favcolor">
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday">
  <label for="birthdaytime">Birthday (date and time):</label>
  <input type="datetime-local" id="birthdaytime" name="birthdaytime">
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email">
  <label for="myfile">Select a file:</label>
  <input type="file" id="myfile" name="myfile">
  <label for="bdaymonth">Birthday (month and year):</label>
  <input type="month" id="bdaymonth" name="bdaymonth">
  <label for="quantity">Quantity (between 1 and 5):</label>
  <input type="number" id="quantity" name="quantity" min="1" max="5">
  <label for="vol">Volume (between 0 and 50):</label>
  <input type="range" id="vol" name="vol" min="0" max="50">
  <label for="gsearch">Search Google:</label>
  <input type="search" id="gsearch" name="gsearch">
  <label for="phone">Enter your phone number:</label>
  <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
  <label for="appt">Select a time:</label>
  <input type="time" id="appt" name="appt">
  <label for="homepage">Add your homepage:</label>
  <input type="url" id="homepage" name="homepage">
  <label for="week">Select a week:</label>
  <input type="week" id="week" name="week">
</form>`;
    }, []);

    return (
        <iframe
            ref={iframeRef}
            title="Basic Form Iframe"
            style={{ width: '100%', height: '500px', border: 'none' }}
        />
    );
};

export default InputTypeOther;
