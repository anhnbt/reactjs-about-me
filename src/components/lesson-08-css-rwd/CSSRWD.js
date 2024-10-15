import React, { useEffect, useState } from "react";
import { Card, Typography } from "antd";
import AOS from "aos";
import RWD1 from "./RWD1.jpeg";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import gridView from "./grid-view.png";
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

const { Title } = Typography;

const CSSRWD = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    document.title = "Bài 7: CSS Layout";
  }, []);

  return (
    <div className="bg-gray-100 py-16">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold">Bài 8: CSS RWD</h1>
        <p className="text-lg text-gray-700">
          [Web Frontend] Building Website with HTML and CSS
        </p>
      </header>
      <section className="mb-16">
        <div className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <Card hoverable className="shadow-lg">
              <div>
                <Title level={2} className="text-left">
                  Mục tiêu
                </Title>
                <ul className="list-inside list-disc text-lg">
                  <li>
                    Trình bày được khái niệm Responsive trong thiết kế website
                  </li>
                  <li>
                    Trình bày và sử dụng được Grid View trong thiết kế website
                  </li>
                  <li>
                    Sử dụng được RWD Media Queries thiết kế bố cục website
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <div className="py-16 px-4">
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <Card hoverable className="shadow-lg">
              <Title level={2} className="text-left">
                Thiết kế để có trải nghiệm tốt nhất cho tất cả người dùng
              </Title>
              <ul className="list-inside list-disc text-lg">
                <li>
                  Các trang web có thể được xem bằng nhiều thiết bị khác nhau
                </li>
                <li>
                  Trang web của bạn nên có giao diện tốt, và dễ sử dụng, trên
                  bất kỳ thiết bị nào
                </li>
                <li>
                  Các trang web sẽ không bỏ bớt các thông tin để phù hợp với các
                  thiết bị nhỏ hơn, nhưng sẽ thích ứng nội dung của nó để phù
                  hợp với bất kỳ thiết bị nào:
                </li>
              </ul>
              <div className="flex justify-center items-center space-x-4 mt-10">
                <figure className="w-1/3 text-center" data-aos="fade-right">
                  <img
                    src={image1}
                    alt="Image 1"
                    className="w-full h-full aspect-[4/3] object-cover"
                  />
                  <figcaption className="mt-2 text-gray-600">
                    Máy tính cá nhân
                  </figcaption>
                </figure>
                <figure className="w-1/3 text-center" data-aos="fade-up">
                  <img
                    src={image2}
                    alt="Image 2"
                    className="mx-auto h-full aspect-[4/3] object-cover"
                  />
                  <figcaption className="mt-2 text-gray-600">
                    Máy tính bảng
                  </figcaption>
                </figure>
                <figure className="w-1/3 text-center" data-aos="fade-left">
                  <img
                    src={image3}
                    alt="Image 3"
                    className="mx-auto h-full aspect-[4/3] object-cover"
                  />
                  <figcaption className="mt-2 text-gray-600">
                    Điện thoại
                  </figcaption>
                </figure>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <div className="py-16 px-4">
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <Card hoverable className="shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-[2fr_2fr] gap-8">
                <div className="flex flex-col justify-center items-center">
                  <Title level={2} className="text-left">
                    Responsive Web Design RWD
                  </Title>
                  <ul className="list-inside list-disc text-lg">
                    <li>
                      RWD (Thiết kế web thích ứng) là kỹ thuật được sử đụng để
                      trang web có thể hiển thị tốt trên nhiều loại thiết bị với
                      kích thước của trình duyệt khác nhau máy tính để bàn, máy
                      tính bảng, điện thoại
                    </li>
                    <li>
                      Sử dụng được RWD Media Queries thiết kế bố cục website
                    </li>
                    <li>
                      Một trang web được gọi là thiết kế responsive khi bạn sử
                      dụng CSS và HTML để thay đổi kích cỡ, ẩn, thu nhỏ, phóng
                      to, hoặc di chuyển nội dung để làm cho nó có giao điện đẹp
                      trên bất kỳ màn hình nào{" "}
                    </li>
                  </ul>
                </div>

                <div className="flex justify-center items-center">
                  {isOpen && (
                    <Lightbox
                      image={RWD1}
                      title="RWD"
                      onClose={() => setIsOpen(false)}
                    />
                  )}
                  <img
                    src={RWD1}
                    alt="RWD"
                    className="w-full h-auto rounded-lg"
                    data-aos="zoom-in"
                    onClick={() => setIsOpen(true)}
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <div className="bg-white py-10 px-4">
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <Card hoverable className="shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_4fr] gap-8">
                <div className="flex justify-center items-center">
                  <img
                    src={gridView}
                    alt="Grid view"
                    className="w-full h-auto rounded-lg"
                    data-aos="zoom-in"
                  />
                </div>
                <div className="">
                  <Title level={2} className="text-left">
                    Grid View
                  </Title>
                  <ul className="list-inside list-disc text-lg">
                    <li>
                      Grid view phân bố nội dung theo dạng một lưới, nghĩa là
                      các trang được chia thành các cột/hàng
                    </li>
                    <li>
                      Giúp cho việc thiết kế trở nên dễ dàng hơn, dễ đặt nội
                      dung lên các vùng phù hợp của trang web
                    </li>
                    <li>
                      Một Responsive Grid View thường có 12 cột, chiếm 100%
                      chiều rộng của trang. Các cột sẽ được thu nhỏ hay mở rộng
                      theo kích thước của cửa sổ trình duyệt
                    </li>
                    <li>
                      <span className="text-blue-500 font-semibold">
                        Các khái niệm:
                      </span>
                      <ul className="list-disc pl-10">
                        <li className="text-gray-700">Grid Container</li>
                        <li className="text-gray-700">Grid Line</li>
                        <li className="text-gray-700">Grid Cell</li>
                        <li className="text-gray-700">Grid Area</li>
                        <li className="text-gray-700">Grid Track</li>
                      </ul>
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
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <Card hoverable className="shadow-lg">
              <Title level={2} className="text-left">
                RWD Media Queries
              </Title>
              <ul className="list-inside list-disc text-lg">
                <li>
                  CSS Media Queries là một kỹ thuật cho phép bạn áp dụng các quy
                  tắc CSS khác nhau dựa trên đặc điểm của thiết bị đang hiển thị
                  trang web (như kích thước màn hình, độ phân giải, hướng màn
                  hình, v.v.). Media Queries giúp trang web trở nên responsive
                  bằng cách thay đổi bố cục và kiểu dáng CSS cho phù hợp với
                  thiết bị.
                </li>
                <li>Là công nghệ nền tảng của thiết kế web đáp ứng RWD</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <div className="py-10 px-4">
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <Card hoverable className="shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8">
                <div className="flex flex-col justify-center items-center">
                  <Title level={2} className="text-left">
                    CSS Media Types
                  </Title>
                  <p className="text-lg text-gray-700">
                    Media Types trong CSS Media Queries xác định loại thiết bị
                    hoặc môi trường mà các quy tắc CSS sẽ áp dụng. Các loại
                    Media Types phổ biến bao gồm:
                  </p>
                  <ul className="list-inside list-disc text-lg">
                    <li>
                      <strong>all</strong>: Dành cho tất cả các loại thiết bị
                      (thường được sử dụng mặc định).
                    </li>
                    <li>
                      <strong>screen</strong>: Áp dụng cho các thiết bị có màn
                      hình (máy tính, điện thoại di động, máy tính bảng).
                    </li>
                    <li>
                      <strong>print</strong>: Dành cho các tài liệu được in ra
                      hoặc ở chế độ xem trước khi in.
                    </li>
                    <li>
                      <strong>speech</strong>: Áp dụng cho các thiết bị đọc văn
                      bản thành lời nói.
                    </li>
                  </ul>
                </div>

                <div className="">
                  <p className="text-lg text-gray-700">
                    Ví dụ sử dụng Media Type:
                  </p>
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                    <code>
                      {`@media screen {
  body {
    font-size: 16px;
  }
}
`}
                    </code>
                  </pre>
                  <p className="text-lg text-gray-700">
                    Trong ví dụ này, font-size sẽ chỉ được áp dụng khi trang web
                    được xem trên màn hình.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="mb-12">
        <div className="py-10 px-4">
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <Card hoverable className="shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8">
                <div className="">
                  <p className="text-lg text-gray-700">
                    Ví dụ sử dụng Media Features:
                  </p>
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                    <code>
                      {`@media screen and (min-width: 600px) {
  body {
    background-color: lightblue;
  }
}`}
                    </code>
                  </pre>
                  <p className="text-lg text-gray-700">
                    Trong ví dụ này, nền sẽ chỉ thay đổi thành màu xanh khi kích
                    thước màn hình ít nhất là 600px.
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Title level={2} className="text-left">
                    CSS Common Media Features
                  </Title>
                  <p className="text-lg text-gray-700">
                    Các Media Features là những đặc điểm của thiết bị được kiểm
                    tra trong Media Queries, như kích thước màn hình, độ phân
                    giải, hoặc khả năng màu sắc. Một số Media Features thông
                    dụng bao gồm:
                  </p>
                  <ul className="list-inside list-disc text-lg">
                    <li>
                      <span className="">
                        <strong>width</strong> và <strong>height</strong>: Chiều
                        rộng và chiều cao của vùng xem.
                      </span>
                      <ul className="list-disc pl-10">
                        <li className="text-gray-700">
                          <strong>min-width</strong>: Chiều rộng tối thiểu.
                        </li>
                        <li className="text-gray-700">
                          <strong>max-width</strong>: Chiều rộng tối đa.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>orientation</strong>: Định hướng của thiết bị
                      (chân dung - portrait, hay phong cảnh - landscape).
                    </li>
                    <li>
                      <strong>resolution</strong>: Độ phân giải của thiết bị (ví
                      dụ: dpi, dpcm).
                    </li>
                    <li>
                      <strong>color</strong>: Kiểm tra số lượng màu sắc có thể
                      hiển thị trên thiết bị.
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
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <Card hoverable className="shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8">
                <div className="flex flex-col justify-center items-center">
                  <Title level={2} className="text-left">
                    Media Query Syntax
                  </Title>
                  <p className="text-lg text-gray-700">
                    Cú pháp của Media Query rất linh hoạt, cho phép bạn sử dụng
                    kết hợp nhiều điều kiện và đặc tính khác nhau.
                  </p>
                  <p className="font-bold">Cấu trúc cú pháp cơ bản:</p>
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                    <code>
                      {`@media [media type] and ([media feature]) {
  /* CSS rules go here */
}
`}
                    </code>
                  </pre>
                  <ul className="list-inside list-disc text-lg">
                    <li>Media Type: Loại thiết bị (ví dụ: screen, print).</li>
                    <li>
                      Media Feature: Đặc tính của thiết bị (ví dụ: min-width,
                      orientation).
                    </li>
                  </ul>
                </div>

                <div className="">
                  <p className="text-lg text-gray-700">
                    Ví dụ 1: Chỉ định một Media Type và Media Feature:
                  </p>
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                    <code>
                      {`@media screen and (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}
`}
                    </code>
                  </pre>
                  <p className="text-lg text-gray-700">
                    Áp dụng cho màn hình (screen) có độ rộng nhỏ hơn hoặc bằng
                    768px.
                  </p>
                  <p className="text-lg text-gray-700">
                    Ví dụ 2: Sử dụng nhiều Media Features kết hợp:
                  </p>
                  <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
                    <code>
                      {`@media screen and (min-width: 768px) and (orientation: landscape) {
  body {
    font-size: 18px;
  }
}
`}
                    </code>
                  </pre>
                  <p className="text-lg text-gray-700">
                    Quy tắc CSS này áp dụng khi chiều rộng màn hình ít nhất là
                    768px và thiết bị đang ở chế độ landscape (màn hình nằm
                    ngang).
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSSRWD;
