import { ProductCard } from '../components';
import { products } from '../data/products';

import '../styles/custom-styles.css';

const product = products[0];

export const Shoppingpage = () => {

  return (
    <div>
      <h1>Shoppingpage</h1>
      <hr />

      <ProductCard 
        product={product}
        className="bg-dark text-white"
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
              <ProductCard.Image className='custom-imge' style={{
                boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
              }} />

              <ProductCard.Title 
                className="text-white text-bold" 
              />

              <ProductCard.Buttons className="custom-buttons" />

              <button onClick={reset}> Reset</button>
              <button onClick={() => increaseBy(-2)}> -2 </button>

              {
                !isMaxCountReached && (
                  <button onClick={() => increaseBy(2)}> +2 </button>
                ) 
              }

              <span>count: {count} - maxCount: {maxCount}</span>
            </>
          )
        }
      </ProductCard>

    </div>
  )
}
