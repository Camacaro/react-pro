import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/ProductCard';

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
        
        <ProductCard product={product}>
          <ProductImage />

          <ProductTitle />

          <ProductButtons />
        </ProductCard>


        <ProductCard product={product}>
          <ProductCard.Image />

          <ProductCard.Title title={'Hola mundo'} />

          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  )
}
