import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';
import { Product, onChangeArgs } from '../interfaces/interfaces';

import '../styles/custom-styles.css';
import { useState } from 'react';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
}

const product2 = {
  id: '2',
  title: 'Coffee Mug 2',
  img: './coffee-mug2.png',
}

const products: Product[] = [product, product2]

interface ProductInCart extends Product {
  count: number
}

interface IShoppingCart {
  [key: string]: ProductInCart
}

export const Shoppingpage = () => {
  const [shoppingCart, setShoppingCart] = useState<IShoppingCart>({})

  const onProductCountChange = ({count, product}: {count: number, product: Product}) => {
    console.log('onProductCountChange', {count, product})

    // if(count === 0) {

    //   setShoppingCart(prev => {
    //     if(prev[product.id]) delete prev[product.id]
    //     return {...prev}
    //   });

    // } else {

    //   setShoppingCart(prev => ({
    //     ...prev,
    //     [product.id]: {
    //       ...product,
    //       count
    //     }
    //   }));

    // }

    setShoppingCart(prev => {
      if(count === 0) {
        const { [product.id]: toDelete, ...rest } = prev;
        return {...rest}
      }

      return {
        ...prev,
        [product.id]: {
          ...product,
          count
        }
      }

    });
  }

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
        <ProductCard 
          product={product2}
          className="bg-dark text-white"
          // onChange={ () => onProductCountChange() }
          style={{
            width: '100px',
          }}
        >
          <ProductCard.Image className='custom-imge' style={{
            boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
          }} />

          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard 
          product={product}
          className="bg-dark text-white"
          style={{
            width: '100px',
          }}
        >
          <ProductCard.Image className='custom-imge' style={{
            boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
          }} />

          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
      </div>

      <div>
        <pre>
          {JSON.stringify(shoppingCart, null, 2)}
        </pre>
      </div>
    </div>
  )
}
