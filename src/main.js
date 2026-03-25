// 1. Dati di partenza: array di oggetti libro
const books = [
  { id: 1, title: 'JavaScript Moderno', author: 'Mario Rossi', year: 2020, category: 'Frontend' },
  { id: 2, title: 'Introduzione a HTML & CSS', author: 'Luisa Bianchi', year: 2018, category: 'Frontend' },
  { id: 3, title: 'Node.js per principianti', author: 'Giovanni Verdi', year: 2021, category: 'Backend' },
  { id: 4, title: 'Database con SQL', author: 'Anna Neri', year: 2017, category: 'Backend' },
  { id: 5, title: 'Git e GitHub Essentials', author: 'Sara Blu', year: 2019, category: 'Altro' },
  { id: 6, title: 'Pattern di progettazione web', author: 'Luigi Gialli', year: 2022, category: 'Altro' }
];

// 2. Riferimenti agli elementi del DOM
const searchInput = document.getElementById('search');
const filterButtons = document.querySelectorAll('.btn-filter');
const sortButton = document.getElementById('sortYear');
const bookList = document.getElementById('bookList');
const countSpan = document.getElementById('count');
const emptyMessage = document.getElementById('emptyMessage');
const arrow = document.getElementById("arrow")

// 3. Stato corrente dei filtri
let currentSearch = '';
let currentCategory = 'all';
let currentSortOrder = 'asc'; // 'asc' oppure 'desc'

// 4. Funzione principale di render
function renderBooks() {
  // TODO:
  // - partire dall'array books ✅
  // - applicare filtro per titolo (currentSearch) ✅
  // - applicare filtro per categoria (currentCategory) ✅
  // - ordinare per anno in base a currentSortOrder ✅
  // - svuotare il contenitore bookList ✅
  // - creare e appendere gli <li> per ogni libro risultante ✅
  // - aggiornare il countSpan ✅
  // - mostrare/nascondere emptyMessage se non ci sono risultati ✅


  // prende l'elenco generale e restituisce un array di titoli che rispettano la condizione (searchbar)
  let filteredBooks = books.filter(book => book.title.toLowerCase().includes(currentSearch.toLowerCase()))

  // prende l'elenco già filtrato per titolo e se necessario filtra anche per categoria (bottoni)
  if (currentCategory != "all") {
    filteredBooks = filteredBooks.filter(book => book.category === currentCategory)
  }

  // ordinamento per anno in base al contenuto di currentSortOrder
  filteredBooks.sort((a, b) => (currentSortOrder === "asc") ? a.year - b.year : b.year - a.year);

  countSpan.innerText = filteredBooks.length

  if (filteredBooks.length === 0) { // if (!filtereBooks.length){

    emptyMessage.classList.remove("hidden")
  }
  else {
    emptyMessage.classList.add("hidden")
  }



  // crea l'elenco dei libri in pagina
  bookList.innerHTML = ""
  filteredBooks.forEach(book => {
    const { title, author, category, year } = book
    bookList.innerHTML += `<li> titolo: ${title}, autore: ${author}, categoria: ${category}, anno: ${year}</li>`
  })



}



// 5. Gestione eventi: ricerca
searchInput.addEventListener('input', function () {
  // TODO:
  // - aggiornare currentSearch con il valore dell'input (in minuscolo)
  // - richiamare renderBooks()

  currentSearch = searchInput.value

  renderBooks()
});

// 6. Gestione eventi: filtri categoria
filterButtons.forEach(function (btn) {
  btn.addEventListener('click', function () {
    // TODO:
    // - aggiornare currentCategory leggendo data-category
    // - aggiornare la classe 'active' sui pulsanti
    // - richiamare renderBooks()
    // console.log(e.target.dataset.category)
    // currentCategory = e.target.dataset.category // mettendo come parametro dell'event listener
    currentCategory = btn.dataset.category
    const prevButton = document.querySelector(".active")
    prevButton.classList.remove("active")
    btn.classList.add("active")
    renderBooks()
  });
});

// 7. Gestione eventi: ordinamento per anno
sortButton.addEventListener('click', function () {
  // TODO:
  // - toggle tra 'asc' e 'desc' in currentSortOrder
  // - aggiornare il testo del bottone (↑ / ↓)
  // - richiamare renderBooks()


  if (currentSortOrder === "asc") {
    currentSortOrder = "desc"
    arrow.innerText = "↑"
  }
  else {
    currentSortOrder = "asc"
    arrow.innerText = "↓"
  }

  renderBooks()

});

// 8. Prima renderizzazione
renderBooks();