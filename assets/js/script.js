document.addEventListener("DOMContentLoaded", function() {
    let games = [];
    let isDataLoaded = false;

    // Fetch games
    fetch("https://faf-games.github.io/games.json")
        .then(response => {
            if (!response.ok) throw new Error("Network error");
            return response.json();
        })
        .then(data => {
            games = data;
            isDataLoaded = true;
        })
        .catch(error => {
            console.error("Fetch error:", error);
            document.getElementById("gameList").innerHTML = "<p>Error loading games</p>";
        });

    // Search function
    document.getElementById("gameSearch").addEventListener("input", function() {
        const input = this.value.trim().toLowerCase();
        const gameList = document.getElementById("gameList");
        
        gameList.innerHTML = "";
        gameList.style.display = "block";

        // Hide if empty
        if (!input) {
            gameList.style.display = "none";
            return;
        }

        // Show loading if data isn't ready
        if (!isDataLoaded) {
            gameList.innerHTML = "<p>Loading games...</p>";
            return;
        }

        // Filter games STARTING with input letter
        const results = games.filter(game => 
            game.name.toLowerCase().startsWith(input)
        );

        // Display results
        if (results.length > 0) {
            results.forEach(game => {
                const item = document.createElement("div");
                item.className = "game-item";
                item.innerHTML = `<a href="https://faf-games.github.io/${game.url}">${game.name}</a>`;
                gameList.appendChild(item);
            });
        } else {
            gameList.innerHTML = "<p>No results found</p>";
        }
    });

    // Close results when clicking outside
    document.addEventListener("click", function(e) {
        if (!e.target.closest("#gameSearch, #gameList")) {
            document.getElementById("gameList").style.display = "none";
        }
    });
});
