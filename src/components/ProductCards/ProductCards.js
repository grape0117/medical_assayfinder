import { Link } from 'react-router-dom';
import './ProductCards.scss';

function ProductCards({ items }) {
  const elements = items.map((item, index) => {
    const { name, src, webp, country, price } = item;
    return (
      <Link
        to="/productPage"
        className="products__item products__search"
        key={index}
        state={{ from: item }}
      >
        <picture className="products__img">
          <source srcSet={webp} type="image/webp" />
          <img src={src} alt="two packs of beans" />
        </picture>
        <div className="products__title">{name}</div>
        <div className="products__number">{country}</div>
        <div className="products__address">{price + '$'}</div>
      </Link>
    );
  });
  return <div className="products">{elements}</div>;
}

export default ProductCards;
