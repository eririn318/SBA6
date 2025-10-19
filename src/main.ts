import Product from "./models/Product";
import { getProducts } from  "./services/apiServices";
import calculateTax from "./utils/taxCalculator";
import calculateDiscount from "./utils/discountCalculator";

//fetch products
async function main () {
    //console.log("A: Main function started.");
    
    //hande errors
    try{
        const apiproducts: Product[] = await getProducts(5);
        if (!apiproducts || apiproducts.length===0){
            console.log("No products were fetched from the API");
            return
        }
        
        //create Product instances and process data
        const products: Product[] = apiproducts.map((p:any) =>{
            return new Product(
                p.id,
                p.title, 
                p.price,
                p.description, 
                p.category,
                p.discountPercentage
            )
        })
   
   products.forEach(product =>{
   //display basic details
   product.displayDetails();

   //calculate and display discount amount
   const discountAmount = calculateDiscount(product);
   console.log(`Calculated Discount Amount: $${discountAmount}`);

   //get the price after discount
   const discountPrice = product.getPriceWithDiscount();
   console.log(`Price After Discount: $${discountPrice}`);
   
   //calculate and display tax amount
   const taxAmount = calculateTax(product);
   console.log(`Calculated Tax Amount: $${taxAmount}`);

   //calculate final price(dscounted price + tax)
   const finalPrice = discountPrice + taxAmount;
   console.log(`Final Price (Discounted + Tax): $${parseFloat(finalPrice.toFixed(2))}`);
    });

    }catch(error){
    console.log("Application failed to run",error);
    }
    }

    main()
   

