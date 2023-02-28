const shoppingList = [
    "pane",
    "vino",
    "latte",
    "patate",
    "gorgonzola",
    "miele"
];

const ul = document.getElementById("shopping-list");
console.log(ul)

let i = 0;
while (i < shoppingList.length - 1){
    i++;
    console.log(shoppingList[i]);
    const listItem = document.createElement("li");
    listItem.append(shoppingList[i]);
    ul.append(listItem)
    listItem.classList.add("bullet-list-items");
    ul.classList.add("bullet-list");
};



