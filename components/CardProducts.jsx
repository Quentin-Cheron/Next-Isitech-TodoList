import styles from "@/styles/CardProduct.module.css";

export default function CardProduct({ title, setArray, index }) {
  const deleteProduct = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    const newProducts = products.filter((product) => product !== title);
    localStorage.setItem("products", JSON.stringify(newProducts));

    setArray(newProducts);
  };
  return (
    <div className={styles.product} style={{ marginTop: `${index * 60}px` }}>
      <p className={styles.title}>{title}</p>
      <button className={styles.button} onClick={() => deleteProduct()}>
        Delete
      </button>
    </div>
  );
}
