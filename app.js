let shoppingCart = [];
let currentHeroIndex = 0;
let modalSelectedQuantity = 1;

// লোকাল স্টোরেজ থেকে বিদ্যমান কার্ট লোড করা
if(localStorage.getItem('huryan_cart')) {
    try { 
        shoppingCart = JSON.parse(localStorage.getItem('huryan_cart')); 
    } catch(e) { 
        shoppingCart = []; 
    }
}

// হিরো সেকশন ডাটা রেন্ডারিং
function updateHeroSection() {
    const current = productsDatabase[currentHeroIndex];
    if(!current) return;
    
    document.getElementById('hero-perfume-title').innerText = current.name;
    document.getElementById('hero-perfume-notes').innerHTML = `<i class="fa-solid fa-droplet"></i> ${current.notes}`;
    document.getElementById('hero-perfume-desc').innerText = current.desc;
    document.getElementById('hero-perfume-price').innerText = "৳" + current.price.toLocaleString();
    document.getElementById('hero-perfume-img').src = current.image;
    document.getElementById('hero-perfume-badge').innerText = current.badge;
    document.getElementById('hero-buy-btn').setAttribute('onclick', `openProductModal(${current.id})`);
}

// হিরো স্লাইডার স্লাইড চেঞ্জ অ্যানিমেশন
function nextHeroPerfume() {
    const textPanel = document.getElementById('hero-text-panel');
    const imgWrapper = document.getElementById('hero-image-wrapper');
    
    textPanel.classList.add('perfume-mist-active');
    imgWrapper.classList.add('perfume-mist-active');
    
    setTimeout(() => { 
        currentHeroIndex = (currentHeroIndex + 1) % productsDatabase.length; 
        updateHeroSection(); 
    }, 300);
    
    setTimeout(() => { 
        textPanel.classList.remove('perfume-mist-active'); 
        imgWrapper.classList.remove('perfume-mist-active'); 
    }, 800);
}

// প্রোডাক্ট গ্যালারি রেন্ডারার (Nike Style Responsive Dark Card & Hover)
function renderProducts() {
    const grid = document.getElementById('product-grid');
    if(!grid) return;
    
    grid.innerHTML = productsDatabase.map(prod => `
        <div onclick="openProductModal(${prod.id})" class="nike-card rounded-2xl md:rounded-3xl overflow-hidden flex flex-col cursor-pointer group relative">
            <!-- ইমেজ সেকশন -->
            <div class="relative pt-[100%] bg-white/[0.01] flex items-center justify-center m-1.5 md:m-2 rounded-xl md:rounded-2xl overflow-hidden border border-white/[0.03]">
                <img src="${prod.image}" alt="${prod.name}" class="absolute inset-0 w-full h-full object-contain p-3 md:p-4 transition-transform duration-700 group-hover:scale-105 drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
            </div>
            <!-- টেক্সট ও প্রাইস ইনফো -->
            <div class="p-3 md:p-4 flex flex-col flex-1 justify-between gap-1.5 md:gap-2">
                <div>
                    <span class="text-[8px] md:text-[9px] uppercase font-black text-amber-400 tracking-wider block mb-0.5">${prod.badge}</span>
                    <h3 class="font-bold text-slate-200 text-xs md:text-sm line-clamp-2 group-hover:text-amber-400 transition-colors h-8 md:h-10 leading-tight">${prod.name}</h3>
                </div>
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center pt-2 border-t border-white/[0.05] mt-1 gap-2">
                    <span class="text-sm md:text-base font-black text-white">৳${prod.price.toLocaleString()}</span>
                    <span class="w-full sm:w-auto text-center text-[10px] bg-white text-slate-950 px-3 py-2 rounded-full font-black uppercase tracking-wider group-hover:bg-amber-500 transition-colors block">Buy Now</span>
                </div>
            </div>
        </div>
    `).join('');
}

// অ্যাডভান্সড মডাল ওপেনিং লজিক
function openProductModal(productId) {
    const prod = productsDatabase.find(p => p.id === productId);
    if(!prod) return;

    modalSelectedQuantity = 1;
    document.getElementById('modal-qty-display').innerText = modalSelectedQuantity;

    // ডাটা অ্যাসাইনমেন্ট
    document.getElementById('modal-product-img').src = prod.image;
    document.getElementById('modal-product-name').innerText = prod.name;
    document.getElementById('modal-product-price').innerText = "৳" + prod.price.toLocaleString();
    document.getElementById('modal-product-notes').innerHTML = `<i class="fa-solid fa-feather-pointed text-amber-400"></i> Notes: ${prod.notes}`;
    document.getElementById('modal-product-desc').innerText = prod.desc;
    
    // এক্সট্রা ইনফো ফিল্ডস
    document.getElementById('modal-badge-size').innerText = prod.size || '100ml';
    document.getElementById('modal-badge-longevity').innerText = prod.longevity || '8-10 Hours';

    // ইমেজ গ্যালারি থাম্বনেইলস জেনারেশন
    const galleryContainer = document.getElementById('modal-gallery-thumbs');
    const imagesList = prod.images && prod.images.length > 0 ? prod.images : [prod.image];
    
    galleryContainer.innerHTML = imagesList.map((imgUrl, index) => `
        <button onclick="changeModalMainImage('${imgUrl}', this)" class="w-14 h-14 bg-white/5 border ${index === 0 ? 'border-amber-500' : 'border-white/10'} rounded-xl p-1 overflow-hidden transition hover:border-amber-400 shrink-0">
            <img src="${imgUrl}" class="w-full h-full object-contain">
        </button>
    `).join('');

    document.getElementById('modal-add-btn').setAttribute("onclick", `addToCartFromModal(${prod.id})`);
    toggleProductModal(true);
}

// থাম্বনেইল ক্লিক চেঞ্জ ফাংশন
function changeModalMainImage(imgUrl, element) {
    document.getElementById('modal-product-img').src = imgUrl;
    const thumbs = document.querySelectorAll('#modal-gallery-thumbs button');
    thumbs.forEach(t => t.classList.replace('border-amber-500', 'border-white/10'));
    element.classList.replace('border-white/10', 'border-amber-500');
}

// মডাল প্লাস মাইনাস কোয়ান্টিটি ক্যালকুলেশন
function updateModalQuantity(amount) {
    modalSelectedQuantity += amount;
    if(modalSelectedQuantity < 1) modalSelectedQuantity = 1;
    document.getElementById('modal-qty-display').innerText = modalSelectedQuantity;
}

// মডাল থেকে কার্টে পাঠানোর ফাংশন
function addToCartFromModal(productId) {
    const product = productsDatabase.find(p => p.id === productId);
    const exist = shoppingCart.find(item => item.id === productId);

    if(exist) { 
        exist.quantity += modalSelectedQuantity; 
    } else { 
        shoppingCart.push({ ...product, quantity: modalSelectedQuantity }); 
    }

    toggleProductModal(false);
    saveAndRefreshCart(); 
    toggleCartDrawer(true);
}

function toggleProductModal(open) {
    const modal = document.getElementById('product-modal');
    if(open) {
        modal.classList.remove('hidden');
        setTimeout(() => { 
            document.getElementById('modal-overlay').classList.add('opacity-100'); 
            document.getElementById('modal-panel').classList.remove('scale-95', 'opacity-0'); 
        }, 10);
    } else {
        document.getElementById('modal-overlay').classList.remove('opacity-100'); 
        document.getElementById('modal-panel').classList.add('scale-95', 'opacity-0');
        setTimeout(() => modal.classList.add('hidden'), 300);
    }
}

function toggleCartDrawer(open) {
    const drawer = document.getElementById('cart-drawer');
    if (open) {
        drawer.classList.remove('hidden');
        setTimeout(() => { 
            document.getElementById('cart-overlay').classList.add('opacity-100'); 
            document.getElementById('cart-panel').classList.remove('translate-x-full'); 
        }, 10);
    } else {
        document.getElementById('cart-overlay').classList.remove('opacity-100'); 
        document.getElementById('cart-panel').classList.add('translate-x-full');
        setTimeout(() => drawer.classList.add('hidden'), 300);
    }
}

// কার্ট রিফ্রেশ ও সেভ মেথড
function saveAndRefreshCart() {
    localStorage.setItem('huryan_cart', JSON.stringify(shoppingCart));
    const totalCount = shoppingCart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('nav-cart-count').innerText = totalCount;
    
    const container = document.getElementById('cart-items-container');
    if(shoppingCart.length === 0) {
        container.innerHTML = `<p class="text-slate-500 text-sm py-8 text-center">শপিং ব্যাগ খালি!</p>`;
        document.getElementById('cart-subtotal').innerText = "0"; 
        return;
    }
    container.innerHTML = shoppingCart.map(item => `
        <div class="flex items-center justify-between py-3 border-b border-white/5">
            <div class="flex items-center gap-3">
                <img src="${item.image}" class="w-10 h-10 object-contain border border-white/10 bg-white/5 rounded-lg">
                <div>
                    <h4 class="font-bold text-slate-200 text-xs line-clamp-1 w-32">${item.name}</h4>
                    <p class="text-[10px] text-slate-500">Qty: ${item.quantity}</p>
                </div>
            </div>
        </div>
    `).join('');
    document.getElementById('cart-subtotal').innerText = shoppingCart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toLocaleString();
}

// র্যান্ডম ট্রাস্ট অর্ডার পপআপ জেনারেটর
function triggerLiveSalesPopup() {
    const names = ["মুনিম", "ইমতিয়াজ", "সায়েম", "ফারহান", "জিহাদ", "আবরার", "তানজিল"];
    const locations = ["মিরপুর, ঢাকা", "গুলশান", "উত্তরা", "চট্টগ্রাম", "সিলেট", "রাজশাহী", "ধানমণ্ডি"];
    const randomProduct = productsDatabase[Math.floor(Math.random() * productsDatabase.length)];
    
    const popupImg = document.getElementById('live-popup-img');
    const popupText = document.getElementById('live-popup-text');
    if(!popupImg || !popupText) return;

    popupImg.src = randomProduct.image;
    popupText.innerHTML = `<b>${locations[Math.floor(Math.random() * locations.length)]}</b> থেকে <b>${names[Math.floor(Math.random() * names.length)]}</b> এইমাত্র একটি <span class="text-amber-400 font-bold">${randomProduct.name}</span> অর্ডার করেছেন!`;

    const popup = document.getElementById('live-sales-popup');
    popup.classList.remove('translate-y-20', 'opacity-0');
    setTimeout(() => popup.classList.add('translate-y-20', 'opacity-0'), 4500);
}

// ডম কন্টেন্ট ইনিশিয়ালাইজেশন
document.addEventListener("DOMContentLoaded", () => {
    if(document.getElementById('hero-container')) {
        updateHeroSection(); 
        renderProducts(); 
        saveAndRefreshCart();
        
        setInterval(triggerLiveSalesPopup, 11000); 
        setTimeout(triggerLiveSalesPopup, 1500);
        setInterval(() => {
            const userCount = document.getElementById('live-users-count'); 
            if(userCount) userCount.innerText = Math.floor(Math.random() * (55 - 25 + 1)) + 25;
        }, 6000);
    }
});