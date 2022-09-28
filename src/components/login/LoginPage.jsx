import Footer from "../layout/footer/Footer";
import Heading from "../layout/Heading";
import LoginForm from "./LoginForm";
import styles from '../login/LoginPage.module.css'

const LoginPage = () => {
  return (
    <>
      <main>
        <Heading content="  Login" size="1" />
        <section>
          <div className={styles.loginContainer}>
            <LoginForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LoginPage;
