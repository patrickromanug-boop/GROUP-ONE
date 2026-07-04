// ============================================================
//  DATA
// ============================================================
const allProducts = [
  // accessories
  { id: 1, name: "Italian Bussiness Butter Bag", price: 180000, category: "accessories", img: "images/accessories/Bags/IMG_4947.JPG", discount: "10% off", featured: true },
  { id: 2, name: "Bekia Clothing Leather Bag", price: 120000, category: "accessories", img: "images/accessories/Bags/IMG_4949.JPG", featured: true },
  { id: 3, name: "Cobolt Black Versace Shades2", price: 35000, category: "accessories", img: "images/accessories/shades/IMG_4938.JPG", newArrival: true },
  { id: 4, name: "Cobolt Black Versace Shades", price: 40000, category: "accessories", img: "images/accessories/shades/IMG_4939.JPG", discount: "15% off", featured: true },
  { id: 5, name: "Titanium Green Cedar Earrings set", price: 300000, category: "accessories", img: "images/accessories/women jewelry/IMG_4910.JPG", featured: true },
  { id: 7, name: "Diamond Ice Rocks & Earrings", price: 200000, category: "accessories", img: "images/accessories/women jewelry/IMG_4912.JPG", newArrival: true },
  { id: 8, name: "Berge Bag & Hat combo", price: 135000, category: "accessories", img: "images/accessories/capes/IMG_4978.JPG", newArrival: true },
  { id: 9, name: "Original Nike Golf Capes", price: 50000, category: "accessories", img: "images/accessories/capes/IMG_4973.JPG", newArrival: true },
  { id: 10, name: "Black Navy Cilock Watch", price: 450000, category: "accessories", img: "images/accessories/men jewelry/IMG_4916.JPG", newArrival: true },
  { id: 11, name: "Blue Carrera CR7 Watch", price: 300000, category: "accessories", img: "images/accessories/men jewelry/IMG_4917.JPG", newArrival: true },
  { id: 12, name: "Brown Mema Leather Watch", price: 1000000, category: "accessories", img: "images/accessories/men jewelry/IMG_4918.JPG", newArrival: true },
  { id: 13, name: "Sauvage Dior 100ml Perfume", price: 900000, category: "accessories", img: "images/accessories/perfumes/IMG_4988.JPG", newArrival: true },
  { id: 14, name: "Champaigane Calvin Kein Perfume", price: 1500000, category: "accessories", img: "images/accessories/perfumes/IMG_4989.JPG", newArrival: true },
  { id: 15, name: "Sterio Angel Unisex Shades", price: 100000, category: "accessories", img: "images/accessories/shades/IMG_4944.JPG", newArrival: true },
  // clothes
  { id: 16, name: "Embroidered Men Kanzus", price: 249000, category: "clothes", img: "images/clothes/men wear/IMG_5040.JPG", discount: "20% off", featured: true },
  { id: 17, name: "Modest Maxi CEO Kanzus", price: 189000, category: "clothes", img: "images/clothes/men wear/IMG_5042.JPG", featured: true },
  { id: 18, name: "African Chief Black Men cloth", price: 100000, category: "clothes", img: "images/clothes/men wear/IMG_5044.JPG", newArrival: true },
  { id: 19, name: "Black Haramain Kanzus", price: 200000, category: "clothes", img: "images/clothes/men wear/IMG_5045.JPG", discount: "Free shipping", featured: true },
  { id: 20, name: "Men's Casual Kanzus", price: 145000, category: "clothes", img: "images/clothes/men wear/IMG_5046.JPG", featured: true },
  { id: 21, name: "Elegant Flat Silk Kanzu", price: 99000, category: "clothes", img: "images/clothes/men wear/IMG_5048.JPG", newArrival: true },
  { id: 22, name: "Friday Muslim Wear kanzus", price: 70000, category: "clothes", img: "images/clothes/men wear/IMG_5049.JPG", newArrival: true },
  { id: 23, name: "Matching Iran wear Set", price: 300000, category: "clothes", img: "images/clothes/women wear/IMG_5050.JPG", newArrival: true },
  { id: 24, name: "Sheefon Calum Sharia", price: 150000, category: "clothes", img: "images/clothes/women wear/IMG_5051.JPG", newArrival: true },
  { id: 25, name: "Zari Satin Sharia", price: 500000, category: "clothes", img: "images/clothes/women wear/IMG_5052.JPG", newArrival: true },
  { id: 26, name: "Pure Muslim Sharia", price: 120000, category: "clothes", img: "images/clothes/women wear/IMG_5056.JPG", newArrival: true },
  { id: 27, name: "Colored Two Piece cotton ", price: 100000, category: "clothes", img: "images/clothes/women wear/IMG_5088.JPG", newArrival: true },
  { id: 28, name: "Wavy Colored Skirts", price: 50000, category: "clothes", img: "images/clothes/women wear/IMG_5058.JPG", newArrival: true },
  { id: 29, name: "Full Women Stripped Suits", price: 1500000, category: "clothes", img: "images/clothes/women wear/IMG_5067.JPG", newArrival: true },
  { id: 30, name: "Casual Office Blazers", price: 180000, category: "clothes", img: "images/clothes/women wear/IMG_5061.JPG", newArrival: true },
  // shoes
  { id: 31, name: "Sweet Love Red bottoms Heel", price: 1000000, category: "shoes", img: "images/shoes/office shoes/IMG_5039.JPG", discount: "5% off", featured: true },
  { id: 32, name: "Jiggle Bell Roofers Shoes", price: 119000, category: "shoes", img: "images/shoes/casual shoes/IMG_5006.JPG", featured: true },
  { id: 33, name: "Bridal Lord Lady Heel", price: 400000, category: "shoes", img: "images/shoes/office shoes/IMG_5037.JPG", newArrival: true },
  { id: 34, name: "Colored Unisex Roofers Shoes", price: 200000, category: "shoes", img: "images/shoes/casual shoes/IMG_5008.JPG", discount: "12% off", featured: true },
  { id: 35, name: "Cross Heel Soft Shoes", price: 900000, category: "shoes", img: "images/shoes/office shoes/IMG_5036.JPG", featured: true },
  { id: 36, name: "Oxford Hard Leather Shoes", price: 700000, category: "shoes", img: "images/shoes/office shoes/IMG_4998.JPG", newArrival: true },
  { id: 37, name: "Brown Ebony Leather Shoes", price: 150000, category: "shoes", img: "images/shoes/office shoes/IMG_5002.JPG", newArrival: true },
  { id: 38, name: "Chanel Soft White Heels", price: 150000, category: "shoes", img: "images/shoes/office shoes/IMG_5033.JPG", newArrival: true },
  { id: 39, name: "Masturd Brown Gentle Shoes", price: 500000, category: "shoes", img: "images/shoes/office shoes/IMG_5003.JPG", newArrival: true },
  { id: 40, name: "Mexician Boss Brown shoes", price: 180000, category: "shoes", img: "images/shoes/office shoes/IMG_5005.JPG", newArrival: true },
  { id: 41, name: "New Balance Sneakers", price: 100000, category: "shoes", img: "images/shoes/sneakers/IMG_5001.JPG", newArrival: true },
  { id: 42, name: "Green Volvet Heels", price: 190000, category: "shoes", img: "images/shoes/office shoes/IMG_5032.JPG", newArrival: true },
  { id: 43, name: "Naked Wolf Casual sneakers", price: 100000, category: "shoes", img: "images/shoes/sneakers/IMG_5011.JPG", newArrival: true },
  { id: 44, name: "Nike AirForce Sneakers", price: 120000, category: "shoes", img: "images/shoes/sneakers/IMG_5012.JPG", newArrival: true },
  { id: 45, name: "Easy Freash Boy style ", price: 70000, category: "shoes", img: "images/shoes/sneakers/IMG_5013.JPG", newArrival: true },
];

// Brand constants — kept in one place so they're consistent everywhere on the site
const BRAND = {
  name: "AHMEDZ HUB",
  supportEmail: "care@ahmedzhub.ug",
  supportPhone: "0200 804 020",
  whatsapp: "256700000000", // TODO: replace with the real business WhatsApp number
  address: "Acacia Mall, Level 2, Kampala",
};

// ============================================================
//  STATE
// ============================================================
let currentUser = null;
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCategory = null;   // null = all
let currentSearch = "";
let currentPageNum = 1;
const ITEMS_PER_PAGE = 15;

let chatMessages = JSON.parse(localStorage.getItem('chatMessages')) || [
  { sender: "AHMEDZHUB Support", text: "Hello! Need fashion advice? Ask us!", timestamp: Date.now() }
];

const ADMIN_EMAIL = "admin@ahmedzhub.ug";
const ADMIN_PASS = "admin123";
const ADMIN_NAME = "Style Admin";

// ============================================================
//  CART FUNCTIONS
// ============================================================
function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  const count = cart.reduce((sum, i) => sum + (Number(i.qty) || 0), 0);
  document.getElementById('cartCount').innerText = count;
  renderCartSidebar();
}

function renderCartSidebar() {
  const container = document.getElementById('cartItemsList');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = "<p>Your bag is empty ✨</p>";
    document.getElementById('cartTotal').innerHTML = "Total: UGX 0";
    document.getElementById('upsellSuggestions').innerHTML = "";
    return;
  }

  let html = "";
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    html += `
      <div class='cart-item'>
        <div><b>${item.name}</b> x${item.qty}</div>
        <div>
          UGX ${(item.price * item.qty).toLocaleString()}
          <button class='remove-item' data-id='${item.id}' style='margin-left:12px;background:#a0341f;padding:4px 10px;border-radius:30px;'>🗑️</button>
        </div>
      </div>
    `;
  });

  document.getElementById('cartTotal').innerHTML = `Total: UGX ${total.toLocaleString()}`;
  container.innerHTML = html;

  // Upsell suggestions — show 2 items not already in the cart
  const cartIds = cart.map(i => i.id);
  const upsell = allProducts.filter(p => !cartIds.includes(p.id)).slice(0, 2);
  const upsellHtml = upsell.map(p => `
    <div style="display:flex; justify-content:space-between; margin:8px 0;">
      <span>${p.name}</span>
      <button class="addUpsell" data-id="${p.id}" data-name="${p.name}" data-price="${p.price}">+ Add</button>
    </div>
  `).join('');
  document.getElementById('upsellSuggestions').innerHTML = upsellHtml;

  document.querySelectorAll('.remove-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      cart = cart.filter(i => i.id !== id);
      saveCart();
    });
  });

  document.querySelectorAll('.addUpsell').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const name = btn.dataset.name;
      const price = parseInt(btn.dataset.price);
      const exist = cart.find(i => i.id === id);
      if (exist) exist.qty += 1;
      else cart.push({ id, name, price, qty: 1 });
      saveCart();
    });
  });
}

// ============================================================
//  CHECKOUT / RECEIPT
// ============================================================
function generateReceipt(orderTotal, items) {
  const receipt = `
🏷️ ${BRAND.name} RECEIPT 🏷️
━━━━━━━━━━━━━━━━━━━━━
Date: ${new Date().toLocaleString()}
Customer: ${currentUser?.name || 'Guest'} (${currentUser?.email || 'guest'})
━━━━━━━━━━━━━━━━━━━━━
Items:
${items.map(i => `  ✦ ${i.name} x${i.qty} = UGX ${(i.price * i.qty).toLocaleString()}`).join('\n')}
━━━━━━━━━━━━━━━━━━━━━
TOTAL: UGX ${orderTotal.toLocaleString()}
💳 Payment Successful!
Thank you for shopping at ${BRAND.name}!`;
  alert(receipt);

  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.unshift({
    id: Date.now(),
    user: currentUser?.name || 'Guest',
    email: currentUser?.email || 'guest',
    items: [...items],
    total: orderTotal,
    date: new Date().toISOString()
  });
  localStorage.setItem('orders', JSON.stringify(orders));

  if (currentUser?.isAdmin) refreshAdminDashboard();
}

// ============================================================
//  PRODUCT FILTERING & RENDERING
// ============================================================
function getFilteredProducts() {
  let filtered = [...allProducts];
  if (currentCategory) {
    filtered = filtered.filter(p => p.category === currentCategory);
  }
  if (currentSearch.trim() !== "") {
    const search = currentSearch.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(search));
  }
  return filtered;
}

function productCardHTML(p) {
  return `
    <div class="product-card">
      <div class="product-img"><img src="${p.img}" alt="${p.name}"></div>
      <div class="product-title">${p.name}</div>
      <div class="price">UGX ${p.price.toLocaleString()}</div>
      <button class="btn-add" data-id="${p.id}" data-name="${p.name}" data-price="${p.price}">Add to Cart</button>
    </div>
  `;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const start = (currentPageNum - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);

  let html = `<div class="section-title">${currentCategory ? currentCategory.toUpperCase() + " Collection" : "All Products"}</div>`;
  html += `<div class="product-grid">${paginated.map(productCardHTML).join('')}</div>`;

  html += `<div class="pagination">`;
  for (let i = 1; i <= totalPages; i++) {
    html += `<button class="page-btn ${i === currentPageNum ? 'active' : ''}" data-page="${i}">${i}</button>`;
  }
  html += `</div>`;

  document.getElementById('appContainer').innerHTML = html;
  attachAddToCartEvents();

  document.querySelectorAll('.page-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentPageNum = parseInt(btn.dataset.page);
      renderProducts();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

// ============================================================
//  PAGE RENDERERS — Home, About, Why Us, Contact
// ============================================================

// --- HOME: Hero Banner + Deal + Featured + New Arrivals + Why Choose Us ---
function renderHome() {
  const featured = allProducts.filter(p => p.featured).slice(0, 6);
  const newItems = allProducts.filter(p => p.newArrival).slice(0, 4);

  const html = `
    <div class="home-container">

      <!-- HERO BANNER + CALL TO ACTION -->
      <section class="hero-banner" aria-label="Welcome banner">
        <h1>Elegance & Comfort, Made for You</h1>
        <p>Quality clothing, accessories and shoes — curated for Uganda, delivered to your door.</p>
        <div class="hero-cta-group">
          <button id="heroShopBtn" class="hero-btn primary"><i class="fas fa-bag-shopping"></i> Shop Now</button>
          <a href="https://wa.me/${BRAND.whatsapp}" target="_blank" rel="noopener" class="hero-btn secondary">
            <i class="fa-brands fa-whatsapp"></i> Order on WhatsApp
          </a>
        </div>
      </section>

      <div class="deal-banner">
        <h2>FLASH SALE: UP TO 25% OFF</h2>
        <p>Use code: RATIBU25 | Free shipping on orders over UGX 1M</p>
      </div>

      <div class="section-title">Editor's Pick (Featured)</div>
      <div class="product-grid">${featured.map(productCardHTML).join('')}</div>

      <div class="section-title">Just Landed</div>
      <div class="product-grid">${newItems.map(productCardHTML).join('')}</div>

      <!-- WHY CHOOSE US -->
      <div id="whyUsSection">
        ${whyUsSectionHTML()}
      </div>

      <div class="mv-grid">
        <div class="mv-card"><i class="fas fa-bullhorn fa-2x"></i><h3>Our Mission</h3><p>Bring affordable & trendy fashion to every Ugandan.</p></div>
        <div class="mv-card"><i class="fas fa-globe-africa fa-2x"></i><h3>Vision</h3><p>Africa's leading modest & modern fashion hub.</p></div>
        <div class="mv-card"><i class="fas fa-heart fa-2x"></i><h3>Goal</h3><p>Empower confidence through style & quality.</p></div>
      </div>

    </div>
  `;

  document.getElementById('appContainer').innerHTML = html;
  attachAddToCartEvents();

  // Hero "Shop Now" scrolls to & shows the full catalog
  document.getElementById('heroShopBtn').addEventListener('click', () => {
    currentCategory = null;
    currentSearch = "";
    currentPageNum = 1;
    renderProducts();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// --- Reusable "Why Choose Us" markup, used on Home and its own nav entry ---
function whyUsSectionHTML() {
  return `
    <div class="section-title">Why Choose ${BRAND.name}</div>
    <div class="why-us-grid">
      <div class="why-us-card">
        <i class="fas fa-award"></i>
        <h4>Authentic Quality</h4>
        <p>Every piece is checked for quality before it reaches you — no surprises.</p>
      </div>
      <div class="why-us-card">
        <i class="fas fa-truck-fast"></i>
        <h4>Nationwide Delivery</h4>
        <p>From Kampala to Gulu, Mbarara and beyond — we deliver countrywide.</p>
      </div>
      <div class="why-us-card">
        <i class="fas fa-mobile-screen-button"></i>
        <h4>Easy Mobile Payments</h4>
        <p>Pay with MTN Mobile Money, Airtel Money, card, or cash on delivery.</p>
      </div>
      <div class="why-us-card">
        <i class="fa-brands fa-whatsapp"></i>
        <h4>Real Human Support</h4>
        <p>Chat with us directly on WhatsApp — quick replies, no bots pretending to be human.</p>
      </div>
      <div class="why-us-card">
        <i class="fas fa-rotate-left"></i>
        <h4>Easy Exchanges</h4>
        <p>Wrong size? Swap it hassle-free within 7 days of delivery.</p>
      </div>
    </div>
  `;
}

// --- ABOUT US ---
function renderAbout() {
  const html = `
    <div class="mv-grid">
      <div class="mv-card">
        <h2>📖 Our Story</h2>
        <p>${BRAND.name} began in Namasuba with a passion for diverse fashion — from office elegance to modest luxury.</p>
      </div>
      <div class="mv-card">
        <h2>👥 Our Customers</h2>
        <p>We serve women & men who love quality, modesty and trend.</p>
      </div>
      <div class="mv-card">
        <h2>🤝 The Team</h2>
        <p>Musaazi Ratibu (Founder), Jengwant Desmond (Design Curator), Mrs. Jannat (Customer Love)</p>
      </div>
    </div>
  `;
  document.getElementById('appContainer').innerHTML = html;
}

// --- WHY US (standalone nav page — reuses the same section) ---
function renderWhyUs() {
  document.getElementById('appContainer').innerHTML = `<div class="mv-grid" style="display:block;">${whyUsSectionHTML()}</div>`;
}

// --- CONTACT US ---
function renderContact() {
  const html = `
    <div class="mv-grid" style="flex-direction: column;">
      <div class="mv-card" style="text-align:left;">
        <h2>📞 Get in Touch</h2>
        <p>Phone: ${BRAND.supportPhone}</p>
        <p>Email: ${BRAND.supportEmail}</p>
        <p>📍 ${BRAND.address}</p>
        <p>Chat with us live 7am-9pm</p>

        <div class="contact-social">
          <a href="https://wa.me/${BRAND.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
          <a href="https://instagram.com/ahmedzhub" target="_blank" rel="noopener" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://facebook.com/ahmedzhub" target="_blank" rel="noopener" aria-label="Facebook"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://tiktok.com/@ahmedzhub" target="_blank" rel="noopener" aria-label="TikTok"><i class="fa-brands fa-tiktok"></i></a>
        </div>

        <iframe width="100%" height="220" style="border:0; margin-top:16px; border-radius:12px;" loading="lazy"
          src="https://maps.google.com/maps?q=kampala&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
      </div>

      <div class="mv-card" style="text-align:left;">
        <h2>✉️ Send Us a Message</h2>
        <form id="contactForm"
