import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components';

import '../styles/custom-styles.css';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  img: './coffee-mug.png',
}

export const Shoppingpage = () => {
  return (
    <div>
      <h1>Shoppingpage</h1>
      <hr />

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
      }}>
        
        <ProductCard 
          product={product}
          className="bg-dark text-white"
        >
          <ProductImage className='custom-imge' />

          <ProductTitle className="text-white text-bold" activeClass="active" />

          <ProductButtons className="custom-buttons" />
        </ProductCard>


        <ProductCard 
          product={product}
          className="bg-dark text-white"
        >
          <ProductCard.Image className='custom-imge' style={{
            boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
          }} />

          <ProductCard.Title 
            title={'Hola mundo'} 
            className="text-white text-bold" 
          />

          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard 
          product={product}
          style={{
            backgroundColor: '#70D1F8',
          }}
        >
          <ProductImage style={{
            boxShadow: '10px 10px 10px rgba(0,0,0,0.5)',
          }} />

          <ProductTitle style={{
            fontWeight: 'bold',
            
          }} />

          <ProductButtons style={{
            display: 'flex',
            justifyContent: 'end'
          }} />
        </ProductCard>
      </div>
    </div>
  )
}
