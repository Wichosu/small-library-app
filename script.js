const newBookButton = document.getElementById('newBookButton')
const newBookForm = document.getElementById('newBookForm')
const addBookButton = document.getElementById('addBookButton')
const table = document.getElementById('table')
const inputTitle = document.getElementById('newbook-form-title')
const inputAuthor = document.getElementById('newbook-form-author')
const inputPages = document.getElementById('newbook-form-pages')
const inputState = document.getElementById('newbook-form-state')
let myLibrary = []

function Book(title, author, pages, state, destroy){
  this.title = title
  this.author = author
  this.pages = pages
  this.state = state
  this.destroy = destroy
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

  myLibrary.push(new Book(
    inputTitle.value, 
    inputAuthor.value,
    inputPages.value,
    inputState.checked,
    false
  ));

  const row = document.createElement('tr')

  const rowTitle = document.createElement('td')
  const rowAuthor = document.createElement('td')
  const rowPages = document.createElement('td')
  const rowState = document.createElement('td')
  const rowDelete = document.createElement('td')

  rowTitle.appendChild(document.createTextNode(myLibrary[myLibrary.length-1].title))
  rowAuthor.appendChild(document.createTextNode(myLibrary[myLibrary.length-1].author))
  rowPages.appendChild(document.createTextNode(myLibrary[myLibrary.length-1].pages))
  rowState.appendChild(document.createTextNode(myLibrary[myLibrary.length-1].state))
  rowDelete.appendChild(document.createTextNode('X'))

  row.appendChild(rowTitle)
  row.appendChild(rowAuthor)
  row.appendChild(rowPages)
  row.appendChild(rowState)
  row.appendChild(rowDelete)

  table.appendChild(row)
}



newBookButton.addEventListener('click', summonForm, false)

addBookButton.addEventListener('click', summonForm, false)
