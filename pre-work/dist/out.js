var el = document.getElementsByTagName("body");
//el[0].innerHTML = "huhu";
var fname = "Mario";
//multi-line-string
var multi = "\n\t<br>\n    hello\n    world\n    my\n    name\n    is\n    " + fname;
//document.write(multi);
//block level variables with type annotation
var uiEl = document.getElementById('menu');
var menu = ['burger', 'wrapper', 'toast'];
//for of loop
for (var _i = 0; _i < menu.length; _i++) {
    var val = menu[_i];
    var newPrg = document.createElement('p');
    newPrg.appendChild(document.createTextNode(val));
    uiEl.appendChild(newPrg);
}
//function with return type void
function newItem() {
    //get value of text input, with Type Assertion <HTMLInputElement>
    var newItem = document.getElementById('new-item').value;
    var newPrg = document.createElement('p');
    newPrg.appendChild(document.createTextNode(newItem));
    uiEl.appendChild(newPrg);
}
if (document.getElementById("add-item")) {
    document.getElementById("add-item").addEventListener("click", newItem);
}
//any -> no type-checking
function promotion(item, price) {
    return "Dont miss or promotion for " + item + " for " + price + "\u20AC!";
}
document.getElementById('promotion').innerHTML = promotion('Fries', 1);
//array destructuring
var menu2 = ['burger', 'wrapper', 'toast'];
var itemOne = menu2[0], ItemTwo = menu2[1], itemThree = menu2[2];
console.log(itemThree);
//object destructuring
var obj = {
    first: "first",
    last: "last",
    age: 30
};
var first = obj.first, last = obj.last;
//console.log(first);
//Enumeration, zero based index
var FoodCategories;
(function (FoodCategories) {
    FoodCategories[FoodCategories["Soup"] = 0] = "Soup";
    FoodCategories[FoodCategories["Salad"] = 1] = "Salad";
    FoodCategories[FoodCategories["MainCourse"] = 2] = "MainCourse";
    FoodCategories[FoodCategories["Dessert"] = 3] = "Dessert";
})(FoodCategories || (FoodCategories = {}));
//get value
var soup = FoodCategories[FoodCategories.Soup];
console.log(soup);
//function parameter destructuring
//define the function parameter list as an object destructure pattern
function foo(_a) {
    var x = _a.x;
    console.log(x); // Refer to x directly
}
foo({ x: 1 });
//with default value
function foo2(_a) {
    var _b = _a.x, x = _b === void 0 ? 0 : _b;
    console.log(x); // Refer to x directly
}
foo2({});
//# sourceMappingURL=out.js.map