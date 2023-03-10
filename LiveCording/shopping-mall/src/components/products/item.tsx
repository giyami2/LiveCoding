import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { ADD_CART } from "../../graphql/cart";
import { Product } from "../../graphql/products";
import { graphqlFetcher } from "../../queryClient";

const ProductItem = ({
  id,
  imageUrl,
  price,
  title,
  description,
  createdAt,
}: Product) => {
//   const [cartAmount, setCartAmount] = useRecoilState(cartItemSelector(id))
//   const addToCart = () => setCartAmount(prev => (prev || 0) + 1)
  const { mutate: addCart } = useMutation((id: string) => graphqlFetcher(ADD_CART, { id }))

  return (
    <li className="product-item">
      <Link to={`/products/${id}`}>
        {/* <p className="product-item__category">{category}</p> */}
        <p className="product-item__title">{title}</p>
        {/* <p className="product-item__description">{description}</p> */}
        <img className="product-item__image" src={imageUrl} />
        <span className="product-item__price">${price}</span>
      </Link>
        <button className="product-item__add-cart" onClick={() => addCart(id)}>담기</button>
        {/* <span className="product-item__rating">{rating.rate}</span>
            <span className="product-item__rating">{rating.count}</span> */}
    </li>
  );
};

export default ProductItem;
