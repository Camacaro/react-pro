import { ProductCard } from '../components';
import { products } from '../data/products';
import { useShoppingCart } from '../hooks/useShoppingCart';

import '../styles/custom-styles.css';

export const Shoppingpage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart()

  return (
    <div>
      <h1>Shoppingpage</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}>
        
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            className="bg-dark text-white"
            onChange={ onProductCountChange }
            value={shoppingCart[product.id]?.count}
          >
            <ProductCard.Image className='custom-imge' style={{
              boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
            }} />

            <ProductCard.Title 
              className="text-white text-bold" 
            />

            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
        
      </div>


      <div className='shopping-cart'>
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard 
            key={key}
            product={product}
            className="bg-dark text-white"
            onChange={ onProductCountChange }
            value={product.count}
            style={{
              width: '100px',
            }}
          >
            <ProductCard.Image className='custom-imge' style={{
              boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
            }} />

            <ProductCard.Buttons 
              className="custom-buttons" 
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            />
          </ProductCard>
        ))}

      </div>
    </div>
  )
}
