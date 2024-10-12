import React, { useEffect, useState } from "react";
import { Card, Typography } from "antd";
import AOS from "aos";
import img_sem_elements from "./img_sem_elements.gif";
import tclt from "./tclt.png";
import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";
const { Title, Paragraph } = Typography;

const CSSLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    document.title = "HTML Form & Table";
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Bài 7: CSS Layout</h1>
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
                    Trình bày được khái niệm bố cục (layout) của một trang web
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
                    Layout – Bố cục trang web
                  </Title>
                  <ul className="list-inside list-disc text-lg">
                    <li>
                      Bố cục (layout) của website rất quan trọng, nó quyết định
                      đến việc bố trí các thành phần trên trang có hợp lý,
                      chuyên nghiệp hay không
                    </li>
                    <li>
                      Các website hiện nay thường có các thành phần cơ bản và
                      được bố cục như bên:
                      <p>
                        ✓ Header: phần đầu tiên của trang web như logo, banner,
                        menu phụ, ô tìm kiếm…
                      </p>
                      <p>✓ Navigation: thanh điều hướng hay menu chính</p>
                      <p>✓ Content: Nội dung chính của website</p>
                      <p>
                        ✓ Sidebar: thanh bên chứa các phần như menu phụ, các bài
                        viết liên quan, quảng cáo…
                      </p>
                      <p>
                        ✓ Footer: Phân chân của trang chứa các thông tin như bản
                        quyền…
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="flex justify-center items-center">
                  {isOpen && (
                    <Lightbox
                      image={tclt}
                      title="TapChiLapTrinh Layout"
                      onClose={() => setIsOpen(false)}
                    />
                  )}
                  <img
                    src={tclt}
                    alt="Search bar"
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
                    Bố cục trong HTML5
                  </Title>
                  <p className="text-lg">
                    HTML 5 có chứa các thẻ ngữ nghĩa, giúp cơ chế tìm kiếm hiểu
                    sát hơn về cấu trúc website
                  </p>
                  <ul className="list-inside list-disc text-lg">
                    <li>
                      Thẻ{" "}
                      <code class="bg-gray-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        &lt;header&gt;
                      </code>
                      : định nghĩa phần đầu của trang web
                    </li>
                    <li>
                      Thẻ{" "}
                      <code class="bg-gray-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        &lt;nav&gt;
                      </code>
                      : thanh điều hướng menu
                    </li>
                    <li>
                      Thẻ{" "}
                      <code class="bg-gray-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        &lt;section&gt;
                      </code>
                      : định nghĩa 1 phần website
                    </li>
                    <li>
                      Thẻ{" "}
                      <code class="bg-gray-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        &lt;article&gt;
                      </code>
                      : định nghĩa nội dung bài viết độc lập
                    </li>
                    <li>
                      Thẻ{" "}
                      <code class="bg-gray-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        &lt;aside&gt;
                      </code>{" "}
                      định nghĩa phần bên cạnh nội dung, như sidebar
                    </li>
                    <li>
                      Thẻ{" "}
                      <code class="bg-gray-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                        &lt;footer&gt;
                      </code>
                      : định nghĩa phần chân của trang
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
              <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-8">
                <div className="flex flex-col">
                  <Title level={2} className="text-left">
                    CSS Float Layout
                  </Title>
                  <p className="text-lg text-left">
                    Thuộc tính float được sử dụng để định vị và định dạng nội
                    dung, ví dụ: để một hình ảnh trôi sang trái của văn bản
                    trong một vùng chứa.
                  </p>
                  <p className="text-lg text-left">
                    Thuộc tính float có thể có một trong các giá trị sau:
                  </p>
                  <ul className="list-inside list-disc text-lg">
                    <li>
                      <code class="border border-gray-300 text-blue-600">
                        left
                      </code>{" "}
                      – Phần tử nổi ở bên trái vùng chứa của nó
                    </li>
                    <li>
                      <code class="border border-gray-300 text-blue-600">
                        right
                      </code>{" "}
                      – Phần tử nổi ở bên phải vùng chứa của nó
                    </li>
                    <li>
                      <code class="border border-gray-300 text-blue-600">
                        none
                      </code>{" "}
                      – Phần tử không nổi (sẽ được hiển thị ngay tại nơi nó xuất
                      hiện trong văn bản). Đây là mặc định
                    </li>
                    <li>
                      <code class="border border-gray-300 text-blue-600">
                        inherit
                      </code>{" "}
                      – Phần tử kế thừa giá trị float của phần tử cha của nó
                    </li>
                  </ul>
                  <p className="text-lg">
                    Trong cách sử dụng đơn giản nhất, thuộc tính float có thể
                    được sử dụng để bọc văn bản xung quanh hình ảnh.
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

export default CSSLayout;
