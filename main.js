const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerMenu = document.querySelector('.menu');
const cartMenu = document.querySelector('.navbar-shopping-cart');
const productCart = document.querySelector('.product-detail');

burgerMenu.addEventListener('click', toggleShowMobileMenu);
cartMenu.addEventListener('click', toggleShowCart);
menuEmail.addEventListener('click', toggleShowDesktopMenu);

function toggleShowDesktopMenu() {
    const isProductCartClosed = productCart.classList.contains('inactive');

     if (!isProductCartClosed ) {
    productCart.classList.add('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}



function toggleShowMobileMenu() {
  const isProductCartClosed = productCart.classList.contains('inactive');

  if (!isProductCartClosed ) {
    productCart.classList.add('inactive');
  }

  mobileMenu.classList.toggle('inactive');
}

function toggleShowCart() {
  const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
  const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')

  if (!isMobileMenuClosed || !isDesktopMenuClosed) {
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive')
  }

  productCart.classList.toggle('inactive');
}
