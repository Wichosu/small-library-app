const newBookButton = document.getElementById('newBookButton')
const newBookForm = document.getElementById('newBookForm')
const addBookButton = document.getElementById('addBookButton')
const table = document.getElementById('table')
const inputTitle = document.getElementById('newbook-form-title')
const inputAuthor = document.getElementById('newbook-form-author')
const inputPages = document.getElementById('newbook-form-pages')
const inputState = document.getElementById('newbook-form-state')
var myLibrary = []
var idAsigner = 0 

function Book(title, author, pages, state, id){
  this.title = title
  this.author = author
  this.pages = pages
  this.state = state
  this.id = id
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
/*Delete pseudocode
get id
search id in table
  element with id found so delete element
search id in array
  id found so delete 
*/
const deleteBook = e => {
  let id = e.target.parentElement.id

  table.childNodes.forEach(child => {
    id===child.id? child.remove() : ''
  })
  //remove element from array by id
  myLibrary.splice(id, 1)
}

/*Update read status pseudocode
get status
invert status
update table
update array
*/
const updateStatus = e => {
  let id = e.target.parentElement.id
  //switch values
  e.target.value = !e.target.value
  //Update table
  e.target.textContent = e.target.value
  //update array
  myLibrary[id].state = e.target.value

}

const addBook = () => {
  const row = document.createElement('tr')

  const rowTitle = document.createElement('td')
  const rowAuthor = document.createElement('td')
  const rowPages = document.createElement('td')
  const rowState = document.createElement('td')
  const rowDelete = document.createElement('td')
  
  row.id = idAsigner++
  rowState.value = inputState.checked

  myLibrary.push(new Book(
    inputTitle.value, 
    inputAuthor.value,
    inputPages.value,
    inputState.checked,
    row.id
  ));

  rowTitle.appendChild(document.createTextNode(myLibrary[myLibrary.length-1].title))
  rowAuthor.appendChild(document.createTextNode(myLibrary[myLibrary.length-1].author))
  rowPages.appendChild(document.createTextNode(myLibrary[myLibrary.length-1].pages))
  rowState.appendChild(document.createTextNode(myLibrary[myLibrary.length-1].state))
  rowDelete.appendChild(document.createTextNode('X'))

  rowState.style.cursor = 'pointer'
  rowDelete.style.cursor = 'pointer'

  rowDelete.addEventListener('click', deleteBook)
  rowState.addEventListener('click', updateStatus)

  row.appendChild(rowTitle)
  row.appendChild(rowAuthor)
  row.appendChild(rowPages)
  row.appendChild(rowState)
  row.appendChild(rowDelete)
  

  table.appendChild(row)
}

newBookButton.addEventListener('click', summonForm, false)

addBookButton.addEventListener('click', summonForm, false)