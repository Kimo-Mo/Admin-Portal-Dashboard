import LoginForm from '@/components/layouts/authLayout/login/LoginForm';
import LoginShowcard from '@/components/layouts/authLayout/login/LoginShowcard';

function LoginPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[700px_1fr] min-h-screen">
      <div className="col-span-1 flex justify-center items-center">
        <LoginForm />
      </div>
      <LoginShowcard />
    </div>
  );
}

export default LoginPage;
