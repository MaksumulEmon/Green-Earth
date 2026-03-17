console.log("Helllo")

const categoryContainer = document.getElementById('categoryContainer');
async function loadCategries() {
    const res = await fetch("https://openapi.programming-hero.com/api/categories");
    const data = await res.json();
    console.log(data.categories);
    data.categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = "btn btn-outline  font-semibold w-full";
        btn.innerText =category.category_name;
        categoryContainer.appendChild(btn);
    });
}

loadCategries();

