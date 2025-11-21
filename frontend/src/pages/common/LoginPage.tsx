// LoginPage.tsx
import {Card, Form, Input, Button, Typography, Row, Col, } from "antd";
import type {InputRef} from "antd"
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import {toast} from "react-toastify";
import "../../css/Login.css"
import {useRef} from "react";
import {useNavigate} from "react-router-dom";

const { Title, Link } = Typography;

export default function LoginPage() {
    const inputRef = useRef<InputRef|null>(null);
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        if(values.email.trim().length==0){
            toast.error("이메일을 입력하세요.");
            return;
        }
        if(values.password.trim().length==0){
            toast.error("비밀번호를 입력하세요.");
            return;
        }
        console.log("로그인 데이터:", values);
        navigate("/home");
    };

    return (
        <div className="login-wrapper">
            <Card className="login-card" >
                {/* 제목 */}
                <Title level={2} style={{ textAlign: "left", marginBottom: 30 }}>
                    로그인
                </Title>

                {/* 로그인 폼 */}
                <Form layout="vertical" onFinish={onFinish}>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: "이메일을 입력해 주세요" }]}
                    >
                        <Input
                            ref={inputRef}
                            size="large"
                            prefix={<UserOutlined />}
                            placeholder="email@korea.com"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: "비밀번호를 입력해 주세요" }]}
                    >
                        <Input.Password
                            size="large"
                            prefix={<LockOutlined />}
                            placeholder="password"
                        />
                    </Form.Item>

                    {/* 로그인 버튼 + 비밀번호 찾기 */}
                    <Row justify="space-between" align="middle">
                        <Col>
                            <Button type="primary" htmlType="submit" size="large">
                                로그인
                            </Button>
                        </Col>

                        <Col>
                            {/*비밀번호 찾기 화면 만들고 바인딩 */}
                            <Link style={{ fontSize: 15 }}>비밀번호 찾기</Link>
                        </Col>
                    </Row>
                </Form>

                <div className="login-logo-area">
                    <Button type={"default"} size={"large"}
                            style={{
                            height: 35,
                            width:100,
                            fontSize: 18,
                            borderRadius: 8,
                            marginLeft: 200,
                            }} >회원가입</Button>
                </div>
            </Card>
        </div>
    );
}
