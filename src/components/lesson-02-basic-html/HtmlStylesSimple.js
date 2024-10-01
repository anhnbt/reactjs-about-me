import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const HtmlStylesSimple = () => {
    return (
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <Card hoverable className="shadow-lg">
                <Title level={2} className="text-center">
                    HTML Styles là gì?
                </Title>
                <Paragraph className="text-lg">
                    <strong>HTML Styles</strong> là cách để bạn thay đổi giao diện của các phần tử HTML. Style có thể được áp dụng
                    trực tiếp bằng cách sử dụng thuộc tính <code>style</code>.
                </Paragraph>
                <Paragraph className="text-lg">
                    Ví dụ: Để thay đổi màu văn bản của một đoạn văn sang màu đỏ, bạn có thể sử dụng:
                </Paragraph>

                <div className="bg-gray-100 p-4 rounded-md text-left">
                    <code>{`<p style="color:red;">This is a red paragraph.</p>`}</code>
                </div>

                <Paragraph className="text-lg mt-4">
                    Các thuộc tính style thường gặp:
                </Paragraph>
                <ul className="list-disc ml-6">
                    <li><strong>color</strong>: Thay đổi màu chữ</li>
                    <li><strong>font-family</strong>: Thay đổi font chữ</li>
                    <li><strong>font-size</strong>: Thay đổi kích thước chữ</li>
                    <li><strong>text-align</strong>: Căn chỉnh văn bản (trái, phải, giữa)</li>
                    <li><strong>background-color</strong>: Thay đổi màu nền của phần tử</li>
                </ul>

                <Paragraph className="text-lg mt-4">
                    Bạn có thể sử dụng các thuộc tính style này để làm cho trang web của bạn đẹp hơn, nhưng cách tốt
                    nhất để quản lý style là sử dụng <strong>CSS</strong> thay vì trực tiếp áp dụng trong HTML.
                </Paragraph>
            </Card>
        </div>
    );
};

export default HtmlStylesSimple;
