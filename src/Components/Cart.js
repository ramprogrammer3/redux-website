import { useDispatch, useSelector } from "react-redux";
import currencyFormatter from "currency-formatter";
import "./cart.css";
const Cart = () => {
  const { products,totalPrice,totalQuantity} = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  console.log(products);
  return (
    <div className="container my-5">
      <h3 className="text-center">Your cart </h3>
      {products.length > 0 ? (
        <div className="row">
          <div className="col-9">
            <table className="table">
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Inc/Dec</th>
                  <th>Total Price</th>
                  <th>Remove</th>
                </tr>
                {products.map((item, i) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <img src={item.image} className=" cart-image" alt="" />
                      </td>
                      <td>{item.name}</td>
                      <td>
                        {currencyFormatter.format(item.disCountPrice, {
                          code: "USD",
                        })}
                      </td>
                      <td>
                        <span className="btn btn-outline-primary mx-1" onClick={()=>dispatch({type : "DEC",payload : item.id})}>
                          <i className="fa-solid fa-minus"></i>
                        </span>
                        <span className="btn btn-outline-primary mx-1">
                          {item.quantity}
                        </span>
                        <span className="btn btn-outline-primary mx-1" onClick={()=>dispatch({type : "INC", payload : item.id})}>
                          <i className="fa-solid fa-plus"></i>
                        </span>
                      </td>
                      <td>
                        {currencyFormatter.format(
                          item.disCountPrice * item.quantity,
                          { code: "USD" }
                        )}
                      </td>
                      <td>
                        <span className="remove-item text-danger" onClick={()=>dispatch({type : "REMOVE", payload : item.id})}>
                            <i className="fa-solid fa-trash"></i>
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </thead>
            </table>
          </div>
          <div className="col-3 border p-5">
            <div className="row my-2">
                <div className="col-6">Total Item : </div>
                <div className="col-6"> {totalQuantity} </div>
            </div>
            <div className="row my-2">
                <div className="col-6">Total Price : </div>
                <div className="col-6">{currencyFormatter.format(totalPrice, {code: "USD",})} </div>
            </div>
            <div className="row my-2">
                <button type="button" className="btn btn-outline-primary">Checkout</button>
            </div>
          </div>
        </div>
      ) : (
        "your cart is empty"
      )}
    </div>
  );
};

export default Cart;
