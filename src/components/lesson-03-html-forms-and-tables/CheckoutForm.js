import React from 'react';
import { Form, Input, InputNumber, Button, Select, Radio, Divider } from 'antd';

const { Option } = Select;

const CheckoutForm = () => {
    const onFinish = (values) => {
        console.log('Dữ liệu đặt hàng:', values);
    };

    return (
        <div className="">
            <h2 className="text-2xl font-bold mb-4">Thông tin thanh toán</h2>

            <Form layout="vertical" onFinish={onFinish}>
                {/* Thông tin người nhận */}
                <h3 className="text-xl font-semibold mb-2">1. Thông tin người nhận</h3>
                <Form.Item
                    label="Họ và tên"
                    name="fullname"
                    rules={[{ required: true, message: 'Vui lòng nhập họ và tên' }]}
                >
                    <Input placeholder="Nhập họ và tên của bạn" />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, type: 'email', message: 'Vui lòng nhập email hợp lệ' }]}
                >
                    <Input placeholder="Nhập email của bạn" />
                </Form.Item>

                <Form.Item
                    label="Số điện thoại"
                    name="phone"
                    rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
                >
                    <Input placeholder="Nhập số điện thoại của bạn" />
                </Form.Item>

                {/* Địa chỉ giao hàng */}
                <Divider />
                <h3 className="text-xl font-semibold mb-2">2. Địa chỉ giao hàng</h3>
                <Form.Item
                    label="Địa chỉ"
                    name="address"
                    rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
                >
                    <Input placeholder="Nhập địa chỉ chi tiết" />
                </Form.Item>

                <Form.Item
                    label="Thành phố"
                    name="city"
                    rules={[{ required: true, message: 'Vui lòng chọn thành phố' }]}
                >
                    <Select placeholder="Chọn thành phố">
                        <Option value="hanoi">Hà Nội</Option>
                        <Option value="hochiminh">TP. Hồ Chí Minh</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Tỉnh/Thành"
                    name="province"
                    rules={[{ required: true, message: 'Vui lòng nhập tỉnh/thành' }]}
                >
                    <Input placeholder="Nhập tỉnh/thành" />
                </Form.Item>

                {/* Phương thức thanh toán */}
                <Divider />
                <h3 className="text-xl font-semibold mb-2">3. Phương thức thanh toán</h3>
                <Form.Item name="paymentMethod" rules={[{ required: true, message: 'Vui lòng chọn phương thức thanh toán' }]}>
                    <Radio.Group>
                        <Radio value="cod">Thanh toán khi nhận hàng (COD)</Radio>
                        <Radio value="online">Thanh toán trực tuyến</Radio>
                    </Radio.Group>
                </Form.Item>

                {/* Thông tin sản phẩm */}
                <Divider />
                <h3 className="text-xl font-semibold mb-2">4. Thông tin đơn hàng</h3>
                <div className="border rounded-md p-4 mb-4">
                    <div className="flex justify-between">
                        <p>Sản phẩm 1</p>
                        <p>2 x 500,000 VND</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Sản phẩm 2</p>
                        <p>1 x 300,000 VND</p>
                    </div>
                    <Divider />
                    <div className="flex justify-between font-bold">
                        <p>Tổng tiền</p>
                        <p>1,300,000 VND</p>
                    </div>
                </div>

                {/* Nút submit */}
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full">
                        Hoàn tất đặt hàng
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CheckoutForm;
