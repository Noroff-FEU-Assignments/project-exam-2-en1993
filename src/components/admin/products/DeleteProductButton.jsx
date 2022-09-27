import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";

export default function DeleteProductButton({ id }) {
  const [error, setError] = useState(null);

  const http = useAxios();
  const navigate = useNavigate();

  const url = `/wc/store/products/${id}`;

  async function handleDelete() {
    const confirmDelete = window.confirm("Delete this product?");

    if (confirmDelete) {
      try {
        await http.delete(url);
        navigate.push("/admin/products");
      } catch (error) {
        setError(error);
      }
    }
  }
  return (
    <button type="button" className="delete" onClick={handleDelete}>
      {error ? "Deleted" : "Delete"}
    </button>
  );
}

DeleteProductButton.propTypes = {
  id: PropTypes.number.isRequired,
};
