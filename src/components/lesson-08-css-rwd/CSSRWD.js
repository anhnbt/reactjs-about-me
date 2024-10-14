import React, { useEffect, useState } from "react";
import { Card, Typography } from "antd";
import AOS from "aos";
import img_sem_elements from "./img_sem_elements.gif";
import RWD1 from "./RWD1.jpeg";
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
    <div className="bg-gray-100 py-10">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Bài 8: CSS RWD</h1>
        <p className="text-lg text-gray-700">
          [Web Frontend] Building Website with HTML and CSS
        </p>
      </header>
      <section className="mb-12">
        <div className="bg-white py-10 px-4">
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
        <div className="py-10 px-4">
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <Card hoverable className="shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
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
                    src={img_sem_elements}
                    alt="Search bar"
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
                      Các khái niệm:
                      <p> Grid Container</p>
                      <p> Grid Line</p>
                      <p> Grid Cell</p>
                      <p> Grid Area</p>
                      <p> Grid Track</p>
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
                  Meria Queries (Truy vấn phương tiện) là một kỹ thuật của CSS,
                  cho phép kết xuất nội dung để thích ứng với các điều kiện như
                  kích thước và độ phân giải màn hình
                </li>
                <li>Là công nghệ nền tảng của thiết kế web đáp ứng RWD</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSSRWD;
