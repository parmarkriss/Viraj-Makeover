const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const header = document.getElementById('header');
const closeMenu = document.getElementById('close-menu');

// Toggle the menu visibility
menuToggle.addEventListener('click', function () {
    menu.classList.toggle('hidden');
    header.classList.toggle('hidden'); // Hide the header when the menu is open
});

// Close the menu
closeMenu.addEventListener('click', function () {
    menu.classList.add('hidden');
    header.classList.remove('hidden'); // Show the header again when the menu is closed
});

 // Get the current page URL
 const currentPages = window.location.pathname;

 // Select all the navigation links
 const navLinks = document.querySelectorAll('.nav-link');

 // Loop through all links and add active class to the current page's link
 navLinks.forEach(link => {
     if (link.href.includes(currentPages)) {
         link.classList.add('text-[#009746]');  // Apply blue color to the active page link
     } else {
         link.classList.add('text-white'); // Apply white color to the non-active links
     }
 });


 
document.addEventListener("DOMContentLoaded", () => {
  const data = [
    {
      image: "./images/Rectangle 10.png",
      imagedate: "./images/Group 1000004471.png",
      title: "AMAZING MICRO BLADING IN <br/> VESU",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      link: "#",
      date: "23 August",
    },
    {
      image: "./images/Rectangle 10 (1).png",
      imagedate: "./images/Group 1000004474.png",
      title: "SEMI PERMANENT LIPS MAKEUP IN <br/> VESU.",
      description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      link: "#",
      date: "25 August",
    },
    {
      image: "./images/Rectangle 10 (2).png",
      imagedate: "./images/Group 1000004475.png",
      title: "LATEST MICRO BLADIND OFFER <br/> AVAILABLE IN VESU SURAT",
      description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using.",
      link: "#",
      date: "27 August",
    },
  ];

  const cardContainer = document.getElementById("card-container");
  

  data.forEach((item, index) => {
    const card = document.createElement("div");
    
    // Dynamically add the "hidden" class for cards after the first on mobile
    const isHiddenOnMobile = index > 0 ? "hidden sm:block" : "";
  
    card.className = `shadow-md rounded-lg overflow-hidden ${isHiddenOnMobile}`;
  
    const isGreen = index === 0; 
  
    card.innerHTML = `
      <div class="max-w-md md:max-w-sm xl:max-w-xl bg-[#242424] border border-[#fefefe3b] rounded-lg shadow-md overflow-hidden ">
        <div class="relative">
          <img 
            class="w-full h-56 object-cover rounded-lg" 
            src="${item.image}" 
            alt="${item.title}">
          <img 
            class="absolute top-0 right-5"
            src="${item.imagedate || ''}" 
            alt="${item.title}">
        </div>
        <div class="p-5">
          <h2 class="text-xl font-bold ${isGreen ? 'text-green-500' : 'text-white'} mb-2 tracking-wider">
            ${item.title}
          </h2>
          <p class="text-white mb-4 font ${isGreen ? 'text-white' : 'text-[#B8B8B8]'}">
            ${item.description}
          </p>
          <div class="flex justify-between items-center">
            <a 
              href="${item.link}" 
              class="inline-block text-sm font-medium ${
                isGreen ? 'text-[#009746]' : 'text-white'
              } rounded-lg transition">
              Read More <i class="fa-solid fa-arrow-right"></i>
            </a>
            <span class="text-white"><i class="fa-solid fa-calendar-days pe-1"></i> ${item.date}</span>
          </div>
        </div>
      </div>
    `;
    cardContainer.appendChild(card);
  });
  
});



// product 
const cardsData = [
  { image: 'images/Rectangle 4342.png', title: 'Pure Facial', link: 'productdetails.html' },
  { image: 'images/Rectangle 4348.png', title: 'Exhibition In Surat', link: 'productdetails.html' },
  { image: 'images/Rectangle 4341.png', title: 'Hair Colour', link: 'productdetails.html' },
  { image: 'images/Rectangle 4343.png', title: 'Hair Texture', link: 'productdetails.html' },
  { image: 'images/Rectangle 4344.png', title: 'Bridal Makeup', link: 'productdetails.html' },
  { image: 'images/Rectangle 4347.png', title: 'Groom Makeup', link: 'productdetails.html' },
  { image: 'images/Rectangle 4346.png', title: 'Sider Makeup', link: 'productdetails.html' },
  { image: 'images/Rectangle 4345.png', title: 'Reception Makeup', link: 'productdetails.html' },
  { image: 'images/Rectangle 4342.png', title: 'Skin Treatment', link: 'productdetails.html' },
  { image: 'images/Rectangle 4343.png', title: 'Hair Texture', link: 'productdetails.html' },
  { image: 'images/Rectangle 4344.png', title: 'Bridal Makeup', link: 'productdetails.html' },
  { image: 'images/Rectangle 4342.png', title: 'Pure Facial', link: 'productdetails.html' },
  { image: 'images/Rectangle 4348.png', title: 'Exhibition In Surat', link: 'productdetails.html' },
  { image: 'images/Rectangle 4341.png', title: 'Hair Colour', link: 'productdetails.html' },
];

const cardsPerPage = 8; // Number of cards per page
let currentPage = 1; // Current page

const cardContainer = document.getElementById('card-containers');
const paginationControls = document.getElementById('pagination-controls');

// Function to render cards for the current page
function renderCards(page) {
  cardContainer.innerHTML = ''; // Clear previous cards
  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  // Add cards for the current page
  const currentCards = cardsData.slice(startIndex, endIndex);
  currentCards.forEach(data => {
    const card = `
      <div class="shadow-lg rounded-lg overflow-hidden p-3 border-[1px] border-[#fefefe3b]">
        <img src="${data.image}" alt="${data.title}" class="w-full h-56 rounded-md object-cover bg-center">
        <div class="flex justify-between items-center p-4">
          <h3 class="text-lg font-bold mb-2 text-white font">${data.title}</h3>
          <div>
            <a href="${data.link}" class="bg-[#009746] text-white px-6 py-3 rounded-full hover:bg-green-600 transition font">
              Explore <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>`;
    cardContainer.innerHTML += card;
  });
}

function renderPagination() {
  paginationControls.innerHTML = ''; // Clear previous controls
  const totalPages = Math.ceil(cardsData.length / cardsPerPage);

  // Create "Previous" button
  const prevButton = document.createElement('button');
  prevButton.innerHTML = '<i class="fa-solid fa-chevron-left text-[23px]"></i>'; // Using Font Awesome icon
  prevButton.className = `px-4 py-2 rounded ${
    currentPage === 1
      ? 'text-[#FEFEFE] cursor-not-allowed'
      : ' text-[#FEFEFE]'
  }`;
  prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      renderCards(currentPage);
      renderPagination();
    }
  });
  paginationControls.appendChild(prevButton);

  // Display current page / total pages (e.g., 01 / 02)
  const pageDisplay = document.createElement('span');
  pageDisplay.className = 'px-4 py-2 text-[22px] text-[#FEFEFE]';
  pageDisplay.textContent = `${String(currentPage).padStart(2, '0')} / ${String(totalPages).padStart(2, '0')}`;
  paginationControls.appendChild(pageDisplay);

  // Create "Next" button
  const nextButton = document.createElement('button');
  nextButton.innerHTML = '<i class="fa-solid fa-chevron-right text-[23px]"></i>'; // Using Font Awesome icon
  nextButton.className = `px-4 py-2 rounded ${
    currentPage === totalPages
      ? 'text-[#FEFEFE] cursor-not-allowed'
      : ' text-[#FEFEFE]'
  }`;
  nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderCards(currentPage);
      renderPagination();
    }
  });
  paginationControls.appendChild(nextButton);
}

// Initial render
renderCards(currentPage);
renderPagination();





// artical and news 














