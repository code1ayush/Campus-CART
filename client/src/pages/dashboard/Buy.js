import React from "react";
import { useAppContext } from "../../context/appContext";
import { useState, useEffect } from "react";
import axios from "axios";
import "../../buy.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsWhatsapp, BsCartPlus } from "react-icons/bs";
import preloader from "../../assets/preloader.gif";

const Buy = () => {
  const [item, setItem] = useState("");
  const [showModel, setShowModel] = useState(false);
  const [modalData, setModalData] = useState(null);

  const buyItem = async () => {
    try {
      const { data } = await axios.get("/api/v1/item");
      setItem(data);
      // console.log(item);
    } catch (error) {
      console.log("some error");
    }
  };

  // const finalItem = Object.values(item);
  console.log(item);

  useEffect(() => {
    buyItem();
  }, []);

  const showModal = () => {
    setShowModel(true);
  };
  const closeModal = () => {
    setShowModel(false);
  };

  const handleClick = (items) => {
    setModalData(items);
    showModal();
  };

  return (
    <>
      {/* <button onClick={buyItem}>Click</button> */}
      {item ? (
        <div className="main-container">
          {item.things.map((items) => {
            return (
              <>
                <div
                  className="box-container"
                  key={items._id}
                  onClick={() => handleClick(items)}
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
                    <button className="cart-btn">
                      <BsCartPlus />
                    </button>
                  </div>
                  <p className="item-price">{items.price}</p>
                  <div className="last-div">
                    <p>{items.desc}</p>
                    <p>{items.category}</p>
                    <p>{items.contact}</p>
                  </div>
                </div>

                <div className={showModel ? "model show-model" : "model"}>
                  <div className="content1">
                    <button onClick={closeModal} className="close-modal-btn">
                      <AiOutlineCloseCircle className="internal" />
                    </button>
                    {modalData ? (
                      <div className="modal-container">
                        <div className="modal-item1">
                          <img
                            src={`/uploads/${modalData.image}`}
                            alt=""
                            className="modal-img"
                          />
                        </div>
                        <div className="modal-item2">
                          <h4>{modalData.name}</h4>
                          <h4>
                            Price:{" "}
                            <span className="item-price2">
                              {modalData.price}
                            </span>
                          </h4>
                          <h4>
                            Description:{" "}
                            <span className="item-desc">{modalData.desc}</span>
                          </h4>
                          {/* <p>{modalData.category}</p> */}
                          <h4>
                            Contact:{" "}
                            <span className="item-contact">
                              {modalData.contact}
                            </span>
                          </h4>
                          <h4>
                            Chat With Seller :{"  "}
                            <span>
                              {/* <button className="chat-btn" onClick={chat}>
                                <BsWhatsapp className="chat-btn2" />
                              </button> */}
                              <a
                                href={`https://api.whatsapp.com/send?phone=${modalData.contact}`}
                                target="_blank"
                                className="chat-btn"
                              >
                                {" "}
                                <BsWhatsapp className="chat-btn2" />
                              </a>
                            </span>
                          </h4>
                          <button className="add-cart">
                            Add To Cart <BsCartPlus />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div>no data</div>
                    )}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <div className="preloader"></div>
      )}
    </>
  );
};

export default Buy;
