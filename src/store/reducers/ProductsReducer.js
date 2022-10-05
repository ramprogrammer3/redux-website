import image1 from '../../image/1.png'
import image2 from '../../image/2.png'
import image3 from '../../image/3.png'
import image4 from '../../image/4.png'
import image5 from '../../image/5.png'
import image6 from '../../image/6.png'
import image7 from '../../image/7.png'
import image8 from '../../image/8.png'
import image9 from '../../image/9.png'
import image10 from '../../image/10.png'
import image11 from '../../image/11.png'
import image12 from '../../image/12.png'


const initState = {
    products : [
        {id : 1, name : "Item 1", image:image1, price : 20, discount : 2, disCountPrice : 20 -2/100 * 20, quantity : 1, desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eos sapiente odio veniam aperiam vitae placeat non, tempore distinctio voluptatem corporis blanditiis excepturi porro, fuga ipsum magni quam autem dolore!"},
        {id : 2, name : "Item 2", image : image2, price : 30, discount : 5, disCountPrice : 30 -5/100 * 30, quantity : 1, desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eos sapiente odio veniam aperiam vitae placeat non, tempore distinctio voluptatem corporis blanditiis excepturi porro, fuga ipsum magni quam autem dolore!"},

        {id : 3, name : "Item 3", image : image3, price : 100, discount : 5, disCountPrice : 100 -5/100 * 100, quantity : 1, desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eos sapiente odio veniam aperiam vitae placeat non, tempore distinctio voluptatem corporis blanditiis excepturi porro, fuga ipsum magni quam autem dolore!"},
        {id : 4, name : "Item 4", image : image4, price : 100, discount : 5, disCountPrice : 100 -5/100 * 100, quantity : 1, desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eos sapiente odio veniam aperiam vitae placeat non, tempore distinctio voluptatem corporis blanditiis excepturi porro, fuga ipsum magni quam autem dolore!"},
        {id : 5, name : "Item 5", image : image5, price : 100, discount : 5, disCountPrice : 100 -5/100 * 100, quantity : 1, desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eos sapiente odio veniam aperiam vitae placeat non, tempore distinctio voluptatem corporis blanditiis excepturi porro, fuga ipsum magni quam autem dolore!"},
        {id : 6, name : "Item 6", image : image6, price : 100, discount : 5, disCountPrice : 100 -5/100 * 100, quantity : 1, desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eos sapiente odio veniam aperiam vitae placeat non, tempore distinctio voluptatem corporis blanditiis excepturi porro, fuga ipsum magni quam autem dolore!"},
        {id : 7, name : "Item 7", image : image7, price : 100, discount : 5, disCountPrice : 100 -5/100 * 100, quantity : 1, desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eos sapiente odio veniam aperiam vitae placeat non, tempore distinctio voluptatem corporis blanditiis excepturi porro, fuga ipsum magni quam autem dolore!"},
        {id : 8, name : "Item 8", image : image8, price : 100, discount : 5, disCountPrice : 100 -5/100 * 100, quantity : 1, desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eos sapiente odio veniam aperiam vitae placeat non, tempore distinctio voluptatem corporis blanditiis excepturi porro, fuga ipsum magni quam autem dolore!"},
        {id : 9, name : "Item 9", image : image9, price : 100, discount : 5, disCountPrice : 100 -5/100 * 100, quantity : 1, desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eos sapiente odio veniam aperiam vitae placeat non, tempore distinctio voluptatem corporis blanditiis excepturi porro, fuga ipsum magni quam autem dolore!"},
        {id : 10, name : "Item 10", image : image10, price : 100, discount : 5, disCountPrice : 100 -5/100 * 100, quantity : 1, desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eos sapiente odio veniam aperiam vitae placeat non, tempore distinctio voluptatem corporis blanditiis excepturi porro, fuga ipsum magni quam autem dolore!"},
        {id : 11, name : "Item 11", image : image11, price : 100, discount : 5, disCountPrice : 100 -5/100 * 100, quantity : 1, desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eos sapiente odio veniam aperiam vitae placeat non, tempore distinctio voluptatem corporis blanditiis excepturi porro, fuga ipsum magni quam autem dolore!"},
        {id : 12, name : "Item 12", image : image12, price : 100, discount : 5, disCountPrice : 100 -5/100 * 100, quantity : 1, desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus eos sapiente odio veniam aperiam vitae placeat non, tempore distinctio voluptatem corporis blanditiis excepturi porro, fuga ipsum magni quam autem dolore!"},
    ]
}

const ProductReducer = (state = initState, action) =>{

    switch(action.type){
        case "PRODUCT":
            return {...state, product : state.products.find(product => product.id === parseInt(action.id))}
        default:
            return state;
    }

}

export default ProductReducer;