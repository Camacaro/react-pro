import { ProductCard } from '../components/ProductCard'

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

        <ProductCard product={product} />

      </div>
    </div>
  )
}
