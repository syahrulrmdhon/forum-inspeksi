import React, { useState } from "react";
import Button from "antd/es/button";
import Checkbox from "antd/es/checkbox";
import Form from "antd/es/form";
import Input from "antd/es/input";
import Alert from "antd/es/alert";
import "./index.css";
import mainLogo from "../assets/logo-bpom.png";

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [userCredential] = useState([
        {
            username: 'imadianasari',
            password: 'semarang90',
            url: 'https://docs.google.com/spreadsheets/d/1ad_WwL4_t5J-av7_p2iJDiEZj9pyx82oAkOm4v1boS0/edit?usp=sharing'
        },
        {
            username: 'nurlaila',
            password: 'bandung91',
            url: 'https://docs.google.com/spreadsheets/d/16d3f5AeFnMxGbh9Qo_SD3DxjXywj75Y8hvxjwhf9Wmg/edit?usp=drive_link'
        },
        {
            username: 'junitasitumorang',
            password: 'palembang92',
            url: 'https://docs.google.com/spreadsheets/d/1_cIMw3CQpfmVehu9r5N8uZ2-8Zu74NGVaNtQdch3j7Y/edit?usp=drive_link'
        },
        {
            username: 'kukuhbagusnugroho',
            password: 'surakarta93',
            url: 'https://docs.google.com/spreadsheets/d/1QcIu2z7gqg1XNZMbC2HWrRmWo-qf3qUymSx2d3qOFQs/edit?usp=drive_link'
        },
        {
            username: 'fannyroselia',
            password: 'bogor94',
            url: 'https://docs.google.com/spreadsheets/d/1jNTSNWSxuUA0qN2JyvF4GkVMC0UZI3-wbwRbLgPCRYc/edit?usp=drive_link'
        },
        {
            username: 'setyoutami',
            password: 'surabaya95',
            url: 'https://docs.google.com/spreadsheets/d/1SC_2fHRk6md2TuVdI85bV0ZtpoenqrURAyf0on8Havo/edit?usp=drive_link'
        },
        {
            username: 'wahyuwastikikim',
            password: 'surabaya96',
            url: 'https://docs.google.com/spreadsheets/d/1SC_2fHRk6md2TuVdI85bV0ZtpoenqrURAyf0on8Havo/edit?usp=drive_link'
        },
        {
            username: 'fitrayelli',
            password: 'padang97',
            url: 'https://docs.google.com/spreadsheets/d/13mpmffKru9Ot2RNHeqgVuhur7ohJXf0m9ohajkMG8IY/edit?usp=drive_link'
        },
        {
            username: 'renymailia',
            password: 'jogja98',
            url: 'https://docs.google.com/spreadsheets/d/1YBvWdj6Y7nurGT1F4dzSt7UxhFS-T2p-yajFf9Fzfrk/edit?usp=drive_link'
        },
        {
            username: 'christinepakpahan',
            password: 'medan99',
            url: 'https://docs.google.com/spreadsheets/d/199JyhVbHyJAcfJ-xJXyP8jUUOujwB1JhYDjB2UPR-E4/edit?usp=drive_link'
        },
        {
            username: 'prabandarubismo',
            password: 'serang100',
            url: 'https://docs.google.com/spreadsheets/d/1oc5HNvZlu1g4KOgaVdKgmBobp9SuukVoR2aLCQpxko4/edit?usp=drive_link'
        },
        {
            username: 'andriantoni',
            password: 'jakarta101',
            url: 'https://docs.google.com/spreadsheets/d/1EpIsjMhAWt_fqzvpqEF3lDXpqOaFm5sC3QVJvfUVsnA/edit?usp=drive_link'
        },
        {
            username: 'windapratiwi',
            password: 'tangerang102',
            url: 'https://docs.google.com/spreadsheets/d/1uDoOcaafDw4k2u7_TXQRucBMY2LMSbwHM6BwvO6JA08/edit?usp=drive_link'
        },

    ])

    const onFinish = async (values) => {
        setIsLoading(true);
        setError(false)
        const hasSameValues = userCredential.some(obj =>
            Object.keys(values).every(key => obj[key] === values[key])
        );
        const matchingObject = userCredential.find(obj =>
            Object.keys(values).every(key => obj[key] === values[key])
        );
        if (hasSameValues) {
            setTimeout(() => {
                setIsLoading(false);
                console.log(matchingObject);
                if (matchingObject.url !== '') {
                    window.location.href = matchingObject.url;
                } else {
                    setIsLoading(false);
                    setError(true);
                    setErrorMessage("Url tidak ditemukan");
                }

            }, 2500);
        } else {
            console.log(hasSameValues)
            setTimeout(() => {
                setError(true);
                setErrorMessage("Username dan/atau Password tidak valid");
                setIsLoading(false);
            }, 2500);
        }

    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
        setErrorMessage("Username dan Password tidak valid")
    };

    return (
        <div className="container login-container">
            <div className="row">
                <div
                    className="col-md-12 mb-2 pb-2 pt-4"
                    style={{ textAlign: "center" }}
                >
                    <img src={mainLogo} className="logo-login" alt="fireSpot" />
                    <div>
                        <h1 className="mt-2 mb-0">
                            <a href="">Forum Inspeksi</a>
                        </h1>
                        <h4
                            style={{
                                fontFamily: '"Open Sans", sans-serif',
                                color: "#576971",
                            }}
                        >
                            Direktorat Pengawasan Produksi Obat Narkotika Psikotropika dan
                            Prekursor
                        </h4>
                        <p
                            className="mx-1"
                            style={{
                                fontFamily: '"Open Sans", sans-serif',
                                color: "#576971",
                                marginTop: '20vh !important'
                            }}
                        >
                            Masukan username dan password untuk mengakses kertas Kerja masing masing UPT
                        </p>
                    </div>
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    {error ? (
                        <Alert
                            message={errorMessage}
                            type="error"
                            showIcon
                            className="mb-2"
                        />
                    ) : (
                        ""
                    )}
                    <Form
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        className="ant-form-horizontal"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your password!",
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        {/* <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item> */}

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" loading={isLoading}>
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default LoginPage;