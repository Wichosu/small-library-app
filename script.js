const newBookButton = document.getElementById('newBookButton')
const newBookForm = document.getElementById('newBookForm')
const addBookButton = document.getElementById('addBookButton')
let myLibrary = []

function Book(title, author, pages, state){
  this.title = title
  this.author = author
  this.pages = pages
  this.state = state
}

const summonForm = () => {
  newBookForm.style.visibility = 'visible'
  newBookButton.style.visibility = 'hidden'
}

const addBook = () => {
  const inputTitle = document.getElementById('newbook-form-title')
  const inputAuthor = document.getElementById('newbook-form-author')
  const inputPages = document.getElementById('newbook-form-pages')
  const inputState = document.getElementById('newbook-form-state')
  myLibrary.push(new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputState.value))
  console.log(myLibrary)
}

newBookButton.addEventListener('click', summonForm, false)

//addBookButton.addEventListener('click', addBook, false)
