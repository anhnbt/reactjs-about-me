import React from 'react';
import {Card, List, Typography} from 'antd';

const {Title, Paragraph} = Typography;

const attributesData = [
    {
        title: 'href: Thuộc tính của thẻ <a>',
        description: 'Sử dụng để chỉ định địa chỉ URL mà liên kết sẽ điều hướng đến. Ví dụ: <a href="https://example.com">Link</a>.',
    },
    {
        title: 'src: Thuộc tính của thẻ <img>',
        description: 'Sử dụng để chỉ định nguồn ảnh mà thẻ <img> sẽ hiển thị. Ví dụ: <img src="image.jpg" alt="Hình ảnh" />.',
    },
    {
        title: 'alt: Thuộc tính của thẻ <img>',
        description: 'Cung cấp văn bản thay thế nếu hình ảnh không thể tải được. Điều này cũng hữu ích cho SEO và truy cập web.',
    },
    {
        title: 'class: Thuộc tính của bất kỳ thẻ nào',
        description: 'Dùng để thêm một hoặc nhiều lớp CSS vào phần tử để áp dụng kiểu dáng. Ví dụ: <div class="container">Nội dung</div>.',
    },
];

const HtmlAttributes = () => {
    return (
        <div className="bg-white py-10">
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
                <Card hoverable className="shadow-lg">
                    <Title level={2} className="text-center">
                        Các thuộc tính HTML (HTML Attributes)
                    </Title>
                    <Paragraph className="text-lg">
                        Thuộc tính HTML cung cấp thông tin bổ sung cho các phần tử HTML. Các thuộc tính thường nằm trong
                        thẻ
                        mở và có dạng cặp name/value, ví dụ như:
                    </Paragraph>
                    <Paragraph className="text-lg text-left">
                        Ví dụ: <code>{`<a href="https://www.google.com.vn">Google</a>`}</code>
                    </Paragraph>

                    <Paragraph className="text-lg text-left">
                        Ví dụ với thẻ <code>{`<img>`}</code>: <code>{`<img src="coding.gif" width="360" height="208" alt="Coding">`}</code>
                    </Paragraph>

                    <List
                        itemLayout="horizontal"
                        dataSource={attributesData}
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

export default HtmlAttributes;
