import React, { useEffect } from "react";
import { useAppContext } from "../../context/appContext";
import { AiOutlineDelete } from "react-icons/ai";
const Cart = () => {
  const { cart, setCart, func } = useAppContext();

  // useEffect(() => {
  //   console.log(cart);
  // }, []);

  const delCart = (Id) => {
    const del = cart.filter((item) => item._id !== Id);
    setCart(del);
  };

  return (
    <>
      {cart ? (
        <div className="main-container buy-main">
          {cart.map((items) => {
            return (
              <>
                <div
                  className="box-container"
                  // key={items._id}
                  // onClick={() => handleClick(items)}
                >
                  <div className="img-div">
                    <img
                      src={`/uploads/${items.image}`}
                      alt="hello"
                      className="buy-img"
                    />
                  </div>
                  <div className="desc-div">
                    <p className="item-name">{items.name}</p>
                    <button
                      className="cart-btn2"
                      onClick={() => delCart(items._id)}
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                  <p className="item-price">{items.price}</p>
                  <div className="last-div">
                    <p>{items.desc}</p>
                    <p>{items.category}</p>
                    <p>{items.contact}</p>
                  </div>
                </div>
                <button onClick={() => func()}>click</button>
              </>
            );
          })}
        </div>
      ) : (
        <div>Cart is Empty dj</div>
      )}
    </>
  );
};

export default Cart;
