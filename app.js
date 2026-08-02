/* ============ Gadget's Empire shared app logic (used on every page) ============ */
var WHATSAPP_NUMBER = '8801951467502';

var ART = {
  phone: '<svg viewBox="0 0 100 100" fill="none" stroke="#F3E9DC" stroke-width="2.4"><rect x="32" y="10" width="36" height="80" rx="9"/><line x1="32" y1="20" x2="68" y2="20"/><line x1="32" y1="80" x2="68" y2="80"/><circle cx="50" cy="82" r="2.2" fill="#F3E9DC" stroke="none" opacity="0.6"/></svg>',
  adapter: '<svg viewBox="0 0 100 100" fill="none" stroke="#F3E9DC" stroke-width="2.4"><rect x="18" y="34" width="64" height="32" rx="7"/><path d="M53,42 L44,53 L50,53 L46,62 L59,49 L52,49 Z" fill="var(--accent)" stroke="none"/></svg>',
  magsafe: '<svg viewBox="0 0 100 100" fill="none" stroke="#F3E9DC" stroke-width="2.4"><circle cx="50" cy="50" r="24" /><circle cx="50" cy="50" r="9" fill="var(--accent)" stroke="none"/></svg>',
  adapter5w: '<svg viewBox="0 0 100 100" fill="none" stroke="#F3E9DC" stroke-width="2.4"><rect x="30" y="38" width="40" height="24" rx="5"/><path d="M52,44 L46,53 L50,53 L48,58 L56,49 L51,49 Z" fill="var(--accent)" stroke="none"/></svg>',
  cable: '<svg viewBox="0 0 100 100" fill="none" stroke="#F3E9DC" stroke-width="2.4"><path d="M20,50 Q50,30 80,50" /><circle cx="20" cy="50" r="5" fill="var(--accent)" stroke="none"/><circle cx="80" cy="50" r="5" fill="var(--accent)" stroke="none"/></svg>',
  earbuds: '<svg viewBox="0 0 100 100" fill="none" stroke="#F3E9DC" stroke-width="2.4"><rect x="30" y="20" width="14" height="26" rx="7"/><path d="M37,46 L37,58 Q37,66 30,68"/><circle cx="27" cy="70" r="4" fill="var(--accent)" stroke="none"/><rect x="56" y="20" width="14" height="26" rx="7"/><path d="M63,46 L63,58 Q63,66 70,68"/><circle cx="73" cy="70" r="4" fill="var(--accent)" stroke="none"/></svg>',
  speaker: '<svg viewBox="0 0 100 100" fill="none" stroke="#F3E9DC" stroke-width="2.4"><rect x="25" y="18" width="50" height="64" rx="10"/><circle cx="50" cy="40" r="9"/><circle cx="50" cy="65" r="13"/><circle cx="50" cy="65" r="5" fill="var(--accent)" stroke="none"/></svg>',
  smartwatch: '<svg viewBox="0 0 100 100" fill="none" stroke="#F3E9DC" stroke-width="2.4"><rect x="34" y="30" width="32" height="40" rx="8"/><rect x="42" y="16" width="16" height="16" rx="3"/><rect x="42" y="68" width="16" height="16" rx="3"/><circle cx="50" cy="50" r="3" fill="var(--accent)" stroke="none"/></svg>',
  powerbank: '<svg viewBox="0 0 100 100" fill="none" stroke="#F3E9DC" stroke-width="2.4"><rect x="30" y="18" width="40" height="64" rx="8"/><path d="M55,32 L44,50 L50,50 L46,66 L62,44 L54,44 Z" fill="var(--accent)" stroke="none"/></svg>',
  phonecase: '<svg viewBox="0 0 100 100" fill="none" stroke="#F3E9DC" stroke-width="2.4"><rect x="28" y="10" width="44" height="80" rx="13"/><circle cx="63" cy="24" r="4"/><rect x="34" y="16" width="24" height="48" rx="4" fill="#F3E9DC" stroke="none" opacity="0.18"/></svg>',
  screenguard: '<svg viewBox="0 0 100 100" fill="none" stroke="#F3E9DC" stroke-width="2.4"><rect x="30" y="12" width="40" height="76" rx="10"/><rect x="36" y="18" width="28" height="60" rx="3" fill="#F3E9DC" stroke="none" opacity="0.14"/><line x1="40" y1="30" x2="60" y2="30" stroke="var(--accent)" stroke-width="2" opacity="0.7"/></svg>'
};

var CATEGORY_LABELS = { phones: 'Mobile Phones', power: 'Apple Chargers', audio: 'Audio', wearables: 'Wearables', accessories: 'Accessories' };

var CATEGORY_DESCRIPTIONS = {
  phones: 'Used iPhones, individually checked before listing. Battery health and cosmetic condition confirmed over chat before you pay.',
  power: 'Genuine Apple charging gear — the exact adapter, MagSafe puck, or cable your iPhone shipped with.',
  audio: 'Everyday audio gear to pair with your phone — earbuds and speakers for daily use.',
  wearables: 'Wrist-worn companions for your phone, with size variants where it matters.',
  accessories: 'The small stuff that protects and powers your phone day to day.'
};

var PRODUCTS = [
  { id:'iphone11', name:'iPhone 11 (Used)', category:'phones', badge:'Used', art:'phone',
    variants:[ {label:'64GB', price:null}, {label:'128GB', price:27000}, {label:'256GB', price:null} ] },
  { id:'iphone12', name:'iPhone 12 (Used)', category:'phones', badge:'Used', art:'phone',
    variants:[ {label:'64GB', price:null}, {label:'128GB', price:32000}, {label:'256GB', price:null} ] },
  { id:'iphone13', name:'iPhone 13 (Used)', category:'phones', badge:'Best seller', art:'phone',
    variants:[ {label:'128GB', price:34900}, {label:'256GB', price:null} ] },
  { id:'iphone13pro', name:'iPhone 13 Pro (Used)', category:'phones', badge:'Used', art:'phone',
    variants:[ {label:'128GB', price:52500}, {label:'256GB', price:null} ] },
  { id:'iphone14', name:'iPhone 14 (Used)', category:'phones', badge:'Used', art:'phone',
    variants:[ {label:'128GB', price:44999}, {label:'256GB', price:null} ] },
  { id:'iphone14pro-usa', name:'iPhone 14 Pro, USA Variant', category:'phones', badge:'USA', art:'phone',
    variants:[ {label:'128GB', price:62999}, {label:'256GB', price:65999} ] },
  { id:'charger20w', name:'Apple 20W USB-C Power Adapter', category:'power', badge:'New', art:'adapter',
    variants:[ {label:'Standard', price:2800} ] },
  { id:'magsafe', name:'Apple MagSafe Charger', category:'power', badge:'New', art:'magsafe',
    variants:[ {label:'Standard', price:2500} ] },
  { id:'charger5w', name:'Apple 5W USB Power Adapter', category:'power', badge:'New', art:'adapter5w',
    variants:[ {label:'Standard', price:1200} ] },
  { id:'cable', name:'Apple USB-C to Lightning Cable, 1m', category:'power', badge:'New', art:'cable',
    variants:[ {label:'1m', price:990} ] },
  { id:'earbuds', name:'Wireless Earbuds', category:'audio', badge:'New', art:'earbuds',
    variants:[ {label:'Standard', price:null} ] },
  { id:'speaker', name:'Bluetooth Speaker', category:'audio', badge:'New', art:'speaker',
    variants:[ {label:'Standard', price:null} ] },
  { id:'smartwatch', name:'Smart Watch', category:'wearables', badge:'New', art:'smartwatch',
    variants:[ {label:'42mm', price:null}, {label:'46mm', price:null} ] },
  { id:'powerbank', name:'10,000mAh Power Bank', category:'accessories', badge:'New', art:'powerbank',
    variants:[ {label:'Standard', price:null} ] },
  { id:'phonecase', name:'Silicone Phone Case', category:'accessories', badge:'New', art:'phonecase',
    variants:[ {label:'iPhone 13', price:null}, {label:'iPhone 14', price:null} ] },
  { id:'screenguard', name:'Tempered Glass Screen Guard', category:'accessories', badge:'New', art:'screenguard',
    variants:[ {label:'Standard', price:null} ] }
];

function getProduct(id){ return PRODUCTS.find(function(p){ return p.id === id; }); }
function formatPrice(p){ return (p === null || p === undefined) ? 'TBA' : ('\u09F3' + p.toLocaleString('en-US')); }

/* ================= page transition (game-style wipe) ================= */
(function setupPageTransition(){
  var overlay = document.getElementById('pageTransition');
  if(!overlay) return;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var cameFromNav = sessionStorage.getItem('nexa_transitioning') === '1';

  if(cameFromNav){
    sessionStorage.removeItem('nexa_transitioning');
    overlay.classList.add('cover');
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){ overlay.classList.add('reveal'); overlay.classList.remove('cover'); });
    });
  } else if(!sessionStorage.getItem('nexa_visited') && !reduceMotion){
    sessionStorage.setItem('nexa_visited', '1');
    overlay.classList.add('cover', 'welcome');
    setTimeout(function(){
      overlay.classList.add('reveal');
      overlay.classList.remove('cover');
    }, 950);
  } else {
    sessionStorage.setItem('nexa_visited', '1');
  }

  document.addEventListener('click', function(e){
    var link = e.target.closest('a[href]');
    if(!link) return;
    var href = link.getAttribute('href');
    if(!href || href.charAt(0) === '#' || link.target === '_blank' || href.indexOf('http') === 0 || href.indexOf('mailto:') === 0 || href.indexOf('tel:') === 0 || href.indexOf('wa.me') !== -1) return;
    if(href.indexOf('.html') === -1) return;
    e.preventDefault();
    if(reduceMotion){ window.location.href = href; return; }
    if(window.SFX) SFX.swoosh();
    overlay.classList.remove('reveal');
    overlay.classList.add('cover');
    sessionStorage.setItem('nexa_transitioning', '1');
    setTimeout(function(){ window.location.href = href; }, 480);
  });
})();

/* ================= cart ================= */
var cart = [];
try{ cart = JSON.parse(localStorage.getItem('nexa_cart') || '[]'); }catch(e){ cart = []; }

function saveCart(){ try{ localStorage.setItem('nexa_cart', JSON.stringify(cart)); }catch(e){} }

function addToCart(productId, name, variantLabel, price){
  var existing = cart.find(function(i){ return i.productId === productId && i.variantLabel === variantLabel; });
  if(existing){ existing.qty += 1; }
  else{ cart.push({ productId: productId, name: name, variantLabel: variantLabel, price: price, qty: 1 }); }
  saveCart();
  renderCart();
}
function changeQty(index, delta){
  cart[index].qty += delta;
  if(cart[index].qty <= 0){ cart.splice(index, 1); }
  saveCart();
  renderCart();
}
function removeItem(index){
  cart.splice(index, 1);
  saveCart();
  renderCart();
}
var discountApplied = false;
try{ discountApplied = localStorage.getItem('nexa_discount') === '1'; }catch(e){}

function cartSubtotalRaw(){ return cart.reduce(function(sum, i){ return sum + i.price * i.qty; }, 0); }
function cartTotal(){ var raw = cartSubtotalRaw(); return discountApplied ? Math.round(raw * 0.9) : raw; }

function renderCart(){
  var cartItemsEl = document.getElementById('cartItems');
  var cartSubtotalEl = document.getElementById('cartSubtotal');
  var cartCountEl = document.getElementById('cartCount');
  var checkoutWhatsappEl = document.getElementById('checkoutWhatsapp');
  if(!cartItemsEl) return;

  var count = cart.reduce(function(n, i){ return n + i.qty; }, 0);
  cartCountEl.textContent = count;
  cartCountEl.classList.toggle('show', count > 0);

  if(cart.length === 0){
    cartItemsEl.innerHTML = '<p class="cart-empty">Your cart is empty. Add something from the shelf.</p>';
  } else {
    cartItemsEl.innerHTML = cart.map(function(item, i){
      return '<div class="cart-item">' +
        '<div class="cart-item-info">' +
          '<h4>' + item.name + '</h4>' +
          '<div class="variant">' + item.variantLabel + '</div>' +
          '<div class="qty-stepper">' +
            '<button data-action="dec" data-idx="' + i + '" aria-label="Decrease quantity">&minus;</button>' +
            '<span>' + item.qty + '</span>' +
            '<button data-action="inc" data-idx="' + i + '" aria-label="Increase quantity">+</button>' +
          '</div>' +
          '<div class="line-price mono">\u09F3' + (item.price * item.qty).toLocaleString('en-US') + '</div>' +
        '</div>' +
        '<button class="cart-item-remove" data-action="remove" data-idx="' + i + '" aria-label="Remove item">&times;</button>' +
      '</div>';
    }).join('');
  }

  var raw = cartSubtotalRaw();
  var total = cartTotal();
  if(discountApplied && cart.length){
    cartSubtotalEl.innerHTML = '<span class="original">\u09F3' + raw.toLocaleString('en-US') + '</span>\u09F3' + total.toLocaleString('en-US');
  } else {
    cartSubtotalEl.textContent = '\u09F3' + total.toLocaleString('en-US');
  }

  var lines = cart.map(function(i){ return '- ' + i.name + ' (' + i.variantLabel + ') x' + i.qty + ' \u2014 \u09F3' + (i.price*i.qty).toLocaleString('en-US'); }).join('\n');
  var discountLine = (discountApplied && cart.length) ? ('\n\nDiscount code applied: 10% off (Subtotal \u09F3' + raw.toLocaleString('en-US') + ' \u2192 Total \u09F3' + total.toLocaleString('en-US') + ')') : '';
  var message = cart.length
    ? ('Hi! I\'d like to order:\n' + lines + discountLine + '\n\nTotal: \u09F3' + total.toLocaleString('en-US') + '\n\nPlease confirm availability, delivery time, and bKash number.')
    : 'Hi! I\'d like to place an order.';
  checkoutWhatsappEl.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
  window.__nexaCartMessage = message;
}

function wireCartDrawer(){
  var cartItemsEl = document.getElementById('cartItems');
  if(!cartItemsEl) return;
  cartItemsEl.addEventListener('click', function(e){
    var btn = e.target.closest('button[data-action]');
    if(!btn) return;
    var idx = parseInt(btn.dataset.idx, 10);
    if(btn.dataset.action === 'inc') changeQty(idx, 1);
    else if(btn.dataset.action === 'dec') changeQty(idx, -1);
    else if(btn.dataset.action === 'remove') removeItem(idx);
  });

  var discountInput = document.getElementById('discountInput');
  var discountApplyBtn = document.getElementById('discountApplyBtn');
  var discountStatus = document.getElementById('discountStatus');
  function updateDiscountStatus(){
    if(!discountStatus) return;
    discountStatus.textContent = discountApplied ? '10% discount applied ✓' : '';
    discountStatus.classList.toggle('applied', discountApplied);
  }
  updateDiscountStatus();
  if(discountApplyBtn){
    discountApplyBtn.addEventListener('click', function(){
      var val = (discountInput.value || '').trim().toLowerCase().replace(/["“”]/g, '');
      if(val === DISCOUNT_CODE){
        discountApplied = true;
        try{ localStorage.setItem('nexa_discount', '1'); }catch(e){}
        updateDiscountStatus();
        renderCart();
        showToast('10% discount applied!');
        if(window.SFX) SFX.tick();
      } else {
        showToast('Invalid code — check and try again');
      }
    });
  }

  var cartDrawer = document.getElementById('cartDrawer');
  var cartOverlay = document.getElementById('cartOverlay');
  var cartToggle = document.getElementById('cartToggle');
  var cartClose = document.getElementById('cartClose');

  function openCart(){
    cartDrawer.classList.add('open'); cartOverlay.classList.add('open');
    cartDrawer.setAttribute('aria-hidden', 'false'); cartToggle.setAttribute('aria-expanded', 'true');
  }
  function closeCart(){
    cartDrawer.classList.remove('open'); cartOverlay.classList.remove('open');
    cartDrawer.setAttribute('aria-hidden', 'true'); cartToggle.setAttribute('aria-expanded', 'false');
  }
  cartToggle.addEventListener('click', function(){ if(window.SFX) SFX.tick(); openCart(); });
  cartClose.addEventListener('click', closeCart);
  cartOverlay.addEventListener('click', closeCart);

  var waBtn = document.getElementById('checkoutWhatsapp');
  if(waBtn){ waBtn.addEventListener('click', function(){ if(window.SFX) SFX.swoosh(); }); }

  var fbBtn = document.getElementById('checkoutFacebook');
  if(fbBtn){
    fbBtn.addEventListener('click', function(){
      if(window.SFX) SFX.tick();
      var msg = window.__nexaCartMessage || '';
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(msg).then(function(){ showToast('Order copied — paste it into Facebook chat'); })
          .catch(function(){ showToast('Could not copy — try WhatsApp checkout instead'); });
      } else { showToast('Could not copy — try WhatsApp checkout instead'); }
    });
  }
}

/* ================= promo banner ================= */
var DISCOUNT_CODE = 'feed me discount i beg of you please';

function setupPromoBanner(){
  var banner = document.getElementById('promoBanner');
  if(!banner) return;
  var dismissed = false;
  try{ dismissed = localStorage.getItem('nexa_promo_dismissed') === '1'; }catch(e){}
  if(dismissed){ banner.classList.add('hidden'); return; }

  var closeBtn = document.getElementById('promoClose');
  if(closeBtn){
    closeBtn.addEventListener('click', function(){
      banner.classList.add('hidden');
      try{ localStorage.setItem('nexa_promo_dismissed', '1'); }catch(e){}
    });
  }

  var copyBtn = document.getElementById('promoCopyBtn');
  if(copyBtn){
    copyBtn.addEventListener('click', function(){
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText('Feed me discount I beg of you please').then(function(){
          showToast('Code copied — paste it in the cart to apply');
        }).catch(function(){ showToast('Code: “Feed me discount I beg of you please”'); });
      } else {
        showToast('Code: “Feed me discount I beg of you please”');
      }
    });
  }
}

/* ================= toast ================= */
var toastTimer;
function showToast(text){
  var toast = document.getElementById('toast');
  if(!toast) return;
  toast.textContent = text;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function(){ toast.classList.remove('show'); }, 2600);
}

/* ================= product card rendering (shop grid + related) ================= */
function buildProductCard(p, opts){
  opts = opts || {};
  var card = document.createElement('article');
  card.className = 'card reveal';
  card.dataset.cat = p.category;
  card.dataset.id = p.id;

  var multi = p.variants.length > 1;
  var variantSelectHtml = multi
    ? '<select class="variant-select mono" aria-label="Choose variant">' + p.variants.map(function(v,i){ return '<option value="'+i+'">'+v.label+'</option>'; }).join('') + '</select>'
    : '<span class="variant-select mono" style="border:none; background:none; padding:0;">' + p.variants[0].label + '</span>';

  card.innerHTML =
    '<div class="card-media">' +
      '<span class="card-badge">' + p.badge + '</span>' +
      '<div class="shine"></div>' +
      ART[p.art] +
    '</div>' +
    '<div class="card-body">' +
      '<span class="cat">' + CATEGORY_LABELS[p.category] + '</span>' +
      '<h3>' + p.name + '</h3>' +
      variantSelectHtml +
      '<span class="price mono" data-price-display></span>' +
    '</div>' +
    '<div class="view-details">View details &rarr;</div>' +
    '<div class="card-actions">' +
      '<button class="btn btn-solid add-cart-btn"></button>' +
      '<a class="btn btn-outline whatsapp-ask-btn" target="_blank" rel="noopener">Ask</a>' +
    '</div>';

  var select = card.querySelector('.variant-select');
  var priceEl = card.querySelector('[data-price-display]');
  var addBtn = card.querySelector('.add-cart-btn');
  var askLink = card.querySelector('.whatsapp-ask-btn');

  function currentVariantIndex(){ return multi ? parseInt(select.value, 10) : 0; }

  function syncCardState(){
    var v = p.variants[currentVariantIndex()];
    priceEl.textContent = formatPrice(v.price);
    priceEl.classList.toggle('tba', v.price === null);
    addBtn.textContent = (v.price === null) ? 'Message for Price' : 'Add to Cart';
    askLink.href = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent('Hi! I want to ask about ' + p.name + ' (' + v.label + ').');
  }
  if(multi){ select.addEventListener('change', function(e){ syncCardState(); e.stopPropagation(); }); }
  select.addEventListener('click', function(e){ e.stopPropagation(); });
  syncCardState();

  addBtn.addEventListener('click', function(e){
    e.stopPropagation();
    var v = p.variants[currentVariantIndex()];
    if(v.price === null){ window.open(askLink.href, '_blank', 'noopener'); return; }
    if(window.SFX) SFX.tick();
    addToCart(p.id, p.name, v.label, v.price);
    showToast('Added ' + p.name + ' (' + v.label + ') to cart');
  });
  askLink.addEventListener('click', function(e){ e.stopPropagation(); });

  card.addEventListener('click', function(){ navigateTo('product.html?id=' + p.id); });

  return card;
}

function navigateTo(href){
  var overlay = document.getElementById('pageTransition');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(window.SFX) SFX.swoosh();
  if(!overlay || reduceMotion){ window.location.href = href; return; }
  overlay.classList.remove('reveal');
  overlay.classList.add('cover');
  sessionStorage.setItem('nexa_transitioning', '1');
  setTimeout(function(){ window.location.href = href; }, 480);
}

/* ================= wind / leaf particles ================= */
var windX = 0; // -1..1, biased by cursor horizontal position
/* ================= hero transformation: warrior -> gentleman (anime-style 3-beat) ================= */
function setupHeroTransform(){
  var root = document.getElementById('heroTransform');
  if(!root) return;
  var aura = document.getElementById('htAura');
  var flashEl = document.getElementById('htFlash');
  var warrior = document.getElementById('htWarrior');
  var gentleman = document.getElementById('htGentleman');
  var replayBtn = document.getElementById('htReplay');
  var localReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var playing = false;

  function setState(el, shown){ el.classList.toggle('shown', shown); }

  if(localReduceMotion){
    // Skip the animated sequence; rest on the resolved "gentleman" state.
    setState(gentleman, true);
    aura.classList.add('gold');
    if(replayBtn) replayBtn.style.display = 'none';
    return;
  }

  function play(){
    if(playing) return;
    playing = true;
    setState(warrior, true);
    setState(gentleman, false);
    aura.classList.remove('gold');
    if(window.SFX) SFX.powerUp();

    setTimeout(function(){
      flashEl.classList.remove('active');
      void flashEl.offsetWidth; // restart animation
      flashEl.classList.add('active');
      if(window.SFX) SFX.flash();
    }, 900);

    setTimeout(function(){
      setState(warrior, false);
      setState(gentleman, true);
      aura.classList.add('gold');
    }, 1075);

    setTimeout(function(){
      if(window.SFX) SFX.chime();
      playing = false;
    }, 1500);
  }

  if(replayBtn){ replayBtn.addEventListener('click', play); }

  // Auto-play once, the first time it scrolls into view.
  if('IntersectionObserver' in window){
    var played = false;
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting && !played){
          played = true;
          setTimeout(play, 300);
          io.unobserve(root);
        }
      });
    }, { threshold: 0.4 });
    io.observe(root);
  } else {
    setTimeout(play, 500);
  }
}

function setupWind(){
  if(reduceMotion) return;
  var layer = document.getElementById('windLayer');
  if(!layer) return;

  window.addEventListener('mousemove', function(e){
    windX = (e.clientX / window.innerWidth - 0.5) * 2;
  }, { passive:true });

  var MAX_LEAVES = 16;
  function spawnLeaf(){
    if(layer.childElementCount >= MAX_LEAVES) return;
    var leaf = document.createElement('div');
    var gold = Math.random() > 0.55;
    leaf.className = 'leaf' + (gold ? ' gold' : '');
    var startX = Math.random() * 100; // vw
    var driftX = (40 + Math.random() * 90) * (windX >= 0 ? 1 : -1) + (Math.random()*40-20);
    var duration = 7 + Math.random() * 6;
    var spin = (Math.random() > 0.5 ? 1 : -1) * (280 + Math.random()*360);
    var size = 8 + Math.random() * 10;
    leaf.style.setProperty('--startX', startX + 'vw');
    leaf.style.setProperty('--driftX', driftX + 'px');
    leaf.style.setProperty('--spin', spin + 'deg');
    leaf.style.width = size + 'px';
    leaf.style.height = size + 'px';
    leaf.style.animationDuration = duration + 's';
    leaf.addEventListener('animationend', function(){ leaf.remove(); });
    layer.appendChild(leaf);
  }

  for(var i=0;i<6;i++){ setTimeout(spawnLeaf, i * 400); }
  setInterval(spawnLeaf, 850);
}

/* ================= synthesized sound effects (no external audio files) ================= */
var SFX = (function(){
  var ctx = null;
  var enabled = true;
  try{ var stored = localStorage.getItem('nexa_sound'); if(stored !== null) enabled = stored === '1'; }catch(e){}

  function getCtx(){
    if(!ctx){
      var AC = window.AudioContext || window.webkitAudioContext;
      if(AC) ctx = new AC();
    }
    if(ctx && ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function swoosh(){
    if(!enabled) return;
    var c = getCtx();
    if(!c) return;
    var now = c.currentTime;
    var osc = c.createOscillator();
    var gain = c.createGain();
    var filter = c.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1800, now);
    filter.frequency.exponentialRampToValueAtTime(220, now + 0.32);
    filter.Q.value = 0.8;
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(700, now);
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.32);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.18, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.34);
    osc.connect(filter); filter.connect(gain); gain.connect(c.destination);
    osc.start(now); osc.stop(now + 0.36);
  }

  function tick(){
    if(!enabled) return;
    var c = getCtx();
    if(!c) return;
    var now = c.currentTime;
    var osc = c.createOscillator();
    var gain = c.createGain();
    osc.type = 'square';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(600, now + 0.05);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.09, now + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.07);
    osc.connect(gain); gain.connect(c.destination);
    osc.start(now); osc.stop(now + 0.08);
  }

  function powerUp(){
    if(!enabled) return;
    var c = getCtx();
    if(!c) return;
    var now = c.currentTime;
    var osc = c.createOscillator();
    var gain = c.createGain();
    var filter = c.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, now);
    filter.frequency.exponentialRampToValueAtTime(1400, now + 0.75);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(70, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.75);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.13, now + 0.5);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
    osc.connect(filter); filter.connect(gain); gain.connect(c.destination);
    osc.start(now); osc.stop(now + 0.82);
  }

  function flash(){
    if(!enabled) return;
    var c = getCtx();
    if(!c) return;
    var now = c.currentTime;
    var bufferSize = c.sampleRate * 0.25;
    var buffer = c.createBuffer(1, bufferSize, c.sampleRate);
    var data = buffer.getChannelData(0);
    for(var i=0;i<bufferSize;i++){ data[i] = (Math.random()*2 - 1) * (1 - i/bufferSize); }
    var noise = c.createBufferSource();
    noise.buffer = buffer;
    var noiseFilter = c.createBiquadFilter();
    noiseFilter.type = 'highpass';
    noiseFilter.frequency.value = 1500;
    var noiseGain = c.createGain();
    noiseGain.gain.setValueAtTime(0.22, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);
    noise.connect(noiseFilter); noiseFilter.connect(noiseGain); noiseGain.connect(c.destination);
    noise.start(now); noise.stop(now + 0.26);

    var bell = c.createOscillator();
    var bellGain = c.createGain();
    bell.type = 'sine';
    bell.frequency.setValueAtTime(1600, now);
    bellGain.gain.setValueAtTime(0.0001, now);
    bellGain.gain.exponentialRampToValueAtTime(0.15, now + 0.02);
    bellGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
    bell.connect(bellGain); bellGain.connect(c.destination);
    bell.start(now); bell.stop(now + 0.42);
  }

  function chime(){
    if(!enabled) return;
    var c = getCtx();
    if(!c) return;
    var now = c.currentTime;
    var notes = [523.25, 659.25, 783.99]; // C5, E5, G5 — bright major triad
    notes.forEach(function(freq, i){
      var start = now + i * 0.09;
      var osc = c.createOscillator();
      var gain = c.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, start);
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.12, start + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.6);
      osc.connect(gain); gain.connect(c.destination);
      osc.start(start); osc.stop(start + 0.62);
    });
  }

  function setEnabled(v){
    enabled = v;
    try{ localStorage.setItem('nexa_sound', v ? '1' : '0'); }catch(e){}
    if(v) getCtx();
    updateToggleUI();
  }
  function isEnabled(){ return enabled; }

  function updateToggleUI(){
    var btn = document.getElementById('soundToggle');
    if(!btn) return;
    btn.setAttribute('aria-pressed', enabled ? 'true' : 'false');
    var on = btn.querySelector('.snd-on');
    var off = btn.querySelector('.snd-off');
    if(on) on.style.display = enabled ? '' : 'none';
    if(off) off.style.display = enabled ? 'none' : '';
  }

  return { swoosh: swoosh, tick: tick, powerUp: powerUp, flash: flash, chime: chime, setEnabled: setEnabled, isEnabled: isEnabled, updateToggleUI: updateToggleUI };
})();

function setupSoundToggle(){
  var btn = document.getElementById('soundToggle');
  if(!btn) return;
  SFX.updateToggleUI();
  btn.addEventListener('click', function(){
    SFX.setEnabled(!SFX.isEnabled());
    if(SFX.isEnabled()) SFX.tick();
  });
}
var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;

/* ================= real-time cursor trail (canvas) ================= */
function setupCursorTrail(){
  if(reduceMotion || isTouch) return;
  var canvas = document.getElementById('cursorTrail');
  if(!canvas) return;
  var ctx = canvas.getContext('2d');
  function resize(){ canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener('resize', resize);

  var points = [];
  window.addEventListener('mousemove', function(e){
    points.push({ x: e.clientX, y: e.clientY, t: performance.now() });
    if(points.length > 26) points.shift();
  }, { passive:true });

  function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var now = performance.now();
    points = points.filter(function(p){ return now - p.t < 420; });
    for(var i=1; i<points.length; i++){
      var p0 = points[i-1], p1 = points[i];
      var age = (now - p1.t) / 420;
      var alpha = Math.max(0, 1 - age) * 0.5;
      if(alpha <= 0) continue;
      var progress = i / points.length;
      ctx.strokeStyle = progress > 0.5 ? 'rgba(194,59,46,' + alpha + ')' : 'rgba(184,134,46,' + alpha + ')';
      ctx.lineWidth = 2.5 * (1 - age);
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(p0.x, p0.y);
      ctx.lineTo(p1.x, p1.y);
      ctx.stroke();
    }
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

/* ================= hero figure: real-time mouse-follow tilt ================= */
function setupHeroTilt(){
  if(reduceMotion || isTouch) return;
  var wrap = document.getElementById('heroTransform');
  if(!wrap) return;

  var targetX = 0, targetY = 0, curX = 0, curY = 0;
  window.addEventListener('mousemove', function(e){
    var dx = (e.clientX - window.innerWidth/2) / (window.innerWidth/2);
    var dy = (e.clientY - window.innerHeight/2) / (window.innerHeight/2);
    targetX = Math.max(-1, Math.min(1, dx));
    targetY = Math.max(-1, Math.min(1, dy));
  }, { passive:true });

  function loop(){
    curX += (targetX - curX) * 0.07;
    curY += (targetY - curY) * 0.07;
    wrap.style.transform = 'perspective(900px) rotateY(' + (curX*10) + 'deg) rotateX(' + (-curY*7) + 'deg)';
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}

/* ================= click slash burst (game-style hit feedback) ================= */
function setupClickSlash(){
  if(reduceMotion) return;
  document.addEventListener('click', function(e){
    var btn = e.target.closest('.btn, .cart-toggle, .chip');
    if(!btn) return;
    var slash = document.createElement('div');
    slash.className = 'slash-burst';
    var angle = (Math.random()*50 - 25);
    slash.style.left = e.clientX + 'px';
    slash.style.top = e.clientY + 'px';
    slash.style.setProperty('--angle', angle + 'deg');
    document.body.appendChild(slash);
    slash.addEventListener('animationend', function(){ slash.remove(); });
  });
}

function setupCursorGlow(){
  if(reduceMotion || isTouch) return;
  var cGlow = document.getElementById('cursor-glow');
  var orbs = document.querySelectorAll('.orb');
  if(!cGlow) return;
  window.addEventListener('mousemove', function(e){
    cGlow.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px) translate(-50%,-50%)';
    var dx = (e.clientX / window.innerWidth - 0.5);
    var dy = (e.clientY / window.innerHeight - 0.5);
    orbs.forEach(function(orb,i){
      var strength = (i+1) * 18;
      orb.style.transform = 'translate(' + (dx*strength) + 'px, ' + (dy*strength) + 'px)';
    });
  }, { passive:true });
}

function setupMagnetic(){
  if(reduceMotion || isTouch) return;
  document.querySelectorAll('.magnetic').forEach(function(btn){
    if(btn.dataset.magBound) return;
    btn.dataset.magBound = '1';
    btn.addEventListener('mousemove', function(e){
      var r = btn.getBoundingClientRect();
      var x = e.clientX - r.left - r.width/2;
      var y = e.clientY - r.top - r.height/2;
      btn.style.transform = 'translate(' + (x*0.25) + 'px, ' + (y*0.35) + 'px)';
    });
    btn.addEventListener('mouseleave', function(){ btn.style.transform = ''; });
  });
}

function attachCardInteractions(){
  if(reduceMotion || isTouch) return;
  document.querySelectorAll('.card, .cat-card, .product-showcase').forEach(function(el){
    if(el.dataset.tiltBound) return;
    el.dataset.tiltBound = '1';
    el.addEventListener('mousemove', function(e){
      var r = el.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width;
      var py = (e.clientY - r.top) / r.height;
      var rx = (py - 0.5) * -8;
      var ry = (px - 0.5) * 8;
      if(!el.classList.contains('product-showcase')){
        el.style.transform = 'perspective(600px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) translateY(-3px)';
      }
      el.style.setProperty('--mx', (px*100) + '%');
      el.style.setProperty('--my', (py*100) + '%');
    });
    el.addEventListener('mouseleave', function(){ el.style.transform = ''; });
  });
}

var revealIO;
function attachRevealObserver(){
  var revealEls = document.querySelectorAll('.reveal:not(.in)');
  if('IntersectionObserver' in window){
    if(!revealIO){
      revealIO = new IntersectionObserver(function(entries){
        entries.forEach(function(entry, i){
          if(entry.isIntersecting){
            setTimeout(function(){ entry.target.classList.add('in'); }, i * 60);
            revealIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });
    }
    revealEls.forEach(function(el){ revealIO.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add('in'); });
  }
}

function setupCounters(){
  var counters = document.querySelectorAll('.stat .num');
  if(!counters.length) return;
  var countIO = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        var el = entry.target;
        var target = parseInt(el.dataset.count, 10);
        var suffix = el.dataset.suffix || '';
        var dur = reduceMotion ? 0 : 1400;
        var start = performance.now();
        function tick(now){
          var p = dur === 0 ? 1 : Math.min((now - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if(p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        countIO.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(function(el){ countIO.observe(el); });
}

/* ================= boot ================= */
document.addEventListener('DOMContentLoaded', function(){
  wireCartDrawer();
  renderCart();
  setupCursorGlow();
  setupMagnetic();
  setupCounters();
  setupWind();
  setupSoundToggle();
  setupCursorTrail();
  setupHeroTilt();
  setupClickSlash();
  setupPromoBanner();
  attachRevealObserver();
  if(typeof pageInit === 'function') pageInit();
  attachCardInteractions();
  attachRevealObserver();
});
