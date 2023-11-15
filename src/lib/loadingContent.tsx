import { LoadContainer, ImageLoad, ProductLoad } from '../styles/loading'

export default function LoadingContent() {
  return (
    <LoadContainer>
      <ImageLoad />
      <ProductLoad>
        <h1>.</h1>
        <span>.</span>
        <p>.</p>
        <button>.</button>
      </ProductLoad>
    </LoadContainer>
  )
}
