import Footer from "../layout/footer/Footer";
import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <>
      <main>
        <Heading content=" This is Login Page" />
        <LoginForm />
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
