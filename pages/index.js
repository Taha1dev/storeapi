import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Product from '@/components/Product';
import React from 'react';
export default function Home({ products }) {
  const productComponents = products.map((product) => (
    <Product key={product.id} product={product} />
    ))

  return (
    <>
        <main className='container'>
          <div className="main">

          {productComponents}
          </div>
          </main>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();
  return {
    props: {
      products,
    },
  };
}
