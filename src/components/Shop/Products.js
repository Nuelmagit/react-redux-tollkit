import ProductItem from './ProductItem';
import classes from './Products.module.css';

const PRODUCTS = [
  { id: 1, price: 100, title: "Product 1", description: "abc" },
  { id: 2, price: 400, title: "Product 2", description: "abc" },
  { id: 3, price: 300, title: "Product 3", description: "abc" },
  { id: 4, price: 200, title: "Product 4", description: "abc" }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {PRODUCTS.map(product => <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
