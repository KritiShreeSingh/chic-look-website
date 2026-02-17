// Product Data - 40 Products
const products = [
    // Page 1 (1-10)
    { id: 'purse1', name: 'Leather Purse', category: 'Purse', price: 2000, image: 'purse3.jpg', description: 'Premium quality leather purse with elegant design and spacious compartments. Perfect for daily use and special occasions.' },
    { id: 'purse2', name: 'Designer Purse', category: 'Purse', price: 1500, image: 'purse5.jpg', description: 'Stylish designer purse perfect for everyday use and special occasions. Features multiple pockets and premium finish.' },
    { id: 'purse3', name: 'Classic Purse', category: 'Purse', price: 2000, image: 'purse1.jpg', description: 'Timeless classic purse that complements any outfit with sophistication. Made from genuine leather.' },
    { id: 'purse4', name: 'Elegant Purse', category: 'Purse', price: 2000, image: 'purse2.jpg', description: 'Elegant purse featuring refined details and premium craftsmanship. A must-have accessory.' },
    { id: 'purse5', name: 'Trendy Purse', category: 'Purse', price: 2000, image: 'purse5.jpg', description: 'On-trend purse design that keeps you fashionable and organized throughout the day.' },
    { id: 'chiffon', name: 'Chiffon Dress', category: 'Ladies Wear', price: 3000, image: 'siffon.jpg', description: 'Flowing chiffon dress perfect for elegant evening occasions. Lightweight and breathable fabric.' },
    { id: 'satin', name: 'Satin Dress', category: 'Ladies Wear', price: 3000, image: 'synthetic satin.jpg', description: 'Luxurious satin dress with a sophisticated silhouette and beautiful drape. Premium quality.' },
    { id: 'linen', name: 'Linen Pants', category: 'Clothing', price: 2000, image: 'linenPant.jpg', description: 'Comfortable linen pants ideal for casual and smart-casual settings. Breathable and stylish.' },
    { id: 'lace', name: 'Lace Top', category: 'Elegant for Anytime', price: 1500, image: 'lace.jpg', description: 'Delicate lace top that adds elegance to any outfit, day or night. Versatile and chic.' },
    { id: 'louis', name: 'Louis Cardian Perfume', category: 'Fragrance', price: 4000, image: 'louis cardin perfume.jpg', description: 'Exquisite fragrance with sophisticated notes that last all day. A signature scent.' },
    
    // Page 2 (11-20)
    { id: 'skinn', name: 'Skinn Titan Perfume', category: 'Fragrance', price: 4155, image: 'skinn titan.jpg', description: 'Bold and masculine fragrance with powerful woody and spicy notes. Long-lasting formula.' },
    { id: 'forever', name: 'Forever Red Perfume', category: 'Fragrance', price: 5000, image: 'forever red.jpg', description: 'Passionate red fragrance with vibrant floral and fruity accords. Captivating scent.' },
    { id: 'noir', name: 'Noir Perfume', category: 'Fragrance', price: 780, image: 'noir.jpg', description: 'Mysterious noir fragrance with deep, sensual undertones. Perfect for evening wear.' },
    { id: 'cateye', name: 'Cat Eye Glasses', category: 'Accessories', price: 2000, image: 'glass1.jpg', description: 'Vintage-inspired cat eye glasses for a retro-chic look. UV protected lenses.' },
    { id: 'glass2', name: 'Designer Sunglasses', category: 'Accessories', price: 1500, image: 'glass2.jpg', description: 'Premium designer sunglasses with UV protection and style. Fashion-forward design.' },
    { id: 'glass4', name: 'Aviator Sunglasses', category: 'Accessories', price: 1500, image: 'glass4.jpg', description: 'Classic aviator sunglasses that never go out of style. Timeless appeal.' },
    { id: 'glass5', name: 'Classic Sunglasses', category: 'Accessories', price: 1500, image: 'glass5.jpg', description: 'Timeless sunglasses design suitable for any face shape. Versatile accessory.' },
    { id: 'heels1', name: 'Night Evening Heels', category: 'Women', price: 2100, image: 'heels1.jpg', description: 'Glamorous evening heels perfect for special night events. Comfortable and stylish.' },
    { id: 'heels2', name: 'Everyday Heels', category: 'Women', price: 2000, image: 'heels2.jpg', description: 'Comfortable heels designed for all-day wear without compromise. Perfect fit.' },
    { id: 'heels3', name: 'Everyday Shoes', category: 'Women', price: 2100, image: 'heels3.jpg', description: 'Versatile everyday shoes that combine comfort with elegance. Premium quality.' },
    
    // Page 3 (21-30)
    { id: 'heels4', name: 'Designer Heels', category: 'Women', price: 2100, image: 'heels4.jpg', description: 'High-fashion designer heels that make a statement. Luxury footwear.' },
    { id: 'purse6', name: 'Crossbody Purse', category: 'Purse', price: 1800, image: 'purse1.jpg', description: 'Convenient crossbody purse for hands-free shopping and travel. Adjustable strap.' },
    { id: 'purse7', name: 'Evening Clutch', category: 'Purse', price: 2500, image: 'purse2.jpg', description: 'Sophisticated evening clutch with sparkling details. Perfect for formal events.' },
    { id: 'purse8', name: 'Tote Bag', category: 'Purse', price: 1600, image: 'purse3.jpg', description: 'Spacious tote bag perfect for work, shopping, or beach days. Durable material.' },
    { id: 'dress1', name: 'Floral Maxi Dress', category: 'Ladies Wear', price: 3500, image: 'siffon.jpg', description: 'Beautiful floral maxi dress with flowing fabric and vibrant prints. Summer essential.' },
    { id: 'dress2', name: 'Cocktail Dress', category: 'Ladies Wear', price: 4000, image: 'synthetic satin.jpg', description: 'Stunning cocktail dress for parties and formal events. Eye-catching design.' },
    { id: 'top1', name: 'Silk Blouse', category: 'Clothing', price: 2200, image: 'lace.jpg', description: 'Luxurious silk blouse with elegant draping and soft touch. Sophisticated style.' },
    { id: 'perfume1', name: 'Rose Garden Perfume', category: 'Fragrance', price: 3800, image: 'forever red.jpg', description: 'Romantic rose fragrance with fresh floral notes. Delicate and feminine.' },
    { id: 'perfume2', name: 'Ocean Breeze', category: 'Fragrance', price: 3500, image: 'noir.jpg', description: 'Fresh aquatic fragrance reminiscent of ocean waves. Refreshing scent.' },
    { id: 'glass6', name: 'Round Frame Glasses', category: 'Accessories', price: 1800, image: 'glass1.jpg', description: 'Trendy round frame glasses for a modern intellectual look. Fashion statement.' },
    
    // Page 4 (31-40)
    { id: 'glass7', name: 'Sport Sunglasses', category: 'Accessories', price: 1900, image: 'glass2.jpg', description: 'Performance sport sunglasses with impact-resistant lenses. Active lifestyle.' },
    { id: 'glass8', name: 'Vintage Glasses', category: 'Accessories', price: 2200, image: 'glass4.jpg', description: 'Retro vintage glasses that bring back classic fashion. Unique style.' },
    { id: 'shoe1', name: 'Stiletto Heels', category: 'Women', price: 2400, image: 'heels1.jpg', description: 'Sky-high stiletto heels for ultimate glamour and confidence. Show-stopper.' },
    { id: 'shoe2', name: 'Block Heel Sandals', category: 'Women', price: 1900, image: 'heels2.jpg', description: 'Stable block heel sandals combining style with comfort. All-day wear.' },
    { id: 'shoe3', name: 'Wedge Heels', category: 'Women', price: 2200, image: 'heels3.jpg', description: 'Comfortable wedge heels perfect for long hours of wear. Supportive design.' },
    { id: 'shoe4', name: 'Ankle Strap Heels', category: 'Women', price: 2300, image: 'heels4.jpg', description: 'Elegant ankle strap heels with secure fit and stylish appeal. Classic look.' },
    { id: 'purse9', name: 'Wallet Purse', category: 'Purse', price: 1200, image: 'purse5.jpg', description: 'Compact wallet purse for essentials with multiple card slots. Organized style.' },
    { id: 'purse10', name: 'Hobo Bag', category: 'Purse', price: 2100, image: 'purse1.jpg', description: 'Relaxed hobo bag with slouchy silhouette and roomy interior. Casual chic.' },
    { id: 'pants1', name: 'Wide Leg Pants', category: 'Clothing', price: 2400, image: 'linenPant.jpg', description: 'Flowing wide leg pants for effortless elegance and comfort. Modern fit.' },
    { id: 'perfume3', name: 'Vanilla Dreams', category: 'Fragrance', price: 3200, image: 'louis cardin perfume.jpg', description: 'Sweet vanilla fragrance with warm, comforting notes. Cozy scent.' }
];

// Pagination & Filter Variables
let currentPage = 1;
const itemsPerPage = 10;
let filteredProducts = [...products];
let currentModalIndex = 0;
let filteredGalleryItems = [];

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    updatePagination();
});

// Load Products
function loadProducts() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageProducts = filteredProducts.slice(startIndex, endIndex);
    
    const productsGrid = document.getElementById('products-grid');
    productsGrid.innerHTML = '';
    
    pageProducts.forEach((product, index) => {
        const productCard = `
            <div class="col">
                <div class="product-card">
                    ${index < 3 ? '<span class="trending-badge">Trending</span>' : ''}
                    <div class="product-image-wrapper" onclick="showProduct('${product.id}')">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="quick-view">
                        <button class="btn btn-sm btn-dark w-100" onclick="showProduct('${product.id}')">Quick View</button>
                    </div>
                    <div class="product-info">
                        <div class="product-brand">${product.category}</div>
                        <div class="product-name">${product.name}</div>
                        <div class="product-price">NPR ${product.price.toLocaleString()}</div>
                    </div>
                </div>
            </div>
        `;
        productsGrid.innerHTML += productCard;
    });
    
    // Update pagination info
    const start = filteredProducts.length === 0 ? 0 : startIndex + 1;
    const end = Math.min(endIndex, filteredProducts.length);
    document.getElementById('pagination-info').textContent = 
        `Showing ${start}-${end} of ${filteredProducts.length} products`;
    
    // Scroll to products section
    if (currentPage > 1) {
        document.getElementById('new-arrivals').scrollIntoView({ behavior: 'smooth' });
    }
}

// Update Pagination Controls
function updatePagination() {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    const paginationControls = document.getElementById('pagination-controls');
    paginationControls.innerHTML = '';
    
    if (totalPages <= 1) return;
    
    // First button
    paginationControls.innerHTML += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="goToPage(1); return false;">
                <i class="fas fa-angle-double-left"></i>
            </a>
        </li>
    `;
    
    // Previous button
    paginationControls.innerHTML += `
        <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="goToPage(${currentPage - 1}); return false;">
                <i class="fas fa-angle-left"></i>
            </a>
        </li>
    `;
    
    // Page numbers
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);
    
    if (currentPage === 1) {
        endPage = Math.min(3, totalPages);
    } else if (currentPage === totalPages) {
        startPage = Math.max(1, totalPages - 2);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        paginationControls.innerHTML += `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <a class="page-link" href="#" onclick="goToPage(${i}); return false;">${i}</a>
            </li>
        `;
    }
    
    // Next button
    paginationControls.innerHTML += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="goToPage(${currentPage + 1}); return false;">
                <i class="fas fa-angle-right"></i>
            </a>
        </li>
    `;
    
    // Last button
    paginationControls.innerHTML += `
        <li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
            <a class="page-link" href="#" onclick="goToPage(${totalPages}); return false;">
                <i class="fas fa-angle-double-right"></i>
            </a>
        </li>
    `;
}

// Navigate to Page
function goToPage(page) {
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
    if (page < 1 || page > totalPages || page === currentPage) return;
    
    currentPage = page;
    loadProducts();
    updatePagination();
}

// Show All Products
function showAllProducts() {
    filteredProducts = [...products];
    currentPage = 1;
    showHome();
    loadProducts();
    updatePagination();
    document.getElementById('new-arrivals').scrollIntoView({ behavior: 'smooth' });
}

// Filter Products by Category
function filterProducts(category) {
    filteredProducts = products.filter(p => p.category === category);
    currentPage = 1;
    showHome();
    loadProducts();
    updatePagination();
    
    // Close mobile menu
    const navbarCollapse = document.getElementById('navbarMain');
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse) {
        bsCollapse.hide();
    }
}

// Search Products
function searchProducts(query) {
    const searchModal = bootstrap.Modal.getInstance(document.getElementById('searchModal'));
    if (searchModal) searchModal.hide();
    
    filteredProducts = products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
    );
    currentPage = 1;
    showHome();
    loadProducts();
    updatePagination();
}

// Show Product Detail
function showProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    document.getElementById('home-content').style.display = 'none';
    document.getElementById('gallery-content').style.display = 'none';
    document.getElementById('product-detail').style.display = 'block';
    document.getElementById('contact-content').style.display = 'none';
    document.getElementById('signin-content').style.display = 'none';
    document.getElementById('register-content').style.display = 'none';
    document.getElementById('account-content').style.display = 'none';
    
    document.getElementById('detail-image').src = product.image;
    document.getElementById('detail-name').textContent = product.name;
    document.getElementById('detail-category').textContent = product.category;
    document.getElementById('detail-price').textContent = `NPR ${product.price.toLocaleString()}`;
    document.getElementById('detail-description').textContent = product.description;
    document.getElementById('breadcrumb-product').textContent = product.name;
    document.getElementById('qty').value = 1;
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show Home Page
function showHome() {
    document.getElementById('home-content').style.display = 'block';
    document.getElementById('gallery-content').style.display = 'none';
    document.getElementById('product-detail').style.display = 'none';
    document.getElementById('contact-content').style.display = 'none';
    document.getElementById('signin-content').style.display = 'none';
    document.getElementById('register-content').style.display = 'none';
    document.getElementById('account-content').style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Show Gallery Page
function showGallery() {
    document.getElementById('home-content').style.display = 'none';
    document.getElementById('gallery-content').style.display = 'block';
    document.getElementById('product-detail').style.display = 'none';
    document.getElementById('contact-content').style.display = 'none';
    document.getElementById('signin-content').style.display = 'none';
    document.getElementById('register-content').style.display = 'none';
    document.getElementById('account-content').style.display = 'none';
    
    loadGallery('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Close mobile menu
    const navbarCollapse = document.getElementById('navbarMain');
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse) {
        bsCollapse.hide();
    }
}

// Show Contact Page
function showContact() {
    document.getElementById('home-content').style.display = 'none';
    document.getElementById('gallery-content').style.display = 'none';
    document.getElementById('product-detail').style.display = 'none';
    document.getElementById('contact-content').style.display = 'block';
    document.getElementById('signin-content').style.display = 'none';
    document.getElementById('register-content').style.display = 'none';
    document.getElementById('account-content').style.display = 'none';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Close mobile menu
    const navbarCollapse = document.getElementById('navbarMain');
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse) {
        bsCollapse.hide();
    }
}

// Show Sign In Page
function showSignIn() {
    document.getElementById('home-content').style.display = 'none';
    document.getElementById('gallery-content').style.display = 'none';
    document.getElementById('product-detail').style.display = 'none';
    document.getElementById('contact-content').style.display = 'none';
    document.getElementById('signin-content').style.display = 'block';
    document.getElementById('register-content').style.display = 'none';
    document.getElementById('account-content').style.display = 'none';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Close mobile menu
    const navbarCollapse = document.getElementById('navbarMain');
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse) {
        bsCollapse.hide();
    }
}

// Show Register Page
function showRegister() {
    document.getElementById('home-content').style.display = 'none';
    document.getElementById('gallery-content').style.display = 'none';
    document.getElementById('product-detail').style.display = 'none';
    document.getElementById('contact-content').style.display = 'none';
    document.getElementById('signin-content').style.display = 'none';
    document.getElementById('register-content').style.display = 'block';
    document.getElementById('account-content').style.display = 'none';
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Close mobile menu
    const navbarCollapse = document.getElementById('navbarMain');
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse) {
        bsCollapse.hide();
    }
}

// Show Account Page
function showAccount() {
    document.getElementById('home-content').style.display = 'none';
    document.getElementById('gallery-content').style.display = 'none';
    document.getElementById('product-detail').style.display = 'none';
    document.getElementById('contact-content').style.display = 'none';
    document.getElementById('signin-content').style.display = 'none';
    document.getElementById('register-content').style.display = 'none';
    document.getElementById('account-content').style.display = 'block';
    
    showAccountSection('profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Close mobile menu
    const navbarCollapse = document.getElementById('navbarMain');
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse) {
        bsCollapse.hide();
    }
}

// Show Orders (direct to orders section in account)
function showOrders() {
    showAccount();
    setTimeout(() => showAccountSection('orders'), 100);
}

// Submit Sign In Form
function submitSignIn(event) {
    event.preventDefault();
    
    const email = document.getElementById('signinEmail').value;
    const password = document.getElementById('signinPassword').value;
    const remember = document.getElementById('rememberMe').checked;
    
    // In a real application, you would authenticate with a server
    console.log({ email, password, remember });
    
    // Store user session (simplified)
    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    
    // Show success message
    document.getElementById('signinSuccess').style.display = 'block';
    
    // Redirect to account page after 1.5 seconds
    setTimeout(() => {
        showAccount();
        updateUserDisplay();
    }, 1500);
}

// Submit Register Form
function submitRegister(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('regFirstName').value;
    const lastName = document.getElementById('regLastName').value;
    const email = document.getElementById('regEmail').value;
    const phone = document.getElementById('regPhone').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    const newsletter = document.getElementById('regNewsletter').checked;
    
    // Validate passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // In a real application, you would send this to a server
    console.log({ firstName, lastName, email, phone, password, newsletter });
    
    // Store user session (simplified)
    localStorage.setItem('userLoggedIn', 'true');
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userName', `${firstName} ${lastName}`);
    
    // Show success message
    document.getElementById('registerSuccess').style.display = 'block';
    
    // Redirect to account page after 1.5 seconds
    setTimeout(() => {
        showAccount();
        updateUserDisplay();
    }, 1500);
}

// Update User Display
function updateUserDisplay() {
    const email = localStorage.getItem('userEmail') || 'guest@example.com';
    const name = localStorage.getItem('userName') || 'Guest User';
    
    document.getElementById('accountUserEmail').textContent = email;
    document.getElementById('accountUserName').textContent = name;
    
    // Update profile form
    const names = name.split(' ');
    if (names.length >= 2) {
        document.getElementById('profileFirstName').value = names[0];
        document.getElementById('profileLastName').value = names.slice(1).join(' ');
    }
    document.getElementById('profileEmail').value = email;
}

// Show Account Section
function showAccountSection(section) {
    // Hide all sections
    document.querySelectorAll('.account-section').forEach(el => {
        el.style.display = 'none';
    });
    
    // Remove active class from menu items
    document.querySelectorAll('.account-menu li').forEach(el => {
        el.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(`${section}-section`).style.display = 'block';
    
    // Add active class to corresponding menu item
    const menuItems = document.querySelectorAll('.account-menu li');
    const sectionMap = {
        'profile': 0,
        'orders': 1,
        'addresses': 2,
        'wishlist': 3,
        'settings': 4
    };
    
    if (menuItems[sectionMap[section]]) {
        menuItems[sectionMap[section]].classList.add('active');
    }
}

// Update Profile
function updateProfile(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('profileFirstName').value;
    const lastName = document.getElementById('profileLastName').value;
    const email = document.getElementById('profileEmail').value;
    const phone = document.getElementById('profilePhone').value;
    
    // In a real application, you would send this to a server
    console.log({ firstName, lastName, email, phone });
    
    // Update local storage
    localStorage.setItem('userName', `${firstName} ${lastName}`);
    localStorage.setItem('userEmail', email);
    
    updateUserDisplay();
    
    alert('Profile updated successfully!');
}

// Change Password
function changePassword(event) {
    event.preventDefault();
    
    // In a real application, you would validate and send this to a server
    alert('Password changed successfully!');
    event.target.reset();
}

// Sign Out
function signOut() {
    if (confirm('Are you sure you want to sign out?')) {
        localStorage.removeItem('userLoggedIn');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
        
        alert('Signed out successfully!');
        showHome();
    }
}

// Submit Contact Form
function submitContactForm(event) {
    event.preventDefault();
    
    // Get form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    const newsletter = document.getElementById('newsletter').checked;
    
    // In a real application, you would send this data to a server
    console.log({
        firstName,
        lastName,
        email,
        phone,
        subject,
        message,
        newsletter
    });
    
    // Show success message
    document.getElementById('formSuccess').style.display = 'block';
    
    // Reset form
    document.getElementById('contactForm').reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        document.getElementById('formSuccess').style.display = 'none';
    }, 5000);
    
    // Scroll to success message
    document.getElementById('formSuccess').scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Load Gallery
function loadGallery(filter) {
    const galleryGrid = document.getElementById('gallery-grid');
    galleryGrid.innerHTML = '';
    
    // Update active filter button
    document.querySelectorAll('#gallery-filters .btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Filter products
    filteredGalleryItems = products.filter(product => {
        if (filter === 'all') return true;
        if (filter === 'purse') return product.category === 'Purse';
        if (filter === 'clothing') return product.category === 'Ladies Wear' || product.category === 'Clothing' || product.category === 'Elegant for Anytime';
        if (filter === 'perfume') return product.category === 'Fragrance';
        if (filter === 'glasses') return product.category === 'Accessories' && product.name.toLowerCase().includes('glass');
        if (filter === 'heels') return product.category === 'Women';
        return false;
    });
    
    filteredGalleryItems.forEach((product, index) => {
        const galleryItem = `
            <div class="col">
                <div class="gallery-item" onclick="openModal(${index})">
                    <img src="${product.image}" alt="${product.name}">
                    <div class="gallery-item-overlay">
                        <div class="gallery-item-name">${product.name}</div>
                        <div class="gallery-item-category">${product.category}</div>
                    </div>
                </div>
            </div>
        `;
        galleryGrid.innerHTML += galleryItem;
    });
}

// Filter Gallery
function filterGallery(category) {
    loadGallery(category);
}

// Open Image Modal
function openModal(index) {
    currentModalIndex = index;
    const product = filteredGalleryItems[index];
    
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalCaption').innerHTML = 
        `<strong>${product.name}</strong><br>${product.category} - NPR ${product.price.toLocaleString()}`;
    
    modal.show();
}

// Navigate Modal
function navigateModal(direction) {
    currentModalIndex += direction;
    
    if (currentModalIndex < 0) {
        currentModalIndex = filteredGalleryItems.length - 1;
    } else if (currentModalIndex >= filteredGalleryItems.length) {
        currentModalIndex = 0;
    }
    
    const product = filteredGalleryItems[currentModalIndex];
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalCaption').innerHTML = 
        `<strong>${product.name}</strong><br>${product.category} - NPR ${product.price.toLocaleString()}`;
}

// Quantity Controls
function increaseQty() {
    const qtyInput = document.getElementById('qty');
    qtyInput.value = parseInt(qtyInput.value) + 1;
}

function decreaseQty() {
    const qtyInput = document.getElementById('qty');
    if (parseInt(qtyInput.value) > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
    }
}

// Add to Cart
function addToCart() {
    const productName = document.getElementById('detail-name').textContent;
    const qty = document.getElementById('qty').value;
    
    // Show success message
    alert(`Added ${qty} x ${productName} to your bag!`);
    
    // Update cart badge (in a real app, this would update actual cart)
    const cartBadge = document.querySelector('.fa-shopping-bag + .badge');
    if (cartBadge) {
        const currentCount = parseInt(cartBadge.textContent) || 0;
        cartBadge.textContent = currentCount + parseInt(qty);
    }
}

// Add to Wishlist
function addToWishlist() {
    const productName = document.getElementById('detail-name').textContent;
    
    // Show success message
    alert(`Added ${productName} to your wishlist!`);
    
    // Update wishlist badge (in a real app, this would update actual wishlist)
    const wishlistBadge = document.querySelector('.fa-heart + .badge');
    if (wishlistBadge) {
        const currentCount = parseInt(wishlistBadge.textContent) || 0;
        wishlistBadge.textContent = currentCount + 1;
    }
}

// Keyboard Navigation for Modal
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('imageModal');
    const bsModal = bootstrap.Modal.getInstance(modal);
    
    if (bsModal && bsModal._isShown) {
        if (e.key === 'ArrowLeft') {
            navigateModal(-1);
        } else if (e.key === 'ArrowRight') {
            navigateModal(1);
        }
    }
});

// Search on Enter key
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchProducts(this.value);
            }
        });
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});