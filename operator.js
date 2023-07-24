//  DECLARING AN OBJECT


//1.Normal Declaration

// const item={
//     itemName : 'Bat',
//     Price : 12000,
//     Discount : 205,
//     itemCode : 'SS_Smacker'
// }
// console.log(item.itemCode);


//2.Factory function
//  function item_(){
//     return{
//         itemName : 'Bat',
//         Price : 12000,
//         Discount : 205,
//         itemCode : 'SS_Smacker_Punch',
        
//     }
//  }
//  const item_1 = item_();
//  console.log(item_1.itemName);


//3.Constructor function
// function  Product(name,price,discount,itemcode){
//     this.itemName = name;
//     this.price = price;
//     this.discount = discount;
//     this.itemCode = itemcode;
//     this.discountValue = function(){
//         return price * discount/100;
//     }
// }
// const item_2 = new Product('bat',12000,20,'SS_Smacker_Punch');
// console.log(item_2);


//DECLARING A CLASS

//1.Normal Form

// class Product {
//     constructor(itemName,price,discount,itemCode){
//         this.itemName = itemName;
//         this.price = price;
//         this.discount = discount;
//         this.itemCode = itemCode;
//     }
// }

// const Bat = new Product('Bat', 12000, 20, 'SS_Smacker');


//2.Class Expressions, getter & setter

// const Product1 = class Product{
//     constructor(itemName,price,discount,itemCode){
//         this.itemName = itemName;
//         this.price = price;
//         this.discount = discount;
//         this.itemCode = itemCode;
//     }
//     get getDiscountvalue(){
//         return this.discount;
//     }
//     set setDiscountvalue(value){
//         this.discount = value;
        
//     }
//     discountValue(){
//         return this.discount * this.price/100;
//     }
// };
// let Ball = new Product1('Ball', 499, 10, 'SF');
// console.log(Ball.getDiscountvalue);
// console.log(Ball.setDiscountvalue =15);
// console.log(Ball.discountValue());


//***INHERITANCE & SUPER FUNCTION***//

class Product {
    constructor(itemName){
        this.itemName = itemName;
    }
    getitemName(){
        return this.itemName + ' is a Product';
    }
}

class Sports extends Product{
    constructor(itemName){
        super(itemName);
    }
    getitemName(){
        return this.itemName + ' is a Sports Equipment';
    }
}
const Pencil = new Product('Pencil');
const Bat = new Sports('Bat');
console.log(Pencil.getitemName());
console.log(Bat.getitemName());