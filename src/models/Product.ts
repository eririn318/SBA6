//1.Develop Product Class:

// interface ProductsList {
//     id: number;
//     title: string;
//     description: string;
//     category: string;
//     price: number;
//     discountPercentage: number;
// }

// export class Product {
//     // Define properties based on ProductsList
//     id: number;
//     title: string;
//     description: string;
//     category: string;
//     price: number;
//     discountPercentage: number;

//     constructor(data: ProductsList) {
//         this.id = data.id;
//         this.title = data.title;
//         this.description = data.description;
//         this.category = data.category;
//         this.price = data.price;
//         this.discountPercentage = data.discountPercentage;
//     }

// getPriceWithDiscount():number{
//     const discountAmount = this.price*(this.discountPercentage/100);
//     const discountedPrice = this.price-discountAmount
//     return parseFloat(discountedPrice.toFixed(2))
// }

// displayDetails(): void{
//     console.log(`Id: ${this.id}`);
//     console.log(`Title: ${this.title}`);
//     console.log(`Discription: ${this.description}`);
//     console.log(`Category: ${this.category}`);
//     console.log(`Price: $${this.price}`);
//     console.log(`discountPercentage: ${this.discountPercentage}%`);
// }
// }
//when you make constructor with object(line23), do this way to test it out
// const newProduct = new Product({
//     id: 1,
//     title:"hello",
//     description:"test",
//     category:"ss",
//     price:100,
//     discountPercentage:5
// })

// console.log(newProduct);
// newProduct.displayDetails()


//1.Develop Product Class:

export default class Product {
    // Define properties based on ProductsList
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    discountPercentage: number;

    constructor(id: number, title: string, price: number, description: string, category: string, discountPercentage: number) {
        this.id = id;
        this.title =title;
        this.price = price;
        this.description = description;
        this.category = category;
        this.discountPercentage = discountPercentage;
    }

    getPriceWithDiscount():number{
        const discountedAmount = this.price*(this.discountPercentage/100);
        const discountedPrice = this.price-discountedAmount
        return parseFloat(discountedPrice.toFixed(2))
    }

    displayDetails(): void{
        console.log(`Id: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Price: $${this.price}`);
        console.log(`Discription: ${this.description}`);
        console.log(`Category: ${this.category}`);
        console.log(`discountPercentage: ${this.discountPercentage}%`);
    }
    }

//test for line 7
//const newProduct = new Product(1,"hello",50,"fff","fff",4)
//console.log(newProduct);
//newProduct.displayDetails()
