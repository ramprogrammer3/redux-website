
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import currencyFormatter from 'currency-formatter';
import { Link } from "react-router-dom";
import "./details.css";

const Details = () =>{
    const [quantity, setQuantity] = useState(1)
    const {id} =  useParams();
    const dispatch = useDispatch();
    const {product} = useSelector((state)=>state.ProductReducer);
    
    useEffect(()=>{
       dispatch({type : "PRODUCT", id})
    },[id,dispatch])

    const deQuantity = () =>{
        if(quantity > 1){
            setQuantity(quantity - 1);
        }

    }

    if(product == null){
        return <h1> cart is empty </h1>
    }

    return(  
           <>
            
                 <div className="container my-5 ">
                    <div className="row">
                    <div className="col-md-6 img-container ">
                        <img className="img-fluid" src= {product.image} alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-6">
                                <p> product Name : <b>{product.name}</b>  </p>
                                <div className="pricedetails py-2">
                                    <span>  Price : <b className="netPrice">  {currencyFormatter.format(product.price, { code: 'USD' })} </b> </span>  <span> {currencyFormatter.format(product.disCountPrice, { code: 'USD' })} </span>
                                </div>
                                <div>
                                    <span className="btn btn-outline-primary mx-1" onClick={deQuantity}><i className="fa-solid fa-minus"></i></span>
                                    <span className="btn btn-outline-primary mx-1">{quantity}</span>
                                    <span className="btn btn-outline-primary mx-1" onClick={()=>setQuantity(quantity + 1)}><i className="fa-solid fa-plus"></i></span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="btn btn-success d-block" onClick={()=>dispatch({type : "ADD_TO_CART",payload : {product, quantity}})}> Add to Cart </div>
                            </div>
                        </div>

                        <div className="row py-2">
                            <div className="col-12">
                                <h4>Description : </h4>
                                <p> {product.desc} </p>
                            </div>
                        </div>
                        <div className="row">
                            <Link to = "/" className="btn btn-outline-primary m-3">Go to home page </Link>
                            <Link to = "/cart" className="btn btn-outline-primary m-3">Go to Cart page </Link>
                        </div>
                    </div>
                </div>
                </div> 
              
            
           </> 
        
    )
}

export default Details;