import { FormatListNumberedRtl } from "@material-ui/icons";
import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET,DELL_NUMBERS_BASKET,DELLALL_NUMBERS_BASKET } from "../actions/types";


const initialState = {
    basketNumbers: 0,
    products:[
        {name: "huj", brand: "jopa", img:"",inCart:false,  price:"100",count:"0"}
    ],
    total:0
}



export default (state = initialState,action) => {

    const itemIndex = state.products.findIndex(({name})=> name == action.name);
            const item =state.products[itemIndex];
            let newItem
    
    switch(action.type){
        case ADD_PRODUCT_BASKET:
            console.log("total",state.total)
            if (item){
                newItem ={...item,inCart:true,totalPrice:item.totalPrice+action.price,count:item.count+1};
            }
            else{
                newItem ={name:action.name,brand:action.brand, img:action.img, inCart:true, price:action.price, totalPrice:action.price, count:1};

            }
            if (itemIndex<0){
                return{
                products:[...state.products,newItem],
                basketNumbers:state.basketNumbers + 1,
                total:state.total+action.price
                
            }
            }
            else{return{
                products:[...state.products.slice(0,itemIndex),newItem,...state.products.slice(itemIndex+1)],
                basketNumbers:state.basketNumbers + 1,
                total:state.total+action.price
            }}
            
        case GET_NUMBERS_BASKET:
            return{
                ...state
            }
            
        case DELL_NUMBERS_BASKET:
            console.log("Minus to Basket");
                newItem ={...item,totalPrice:item.totalPrice-action.price,count:item.count-1};

            if (newItem.count==0){
                newItem ={...item,inCart:false};
                console.log(newItem.inCart)
                console.log("blat 0")
                return{
                products:[...state.products.slice(0,itemIndex),newItem,...state.products.slice(itemIndex+1)],
                total:state.total-action.price

            }
            }    
            else{ console.log(newItem.count);return{
                products:[...state.products.slice(0,itemIndex),newItem,...state.products.slice(itemIndex+1)],
                basketNumbers:state.basketNumbers - 1,
                total:state.total-action.price
            }}
           

            case DELLALL_NUMBERS_BASKET:
            console.log("Minus to Basket");
                newItem ={...item,inCart:false,totalPrice:item.totalPrice-item.totalPrice,count:item.count-item.count};
                return{
                products:[...state.products.slice(0,itemIndex),newItem,...state.products.slice(itemIndex+1)],
                total:state.total-item.totalPrice

            }  
        default:
            return state;
    }
}