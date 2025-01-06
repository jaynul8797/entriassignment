  // Fetch data from the API and display it
  async function fetchProducts() {
    const apiUrl = 'https://fakestoreapi.com/products';
    const container = document.getElementById('product-container');

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }
      const products = await response.json();

      // Display details for each product
      products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
          <h3>${product.title}</h3>
          <p><strong>Category:</strong> ${product.category}</p>
          <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
        `;
        container.appendChild(productDiv);
      });
    } catch (error) {
      container.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
  }

  // Load products when the page is loaded
  window.onload = fetchProducts;