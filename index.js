// Navigation Menu Generation
const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
        name: 'Our Products',
        id: 'product',
        child: [
            { name: 'Product 1', id: 'p1' },
            { name: 'Product 2', id: 'p2' },
            { name: 'Product 3', id: 'p3' },
            { name: 'Product 4', id: 'p4' },
        ],
    },
    { name: 'Contact Us', id: 'contact' },
];

const menu = document.getElementById('menu');

navbar.forEach(item => {
    const menuItem = document.createElement('li');
    const menuLink = document.createElement('a');
    menuLink.textContent = item.name;
    menuLink.href = `#${item.id}`;
    menuItem.appendChild(menuLink);

    if (item.child) {
        const subMenu = document.createElement('ul');
        item.child.forEach(subItem => {
            const subMenuItem = document.createElement('li');
            const subMenuLink = document.createElement('a');
            subMenuLink.textContent = subItem.name;
            subMenuLink.href = `#${subItem.id}`;
            subMenuItem.appendChild(subMenuLink);
            subMenu.appendChild(subMenuItem);
        });
        menuItem.appendChild(subMenu);
    }

    menu.appendChild(menuItem);
});

// Product Listing and Category Filter
const categoryFilter = document.getElementById('category-filter');
const productList = document.getElementById('product-list');

categoryFilter.addEventListener('change', () => {
    const selectedCategory = categoryFilter.value;

    // Fetch products from the API and filter by category
    fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => {
            const filteredProducts =
                selectedCategory === 'all'
                    ? data
                    : data.filter(product => product.category === selectedCategory);

            // Display the filtered products on the page
            productList.innerHTML = ''; // Clear any previous listings

            filteredProducts.forEach(product => {
                const productItem = document.createElement('div');
                productItem.textContent = product.name;
                productList.appendChild(productItem);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (event) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    // Basic validation
    if (nameInput.value.trim() === '') {
        alert('Please enter your name.');
        event.preventDefault();
    }

    if (emailInput.value.trim() === '') {
        alert('Please enter your email.');
        event.preventDefault();
    }
});
// product-list.js

// Define a function to fetch and display product listings
function displayProductListings() {
    const productList = document.getElementById('product-list');

    // Fetch products from the API
    fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => {
            // Clear any previous listings
            productList.innerHTML = '';

            // Loop through the product data and create list items
            data.forEach(product => {
                const listItem = document.createElement('li');
                listItem.textContent = product.name;
                productList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching products:', error);
        });
}

// Call the function to display product listings
displayProductListings();
const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    {
        name: 'Our Products',
        id: 'product',
        child: [
            { name: 'Product 1', id: 'p1' },
            { name: 'Product 2', id: 'p2' },
            { name: 'Product 3', id: 'p3' },
            { name: 'Product 4', id: 'p4' },
        ],
    },
    { name: 'Contact Us', id: 'contact' },
];

  