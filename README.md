
# Foodies

This project is a project created using NextJS. It is a web app where you cam view reicpes for cooking and share your own recipe so that it is available for others as well.


## Getting Started

The project uses fs which is a built-in module in Node.js for working with the file system. 

better-sqlite3 is a package for interacting with SQLite databases in a more efficient way than the standard SQLite package.

 slugify is used to create URL-friendly slugs from strings,
 
  and xss is used for sanitizing HTML input to prevent cross-site scripting attacks


### Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
## Features

You can browse meals uploaded on a sqlite database, and add your faviourite recipe which will be updated on the sqlite databse.

Details of the recipe can be viewed by clicking on the card.

I used a 'getMeals' Function, This function retrieves all meals from the database. It uses a promise to simulate a delay of 5 seconds (5000 milliseconds). Then, it executes a SQL query to select all records from the "meals" table and returns the result.

A server-side function is designed to handle the submission of a form to share a meal. 

ImageSlideshow Component is present in the mainpage and it defines a functional component. Inside the component, it initializes state using the useState hook to track the index of the currently displayed image (currentImageIndex), starting from 0. An interval is set that updates the current image index every 5 seconds (5000 milliseconds). When the index reaches the end of the images array, it resets to 0 to create a looping slideshow. The interval is cleared when the component unmounts to prevent memory leaks.

The owner of recipe can be reached by simply clicking on the name.

## Features

You can browse meals uploaded on a sqlite database, and add your faviourite recipe which will be updated on the sqlite databse.

Details of the recipe can be viewed by clicking on the card.

I used a 'getMeals' Function, This function retrieves all meals from the database. It uses a promise to simulate a delay of 5 seconds (5000 milliseconds). Then, it executes a SQL query to select all records from the "meals" table and returns the result.

A server-side function is designed to handle the submission of a form to share a meal. 

ImageSlideshow Component is present in the mainpage and it defines a functional component. Inside the component, it initializes state using the useState hook to track the index of the currently displayed image (currentImageIndex), starting from 0. An interval is set that updates the current image index every 5 seconds (5000 milliseconds). When the index reaches the end of the images array, it resets to 0 to create a looping slideshow. The interval is cleared when the component unmounts to prevent memory leaks.

The owner of recipe can be reached by simply clicking on the name.

## Conclusion

