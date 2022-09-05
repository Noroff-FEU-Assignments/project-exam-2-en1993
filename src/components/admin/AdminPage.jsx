import Footer from "../layout/footer/Footer";
import Heading from "../layout/Heading";
import AdminMenu from "./AdminMenu";
import PropTypes from 'prop-types';
import MediaDropdown from "./media/MediaDropdown";


export default function AdminPage({ children }) {
  return (
    <>
      <main>
        <Heading content=" This is Admin Page" />
        <MediaDropdown/>
        <AdminMenu />
        {children ? children : <p>Select a section</p>}
      </main>
      <Footer />
    </>
  )
}

AdminPage.propTypes = {
  children : PropTypes.node,
};