import Heading from "../../layout/Heading";
import AdminPage from "../AdminPage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../../hooks/useAxios";

// Schema must match the form data
const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
  price: yup.string().required("Price is required"),
  image: yup.string().required("Image URL is required"),
  content: yup.string().required("Content is required"),
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
      console.log(data);
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
        <form className="addProductForm" onSubmit={handleSubmit(onSubmit)}>
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
              {errors.price && <FormError>{errors.price.message}</FormError>}
            </div>
            <div>
              <label>Image Url</label>
              <input
                name="image"
                placeholder="image url"
                {...register("image")}
              />
              {errors.image && <FormError>{errors.image.message}</FormError>}
            </div>
            <div>
              <label>Content</label>
              <textarea
                name="content"
                placeholder="Content"
                {...register("content")}
              />
              {errors.content && (
                <FormError>{errors.content.message}</FormError>
              )}
            </div>

            <button className="addCTA">
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </AdminPage>
    </>
  );
}
