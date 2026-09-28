import { useEffect, useRef } from 'react'

function ProductModal({ item, scrollPosition, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    const body = document.body
    const previousStyles = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
      overflow: body.style.overflow,
    }

    body.style.position = 'fixed'
    body.style.top = `-${scrollPosition}px`
    body.style.left = '0'
    body.style.right = '0'
    body.style.width = '100%'
    body.style.overflow = 'hidden'
    if (dialog && !dialog.open) dialog.showModal()

    return () => {
      Object.assign(body.style, previousStyles)
    }
  }, [scrollPosition])

  return (
    <dialog
      ref={dialogRef}
      className="product-modal"
      aria-labelledby="product-modal-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close()
      }}
    >
      <div className="product-modal__header">
        <div>
          <h2 id="product-modal-title">{item.name}</h2>
          <span className="price-tag">{item.price}</span>
        </div>
        <button
          className="product-modal__close"
          type="button"
          onClick={() => dialogRef.current?.close()}
          aria-label="Cerrar imagen ampliada"
        >
          Cerrar
        </button>
      </div>
      <img className="product-modal__image" src={item.image} alt={item.name} />
      {item.description && <p className="product-modal__description">{item.description}</p>}
    </dialog>
  )
}

export default ProductModal