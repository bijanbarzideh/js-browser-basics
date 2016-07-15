//creat a book list array
function bookDefine(title,author,numberOfPAges,publishDate){
        this.title = title;
        this.author = author;
        this.numberOfPAges = numberOfPAges;
        this.publishDate =publishDate;
     }
//create function that adds a book and checks if that book exists in the array already
var bookList = [];


function addBook(book){
    for(var i = 0; i < bookList.length; i++) {
        if (book[i].title == book) {
            bookList.push(book)
        }else{
            return false
        }
    }
}

//remove book by title, return boolean true if book was removed, false if no match to book
function removeByTitle(title){
    for(var i = bookList.length-1; i--;){
        if (bookList[i] === title) array.splice(i, 1);
        }else{
            return false
        }
}


// remove book by author,return true if book was removed,false if no match


//get random book, return the book obj or null if no books in array

// get book by title ,find all books that completely match or partially match string title
//return array of book objects for match titles or empty array if none found

//get book by author,find books that match author name complete or partial,return the books that already
//found or empty array if none


//add multiple books in for of an array of book objects, return number of books added

//get authors , find all distinct authors names and return array of strings of the names

// get random author name,return string author name or null if no books in array
