# Book Review Web App

## Overview

This project is a simple Book Review Web App that allows users to browse books, view details, and submit reviews. The frontend is built using **React**, and the backend uses **Node.js** with **Express**. Users can view a list of books, read or write reviews, and see ratings.

## Features

- **Book Listing:** View a list of books with details (title, author, description, and cover image).
- **Review Submission:** Submit a review with a rating (1-5 stars) and a comment.
- **View Reviews:** View existing reviews for each book on the book details page.

## Tech Stack

- **Frontend:** React (located in the `client` folder)
- **Backend:** Node.js with Express (located in the `server` folder)
- **Database:** (e.g., MongoDB, SQLite) [Include details about your choice of database]

## Getting Started

### Prerequisites

To run this project locally, you will need the following installed:

- **Node.js** (v14 or higher)
- **npm** (Node package manager)
- **Git** (for version control)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/book-review.git

2. **Navigate to the Project Directory**

   To navigate to the project directory, run the following command:
   
   ```bash
   cd book-review
   ```
      
3. **Install Dependencies for Backend:**
   Navigate to the server folder and install the necessary packages:
   ```bash
   cd server
   npm install
   ```
     
4. **Install Dependencies for Frontend:**
   Navigate to the client folder and install the necessary packages:

   ```bash
   cd ../client
   npm install
   ```

### Running the App
1. **Start the Backend""
   In the server folder, run the following command:
   ```bash
   npm run dev
   ```
   The backend will start on http://localhost:5000.
2. **Start the Frontend:**
   In the client folder, run:
   ```bash
   npm start
   ```
   The frontend will run on http://localhost:3000.


## API Endpoints

### Retrieve the List of All Books

**GET** `/books`

Retrieve a list of all books available in the system.

### Retrieve Details and Reviews for a Specific Book

**GET** `/books/:id`

Retrieve details and reviews for a specific book, where `:id` is the unique identifier for the book.

### Submit a Review for a Specific Book

**POST** `/books/:id/reviews`

Submit a review for a specific book, where `:id` is the unique identifier for the book.

