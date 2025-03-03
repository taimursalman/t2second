import React from 'react'
import AddToCartButton from '../AddToCartButton'
import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <div className={styles.card}>
        <AddToCartButton />
    </div>
  )
}

export default ProductCard