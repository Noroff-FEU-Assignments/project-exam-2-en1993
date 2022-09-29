import Heading from "../../layout/Heading";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../../hooks/useAxios";
import { useParams } from "react-router-dom";
import AdminPage from "../AdminPage";
import DeletePostButton from "./DeletePostButton";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
});

export default function EditPost() {
  const [post, setPost] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [fetchingPost, setFetchingPost] = useState(true);
  const [updatingPost, setUpdatingPost] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [updateError, setUpdateError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const http = useAxios();
  let { id } = useParams();
  const url = `wp/v2/posts/${id}`;

  useEffect(function () {
    async function getPost() {
      try {
        const response = await http.get(url);
        console.log("response", response.data);
        setPost(response.data);
      } catch (error) {
        console.log(error);
        setFetchError(error.toString());
      } finally {
        setFetchingPost(false);
      }
    }

    getPost();
  }, []);
  async function onSubmit(data) {
    setUpdatingPost(true);
    setUpdateError(null);
    setUpdated(false);
    console.log(data);
    try {
      const response = await http.put(url, data);
      console.log("response", response.data);
      setUpdated(true);
    } catch (error) {
      console.log("error", error);
      setFetchError(error.toString());
    } finally {
      setUpdatingPost(false);
    }
  }

  if (fetchingPost) return <div>Loading...</div>;
  if (fetchError) return <div>Error Loading post</div>;

  return (
    <>
      <AdminPage>
        <Heading content=" This is Edit Post Page" size="2" />
        <div>
          <div>
            {updated && <div className="success"> The post was updated </div>}
          </div>
          <form className="editPostForm" onSubmit={handleSubmit(onSubmit)}>
            {updateError && <FormError>{updateError}</FormError>}
            <div disabled={updatingPost} className="editContent">
              <div>
                <label>Title</label>
                <input
                  name="title"
                  defaultValue={post.title.rendered}
                  placeholder="Title"
                  {...register("title")}
                />
                {errors.title && <FormError>{errors.title.message}</FormError>}
              </div>
              <div>
                <label>Content</label>
                <input
                  name="content"
                  defaultValue={post.content.rendered}
                  placeholder="Content"
                  {...register("content")}
                />
              </div>
              <div className="editCtas">
                <button className="updateCTA">Update</button>
                <DeletePostButton id={post.id} />
              </div>
            </div>
          </form>
        </div>
      </AdminPage>
    </>
  );
}
