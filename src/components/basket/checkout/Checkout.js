import { useStateValue } from "../../stateProvider";
import CheckoutProduct from "../checkoutProduct/CheckoutProduct";
import Subtotal from "../subtotal/Subtotal";
import "./checkout.css";

const Checkout = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <main className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="banner"
        />
        <div>
          <h3>Hello, {user?.email.split("@")[0]}!</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
          {basket.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              title={item.title}
              rating={item.rating}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <h2>
          <Subtotal />
        </h2>
      </div>
    </main>
  );
};

export default Checkout;
