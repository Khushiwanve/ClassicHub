-- movies.sql

-- Create the movies table
CREATE TABLE movies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    description TEXT,
    genre VARCHAR(100),
    director VARCHAR(255),
    cast TEXT,
    image VARCHAR(255)
);

-- Insert data into the movies table
INSERT INTO movies (title, year, description, genre, director, cast, image) VALUES
('Pyaasa', 1957, 'A poet struggles to find love and recognition in a cynical world.', 'Drama', 'Guru Dutt', 'Guru Dutt, Waheeda Rehman, Rafiq Anwar', 'assets/images/pyaasa.jpg'),
('Sholay', 1975, 'Two criminals are hired to capture a ruthless bandit.', 'Action', 'Ramesh Sippy', 'Dharmendra, Amitabh Bachchan, Hema Malini', 'assets/images/sholay.jpg'),
('Mughal-e-Azam', 1960, 'A timeless love story between Prince Salim and Anarkali.', 'Historical Drama', 'K. Asif', 'Prithviraj Kapoor, Dilip Kumar, Madhubala', 'assets/images/mughal_e_azam.jpg'),
('Mother India', 1957, 'A woman struggles to raise her children amidst hardship and adversity.', 'Drama', 'Mehboob Khan', 'Nargis, Raj Kumar, Leela Chitnis', 'assets/images/mother_india.jpg'),
('Dilwale Dulhania Le Jayenge', 1995, 'A love story that overcomes family opposition and cultural barriers.', 'Romance', 'Aditya Chopra', 'Shah Rukh Khan, Kajol, Amrish Puri', 'assets/images/ddlj.jpg');
