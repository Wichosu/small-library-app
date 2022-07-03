const newBookButton = document.getElementById('newBookButton')
const newBookForm = document.getElementById('newBookForm')
const addBookButton = document.getElementById('addBookButton')
const table = document.getElementById('table')
let myLibrary = []

function Book(title, author, pages, state){
  this.title = title
  this.author = author
  this.pages = pages
  this.state = state
}

const summonForm = () => {
  if(newBookButton.style.visibility !== 'hidden'){
    newBookForm.style.height = 'fit-content'
    newBookForm.style.visibility = 'visible'
    newBookButton.style.visibility = 'hidden'
  }
  else{
    newBookForm.style.height = '0'
    newBookForm.style.visibility = 'hidden'
    newBookButton.style.visibility = 'visible'
  }

}

const addBook = () => {
  const inputTitle = document.getElementById('newbook-form-title')
  const inputAuthor = document.getElementById('newbook-form-author')
  const inputPages = document.getElementById('newbook-form-pages')
  const inputState = document.getElementById('newbook-form-state')
  myLibrary.push(new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputState.value))
  myLibrary.forEach(element => {
    const row = document.createElement('tr')
    row.appendChild(document.createElement('td').appendChild(document.createTextNode(element.title)))
    table.appendChild(row)
  })
}



newBookButton.addEventListener('click', summonForm, false)

addBookButton.addEventListener('click', summonForm, false)
