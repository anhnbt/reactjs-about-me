import React, {useEffect} from 'react';
import {Card, Typography} from 'antd';
import AOS from 'aos';
import HTML5Logo from '../../HTML5_logo_and_wordmark.svg'

const {Title, Paragraph} = Typography;

const data = [
    {
        title: 'HTML là viết tắt của Hypertext Markup Language (Ngôn ngữ Đánh dấu Siêu Văn bản)',
    },
    {
        title: 'Đánh dấu: HTML sử dụng các thẻ (tags) để xác định các thành phần trong một trang web, chẳng hạn như tiêu đề, đoạn văn, hình ảnh, liên kết, v.v.',
    },
    {
        title: 'Siêu văn bản: Khả năng kết nối với các trang khác thông qua các liên kết (hyperlinks), giúp tạo ra một cấu trúc mạng lưới giữa các văn bản và tài liệu trên Internet.',
    },
];

const WhatIsHTML = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="bg-white py-10 px-4">
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
                <Card hoverable className="shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
                        <div>
                            <Title level={2} className="text-left">
                                HTML là gì?
                            </Title>
                            <Paragraph className="text-lg">
                                <strong>HTML</strong> là ngôn ngữ được sử dụng để <strong>tạo cấu
                                trúc</strong> và <strong>nội dung</strong> cho các Webpage.
                            </Paragraph>
                            <ul className="list-inside list-disc text-lg">
                                <li><strong>HTML</strong> là viết tắt của <strong>Hypertext Markup
                                    Language</strong> (Ngôn ngữ Đánh dấu Siêu Văn bản)
                                    <ul className="list-inside list-disc ml-6">
                                        <li>
                                            <strong>Đánh dấu</strong>: HTML sử dụng các thẻ (tags) để xác định các thành
                                            phần trong một trang web, chẳng hạn như tiêu đề, đoạn văn, hình ảnh, liên
                                            kết, v.v.
                                        </li>
                                        <li>
                                            <strong>Siêu văn bản</strong>: Khả năng kết nối với các trang khác thông qua
                                            các liên kết (hyperlinks), giúp tạo ra một cấu trúc mạng lưới giữa các văn
                                            bản và tài liệu trên Internet.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="flex justify-center items-center">
                            <img
                                src={HTML5Logo}
                                alt="HTML Logo"
                                className="w-full h-auto max-w-xs rounded-lg"
                                data-aos="zoom-in"
                            />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default WhatIsHTML;
