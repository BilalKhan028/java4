document.addEventListener("DOMContentLoaded", function() {
    
    var fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

    
    var fruitsListContainer = document.getElementById("fruits-list");
    fruits.forEach(function(fruit) {
        var listItem = document.createElement("li");
        listItem.textContent = fruit;
        fruitsListContainer.appendChild(listItem);
    });
});
