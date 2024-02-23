document.addEventListener("DOMContentLoaded", function() {
    
    var softwareCompany = {
        name: "TechCorp",
        founder: "John Doe",
        yearFounded: 2000,
        products: ["Software A", "Software B", "Software C"]
    };

    
    var softwareInfoContainer = document.getElementById("software-info");
    softwareInfoContainer.innerHTML = `
        <h2>${softwareCompany.name}</h2>
        <p><strong>Founder:</strong> ${softwareCompany.founder}</p>
        <p><strong>Year Founded:</strong> ${softwareCompany.yearFounded}</p>
        <p><strong>Products:</strong> ${softwareCompany.products.join(", ")}</p>
    `;
});
