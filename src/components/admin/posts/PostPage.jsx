import Heading from "../../layout/Heading";
import AdminPage from "../AdminPage";
import { Link } from "react-router-dom";
import PostList from "./PostList";

const PostPage = () => {
  return (
    <>
      <AdminPage>
        <Heading content="  Post Page" size="2" />
        <p>
          <Link to="/admin/posts/add">Add post</Link>
        </p>
        <p>List posts here</p>
        <PostList />
      </AdminPage>
    </>
  );
};

export default PostPage;
