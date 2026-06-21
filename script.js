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
        console.log(costs[shoppingList]);
      }
    }
const SHOPPING_FIELD = document.getElementById("shoppingField")
shoppingList.push(SHOPPING_FIELD.value)
    OUTPUT.innerHTML += ("<p>Shopping list: "+shoppingList+"</p>")
const hteaml = (3.00)

const items = ['Coffee', 'Muffin', 'Sandwich'];
const costs = [4.50, 3.00, 3.25, 7.00];

// Accessing the cost

 // Output: 3.25