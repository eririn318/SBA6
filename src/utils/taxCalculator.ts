// The calculateTax()function should handle tax calculations for products.
// This function should return the dollar amount that a product is taxed at.
// We are not returning the total cost, only the tax amount in dollars.
// Example:
//  function calculateTax(price, taxRate) {
//   return price * (taxRate / 100);
// }
import Product from '../models/Product'
import {ValidationError,handleValidationError} from '../utils/errorHandler'

const standard_tax_rate = 0.0475
const grocery_tax_rate= 0.03


export default function calculateTax(product: Product):number {
    try{
        if(typeof product.price !== 'number' || product.price < 0){
            throw new ValidationError("Product must be a positive number");
        }

        const priceToTax = product.getPriceWithDiscount();
        let applicableTaxRate: number;

        if(product.category.toLowerCase() === 'groceries'){
            applicableTaxRate = grocery_tax_rate
        }else{
            applicableTaxRate = standard_tax_rate
        }

        const taxedAmount = priceToTax * applicableTaxRate;
        return parseFloat(taxedAmount.toFixed(2));

        }catch(error: any){
            handleValidationError(error);
            return 0; //return 0 tax if an error occurs
        }
}
