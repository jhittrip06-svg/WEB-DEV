//search icon
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('site-search');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevents page refresh during testing
  
  const query = searchInput.value.trim();
  if (query) {
    console.log(`Searching for: ${query}`);
    // Submit query or redirect: window.location.href = `/search?q=${encodeURIComponent(query)}`;
  }
});
//search icon


//x icon
const clearBtn = document.getElementById('clear-search-btn');

function toggleClearButton() {
  if (searchInput.value.trim().length > 0) {
    clearBtn.classList.add('visible');
  } else {
    clearBtn.classList.remove('visible');
  }
}

// Show/hide 'X' icon dynamically while typing
searchInput.addEventListener('input', toggleClearButton);

// Clear search field when 'X' is clicked
clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  toggleClearButton();
  searchInput.focus();
});
//x icon