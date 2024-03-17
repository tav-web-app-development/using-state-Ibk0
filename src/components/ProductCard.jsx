import { useState } from 'react';

export default function ProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [itemsInCart, setItemsInCart] = useState(0);

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % product.imageUrls.length);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.imageUrls.length - 1 : prevIndex - 1
    );
  };

  const handleDescriptionToggle = () => {
    setShowDescription((prevShow) => !prevShow);
  };

  const handleAddToCartClick = () => {
    setItemsInCart((prevCount) => prevCount + 1);
    alert(`You have ${itemsInCart + 1} item(s) added to your cart`);
  };

  return (
    <>
      <div id="image-carousel">
        <img
          src={product.imageUrls[currentImageIndex]}
          alt={product.name}
        />
        <button onClick={handleNextClick} disabled={product.imageUrls.length <= 1}>
          Next
        </button>
        <button onClick={handlePrevClick} disabled={product.imageUrls.length <= 1}>
          Previous
        </button>
      </div>

      <h3>{product.name}</h3>
      {showDescription && <p>{product.description}</p>}
      <button onClick={handleDescriptionToggle}>
        {showDescription ? 'Hide Description' : 'Show Description'}
      </button>
      <div className="price">${product.price}</div>

      <button onClick={handleAddToCartClick}>Add to Cart</button>

      {!product.isInStock && <div>The product is out of stock</div>}
    </>
  );
}
