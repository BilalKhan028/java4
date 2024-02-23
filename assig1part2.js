document.addEventListener("DOMContentLoaded", function() {
    
    var car = {
        brand: "Tesla",
        model: "Model S",
        year: 2022,
        drive: function() {
            console.log("The car is being driven.");
        }
    };

    
    var carInfoContainer = document.getElementById("car-info");
    carInfoContainer.innerHTML = `
        <h2>${car.brand} ${car.model}</h2>
        <p><strong>Year:</strong> ${car.year}</p>
    `;

    
    car.drive();
});
