// Product Data

const products = [
  {
    id: 1,
    name: "Minimalist Desk Lamp",
    price: 89.99,
    description:
      "Modern LED desk lamp with adjustable brightness and color temperature.",
    shortDescription: "Modern LED desk lamp with customizable settings.",
    image:
      "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=500",
    images: [
      "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=500",
    ],
    specs: [
      { label: "Material", value: "Aluminum + ABS" },
      { label: "Color Temperature", value: "2700K-6500K" },
      { label: "Power Source", value: "USB-C" },
      { label: "Wattage", value: "10W" },
      { label: "Adjustable Height", value: "Yes" },
      { label: "Warranty", value: "2 Years" },
    ],
    longDescription: `
            Experience perfect lighting for any task with this modern LED desk lamp.
            
            Key Features:
            • Stepless dimming from 10% to 100%
            • Color temperature adjustment from warm to cool
            • Memory function for your preferred settings
            • Touch-sensitive controls
            • Energy-efficient LED technology
            • 50,000-hour lifespan
            
            The minimalist design complements any workspace while providing optimal 
            lighting for reading, working, or studying.
        `,
  },
  {
    id: 2,
    name: "Ergonomic Office Chair",
    price: 299.99,
    description:
      "Premium mesh office chair with lumbar support and adjustable armrests.",
    shortDescription: "Premium ergonomic office chair with full adjustability.",
    image:
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=500",
    images: [
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=500",
    ],
    specs: [
      { label: "Material", value: "Mesh + Metal" },
      { label: "Weight Capacity", value: "300 lbs" },
      { label: "Adjustable Height", value: "Yes" },
      { label: "Lumbar Support", value: "Yes" },
      { label: "Armrest", value: "4D Adjustable" },
      { label: "Warranty", value: "5 Years" },
    ],
    longDescription: `
            Transform your workspace with our premium ergonomic office chair.
            
            Key Features:
            • Breathable mesh back design
            • Advanced lumbar support system
            • 4D adjustable armrests
            • Synchronized tilt mechanism
            • Height-adjustable seat
            • 360-degree swivel base
            
            Designed for long hours of comfortable seating while maintaining 
            proper posture and reducing fatigue.
        `,
  },

  {
    id: 3,
    name: "Wireless Keyboard",
    price: 129.99,
    description: "Slim mechanical keyboard with customizable RGB backlight.",
    shortDescription: "Premium mechanical keyboard with wireless connectivity.",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=500",
    images: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80&w=500",
    ],
    specs: [
      { label: "Switch Type", value: "Cherry MX Brown" },
      { label: "Connection", value: "Bluetooth 5.0/2.4GHz" },
      { label: "Battery Life", value: "Up to 200 hours" },
      { label: "RGB Lighting", value: "16.8M colors" },
      { label: "Layout", value: "TKL (87 keys)" },
      { label: "Weight", value: "1.6 lbs" },
    ],
    longDescription: `
            Experience premium typing with our wireless mechanical keyboard.
            
            Key Features:
            • Cherry MX Brown tactile switches
            • Dual-mode connectivity (Bluetooth & 2.4GHz)
            • Per-key RGB backlighting
            • Aircraft-grade aluminum frame
            • USB-C quick charging
            • Windows/Mac compatible
            
            Perfect for both gaming and productivity with a satisfying typing experience 
            and customizable RGB lighting effects.
        `,
  },
  {
    id: 4,
    name: "Ultra-Wide Monitor",
    price: 599.99,
    description: "34-inch curved display perfect for productivity and gaming.",
    shortDescription: "Professional ultra-wide curved gaming monitor.",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=500",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=500",
    ],
    specs: [
      { label: "Screen Size", value: "34 inches" },
      { label: "Resolution", value: "3440 x 1440" },
      { label: "Refresh Rate", value: "144Hz" },
      { label: "Response Time", value: "1ms GtG" },
      { label: "HDR", value: "HDR400" },
      { label: "Ports", value: "2x HDMI 2.0, 1x DP 1.4" },
    ],
    longDescription: `
            Immerse yourself in this premium ultra-wide curved monitor.
            
            Key Features:
            • 34" UWQHD curved display
            • 144Hz refresh rate
            • 1ms response time
            • AMD FreeSync Premium
            • HDR400 certified
            • Picture-by-Picture mode
            
            Perfect for multitasking professionals and immersive gaming experiences 
            with stunning color accuracy and smooth motion handling.
        `,
  },
  {
    id: 5,
    name: "Wireless Mouse",
    price: 79.99,
    description: "Ergonomic wireless mouse with precision tracking.",
    shortDescription: "High-performance wireless gaming mouse.",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=500",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=500",
    ],
    specs: [
      { label: "Sensor", value: "25,600 DPI optical" },
      { label: "Battery Life", value: "70 hours" },
      { label: "Weight", value: "88g" },
      { label: "RGB Zones", value: "3 zones" },
      { label: "Buttons", value: "8 programmable" },
      { label: "Connectivity", value: "2.4GHz/Bluetooth" },
    ],
    longDescription: `
            Dominate with precision using our advanced wireless gaming mouse.
            
            Key Features:
            • 25,600 DPI optical sensor
            • Lightweight 88g design
            • Dual wireless connectivity
            • 8 programmable buttons
            • RGB customization
            • 70-hour battery life
            
            Engineered for both gaming and productivity with exceptional 
            accuracy and ergonomic comfort.
        `,
  },
  {
    id: 6,
    name: "Standing Desk",
    price: 449.99,
    description: "Electric height adjustable desk with memory settings.",
    shortDescription: "Premium electric standing desk with memory presets.",
    image:
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=500",
    images: [
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=500",
    ],
    specs: [
      { label: "Height Range", value: "24-50 inches" },
      { label: "Desktop Size", value: "60 x 30 inches" },
      { label: "Weight Capacity", value: "300 lbs" },
      { label: "Memory Presets", value: "4 positions" },
      { label: "Motor Type", value: "Dual motor" },
      { label: "Warranty", value: "10 years" },
    ],
    longDescription: `
            Transform your workspace with our premium electric standing desk.
            
            Key Features:
            • Dual-motor lifting system
            • 4 programmable memory presets
            • Anti-collision technology
            • Cable management system
            • LED height display
            • Child lock feature
            
            Designed for optimal ergonomics and productivity with smooth, 
            quiet operation and robust build quality.
        `,
  },
  {
    id: 7,
    name: "Monitor Light Bar",
    price: 89.99,
    description: "Screen-mounted LED light bar with customizable RGB lighting.",
    shortDescription: "Advanced monitor light bar with auto-dimming.",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=500",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=500",
    ],
    specs: [
      { label: "Length", value: "45 cm" },
      { label: "Color Temperature", value: "2700K-6500K" },
      { label: "Brightness", value: "1000 lux" },
      { label: "Power Source", value: "USB-C" },
      { label: "Compatibility", value: 'Up to 32" monitors' },
      { label: "Features", value: "Auto-dimming sensor" },
    ],
    longDescription: `
            Enhance your workspace lighting with our innovative monitor light bar.
            
            Key Features:
            • Auto-brightness adjustment
            • Touch-sensitive controls
            • No screen glare design
            • Memory function
            • Adjustable color temperature
            • Space-saving design
            
            Perfect for reducing eye strain and creating the ideal lighting 
            environment for any time of day.
        `,
  },
  {
    id: 8,
    name: "USB-C Hub",
    price: 69.99,
    description: "7-in-1 USB-C hub with HDMI and power delivery.",
    shortDescription: "Premium aluminum USB-C multiport adapter.",
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&q=80&w=500",
    images: [
      "'https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&q=80&w=500",
      "'https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&q=80&w=500",
      "'https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&q=80&w=500",
      "'https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&q=80&w=500",
    ],
    specs: [
      { label: "Ports", value: "7 ports total" },
      { label: "HDMI Output", value: "4K@60Hz" },
      { label: "USB Ports", value: "3x USB 3.0" },
      { label: "Power Delivery", value: "100W" },
      { label: "SD Card Reader", value: "UHS-I" },
      { label: "Material", value: "Aluminum" },
    ],
    longDescription: `
            Expand your connectivity with our versatile USB-C hub.
            
            Key Features:
            • 4K HDMI output
            • 100W Power Delivery
            • SD/microSD card readers
            • 3x USB 3.0 ports
            • Gigabit Ethernet
            • Aluminum construction
            
            Perfect for laptops and tablets, providing all essential ports 
            in a compact, portable design.
        `,
  },
  {
    id: 9,
    name: "Webcam Pro",
    price: 129.99,
    description: "4K webcam with mechanical privacy shutter and auto-focus.",
    shortDescription: "Professional 4K webcam with AI features.",
    image:
      "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&q=80&w=500",
    images: [
      "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&q=80&w=500",
    ],
    specs: [
      { label: "Resolution", value: "4K UHD" },
      { label: "Frame Rate", value: "60 FPS" },
      { label: "Field of View", value: "90°" },
      { label: "Microphone", value: "Dual noise-canceling" },
      { label: "Focus Type", value: "Autofocus" },
      { label: "Connection", value: "USB-C" },
    ],
    longDescription: `
            Achieve professional-quality video with our 4K webcam.
            
            Key Features:
            • 4K Ultra HD resolution
            • AI auto-focus
            • HDR support
            • Dual noise-canceling mics
            • Privacy shutter
            • Low-light correction
            
            Perfect for streaming, video conferencing, and content creation 
            with exceptional clarity and color accuracy.
        `,
  },
  {
    id: 10,
    name: "Noise-Canceling Headphones",
    price: 249.99,
    description: "Premium wireless headphones with customizable RGB effects.",
    shortDescription: "Premium ANC headphones with spatial audio.",
    image:
      "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&q=80&w=500",
    images: [
      "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&q=80&w=500",
      "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&q=80&w=500",
    ],
    specs: [
      { label: "Driver Size", value: "40mm" },
      { label: "Battery Life", value: "30 hours" },
      { label: "ANC Levels", value: "3 modes" },
      { label: "Bluetooth", value: "5.2" },
      { label: "Charging", value: "USB-C Quick Charge" },
      { label: "Weight", value: "250g" },
    ],
    longDescription: `
            Immerse yourself in premium audio with our wireless headphones.
            
            Key Features:
            • Active noise cancellation
            • 30-hour battery life
            • Spatial audio support
            • Touch controls
            • Multi-device pairing
            • Voice assistant support
            
            Experience exceptional sound quality and comfort with 
            advanced noise cancellation technology.
        `,
  },
  {
    id: 11,
    name: "Laptop Stand",
    price: 49.99,
    description: "Adjustable mechanical laptop stand for better ergonomics.",
    shortDescription: "Ergonomic aluminum laptop stand.",
    image:
      "https://images.unsplash.com/photo-1619953942547-233eab5a70d6?auto=format&fit=crop&q=80&w=500",
    images: [
      "'https://images.unsplash.com/photo-1619953942547-233eab5a70d6?auto=format&fit=crop&q=80&w=500",
      "'https://images.unsplash.com/photo-1619953942547-233eab5a70d6?auto=format&fit=crop&q=80&w=500",
      "'https://images.unsplash.com/photo-1619953942547-233eab5a70d6?auto=format&fit=crop&q=80&w=500",
      "'https://images.unsplash.com/photo-1619953942547-233eab5a70d6?auto=format&fit=crop&q=80&w=500",
    ],
    specs: [
      { label: "Material", value: "Aluminum alloy" },
      { label: "Height Levels", value: "6 positions" },
      { label: "Max Load", value: "22 lbs" },
      { label: "Compatibility", value: "10-17 inch laptops" },
      { label: "Foldable", value: "Yes" },
      { label: "Weight", value: "2.5 lbs" },
    ],
    longDescription: `
            Improve your posture with our premium laptop stand.
            
            Key Features:
            • 6 adjustable height levels
            • Heat dissipation design
            • Non-slip silicone pads
            • Foldable structure
            • Cable management
            • Protective rubber grips
            
            Perfect for creating an ergonomic workspace while keeping 
            your laptop cool and stable.
        `,
  },
  {
    id: 12,
    name: "Mechanical Keyboard",
    price: 159.99,
    description: "Premium mechanical keyboard with customizable RGB backlight.",
    shortDescription: "Premium mechanical keyboard with hot-swap switches.",
    image:
      "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    images: [
      "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    specs: [
      { label: "Switch Type", value: "Hot-swappable" },
      { label: "Keycaps", value: "PBT Double-shot" },
      { label: "Layout", value: "Full size (104 keys)" },
      { label: "Backlight", value: "Per-key RGB" },
      { label: "Connection", value: "USB-C detachable" },
      { label: "Features", value: "Macro programming" },
    ],
    longDescription: `
            Experience premium typing with our mechanical keyboard.
            
            Key Features:
            • Hot-swappable switches
            • PBT double-shot keycaps
            • Per-key RGB lighting
            • Programmable macros
            • N-key rollover
            • Aluminum frame
            
            Customizable to your preferences with premium materials 
            and exceptional build quality.
        `,
  },
];

/**
 * Product Store JavaScript
 * Features:
 * - Product listing with grid view
 * - Detailed product modal view
 * - Shopping cart functionality
 * - Search and filtering
 * - Responsive design support
 */

// Product Database with detailed information

// State Management
let cart = [];
let filteredProducts = [...products];
let currentProduct = null;

// DOM Elements
const productsContainer = document.getElementById("productsContainer");
const cartSidebar = document.getElementById("cartSidebar");
const overlay = document.getElementById("overlay");
const cartCount = document.querySelector(".cart-count");
const searchInput = document.getElementById("searchInput");
const productDetailModal = document.getElementById("productDetailModal");

/**
 * Product Grid Rendering
 */
function renderProducts() {
  productsContainer.innerHTML = filteredProducts
    .map(
      (product) => `
        <div class="product-card" data-id="${product.id}">
            <img src="${product.image}" 
                alt="${product.name}" 
                class="product-image" 
                onclick="openProductDetail(${product.id})"
                style="cursor: pointer">
            <h3 onclick="openProductDetail(${product.id})" 
                style="cursor: pointer">${product.name}</h3>
            <p>${formatDescription(product.description)}</p>
            <div class="card-bottom">
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="add-to-cart"
                onclick="addToCartFromGrid(${product.id})" 
                        aria-label="Add ${product.name} to cart">+</button>
            </div>
        </div>
    `
    )
    .join("");
}

/**
 * Cart Management Functions
 */

function addToCartFromGrid(productId) {
  const product = products.find((p) => p.id === productId);
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
  showSuccessNotification(product.name);
  cartSidebar.classList.add("active");
  overlay.classList.add("active");
}

/**
 * Description Formatting
 */
function formatDescription(description) {
  const words = description.split(" ");
  return words
    .map((word) => {
      if (
        word.toLowerCase().includes("rgb") ||
        word.toLowerCase().includes("mechanical") ||
        word.toLowerCase().includes("customizable")
      ) {
        return `<span class="highlight">${word}</span>`;
      }
      return `<span>${word}</span>`;
    })
    .join(" ");
}

/**
 * Product Detail Modal Functions
 */
function openProductDetail(productId) {
  currentProduct = products.find((p) => p.id === productId);
  const modal = document.getElementById("productDetailModal");

  // Update modal content
  modal.querySelector(".product-detail-title").textContent =
    currentProduct.name;
  modal.querySelector(
    ".product-detail-price"
  ).textContent = `$${currentProduct.price.toFixed(2)}`;
  modal.querySelector(".product-detail-description").innerHTML =
    currentProduct.longDescription;
  modal.querySelector("#modalMainImage").src = currentProduct.images[0];
  modal.querySelector("#modalMainImage").alt = currentProduct.name;

  // Render thumbnails
  renderThumbnails();

  // Render specifications
  renderSpecifications();

  // Show modal
  modal.style.display = "block";
  document.body.style.overflow = "hidden";

  // Setup quantity selector
  setupQuantitySelector(modal);
}

function renderThumbnails() {
  const thumbnailsContainer = productDetailModal.querySelector(
    ".product-thumbnails"
  );
  thumbnailsContainer.innerHTML = currentProduct.images
    .map(
      (img, index) => `
        <img src="${img}" 
             alt="${currentProduct.name} view ${index + 1}" 
             class="thumbnail ${index === 0 ? "active" : ""}"
             onclick="updateMainImage(this.src, this)">
    `
    )
    .join("");
}

function renderSpecifications() {
  const specsList = productDetailModal.querySelector(".specs-list");
  specsList.innerHTML = currentProduct.specs
    .map(
      (spec) => `
        <li>
            <strong>${spec.label}:</strong>
            <span>${spec.value}</span>
        </li>
    `
    )
    .join("");
}

function closeProductDetail() {
  productDetailModal.style.display = "none";
  document.body.style.overflow = "auto";
  currentProduct = null;
}

function updateMainImage(src, thumbnail) {
  const mainImage = document.getElementById("modalMainImage");
  mainImage.src = src;

  // Update active thumbnail
  document.querySelectorAll(".thumbnail").forEach((thumb) => {
    thumb.classList.remove("active");
  });
  thumbnail.classList.add("active");
}

/**
 * Quantity Selector Setup
 */
function setupQuantitySelector(modal) {
  const qtyInput = modal.querySelector(".qty-input");
  const minusBtn = modal.querySelector(".minus");
  const plusBtn = modal.querySelector(".plus");

  minusBtn.onclick = () => {
    const currentValue = parseInt(qtyInput.value);
    if (currentValue > 1) {
      qtyInput.value = currentValue - 1;
    }
  };

  plusBtn.onclick = () => {
    const currentValue = parseInt(qtyInput.value);
    qtyInput.value = currentValue + 1;
  };

  // Add to cart from detail page
  const addToCartBtn = modal.querySelector(".add-to-cart-detail");
  addToCartBtn.onclick = () => {
    const quantity = parseInt(qtyInput.value);
    addToCartFromDetail(currentProduct.id, quantity);
    closeProductDetail();
  };
}

/**
 * Cart Management Functions
 */
function addToCartFromDetail(productId, quantity) {
  const cartItem = cart.find((item) => item.id === productId);

  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({ ...currentProduct, quantity });
  }

  updateCart();
  cartSidebar.classList.add("active");
  overlay.classList.add("active");
  // showSuccessNotification(product.name);
}

function updateCart() {
  const cartItems = document.querySelector(".cart-items");
  const totalAmount = document.querySelector(".total-amount");

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
  } else {
    cartItems.innerHTML = cart
      .map(
        (item) => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)}</p>
                    <div class="quantity-controls">
                        <button onclick="updateQuantity(${
                          item.id
                        }, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${
                          item.id
                        }, 1)">+</button>
                        <button class="delete-item" onclick="removeFromCart(${
                          item.id
                        })"> Delete </button>
                    </div>
                    
                </div>
            </div>
        `
      )
      .join("");
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  totalAmount.textContent = `$${total.toFixed(2)}`;
  cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCart();

  // If cart is empty after removal, you might want to update the cart count
  if (cart.length === 0) {
    cartCount.textContent = "0";
  }
}

function updateQuantity(productId, change) {
  const cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity += change;
    if (cartItem.quantity <= 0) {
      cart = cart.filter((item) => item.id !== productId);
    }
    updateCart();
  }
}

/**
 * Search and Filter Functions
 */
function filterProducts(query) {
  filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase())
  );
  renderProducts();
}

function openCheckout() {
  const checkoutModal = document.getElementById("checkoutModal");
  //   updateOrderSummary();
  checkoutModal.style.display = "block";
  document.body.style.overflow = "hidden";
  updateOrderSummary();
}

function closeCheckout() {
  const checkoutModal = document.getElementById("checkoutModal");
  checkoutModal.style.display = "none";
  document.body.style.overflow = "auto";
  // Optional: Reset form
  document.getElementById("checkoutForm").reset();
}

// function updateOrderSummary() {
//   const summaryItems = document.querySelector(".summary-items");
//   const subtotalAmount = document.querySelector(".subtotal-amount");
//   const shippingAmount = document.querySelector(".shipping-amount");
//   const taxAmount = document.querySelector(".tax-amount");
//   const totalAmount = document.querySelector(".total-amount");

//   // Render items
//   summaryItems.innerHTML = cart
//     .map(
//       (item) => `
//         <div class="summary-item">
//             <span>${item.name} x ${item.quantity}</span>
//             <span>$${(item.price * item.quantity).toFixed(2)}</span>
//         </div>
//     `
//     )
//     .join("");

//   // Calculate totals
//   const subtotal = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );
//   const shipping = subtotal > 0 ? 10 : 0; // $10 shipping if cart not empty
//   const tax = subtotal * 0.1; // 10% tax
//   const total = subtotal + shipping + tax;

//   // Update amounts
//   subtotalAmount.textContent = `$${subtotal.toFixed(2)}`;
//   shippingAmount.textContent = `$${shipping.toFixed(2)}`;
//   taxAmount.textContent = `$${tax.toFixed(2)}`;
//   totalAmount.textContent = `$${total.toFixed(2)}`;
// }

function updateOrderSummary() {
  // Get all required elements
  const summaryItems = document.querySelector(".summary-items");
  const subtotalAmount = document.querySelector(".subtotal-amount");
  const shippingAmount = document.querySelector(".shipping-amount");
  const taxAmount = document.querySelector(".tax-amount");
  const totalAmount = document.querySelector(".total-amount");

  // Clear existing items
  summaryItems.innerHTML = "";

  // Calculate subtotal first
  let subtotal = 0;

  // Add items and calculate subtotal
  cart.forEach((item) => {
    const itemTotal = Number(item.price) * Number(item.quantity);
    subtotal += itemTotal;

    summaryItems.innerHTML += `
            <div class="summary-item">
                <span>${item.name} x ${item.quantity}</span>
                <span>$${itemTotal.toFixed(2)}</span>
            </div>
        `;
  });

  // Fixed values
  const shipping = 10.0;
  const tax = Number((subtotal * 0.1).toFixed(2));
  const total = Number(subtotal) + Number(shipping) + Number(tax);

  // Display all values
  subtotalAmount.textContent = `$${subtotal.toFixed(2)}`;
  shippingAmount.textContent = `$${shipping.toFixed(2)}`;
  taxAmount.textContent = `$${tax.toFixed(2)}`;
  totalAmount.textContent = `$${total.toFixed(2)}`;

  // Log values for debugging
  console.log({
    subtotal: subtotal.toFixed(2),
    shipping: shipping.toFixed(2),
    tax: tax.toFixed(2),
    total: total.toFixed(2),
  });
}

function validateForm(form) {
  const inputs = form.querySelectorAll("input, select");
  let isValid = true;

  inputs.forEach((input) => {
    const errorElement = input.nextElementSibling;
    input.classList.remove("error");
    errorElement.textContent = "";

    if (input.required && !input.value.trim()) {
      isValid = false;
      input.classList.add("error");
      errorElement.textContent = "This field is required";
    } else {
      switch (input.id) {
        case "email":
          if (!/\S+@\S+\.\S+/.test(input.value)) {
            isValid = false;
            input.classList.add("error");
            errorElement.textContent = "Please enter a valid email";
          }
          break;
        case "cardNumber":
          if (!/^\d{16}$/.test(input.value.replace(/\s/g, ""))) {
            isValid = false;
            input.classList.add("error");
            errorElement.textContent =
              "Please enter a valid 16-digit card number";
          }
          break;
        case "expiryDate":
          if (!/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(input.value)) {
            isValid = false;
            input.classList.add("error");
            errorElement.textContent = "Please enter a valid date (MM/YY)";
          }
          break;
        case "cvv":
          if (!/^\d{3,4}$/.test(input.value)) {
            isValid = false;
            input.classList.add("error");
            errorElement.textContent = "Please enter a valid CVV";
          }
          break;
        case "zipCode":
          if (!/^\d{5}(-\d{4})?$/.test(input.value)) {
            isValid = false;
            input.classList.add("error");
            errorElement.textContent = "Please enter a valid ZIP code";
          }
          break;
      }
    }
  });

  return isValid;
}
//function for Add to cart success notification
function showSuccessNotification(productName) {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = "success-notification";
  notification.innerHTML = `
        <div class="notification-content">
            <span class="check-icon">✓</span>
            <span class="notification-text">Added ${productName} to cart</span>
        </div>
    `;

  // Add to document
  document.body.appendChild(notification);

  // Remove after animation
  setTimeout(() => {
    notification.remove();
  }, 5000); // Remove after 3 seconds
}

//function for order success notification
function showOrderSuccessNotification() {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = "success-notification";
  notification.innerHTML = `
        <div class="notification-content">
            <span class="check-icon">✓</span>
            <span class="notification-text">Order placed successfully!</span>
        </div>
    `;

  // Add to document
  document.body.appendChild(notification);

  // Remove after animation
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

/**
 * Event Listeners
 */
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();

  //   // Product grid event listeners
  //   productsContainer.addEventListener("click", (e) => {
  //     if (e.target.classList.contains("add-to-cart")) {
  //       const productId = parseInt(e.target.closest(".product-card").dataset.id);
  //       addToCartFromDetail(productId, 1);
  //     }
  //   });

  // Cart event listeners
  document.querySelector(".cart-btn").addEventListener("click", () => {
    cartSidebar.classList.add("active");
    overlay.classList.add("active");
  });

  document.querySelector(".close-cart").addEventListener("click", () => {
    cartSidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  // Modal event listeners
  document
    .querySelector(".close-modal")
    .addEventListener("click", closeProductDetail);

  productDetailModal.addEventListener("click", (e) => {
    if (e.target === productDetailModal) {
      closeProductDetail();
    }
  });

  // Overlay event listener
  overlay.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  // Search event listener
  searchInput.addEventListener("input", (e) => {
    filterProducts(e.target.value);
  });

  // Update checkout button click handler
  //   document.querySelector(".checkout-btn").addEventListener("click", () => {
  //     if (cart.length > 0) {
  //       cartSidebar.classList.remove("active");
  //       overlay.classList.remove("active");
  //       openCheckout();
  //       updateOrderSummary();
  //     }
  //   });

  const checkoutBtn = document.querySelector(".checkout-btn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (cart.length > 0) {
        cartSidebar.classList.remove("active");
        overlay.classList.remove("active");
        openCheckout();
        updateOrderSummary();
      }
    });
  }

  // Checkout modal close button
  document
    .querySelector(".close-checkout")
    .addEventListener("click", closeCheckout);

  // Checkout form submission
  document.getElementById("checkoutForm").addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateForm(e.target)) {
      // Send the order to a server
      //   alert("Order placed successfully!"); or
      // Show success notification
      showOrderSuccessNotification();
      cart = [];
      updateCart();
      closeCheckout();
    }
  });

  // Format card number input
  const cardInput = document.getElementById("cardNumber");
  cardInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    value = value.replace(/(\d{4})/g, "$1 ").trim();
    e.target.value = value.substring(0, 19);
  });

  // Format expiry date input
  const expiryInput = document.getElementById("expiryDate");
  expiryInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length >= 2) {
      value = value.substring(0, 2) + "/" + value.substring(2, 4);
    }
    e.target.value = value;
  });

  // Keyboard event listeners
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (productDetailModal.style.display === "block") {
        closeProductDetail();
      }
      if (cartSidebar.classList.contains("active")) {
        cartSidebar.classList.remove("active");
        overlay.classList.remove("active");
      }
    }
  });
});
