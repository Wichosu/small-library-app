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

  myLibrary.push(new Book(inputTitle.value, inputAuthor.value, inputPages.value, inputState.checked))

  const row = document.createElement('tr')

  const rowTitle = document.createElement('td')
  const rowAuthor = document.createElement('td')
  const rowPages = document.createElement('td')
  const rowState = document.createElement('td')
  rowTitle.appendChild(document.createTextNode(myLibrary[myLibrary.length-1].title))
  rowAuthor.appendChild(document.createTextNode(myLibrary[myLibrary.length-1].author))
  rowPages.appendChild(document.createTextNode(myLibrary[myLibrary.length-1].pages))
  rowState.appendChild(document.createTextNode(myLibrary[myLibrary.length-1].state))

  row.appendChild(rowTitle)
  row.appendChild(rowAuthor)
  row.appendChild(rowPages)
  row.appendChild(rowState)

  table.appendChild(row)
}



newBookButton.addEventListener('click', summonForm, false)

addBookButton.addEventListener('click', summonForm, false)
