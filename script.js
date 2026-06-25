console.log("Hello world!")
// order form framework
let shoppingList = [];
const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
function getFormInputShopping(){
    const SHOPPING_FIELD = document.getElementById("shoppingField")
    let item = SHOPPING_FIELD.value
    shoppingList.push(item)
    OUTPUT.innerHTML = "<p>You have added "+item+" to your list</p>"
    }
    function displayList(){
      OUTPUT.innerHTML = "<p>Your list:</p>"
      for (i=0;i<shoppingList.length;i++){
        OUTPUT.innerHTML += "<p>"+shoppingList[i]+"</p>"
        console.log(menu[shoppingList]);
      }
    }
const SHOPPING_FIELD = document.getElementById("shoppingField")
shoppingList.push(SHOPPING_FIELD.value)
    OUTPUT.innerHTML += ("<p>Shopping list: "+shoppingList+"</p>")
const hteaml ={
  Price: 3}
const java ={
  price: 3
}
const dummy = "how did you buys this"
  const menu = [dummy, hteaml, java]

// Accessing the cost

