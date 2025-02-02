/* eslint-disable no-unused-vars */
import React, {useContext} from 'react';
import { ProductContext } from '../contexts/ProductContext';

// Components
import Product from './Product';

function Products() {
	const { products, addItem } = useContext(ProductContext);
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
}

// const Products = props => {
// 	return (
// 		<div className="products-container">
// 			{props.products.map(product => (
// 				<Product
// 					key={product.id}
// 					product={product}
// 					addItem={props.addItem}
// 				/>
// 			))}
// 		</div>
// 	);
// };

export default Products;
