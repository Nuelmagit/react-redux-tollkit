import ProductItem from './ProductItem';
import classes from './Products.module.css';

const PRODUCTS = [
  { id: 1, price: 100, title: "Product 1", description: "abc" },
  { id: 2, price: 400, title: "Product 2", description: "abc" },
  { id: 3, price: 300, title: "Product 3", description: "abc" },
  { id: 4, price: 200, title: "Product 4", description: "abc" },
  { id: 5, price: 100, title: "Product 1", description: "abc" },
  { id: 6, price: 400, title: "Product 2", description: "abc" },
  { id: 7, price: 300, title: "Product 3", description: "abc" },
  { id: 8, price: 200, title: "Product 4", description: "abc" }
]

const Products = () => {
  return (
    <div className={classes.products}>
      <h1 className={classes.title}>Store</h1>
      <div className={classes.container}>
      {PRODUCTS.map(product => <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)}
      </div>
    </div>
  );
};

export default Products;
