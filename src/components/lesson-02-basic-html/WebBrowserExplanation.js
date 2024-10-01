import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const WebBrowserExplanation = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-4xl mx-auto">
                <Card hoverable className="shadow-lg">
                    <Title level={3} className="text-center">Trình duyệt web là gì?</Title>
                    <Paragraph>
                        Trình duyệt web là một phần mềm cho phép người dùng truy cập và tương tác với nội dung trên
                        Internet.
                        Nó thực hiện việc gửi yêu cầu đến máy chủ để lấy tài liệu HTML và sau đó hiển thị nội dung đó
                        cho người dùng.
                    </Paragraph>
                    <Paragraph>
                        Các trình duyệt phổ biến hiện nay bao gồm:
                    </Paragraph>
                    <ul className="list-disc ml-6">
                        <li>Google Chrome</li>
                        <li>Mozilla Firefox</li>
                        <li>Microsoft Edge</li>
                        <li>Safari</li>
                    </ul>
                    <Paragraph>
                        Các trình duyệt web cũng hỗ trợ các tính năng như:
                    </Paragraph>
                    <ul className="list-disc ml-6">
                        <li>Hiển thị đa phương tiện (hình ảnh, video)</li>
                        <li>Quản lý bookmark</li>
                        <li>Hỗ trợ các tiện ích mở rộng (extensions)</li>
                        <li>Bảo mật và riêng tư cho người dùng</li>
                    </ul>
                </Card>
            </div>
        </div>
    );
};

export default WebBrowserExplanation;
