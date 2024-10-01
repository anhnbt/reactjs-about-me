import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const HTMLStructure = () => {
    return (
        <div className="bg-white py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <Card hoverable className="shadow-lg">
                    <Title level={3} className="text-center">Cấu trúc trang HTML</Title>
                    <Paragraph>
                        Một trang HTML thường có cấu trúc cơ bản như sau:
                    </Paragraph>
                    <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
            <code>
              {`
<!DOCTYPE html>               // Khai báo kiểu tài liệu
<html>                        // Thẻ gốc của tài liệu HTML
  <head>                      // Thẻ chứa thông tin meta, tiêu đề, và liên kết đến CSS, JS
    <meta charset="UTF-8">    // Thiết lập bộ ký tự
    <title>Tên trang</title>  // Tiêu đề hiển thị trên thanh tiêu đề của trình duyệt
    <link rel="stylesheet" href="styles.css"> // Liên kết đến tệp CSS
  </head>                     // Kết thúc thẻ head
  <body>                      // Thẻ chứa nội dung hiển thị
    <h1>Tiêu đề chính</h1>    // Tiêu đề lớn nhất, thường là tên trang
    <p>Đoạn văn mô tả.</p>     // Đoạn văn bản
    <footer>                  // Thẻ chân trang, thường chứa thông tin liên hệ hoặc bản quyền
      <p>Bản quyền © 2024</p>
    </footer>                 // Kết thúc thẻ footer
  </body>                     // Kết thúc thẻ body
</html>                       // Kết thúc thẻ html
              `}
            </code>
          </pre>
                    <Paragraph>
                        Các phần chính trong cấu trúc trang HTML bao gồm:
                    </Paragraph>
                    <ul className="list-disc ml-6">
                        <li><strong>DOCTYPE:</strong> Khai báo kiểu tài liệu để trình duyệt hiểu rằng đây là một trang HTML.</li>
                        <li><strong>Thẻ &lt;html&gt;:</strong> Là thẻ gốc chứa tất cả nội dung của trang.</li>
                        <li><strong>Thẻ &lt;head&gt;:</strong> Chứa thông tin meta, tiêu đề trang và liên kết đến tài nguyên khác.</li>
                        <li><strong>Thẻ &lt;body&gt;:</strong> Chứa tất cả nội dung mà người dùng sẽ thấy, như tiêu đề, đoạn văn, hình ảnh, v.v.</li>
                        <li><strong>Thẻ &lt;footer&gt;:</strong> Chứa thông tin bổ sung như bản quyền hoặc thông tin liên hệ.</li>
                    </ul>
                </Card>
            </div>
        </div>
    );
};

export default HTMLStructure;
