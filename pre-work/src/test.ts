let el: NodeListOf<HTMLBodyElement> =  document.getElementsByTagName("body");
//el[0].innerHTML = "huhu";

let fname: string = "Mario";

//multi-line-string
let multi = `
	<br>
    hello
    world
    my
    name
    is
    ${fname}`;
//document.write(multi);

//block level variables with type annotation
let uiEl: HTMLElement = document.getElementById('menu');
let menu: Array<string> = ['burger', 'wrapper', 'toast'];

//for of loop
for (var val of menu) {
	let newPrg = document.createElement('p');
	newPrg.appendChild(document.createTextNode(val));
	uiEl.appendChild(newPrg);
}

//function with return type void
function newItem(): void {
	//get value of text input, with Type Assertion <HTMLInputElement>
	let newItem: string = (<HTMLInputElement>document.getElementById('new-item')).value;
	let newPrg: HTMLElement = document.createElement('p');
	newPrg.appendChild(document.createTextNode(newItem));
	uiEl.appendChild(newPrg);
}

if (document.getElementById("add-item")) {
	document.getElementById("add-item").addEventListener("click", newItem);
}

//any -> no type-checking
function promotion (item: string, price: number): any {
	return `Dont miss or promotion for ${item} for ${price}€!`;
}

document.getElementById('promotion').innerHTML = promotion('Fries', 1);

//array destructuring
let menu2: Array<string> = ['burger', 'wrapper', 'toast'];
const [itemOne, ItemTwo, itemThree] = menu2;
console.log(itemThree);

//object destructuring
var obj = {
	first: "first",
	last: "last",
	age: 30
};
var {first, last} = obj;
//console.log(first);

//Enumeration, zero based index
enum FoodCategories {
	Soup,
	Salad,
	MainCourse,
	Dessert
}

//get value
let soup: string = FoodCategories[FoodCategories.Soup];
console.log(soup);

//function parameter destructuring
//define the function parameter list as an object destructure pattern
function foo({ x }): void{
    console.log(x); // Refer to x directly
}
foo({ x: 1 });

//with default value
function foo2({ x = 0}): void{
    console.log(x); // Refer to x directly
}
foo2({});




