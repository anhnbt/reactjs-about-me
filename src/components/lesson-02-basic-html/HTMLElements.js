import React from 'react';
import {Card, List, Typography} from 'antd';
import HTML5Elements from "./htmlElements.svg";

const {Title, Paragraph} = Typography;

const htmlElements = [
    {
        title: '<h1> - <h6>: Tiêu đề (Heading)',
        description: 'Sử dụng để tạo các tiêu đề cho văn bản, với <h1> là tiêu đề quan trọng nhất và <h6> là tiêu đề ít quan trọng nhất.',
    },
    {
        title: '<p>: Đoạn văn (Paragraph)',
        description: 'Sử dụng để tạo các đoạn văn bản. Nó thường chứa nội dung dạng text.',
    },
    {
        title: '<a>: Liên kết (Anchor)',
        description: 'Sử dụng để tạo các liên kết, cho phép người dùng nhấp vào để điều hướng đến một trang khác.',
    },
    {
        title: '<img>: Hình ảnh (Image)',
        description: 'Sử dụng để chèn hình ảnh vào trang web, với các thuộc tính để điều chỉnh đường dẫn ảnh, kích thước, và các thông số khác.',
    },
];

const HTMLElements = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
                <Card hoverable className="shadow-lg">
                    <Title level={2} className="text-center">
                        Các phần tử HTML (HTML Elements)
                    </Title>
                    <Paragraph className="text-lg">
                        Một phần tử HTML bao gồm thẻ mở, nội dung, và thẻ đóng. Dưới đây là một số phần tử HTML cơ bản:
                    </Paragraph>
                    <div className="bg-gray-700">
                        <img
                            src={HTML5Elements}
                            alt="HTML Elements"
                            className="w-full h-auto rounded-lg"
                            data-aos="zoom-in"
                        />
                    </div>
                    <List
                        itemLayout="horizontal"
                        dataSource={htmlElements}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    title={<strong>{item.title}</strong>}
                                    description={item.description}
                                />
                            </List.Item>
                        )}
                    />
                </Card>
            </div>
        </div>
    );
};

export default HTMLElements;
