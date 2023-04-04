import React from 'react';
import Image from 'next/image';
import styles from './../../styles/SingleProduct.module.css';
import Head from 'next/head';
const singleProd = ({ product }) => {
  const { title, price, image, description, id, category } = product;
  return (
    <div className={styles.productContainer}>
    <Head>
      <title>{title}</title>
    </Head>
      <div className={styles.productImage}>
        <Image src={image} width={200} height={200} />
      </div>
      <div className={styles.productDetails}>
        <h1 className={styles.productTitle}>{title}</h1>
        <h2 className={styles.productCategory}>{category}</h2>
        <h3 className={styles.productPrice}>{price}$</h3>
        <p className={styles.productDescription}>{description}</p>
      </div>
    </div>
  );
};
export default singleProd;

export async function getStaticPaths() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  const paths = products.map((product) => {
    return {
      params: { id: product.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const id = context.params.id;
  const req = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await req.json();
  return {
    props: {
      product,
    },
  };
}
