import { MyLabel } from 'jcamacaro-my-storybook-components'

export const Storybook = () => {
  return (
    <div>
      <h1>Mi componente de storybook</h1>
      <hr />

      <MyLabel
        fontColor="#5517ac"
        label="Custom Font Color"
        size="h1"
      />

    </div>
  )
}
