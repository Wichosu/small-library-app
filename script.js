const newBookButton = document.getElementById('newBookButton')
const newBookForm = document.getElementById('newBookForm')

const summonForm = () => {
  newBookForm.style.visibility = 'visible'
  newBookButton.style.visibility = 'hidden'
}

newBookButton.addEventListener('click', summonForm, false)

