import { ProductCard } from '../components';
import { products } from '../data/products';

const product = products[0];

export const Shoppingpage = () => {

  return (
    <div>
      <h1>Shoppingpage</h1>
      <hr />

      <ProductCard 
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({
            reset,
            increaseBy,
            count,
            isMaxCountReached,
            maxCount
          }) => (
            <>
              <ProductCard.Image />

              <ProductCard.Title />

              <ProductCard.Buttons />
            </>
          )
        }
      </ProductCard>

    </div>
  )
}
