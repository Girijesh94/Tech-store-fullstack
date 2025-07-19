// lib/api.ts

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

// ---------------- PRODUCTS ----------------

export async function fetchProducts() {
  const res = await fetch(`${baseUrl}/api/products`);
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
}

export async function fetchProductById(productId: string) {
  const res = await fetch(`${baseUrl}/api/products/${productId}`);
  if (!res.ok) throw new Error('Failed to fetch product');
  return res.json();
}

// ---------------- AUTH ----------------

export async function registerUser(data: { name: string; email: string; password: string }) {
  const res = await fetch(`${baseUrl}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to register');
  return res.json();
}

export async function loginUser(data: { email: string; password: string }) {
  const res = await fetch(`${baseUrl}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to login');
  return res.json();
}

// ---------------- CART ----------------

export async function getCart(userId: string) {
  const res = await fetch(`${baseUrl}/api/cart/${userId}`);
  if (!res.ok) throw new Error('Failed to fetch cart');
  return res.json();
}

export async function addToCart(data: { userId: string; productId: string; quantity: number }) {
  const res = await fetch(`${baseUrl}/api/cart`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to add to cart');
  return res.json();
}

export async function removeFromCart(cartItemId: string) {
  const res = await fetch(`${baseUrl}/api/cart/${cartItemId}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to remove from cart');
  return res.json();
}

// ---------------- WISHLIST ----------------

export async function getWishlist(userId: string) {
  const res = await fetch(`${baseUrl}/api/wishlist/${userId}`);
  if (!res.ok) throw new Error('Failed to fetch wishlist');
  return res.json();
}

export async function addToWishlist(data: { userId: string; productId: string }) {
  const res = await fetch(`${baseUrl}/api/wishlist`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to add to wishlist');
  return res.json();
}

export async function removeFromWishlist(wishlistItemId: string) {
  const res = await fetch(`${baseUrl}/api/wishlist/${wishlistItemId}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to remove from wishlist');
  return res.json();
}

// ---------------- ORDERS ----------------

export async function placeOrder(data: { userId: string; items: any[]; total: number }) {
  const res = await fetch(`${baseUrl}/api/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to place order');
  return res.json();
}

export async function getOrders(userId: string) {
  const res = await fetch(`${baseUrl}/api/orders/${userId}`);
  if (!res.ok) throw new Error('Failed to fetch orders');
  return res.json();
}
