import React from 'react';
import {Card, Table, Typography} from 'antd';

const {Title, Paragraph} = Typography;

const entityData = [
    {
        key: '1',
        entity: '&lt;',
        description: 'Hiển thị ký tự "<"',
        example: '<div>&lt;div&gt;</div>',
    },
    {
        key: '2',
        entity: '&gt;',
        description: 'Hiển thị ký tự ">"',
        example: '<div>&gt;div&lt;</div>',
    },
    {
        key: '3',
        entity: '&amp;',
        description: 'Hiển thị ký tự "&"',
        example: '<div>&amp;div&amp;</div>',
    },
    {
        key: '4',
        entity: '&quot;',
        description: 'Hiển thị dấu nháy kép (")',
        example: '<div>&quot;Hello&quot;</div>',
    },
    {
        key: '5',
        entity: '&apos;',
        description: 'Hiển thị dấu nháy đơn (\')',
        example: "<div>&apos;Hello&apos;</div>",
    },
];

// Cấu hình cột cho bảng
const columns = [
    {
        title: 'Entity',
        dataIndex: 'entity',
        key: 'entity',
        render: text => <code>{text}</code>,
    },
    {
        title: 'Mô tả',
        dataIndex: 'description',
        key: 'description',
    },
    {
        title: 'Ví dụ',
        dataIndex: 'example',
        key: 'example',
        render: text => <code dangerouslySetInnerHTML={{__html: text}}/>,
    },
];

const HtmlEntities = () => {
    return (
        <div className="bg-white py-10">
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
                <Card hoverable className="shadow-lg">
                    <Title level={2} className="text-center">
                        HTML Entities là gì?
                    </Title>
                    <Paragraph className="text-lg">
                        <strong>HTML Entities</strong> là cách để hiển thị các ký tự đặc biệt trong HTML. Khi bạn muốn
                        hiển
                        thị một số ký tự đặc biệt như <code>{'<'}</code> hoặc <code>{'&'}</code>, bạn cần sử dụng mã
                        entity
                        tương ứng.
                    </Paragraph>
                    <Paragraph className="text-lg">
                        Một số ký tự đặc biệt không thể được hiển thị trực tiếp trong HTML, do đó, chúng phải được thay
                        thế
                        bằng các entity tương ứng.
                    </Paragraph>

                    <Table
                        dataSource={entityData}
                        columns={columns}
                        pagination={false}
                        className="mt-6"
                    />
                </Card>
            </div>
        </div>
    );
};

export default HtmlEntities;
