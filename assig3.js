document.addEventListener("DOMContentLoaded", function() {
    
    var usersContainer = document.getElementById("users-container");

    
    document.getElementById("fetchUsers").addEventListener("click", function() {
        fetchUsers();
    });

    
    function fetchUsers() {
        
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(users => {
                
                renderUsers(users);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    
    function renderUsers(users) {
       
        usersContainer.innerHTML = "";

        
        var userList = document.createElement("ul");

        
        users.forEach(user => {
            var listItem = document.createElement("li");
            listItem.textContent = `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`;
            userList.appendChild(listItem);
        });

        
        usersContainer.appendChild(userList);
    }
});
