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

// 3. Stato corrente dei filtri
let currentSearch = '';
let currentCategory = 'all';
let currentSortOrder = 'asc'; // 'asc' oppure 'desc'

// 4. Funzione principale di render
function renderBooks() {
  // TODO:
  // - partire dall'array books ✅
  // - applicare filtro per titolo (currentSearch) ✅
  // - applicare filtro per categoria (currentCategory)
  // - ordinare per anno in base a currentSortOrder
  // - svuotare il contenitore bookList ✅
  // - creare e appendere gli <li> per ogni libro risultante
  // - aggiornare il countSpan
  // - mostrare/nascondere emptyMessage se non ci sono risultati



  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(currentSearch.toLowerCase()))

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
  });
});

// 7. Gestione eventi: ordinamento per anno
sortButton.addEventListener('click', function () {
  // TODO:
  // - toggle tra 'asc' e 'desc' in currentSortOrder
  // - aggiornare il testo del bottone (↑ / ↓)
  // - richiamare renderBooks()
});

// 8. Prima renderizzazione
renderBooks();