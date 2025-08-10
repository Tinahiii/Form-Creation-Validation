// Wait for the DOM to be fully loaded before running the script.
document.addEventListener('DOMContentLoaded', () => {

    // Define the asynchronous function to fetch and display user data.
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            // Await the fetch request and get the response.
            const response = await fetch(apiUrl);
            
            // Await the JSON conversion of the response.
            const users = await response.json();

            // Clear the "Loading..." message.
            dataContainer.innerHTML = '';

            // Create a ul element to hold the user list.
            const userList = document.createElement('ul');

            // Loop through the users array and create a list item for each user.
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the complete list to the container.
            dataContainer.appendChild(userList);

        } catch (error) {
            // Handle any errors that occurred during the fetch.
            console.error('Error fetching data:', error);
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Call the async function to start fetching data.
    fetchUserData();
});
