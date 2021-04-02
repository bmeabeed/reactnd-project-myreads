# MyReads project

The MyReads project allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

## Install

Th  project found in  [GitHup](https://github.com/bmeabeed/reactnd-project-myreads)

- Fork the the repo
- Clone the project to your local machin 'Chose repository foler in your local machine to clone the project'

`git https://github.com/{Your GitHup account}/reactnd-project-myreads.git`

- checkout the barnch **master**

`git checkout master`

- `cd` into your new folder and run:
  `npm install` to install project dependancies tree


## Getting started


### Step 1: Run your project

   `npm  start` 


### Step 2: Open your browser to use the project
  After running this command `npm  start` you can access the project using your browser    http://localhost:3000

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

    Currently Reading
    Want to Read
    Read


Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. Note that the default value for the control  always be the current shelf the book is in.


The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library. 

When a book is on a bookshelf, it  have the same state on both the main application page and the search page.


The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you  instantly see all of the selections you made on the search page in your library.






