import React, {useEffect} from 'react';
import {Card, Typography} from 'antd';
import AOS from 'aos';
import HTML5Logo from '../../HTML5_logo_and_wordmark.svg'

const {Title, Paragraph} = Typography;

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
                    <Title level={2} className="text-center" style={{color: "#272882"}}>HTML là gì?</Title>
                    <Paragraph className="text-lg">
                        <strong>HTML (HyperText Markup Language)</strong> là ngôn ngữ đánh dấu tiêu chuẩn để tạo ra các trang web. Nó
                        được dùng để xây dựng cấu trúc và nội dung cho một trang web, sử dụng các thẻ (tags) để xác định
                        các phần tử như tiêu đề, đoạn văn, hình ảnh, liên kết và nhiều yếu tố khác.
                    </Paragraph>
                    <Paragraph className="text-lg">
                        HTML là nền tảng của mọi trang web và đã phát triển qua nhiều phiên bản để hỗ trợ thêm các tính
                        năng mới, bao gồm multimedia, ứng dụng web, và tương tác người dùng.
                    </Paragraph>
                    <div className="flex justify-center">
                        <img
                            src={HTML5Logo}
                            alt="HTML Logo"
                            className="w-1/2 h-auto rounded-lg mt-6"
                            data-aos="zoom-in"
                        />
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default WhatIsHTML;
