import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const SimpleHTMLExample = () => {
    return (
        <div className="bg-white py-10 px-4">
            <div className="max-w-4xl mx-auto">
                <Card hoverable className="shadow-lg">
                    <Title level={3} className="text-center">Ví dụ về văn bản HTML đơn giản</Title>
                    <Paragraph>
                        Đây là ví dụ về một trang HTML đơn giản, bao gồm các thẻ cơ bản như <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, và <code>&lt;body&gt;</code>.
                    </Paragraph>
                    <pre className="bg-gray-900 text-white p-4 rounded-md overflow-auto">
            <code>
              {`
<!DOCTYPE html>
<html>
  <head>
    <title>Trang HTML đơn giản</title>
  </head>
  <body>
    <h1>Chào mừng đến với HTML!</h1>
    <p>Đây là một đoạn văn đơn giản.</p>
  </body>
</html>
              `}
            </code>
          </pre>
                </Card>
            </div>
        </div>
    );
};

export default SimpleHTMLExample;
