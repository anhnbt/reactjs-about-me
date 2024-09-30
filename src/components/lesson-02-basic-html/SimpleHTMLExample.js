import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const SimpleHTMLExample = () => {
    return (
        <div className="bg-white py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <Card hoverable className="shadow-lg">
                    <Title level={3} className="text-center" style={{color: "#272882"}}>Ví dụ về văn bản HTML đơn giản</Title>
                    <Paragraph>
                        Đây là ví dụ về một trang HTML đơn giản, bao gồm các thẻ cơ bản như <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, và <code>&lt;body&gt;</code>.
                    </Paragraph>
                    <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
            <code>
              {`
<!DOCTYPE html>               // Khai báo kiểu tài liệu, cho trình duyệt biết đây là một trang HTML
<html>                        // Thẻ mở đầu cho tài liệu HTML
  <head>                      // Thẻ chứa thông tin về tài liệu như tiêu đề và liên kết đến tài nguyên
    <title>Trang HTML đơn giản</title> // Tiêu đề của trang, hiển thị trên thanh tiêu đề của trình duyệt
  </head>                     // Kết thúc thẻ head
  <body>                      // Thẻ chứa nội dung hiển thị trên trang web
    <h1>Chào mừng đến với HTML!</h1> // Tiêu đề chính của trang, sử dụng thẻ h1
    <p>Đây là một đoạn văn đơn giản.</p> // Đoạn văn mô tả, sử dụng thẻ p
  </body>                     // Kết thúc thẻ body
</html>                       // Kết thúc thẻ html
              `}
            </code>
          </pre>
                </Card>
            </div>
        </div>
    );
};

export default SimpleHTMLExample;
