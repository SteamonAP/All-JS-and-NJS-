const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase(); // Fixed toUpperCase()
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    const pname = storeitems.getElementsByTagName("h2"); // Corrected to getElementsByTagName()

    for (let i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML;

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = ""; // Show the product
            } else {
                product[i].style.display = "none"; // Hide the product
            }
        }
    }
}
