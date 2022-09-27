import Heading from "../../layout/Heading";
import AdminPage from "../AdminPage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../../hooks/useAxios";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
});

export default function AddProduct() {
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState(null);

  const navigate = useNavigate();
  const http = useAxios();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setServerError(true);
    setServerError(null);

    data.status = "publish";

    if (data.featured_media === "") {
      data.featured_media = null;
    }

    console.log(data);

    try {
      // const response = await http.post("/wp/v2/posts", data);
      const response = await http.post("/wp/v2/product", data);
      console.log("PRODUCTS-DATA:", response.data);
      // navigate.push("/admin/products");
    } catch (error) {
      console.log("error", error);
      setServerError(error.tostring());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <AdminPage>
        <Heading content=" Add Product" size="2" />
        <form onSubmit={handleSubmit(onSubmit)}>
          {serverError && <FormError>{serverError}</FormError>}
          <div className="addContent" disabled={submitting}>
            <div>
              <label>Name</label>
              <input name="title" placeholder="title" {...register("title")} />
              {errors.title && <FormError>{errors.title.message}</FormError>}
            </div>
            <div>
              <label>Price</label>
              <input name="price" placeholder="price" {...register("price")} />
            </div>
            <div>
              <label>Image</label>
              <input name="url" placeholder="image" {...register("url")} />
            </div>
            <div>
              <label>Content</label>
              <textarea
                name="content"
                placeholder="Content"
                {...register("content")}
              />
            </div>

            <button className="addCta">
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </AdminPage>
    </>
  );
}
