import Header from "./Header";
import {useSelector} from 'react-redux'
import './home.css';
var currencyFormatter = require('currency-formatter');
const Home = () =>{
    const {products} = useSelector((state)=>state.ProductReducer)
    console.log(products)
    return (
        <div>
            <Header />  
            <div className="container my-5">
                <div className="row">
                    {
                        products.map((item,i)=>(
                            <div className="col-md-3  " key={i}>
                            <div className="shadow p-2 mb-3 card" >
                                <div className="product-image">
                                    <img className="img-fluid " src={item.image} alt="not available" />
                                </div>
                                <div className="content ps-3">
                                    <p> Product Name : <b>{item.name} </b> </p>
                                </div>
                                <div className="row">
                                    <div className="col-6 font">
                                        Price : <b className="netPrice">  {currencyFormatter.format(item.price, { code: 'USD' })} </b>
                                            <span> {item.discount} % </span>
                                    </div>
                                    <div className="col-6 font">
                                        Net price : <b> {currencyFormatter.format(item.disCountPrice, { code: 'USD' })} </b>
                                    </div>
                                </div>
                            </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;