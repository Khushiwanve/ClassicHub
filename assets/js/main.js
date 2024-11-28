// assets/js/main.js

// Movie data array
const movies = [
    {
        title: "Pyaasa",
        year: 1957,
        description: "A poet struggles to find love and recognition in a cynical world.",
        genre: "Drama",
        director: "Guru Dutt",
        cast: ["Guru Dutt", "Waheeda Rehman", "Rafiq Anwar"],
        image: "assets/images/pyaasa.jpg"
    },
    {
        title: "Sholay",
        year: 1975,
        description: "Two criminals are hired to capture a ruthless bandit.",
        genre: "Action",
        director: "Ramesh Sippy",
        cast: ["Dharmendra", "Amitabh Bachchan", "Hema Malini"],
        image: "assets/images/sholay.jpg"
    },
    {
        title: "Mughal-e-Azam",
        year: 1960,
        description: "A timeless love story between Prince Salim and Anarkali.",
        genre: "Historical Drama",
        director: "K. Asif",
        cast: ["Prithviraj Kapoor", "Dilip Kumar", "Madhubala"],
        image: "assets/images/mughal_e_azam.jpg"
    },
    {
        title: "Mother India",
        year: 1957,
        description: "A woman struggles to raise her children amidst hardship and adversity.",
        genre: "Drama",
        director: "Mehboob Khan",
        cast: ["Nargis", "Raj Kumar", "Leela Chitnis"],
        image: "assets/images/mother_india.jpg"
    },
    {
        title: "Dilwale Dulhania Le Jayenge",
        year: 1995,
        description: "A love story that overcomes family opposition and cultural barriers.",
        genre: "Romance",
        director: "Aditya Chopra",
        cast: ["Shah Rukh Khan", "Kajol", "Amrish Puri"],
        image: "assets/images/ddlj.jpg"
    }
];

// Function to render movie cards
function renderMovies() {
    const movieContainer = document.getElementById('movie-container');
    movies.forEach(movie => {
        const card = `
            <div class="movie-card">
                <img src="${movie.image}" alt="${movie.title} poster" class="movie-poster" />
                <div class="movie-details">
                    <h2 class="movie-title">${movie.title}</h2>
                    <p class="movie-year">${movie.year}</p>
                    <p class="movie-genre">${movie.genre}</p>
                    <p class="movie-description">${movie.description}</p>
                    <p class="movie-director"><strong>Director:</strong> ${movie.director}</p>
                    <p class="movie-cast"><strong>Cast:</strong> ${movie.cast.join(", ")}</p>
                    <a href="/movieDetails.html?title=${movie.title}" class="view-details-btn">View Details</a>
                </div>
            </div>
        `;
        movieContainer.innerHTML += card;
    });
}

// Call renderMovies on page load
document.addEventListener("DOMContentLoaded", renderMovies);
