import './Post.scss';

function Post({ src, content }) {
  return (
    <div className='section-post'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-xs-12 col-sm-12'>
            <img src={src}></img>
          </div>
          <div className='col-lg-6 col-md-6 col-xs-12 col-sm-12'>
            <div className='post-comment'>
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
  // const elements = threeBest.map((item, index) => {
  //   const { name, src, webp, price } = item;
  //   return (
  //     <Link
  //       to="/productPage"
  //       className="products__item products__best"
  //       key={index}
  //       state={{ from: item }}
  //     >
  //       <picture className="products__img">
  //         <source srcSet={webp} type="image/webp" />
  //         <img src={src} alt="two packs of beans" />
  //       </picture>
  //       <div className="products__name">{name}</div>
  //       <div className="products__price">{price + '$'}</div>
  //     </Link>
  //   );
  // });
  // return <div className="products">{elements}</div>;
}

export default Post;
