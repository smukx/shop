document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { name: "VXUG Logo Tee", image: "logo_tee.jpg", price: "$25.99" },
        { name: "Retro Design Tee", image: "retro_tee.jpg", price: "$29.99" },
        { name: "Graphic Hoodie", image: "graphic_hoodie.jpg", price: "$49.99" },
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;
        productList.appendChild(productElement);
    });
});