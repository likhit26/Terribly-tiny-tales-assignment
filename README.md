# *** Terribly Tiny Tales Assignment By Likhit***
 ============= ============= =============

This assignment was given by TERRIBLY TINY TALES for the recruitment process. This is a simple web application built using React that allows users to count the words in a text file from https://terriblytinytaleslikhit.netlify.app/ and display the top 20 most frequently occurring words in a bar chart. The user can also export the data as a CSV file.


### `Deployment link`
  https://terriblytinytaleslikhit.netlify.app/


### `Libraries and Plugins Used`

*  React - a JavaScript library for building user interfaces
*  axios - used to communicate with the backend
*  recharts - a charting library for React that makes it easy to create reusable charts
*  loadash - provides functional programming helpers without extending any built-in objects
*  file-saver - enables you to save file in machine




### `Components`

The App component contains all the main logic and functionality of the app. It has three states:

* content: This state holds the contents of the text file fetched from the API.
* wordCounts: This state holds an object containing the word counts for each word in the text file.
* error: This state holds any error that occurs during the fetch operation.




### `Explanation`

In this code, we import the necessary dependencies, including axios for making HTTP requests, lodash for word frequency calculations, recharts for creating the histogram chart, and file-saver for downloading the CSV file.

The fetchData function is triggered when the "Submit" button is clicked. It fetches the contents of the specified URL, parses the content to find word occurrences, sorts the data, and selects the top 20 words. The resulting data is then set in the state.

The handleExport function is called when the "Export" button is clicked. It converts the data into a CSV format and initiates the download of the file.

The return statement renders the "Submit" button and, if data is available, the histogram chart and the "Export"











