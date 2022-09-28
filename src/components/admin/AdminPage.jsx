import Footer from "../layout/footer/Footer";
import Heading from "../layout/Heading";
import AdminMenu from "./AdminMenu";
import PropTypes from "prop-types";

export default function AdminPage({ children }) {
  return (
    <>
      <main>
        <Heading content=" Admin Page" />
        <AdminMenu />
        {children ? children : <p>Select a section</p>}
      </main>
      <Footer />
    </>
  );
}

AdminPage.propTypes = {
  children: PropTypes.node,
};
