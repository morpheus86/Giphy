Project Overview

This app was created in response to a code Challenge described here: 

For this exercise you will create a simple web application that does the following:

Allow the user to enter any search term
Fetch a list of results from the GIPHY API
Allow the user to sort and filter based on as many parameters you'd like
The exercise should generally not take more than a few hours, although you're free to take as much time as you'd like to work on it.

For the front end, please use React. You can use whatever back end technology you want.

Overview

APP Description 

This app is designed to fetch gifs from an external GIPHY api depending on what is imputed in the search bar. 

The app runs purely on React on the front end. I made a conscious decision not to make a back-end and not to use Redux to manage the state since because of the app structure. It would have been a bit of overkill for such a small app. 

Features / selling point

•	The UI makes use of CSS, materialize-ui framework and media queries to provide a design that is visually pleasing on mobile or desktop devices.
•	The UI can easily be maintained since we just have a few props being passed down in our App component.
•	The application also comes with a built in filter function to spice up your GIPHY search experience. 
•	The GIPHY list we receive can also be filtered multiple times to get a specific GIPHY with a specific rating if it does exist. 
•	The rating method in app allows us to filter the Giphy received depending on the specific rating.
•	Redux was considered at the beginning of the project to store and manage our entire state but the app is simple enough to build it with just React. 

Area for Improvement

Testing: 
I am not comfortable enough with testing React component. Therefore, the app building part came first with some testing after. 

Front-end routing: 
Front end Routing could have also be incorporated via React Router but then again we really don’t need to navigate to a page when searching since every single input in the search bar is making an api call to our external api and our filter functionality when clicked on is just displaying the list being filter. 


