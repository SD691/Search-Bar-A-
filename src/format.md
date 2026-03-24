create a modal for the architecture of product
it should be like this
export interface Product {
id: number;
title: string;
price: number;
description: string;
category: string;
image: string;
}

step 2.
create service

get a baseurl -https://fakestoreapi.com/products';
using cnstructor inject httpclient
getproducts function.
take input of searchTerm as string, then take values as observable and product[],
return the value of this function using map
check if searchterm is empty of not. if it is then return the whole result.
else return the product.title.tolowercase.includes trimmed result.

in component.ts file.

create the searchcontrol using formbuilder.
write products
loading
errormessage.

in constructor write productservice

in ngoninit, when component loads we need the complete data, so write

this.form.controls.search.valueChanges.pipe(
startswith('),
debounceTime(),
distinctUntilCHnanged(),
switchMap(searchTerm=>{
this.loading=true,
this.errorMessage=',
return this.productService.getProducts(searchTerm).pipe(catchError(()=>{
this.errorMessage="something went wront while fetching products";
return of([]);
}),
finalize(()=>{
this.loading=false;
})
).subscribe(products=>{
this.products=products.
})
})
)

then in template file.

create div name container
h1 tag product search app

input
type text, [formControl]="searchControl"
placeholder="search pRODUCTS BY TITLE"
class="seach-input"

div with if condition of loading and showing loading

div with if !loading and error message. then showing error message

div with !loading and !errormessae and product lengrh==0 results no products found.

div with @loading and !wrrormessage and productlength>0
nested div
ngfor let products of producrrs
img
h3 product.title
p strong with category and product.category
p strong with price and product.price
p with product.description

and add css to it to show it lile this.
