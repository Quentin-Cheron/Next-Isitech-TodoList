// Styles

import styles from "../styles/FormProduct.module.css";
import { useEffect } from "react";
import { useState } from "react";
import CardProduct from "./CardProducts";

export default function FormProduct() {
  const [name, setName] = useState("");
  const [array, setArray] = useState([]);

  const handlerClick = async (e) => {
    e.preventDefault();
    if (name !== "") {
      setArray([...array, name]);
    }
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("products")) !== null) {
      setArray(JSON.parse(localStorage.getItem("products")));
    }
  }, []);

  useEffect(() => {
    if (array?.length > 0) {
      localStorage.setItem("products", JSON.stringify(array));
    }
  }, [array]);

  return (
    <>
      <form className={styles.form} onSubmit={handlerClick}>
        <input
          type="text"
          placeholder="Product Name"
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
        />
        <button className={styles.button}>Add Task</button>
      </form>

      <div className={styles.groupProducts}>
        {array?.map((product, index) => (
          <CardProduct
            key={index}
            title={product}
            setArray={setArray}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
