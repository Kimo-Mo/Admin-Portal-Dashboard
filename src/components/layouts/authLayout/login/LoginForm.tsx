import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import { ArrowRight } from 'iconsax-reactjs';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

type FieldType = {
  email?: string;
  password?: string;
};
const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
function LoginForm() {
  return (
    <>
      <img
        src="https://asm.darkatlas.io/assets/Art%20Work-O3MSreHw.png"
        alt=""
        className="absolute top-0 z-0 md:left-auto left-0 bg-blend-lighten"></img>
      <div className="flex flex-col items-center min-w-full h-full px-7 md:ml-4 font-light text-font">
        <img
          alt="dark atlas logo"
          className="object-contain transition-all mt-10 mb-50 w-40"
          src="https://asm.darkatlas.io/assets/logo-DsnAEl7q.svg"
        />
        <div className="flex flex-col items-start justify-between md:w-[60%] w-[95%] font-light text-font px-4">
          <h1 className="text-2xl font-extrabold text-center mb-10">
            Let's get you back <span className="text-primary">in.</span>
          </h1>
          <Form
            style={{
              width: '100%',
            }}
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
            onFinishFailed={onFinishFailed}>
            <Form.Item<FieldType>
              label={<div className="mb-1">Email</div>}
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}>
              <Input size="large" placeholder="Enter Your Email" />
            </Form.Item>
            <Form.Item<FieldType>
              label={<div className="mb-1">Password</div>}
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password size="large" placeholder="Enter Your Password" />
            </Form.Item>
            <div className="mb-10 bottom-1.5 relative">
              <Link to="/forgot-password" className="!text-primary">
                Forget password?
              </Link>
            </div>
            <Form.Item label={null}>
              <Button type="primary" htmlType="submit" style={{ width: '100%' }} size="large">
                Continue
                <ArrowRight />
              </Button>
            </Form.Item>
            <h1 className="text-sm">
              Not Subscribed yet?{' '}
              <Link to="/signup" className="!text-primary">
                Subscribe!
              </Link>
            </h1>
          </Form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
