import { useEffect, useRef } from 'react'

function ProductModal({ item, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog && !dialog.open) dialog.showModal()
  }, [])

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