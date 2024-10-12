import React, {useEffect, useState} from 'react';
import {Card, Modal, Table, Typography} from 'antd';
import AOS from 'aos';
import searchBar from './search-bar.gif'
import inputTypeText from './inputTypeText.png'
import inputTypePassword from './inputTypePassword.png'
import inputTypeSubmit from './inputTypeSubmit.png'
import LoginForm from "./LoginForm";
import CheckoutForm from "./CheckoutForm";
import BasicForm from "./BasicForm";
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Pagination} from 'swiper/modules';
import InputTypeReset from "./InputTypeReset";
import InputTypePassword from "./InputTypePassword";
import InputTypeText from "./InputTypeText";
import InputTypeSubmit from "./InputTypeSubmit";
import InputTypeRadio from "./InputTypeRadio";
import InputTypeCheckbox from "./InputTypeCheckbox";
import InputTypeButton from "./InputTypeButton";
import InputTypeOther from "./InputTypeOther";
import SelectOption from "./SelectOption";
import Textarea from "./Textarea";
import HtmlTable from "./HtmlTable";

const {Title, Paragraph} = Typography;

const HTMLForms = () => {
    const [isModalOpenLoginForm, setIsModalOpenLoginForm] = useState(false);
    const [isModalOpenOrderForm, setIsModalOpenOrderForm] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        document.title = 'HTML Form & Table';
    }, []);

    const showModal = () => {
        setIsModalOpenLoginForm(true);
    };

    const handleOk = () => {
        setIsModalOpenLoginForm(false);
    };

    const handleCancel = () => {
        setIsModalOpenLoginForm(false);
    };

    return (
        <div className="bg-gray-100 py-10">
            <header className="text-center mb-8">
                <h1 className="text-4xl font-bold">Bài học: HTML Form & Table</h1>
                <p className="text-lg text-gray-700">[Web Frontend] Building Website with HTML and CSS</p>
            </header>
            <section className="mb-12">
                <div className="bg-white py-10 px-4">
                    <div className="max-w-4xl mx-auto" data-aos="fade-up">
                        <Card hoverable className="shadow-lg">
                            <div>
                                <Title level={2} className="text-left">
                                    Mục tiêu
                                </Title>
                                <ul className="list-inside list-disc text-lg">
                                    <li>Trình bày được được ý nghĩa và tác dụng của biểu mẫu (form)</li>
                                    <li>Trình bày được các thuộc tính cơ bản của form</li>
                                    <li>Sử dụng được phương thức POST và GET</li>
                                    <li>Sử dụng được các thành phần input</li>
                                    <li>Sử dụng được thành phần</li>
                                    <li>Sử dụng được thành phần button</li>
                                    <li>Sử dụng được thành phần textarea</li>
                                    <li>Sử dung được thành phầ select và option</li>
                                    <li>Tạo được bảng sử dụng các thẻ và thuộc
                                        tính: <code>{`<table>`}</code>, <code>{`<tr>`}</code>, <code>{`<td>`}</code>,
                                        <code>{`<th>`}</code>, colspan, rowspan, border
                                    </li>
                                </ul>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="mb-12">
                <div className="py-10 px-4">
                    <div className="container mx-auto" data-aos="fade-up">
                        <Card hoverable className="shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
                                <div className="flex flex-col justify-center items-center">
                                    <Title level={2} className="text-left">
                                        Biểu mẫu (Form)
                                    </Title>
                                    <ul className="list-inside list-disc text-lg">
                                        <li>Biểu mẫu (form) là cơ chế cho
                                            phép người dùng nhập dữ liệu và
                                            gửi về server
                                        </li>
                                        <li>Chẳng hạn, chúng ta có <span onClick={() => setIsModalOpenLoginForm(true)}
                                                                         className="text-sky-500 underline">form đăng
                                            nhập</span>, <span onClick={() => setIsModalOpenOrderForm(true)}
                                                               className="text-sky-500 underline">form checkout</span>,
                                            form tìm
                                            kiếm…
                                        </li>
                                        <li>Một form có thể bao gồm nhiều
                                            trường nhập dữ liệu khác nhau
                                        </li>
                                    </ul>
                                </div>

                                <div className="flex justify-center items-center">
                                    <img
                                        src={searchBar}
                                        alt="Search bar"
                                        className="w-full h-auto rounded-lg"
                                        data-aos="zoom-in"
                                    />
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="mb-12">
                <div className="bg-white py-10 px-4">
                    <div className="container mx-auto" data-aos="fade-up">
                        <Card hoverable className="shadow-lg">
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">

                                <div className="flex justify-center items-center">
                                    <BasicForm/>
                                </div>
                                <div className="">
                                    <Title level={2} className="text-left">
                                        Thẻ <code>{`<form>`}</code>
                                    </Title>
                                    <ul className="list-inside list-disc text-lg">
                                        <li>Thẻ <code>{`<form>`}</code> được sử dụng để tạo một form</li>
                                        <li>Thuộc tính action có giá trị là một URL, quy định nơi dữ liệu được
                                            gửi đến
                                        </li>
                                        <li>Thuộc tính name quy định tên của form, sau đó có thể được dung để
                                            truy xuất đến các giá trị trong form
                                        </li>
                                        <li>Thẻ <code>{`<fieldset>`}</code> và <code>{`
                                                <legend>`}</code> được sử dụng để nhóm các
                                            trường dữ liệu trong form
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="mb-12">
                <div className="py-10 px-4">
                    <div className="max-w-4xl mx-auto" data-aos="fade-up">
                        <Card hoverable className="shadow-lg">
                            <Title level={2} className="text-left">
                                Phương thức POST và GET
                            </Title>
                            <ul className="list-inside list-disc text-lg">
                                <li>Thuộc tính method được sử dụng để quy định cách thức dữ liệu được
                                    gửi lên server
                                </li>
                                <li>Khi nào thì sử dụng GET hoặc POST?</li>
                            </ul>
                            <table className="border-collapse border border-slate-400">
                                <thead>
                                <tr>
                                    <th className="border border-slate-300 p-2">GET</th>
                                    <th className="border border-slate-300 p-2">POST</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="border border-slate-300 p-2">Dữ liệu được gửi đi sẽ hiển thị trên
                                        thanh địa chỉ
                                        của trình duyệt
                                    </td>
                                    <td className="border border-slate-300 p-2">Dữ liệu được gửi đi KHÔNG hiển thị trên
                                        thanh địa
                                        chỉ của trình duyệt
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-2">Không nên sử dụng để gửi các dữ liệu
                                        nhạy cảm
                                        (chẳng hạn như mật khẩu)
                                    </td>
                                    <td className="border border-slate-300 p-2">Được sử dụng để gửi các dữ liệu nhạy
                                        cảm
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-slate-300 p-2">Thường được sử dụng để gửi những dữ liệu
                                        nhỏ
                                    </td>
                                    <td className="border border-slate-300 p-2">Không hạn chế dung lượng dữ liệu gửi đi.
                                        Thường
                                        được sử dụng để gửi dữ liệu lớn lên server.
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="mb-12">
                <div className="bg-white py-10 px-4">
                    <div className="max-w-4xl mx-auto" data-aos="fade-up">
                        <Card hoverable className="shadow-lg">
                            <Title level={2} className="text-left">
                                Thẻ <code>{`<input>`}</code>
                            </Title>
                            <ul className="list-inside list-disc text-lg">
                                <li>Thẻ input được dùng để tạo các trường nhập dữ liệu thông dụng mà
                                    chúng ta thường thấy
                                </li>
                                <li>Thuộc tính name: tên của trường dữ liệu</li>
                                <li>Thuộc tính disabled: vô hiệu hóa trường dữ liệu, không cho người
                                    dùng tương tác
                                </li>
                                <li>Thuộc tính value: giá trị của trường dữ liệu</li>
                                <li>Thuộc tính type: loại trường dữ liệu (text, password…)</li>
                                <li><strong>Lưu ý</strong>: Dữ liệu được gửi lên server dưới dạng các cặp tên-giá trị
                                    Chẳng hạn: name=John
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="mb-12">
                <div className="py-10 px-4">
                    <div className="max-w-4xl mx-auto" data-aos="fade-up">
                        <Card hoverable className="shadow-lg">
                            <Title level={2} className="text-left">
                                Input type: Text
                            </Title>
                            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
                                <div className="">
                                    <ul className="list-inside list-disc text-lg">
                                        <li>Input type: text được sử dụng để nhập dữ liệu chuỗi ngắn, chẳng
                                            hạn như tên, địa chỉ…
                                        </li>
                                    </ul>
                                    <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                            <code>
                                {`<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>`}
                            </code>
                            </pre>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <InputTypeText/>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="mb-12">
                <div className="bg-white py-10 px-4">
                    <div className="max-w-4xl mx-auto" data-aos="fade-up">
                        <Card hoverable className="shadow-lg">
                            <Title level={2} className="text-left">
                                Input type: Password
                            </Title>
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
                                <div className="flex flex-col justify-center items-center">
                                    <InputTypePassword/>
                                </div>
                                <div className="">
                                    <ul className="list-inside list-disc text-lg">
                                        <li>Input type: password được sử dụng để nhập password, chẳng hạn
                                            như trong form đăng ký người dùng, hoặc form đăng nhập…
                                        </li>
                                    </ul>
                                    <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                            <code>
                                {`<form>
  <label for="username">Username:</label><br>
  <input type="text" id="username" name="username"><br>
  <label for="pwd">Password:</label><br>
  <input type="password" id="pwd" name="pwd">
</form>`}
                            </code>
                            </pre>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="mb-12">
                <div className="py-10 px-4">
                    <div className="max-w-4xl mx-auto" data-aos="fade-up">
                        <Card hoverable className="shadow-lg">
                            <Title level={2} className="text-left">
                                Input type: Submit
                            </Title>
                            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
                                <div className="">
                                    <ul className="list-inside list-disc text-lg">
                                        <li>Input type: submit được sử dụng để tạo một nút nhấn, khi người
                                            dùng nhấn vào nút submit thì dữ liệu sẽ được gửi lên server
                                        </li>
                                    </ul>
                                    <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                            <code>
                                {`<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="Anh"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Tuấn"><br><br>
  <input type="submit" value="Submit">
</form>`}
                            </code>
                            </pre>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <InputTypeSubmit/>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="mb-12">
                <div className="bg-white py-10 px-4">
                    <div className="max-w-4xl mx-auto" data-aos="fade-up">
                        <Card hoverable className="shadow-lg">
                            <Title level={2} className="text-left">
                                Input type: Reset
                            </Title>
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
                                <div className="flex flex-col justify-center items-center">
                                    <InputTypeReset/>
                                </div>
                                <div className="">
                                    <ul className="list-inside list-disc text-lg">
                                        <li>Input type: reset được sử dụng để xóa các dữ liệu mà người dùng vừa
                                            mới nhập vào trong form, tất cả các trường dữ liệu sẽ quay trở về dữ
                                            liệu mặc định trước đó
                                        </li>
                                    </ul>
                                    <pre
                                        className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                            <code>
                                {`<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="Anh"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Tuấn"><br><br>
  <input type="submit" value="Submit">
  <input type="reset" value="Reset">
</form>`}
                            </code>
                            </pre>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="mb-12">
                <div className="py-10 px-4">
                    <div className="max-w-4xl mx-auto" data-aos="fade-up">
                        <Card hoverable className="shadow-lg">
                            <Title level={2} className="text-left">
                                Input type: Radio
                            </Title>
                            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
                                <div className="">
                                    <ul className="list-inside list-disc text-lg">
                                        <li>Input type: radio được sử dụng để cho phép người dùng lựa chọn
                                            MỘT trong số các giá trị cho trước
                                        </li>
                                    </ul>
                                    <pre
                                        className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                            <code>
                                {`<p>Chọn ngôn ngữ Web yêu thích của bạn:</p>

<form>
  <input type="radio" id="html" name="fav_language" value="HTML">
  <label for="html">HTML</label><br>
  <input type="radio" id="css" name="fav_language" value="CSS">
  <label for="css">CSS</label><br>
  <input type="radio" id="javascript" name="fav_language" value="JavaScript">
  <label for="javascript">JavaScript</label>
</form>`}
                            </code>
                            </pre>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <InputTypeRadio/>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="mb-12">
                <div className="bg-white py-10 px-4">
                    <div className="max-w-4xl mx-auto" data-aos="fade-up">
                        <Card hoverable className="shadow-lg">
                            <Title level={2} className="text-left">
                                Input type: Checkbox
                            </Title>
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
                                <div className="flex flex-col justify-center items-center">
                                    <InputTypeCheckbox/>
                                </div>
                                <div className="">
                                    <ul className="list-inside list-disc text-lg">
                                        <li>Input type: checkbox được sử dụng để cho phép người dùng lựa chọn
                                            KHÔNG, MỘT, hoặc NHIỀU giá trị cho trước
                                        </li>
                                    </ul>
                                    <pre
                                        className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                            <code>
                                {`<form>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
  <label for="vehicle1"> I have a bike</label><br>
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
  <label for="vehicle2"> I have a car</label><br>
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
  <label for="vehicle3"> I have a boat</label>
</form>`}
                            </code>
                            </pre>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="mb-12">
                <div className="py-10 px-4">
                    <div className="max-w-4xl mx-auto" data-aos="fade-up">
                        <Card hoverable className="shadow-lg">
                            <Title level={2} className="text-left">
                                Input type: Button
                            </Title>
                            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
                                <div className="">
                                    <ul className="list-inside list-disc text-lg">
                                        <li>Input type: button được sử dụng để tạo một nút, nút này có thể được
                                            gắn với sự kiện của Javascript để xử lý các thao tác của người dùng
                                        </li>
                                    </ul>
                                    <pre
                                        className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                            <code>
                                {`<input type="button" onclick="alert('Hello World!')" value="Click Me!">`}
                            </code>
                            </pre>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <InputTypeButton/>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="mb-12">
                <div className="bg-white py-10 px-4">
                    <div className="max-w-4xl mx-auto" data-aos="fade-up">
                        <Card hoverable className="shadow-lg">
                            <Title level={2} className="text-left">
                                Các loại input khác
                            </Title>
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
                                <div className="flex flex-col justify-center items-center">
                                    <InputTypeOther/>
                                </div>
                                <div className="">
                                    <ul className="list-inside list-disc text-lg">
                                        <li><code>{`<input type="color"/>`}</code></li>
                                        <li><code>{`<input type="date">`}</code></li>
                                        <li><code>{`<input type="datetime-local">`}</code></li>
                                        <li><code>{`<input type="email" id="email" name="email">`}</code></li>
                                        <li><code>{`<input type="file">`}</code></li>
                                        <li><code>{`<input type="month">`}</code></li>
                                        <li><code>{`<input type="number">`}</code></li>
                                        <li><code>{`<input type="range">`}</code></li>
                                        <li><code>{`<input type="search">`}</code></li>
                                        <li><code>{`<input type="tel">`}</code></li>
                                        <li><code>{`<input type="time">`}</code></li>
                                        <li><code>{`<input type="week">`}</code></li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="mb-12">
                <div className="py-10 px-4">
                    <div className="max-w-4xl mx-auto" data-aos="fade-up">
                        <Card hoverable className="shadow-lg">
                            <Title level={2} className="text-left">
                                Thẻ select và option
                            </Title>
                            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
                                <div className="">
                                    <ul className="list-inside list-disc text-lg">
                                        <li>Thẻ select và option được sử dụng để cho phép người dung lựa
                                            chọn từ một danh sách cho trước. Trường nhập dữ liệu này còn được
                                            gọi là dropdown hoặc combobox
                                        </li>
                                        <li>So sách với input[radio] thì dropdown chiếm ít không gian hơn nhưng
                                            lại yêu cầu người dùng phải nhấn chuột thì mới hiển thị đầy đủ các
                                            danh sách
                                        </li>
                                    </ul>
                                    <pre
                                        className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                            <code>
                                {`<label for="cars">Chọn một chiếc xe:</label>

<select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>`}
                            </code>
                            </pre>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <SelectOption/>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="mb-12">
                <div className="bg-white py-10 px-4">
                    <div className="max-w-4xl mx-auto" data-aos="fade-up">
                        <Card hoverable className="shadow-lg">
                            <Title level={2} className="text-left">
                                Textarea
                            </Title>
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
                                <div className="flex flex-col justify-center items-center">
                                    <Textarea/>
                                </div>
                                <div className="">
                                    <ul className="list-inside list-disc text-lg">
                                        <li>Thẻ textarea được sử dụng để nhập dữ liệu dạng text lớn, chẳng
                                            hạn như nội dung của một bài báo, mô tả của một sản phẩm…
                                        </li>
                                        <li>Các thuộc tính quan trọng của thẻ textarea:<br/>
                                            • rows: số lượng dòng (chiều cao)<br/>
                                            • cols: số lượng cột (chiều rộng)
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="mb-12">
                <div className="py-10 px-4">
                    <div className="max-w-4xl mx-auto" data-aos="fade-up">
                        <Card hoverable className="shadow-lg">
                            <Title level={2} className="text-left">
                                Bảng trong HTML
                            </Title>
                            <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
                                <div className="">
                                    <ul className="list-inside list-disc text-lg">
                                        <li>Bảng được sử dụng để thể hiện dữ liệu dưới dạng hàng và cột</li>
                                        <li>Sử dụng bảng khi muốn hiển thị một danh sách các đối tượng với
                                            nhiều thuộc tính khác nhau</li>
                                        <li>Cách thành phần của bảng:

                                            <ul className="list-inside list-disc text-lg">
                                                <li>Cột (column)</li>
                                                <li>Dòng (row)</li>
                                                <li>Đường viền (border)</li>
                                                <li>Tiêu đề (header)</li>
                                            </ul>
                                        </li>
                                        <li>Các thẻ được dùng đẻ tạo bảng: <code>{`<table>`}</code>, <code>{`<tr>`}</code>, <code>{`<td>`}</code>, <code>{`<th>`}</code></li>
                                    </ul>
                                    <pre
                                        className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                            <code>
                                {`<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>`}
                            </code>
                            </pre>
                                </div>
                                <div className="flex flex-col justify-center items-center">
                                    <HtmlTable/>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
            <Modal title="" open={isModalOpenLoginForm} onCancel={() => setIsModalOpenLoginForm(false)} footer={null}>
                <LoginForm/>
            </Modal>
            <Modal title="" open={isModalOpenOrderForm} onCancel={() => setIsModalOpenOrderForm(false)} footer={null}>
                <CheckoutForm/>
            </Modal>
        </div>
    );
};

export default HTMLForms;
