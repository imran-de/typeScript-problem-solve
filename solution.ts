type formatableValue = string | number | boolean;

const formatValue = (value:formatableValue): formatableValue =>{

    switch(typeof value){
        case 'string':
            return value.toUpperCase() as string;
        case 'number':
            return value * 10 as number;
        case 'boolean':
            return !value as boolean;
        default:
            throw new Error("Invalid type provided. Only string, number, or boolean are allowed.");
    
    }
}

const getLength = (value: string | unknown[]): number =>{

    if(Array.isArray(value)){
        return value.length;
    }else if(typeof value === 'string'){
        return value.length;
    }else{
        throw new Error("Invalid type provided. Only string or array are allowed.");
    }
}

class Person{

    constructor(public readonly name: string, public readonly age: number){}

    public getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }

}

interface Item{
    title: string;
    rating: number;
}
const filterByRating = (items: readonly Item[]):Item[] =>{
    return items.filter(item=> item.rating >=4);
}

interface User{
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
const filterActiveUsers = (users: ReadonlyArray<User>):User[] =>{
    return users.filter(user=> user.isActive);
}

interface Book{
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}
const printBookDetails = (book: Book):void =>{
    console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`);
}


type ArrayType = (string | number)[]; 
const getUniqueValues = (arr1: ArrayType, arr2: ArrayType):ArrayType =>{

    const uniqueArray:ArrayType = [];

    const exist: {[key:string]:boolean} ={};

    const proccessArray = (arr:ArrayType) =>{
        for(let i=0; i< arr.length; i++){
            const value = arr[i];
            const key = String(value);
            if(!exist[key]){
                exist[key] = true;
                uniqueArray.push(value);
            }
        }
    };

    proccessArray(arr1);
    proccessArray(arr2);

    return uniqueArray;
}


interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
  }
  
const calculateTotalPrice = (products: Product[]): number => {
  
    return products.map(product => {
        const basePrice = product.price * product.quantity;
        const discountAmount = product.discount ? (basePrice * product.discount) / 100 : 0;
        return basePrice - discountAmount;
      }).reduce((total, current) => total + current, 0);

};


