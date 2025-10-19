# Reflection Document:

Write a reflection of roughly 300 words addressing:
**How you implemented TypeScript features and OOP principles.**
# OOP
The class successfully bundles data (properties like id, title, and price) with the logic that acts on that data (getPriceWithDiscount and displayDetails).

getPriceWithDiscount() method is abstraction. It hides the specific, multi-step calculation (converting percentage, subtracting discount, and formatting to two decimal places) from the user. A consumer of the class only needs to call the public method, abstracting away the underlying complexity.

# Typescript features
Explicit Type Annotations for every property (id: number, title: string) and every method return value (: number and : void).it enforces type safety at compile time, guaranteeing that a Product object always has the correct structure and that getPriceWithDiscount will always return a number.

**The challenges you encountered and how you overcame them.**
To make those typscript file and fetch all together is the challenges. I need to check mis-typing and fetching right function and files was the key.
Error handling is hard to understand. I read mdn and w3school description and console to check if error handling is working correctly.


**How you handled asynchronous operations and error management.**
Send request,check if response is NOT ok, then throw and API Error, and parse the data and return it.
I used try/catch method for error manageent