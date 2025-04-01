// Step 1: Wait for the document to load before running the script
document.addEventListener("DOMContentLoaded", () => {
    
    // Step 2: Declare a variable to store game data
    let games = [];
    
    // Step 3: Get references to the search input field and game list container
    const searchInput = document.getElementById("gameSearch");
    const gameList = document.getElementById("gameList");

    // Step 4: Function to fetch games from the JSON file asynchronously
    async function loadGames() {
        try {
            const response = await fetch("https://faf-games.github.io/games.json"); // Fetch JSON data
            const data = await response.json(); // Convert response to JSON format
            games = data.games; // Store fetched games in the variable
            console.log("Games loaded:", games); // Debugging log
        } catch (error) {
            console.error("Error loading games:", error); // Log errors if fetching fails
        }
    }

    // Step 5: Function to filter and display games based on search input
    function searchGames() {
        const query = searchInput.value.trim().toLowerCase(); // Get and format search input
        gameList.innerHTML = ""; // Clear previous search results
        
        if (!query) { // If search input is empty, hide the game list
            gameList.style.display = "none";
            return;
        }

        // Step 6: Filter games that match the search query
        const filteredGames = games.filter(game => game.name.toLowerCase().includes(query));

        if (filteredGames.length > 0) {
            displayGames(filteredGames); // Display matched games
            gameList.style.display = "block"; // Show results
        } else {
            gameList.style.display = "none"; // Hide list if no match is found
        }
    }

    // Step 7: Function to display search results dynamically
    function displayGames(gameArray) {
        gameArray.forEach(game => {
            const gameItem = document.createElement("div"); // Create a container for each game
            gameItem.classList.add("game-item"); // Assign a CSS class for styling

            const gameImage = document.createElement("img"); // Create image element
            gameImage.src = `https://faf-games.github.io/assets/images/${game.image}`; // Set image source
            gameImage.alt = game.name; // Set alt text for accessibility

            const gameName = document.createElement("span"); // Create text element for game name
            gameName.textContent = game.name; // Set text content

            // Step 8: Add click event to redirect user to the game page
            gameItem.onclick = () => {
                window.location.href = `https://faf-games.github.io/game/${game.url}`;
            };

            gameItem.appendChild(gameImage); // Add image to game item
            gameItem.appendChild(gameName); // Add game name to game item
            gameList.appendChild(gameItem); // Append the game item to the list
        });
    }

    // Step 9: Load games when the page is ready
    loadGames();

    // Step 10: Add event listener to trigger search when user types
    searchInput.addEventListener("input", searchGames);

    // Step 11: Hide results when clicking outside the search bar
    document.addEventListener("click", (event) => {
        if (!searchInput.contains(event.target) && !gameList.contains(event.target)) {
            gameList.style.display = "none";
        }
    });
});
