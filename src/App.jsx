import { useMemo, useState } from 'react'
import './App.css'
import Logo from './components/Logo'
import CategoryNav from './components/CategoryNav'
import Footer from './components/Footer'
import HeroInfo from './components/HeroInfo'
import Section from './components/Section'
import ProductModal from './components/ProductModal'
import { businessInfo, catalog } from './data/catalogData'

function App() {
  const [selectedCategory, setSelectedCategory] = useState(catalog[0].id)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [modalScrollPosition, setModalScrollPosition] = useState(0)

  const openProductModal = (item) => {
    setModalScrollPosition(window.scrollY)
    setSelectedProduct(item)
  }

  const closeProductModal = () => {
    setSelectedProduct(null)
    requestAnimationFrame(() =>
      window.scrollTo({ top: modalScrollPosition, behavior: 'instant' }),
    )
  }

  const activeSection = useMemo(
    () => catalog.find((section) => section.id === selectedCategory) ?? catalog[0],
    [selectedCategory],
  )

  return (
    <>
    <div className="inicio">
      <Logo businessInfo={businessInfo}/></div>
      <HeroInfo/>

      <div className="page-shell">
        <main className="catalog-app">
          <CategoryNav
            categories={catalog}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <Section section={activeSection} onProductSelect={openProductModal} />
        </main>

        <Footer />
      </div>
      {selectedProduct && (
        <ProductModal
          item={selectedProduct}
          scrollPosition={modalScrollPosition}
          onClose={closeProductModal}
        />
      )}
    </>
  )
}

export default App
