const products = document.querySelectorAll(".product-card");

function toggleTheme() {
    document.body.classList.toggle("dark");
}

function filterCategory(category) {

    products.forEach(product => {

        if (product.dataset.category === category) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });
}

function showAll() {

    products.forEach(product => {
        product.style.display = "block";
    });

}

function searchProducts() {

    const search =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();

    products.forEach(product => {

        const text =
            product.innerText.toLowerCase();

        if (text.includes(search)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }

    });

}