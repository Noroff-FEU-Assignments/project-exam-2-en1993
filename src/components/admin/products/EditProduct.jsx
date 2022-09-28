import Heading from "../../layout/Heading";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../../hooks/useAxios";
import { useParams } from "react-router-dom";
import AdminPage from "../AdminPage";
import DeleteProductButton from "./DeleteProductButton";

const schema = yup.object().shape({
  title: yup.string().required("Title is required"),
});

export default function EditProduct() {
  const [product, setProduct] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [fetchingProduct, setFetchingProduct] = useState(true);
  const [updatingProduct, setUpdatingProduct] = useState(false);
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
  const url = `/wp/v2/product/${id}`;

  useEffect(function () {
    async function getProduct() {
      try {
        const response = await http.get(url);
        console.log("response", response.data);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
        setFetchError(error.toString());
      } finally {
        setFetchingProduct(false);
      }
    }

    getProduct();
  }, []);
  async function onSubmit(data) {
    setUpdatingProduct(true);
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
      setUpdatingProduct(false);
    }
  }

  if (fetchingProduct) return <div>Loading...</div>;
  if (fetchError) return <div>Error Loading post</div>;

  return (
    <>
      <AdminPage>
        <Heading content="  Edit Product Page" size="2" />
        <div>
          <div>
            {updated && (
              <div className="success"> The product was updated </div>
            )}
          </div>
          <form className="editProductForm" onSubmit={handleSubmit(onSubmit)}>
            {updateError && <FormError>{updateError}</FormError>}
            <div disabled={updatingProduct} className="editContent">
              <div>
                <label>Title</label>
                {/* defaultValue={product.name.rendered} */}
                <input
                  name="title"
                  defaultValue={product.title.rendered}
                  placeholder="title"
                  {...register("title")}
                />
                {errors.title && <FormError>{errors.title.message}</FormError>}
              </div>
              <div>
                <label>Price</label>
                <input
                  name="prices"
                  placeholder="price"
                  {...register("price")}
                />
              </div>
              <div>
                <label>Image</label>
                <input
                  name="image"
                  // defaultValue={product?.images[0]?.src}
                  placeholder="image"
                  {...register("image")}
                />
              </div>
              <div>
                <label>Content</label>
                <input
                  name="content"
                  defaultValue={product.content.rendered}
                  placeholder="Content"
                  {...register("content")}
                />
              </div>
              <div className="editCtas">
                <button className="updateCTA">Update</button>
                <DeleteProductButton id={product.id} />
              </div>
            </div>
          </form>
        </div>
      </AdminPage>
    </>
  );
}
