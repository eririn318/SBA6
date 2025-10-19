// Discount Calculator Module (discountCalculator.ts):
// Create a calculateDiscount() function to handle discount calculations for products.
// This function should return the dollar amount that a product is discounted by. 
//For example, if a product costs $100 and has a 10% discount, the function should return $10.
import Product from '../models/Product'
import {ValidationError, handleValidationError} from '../utils/errorHandler';

export default function calculateDiscount(product: Product): number {
    try{
        if(typeof product.price !== 'number' || product.price <0){
            throw new ValidationError('Product price must be a positive number');
        }
        if(typeof product.discountPercentage !== 'number' || product.discountPercentage<0 || product.discountPercentage >100) {
            throw new ValidationError("Discount percentage must be a number between 0 and 100")
        }

        const discountAmount= product.price*(product.discountPercentage/100);
        return parseFloat(discountAmount.toFixed(2));

    } catch (error:any) {
        handleValidationError(error);
        return 0;
        }//return 0 discount if error occurs
    }