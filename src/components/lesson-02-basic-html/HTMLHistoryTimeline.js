import React, {useEffect} from 'react';
import {Card, Timeline, Typography} from 'antd';
import timBernersLee from './Tim Berners-Lee.jpg';
import html2 from './html2.png';
import html4 from './html4.png';
import movBbbMp4 from './mov_bbb.mp4';
import AOS from 'aos';

const { Title} = Typography;

const HTMLHistoryTimeline = () => {
    const mode = 'alternate';

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <div className="bg-gray-100 py-10">
            <Title level={2} className="text-center" data-aos="fade-up">Lịch sử phát triển của HTML</Title>
            <div className="flex justify-center">
                <div className="w-full max-w-4xl px-4">
                    <Timeline
                        mode={mode}
                        items={[
                            {
                                label: '1991',
                                children: (
                                    <Card hoverable title="HTML phiên bản đầu tiên"
                                          className="shadow-lg transition-transform transform hover:scale-105"
                                          data-aos="fade-right">
                                        <p>HTML được Tim Berners-Lee phát triển để chia sẻ tài liệu trên World Wide
                                            Web.</p>
                                        <img src={timBernersLee} alt="Tim Berners-Lee"
                                             className="w-full h-auto rounded-lg mt-4"/>
                                    </Card>
                                ),
                            },
                            {
                                label: '1995',
                                children: (
                                    <Card hoverable title="HTML 2.0"
                                          className="shadow-lg transition-transform transform hover:scale-105"
                                          data-aos="fade-left">
                                        <p>Phiên bản đầu tiên được chuẩn hóa bởi IETF, hỗ trợ các tính năng cơ bản như
                                            forms và bảng biểu.</p>
                                        <img src={html2} alt="HTML 2.0"
                                             className="w-full h-auto rounded-lg mt-4"/>
                                    </Card>
                                ),
                            },
                            {
                                label: '1999',
                                children: (
                                    <Card hoverable title="HTML 4.01"
                                          className="shadow-lg transition-transform transform hover:scale-105"
                                          data-aos="fade-right">
                                        <p>Phiên bản cải tiến với hỗ trợ tốt hơn cho CSS, trở thành tiêu chuẩn thiết kế
                                            web.</p>
                                        <img src={html4} alt="HTML 4.01"
                                             className="w-full h-auto rounded-lg mt-4"/>
                                    </Card>
                                ),
                            },
                            {
                                label: '2014',
                                children: (
                                    <Card hoverable title="HTML5"
                                          className="shadow-lg transition-transform transform hover:scale-105"
                                          data-aos="fade-left">
                                        <p>HTML5 chính thức ra mắt, cung cấp nhiều tính năng multimedia hiện đại.</p>
                                        <video width="100%" controls
                                               className="rounded-lg my-4">
                                            <source src={movBbbMp4} type="video/mp4"/>
                                            Trình duyệt của bạn không hỗ trợ video HTML5.
                                        </video>
                                        <p>
                                            Video courtesy of {' '}
                                            <a className="text-sky-500 underline" href="https://www.bigbuckbunny.org/">Big Buck Bunny</a>.
                                        </p>
                                    </Card>
                                ),
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

export default HTMLHistoryTimeline;
