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
          maxCount: 15
        }}
      >
        {
          () => (
            <>
              <ProductCard.Image className='custom-imge' style={{
                boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
              }} />

              <ProductCard.Title 
                className="text-white text-bold" 
              />

              <ProductCard.Buttons className="custom-buttons" />
            </>
          )
        }
      </ProductCard>

    </div>
  )
}
