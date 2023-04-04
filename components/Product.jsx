import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';

import styles from './../styles/product.module.css'
const Product = ({product}) => {
  const {title,price,id,image} = product
  
  return (
    <div className={styles.product}>
      <Head>
        <title>Products</title>
      </Head>
      <div>
        <Image src={image} width={200} height={200}/>
      </div>
      <ul>
        <li>Title {title}</li>
        <li>Price {price}$</li>
      </ul>
      <Link href={`/products/${id}`} className='btn'>Explore</Link>
    </div>
  )
}
export default Product