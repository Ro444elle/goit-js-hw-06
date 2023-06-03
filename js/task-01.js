const categoriesList = document.querySelector("ul#categories");

const categoriesCount = categoriesList.querySelectorAll("li.item").length;

console.log(`Number of categories: ${categoriesCount}`);

const categories = categoriesList.querySelectorAll("li.item");

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;

  const elementsCount = category.querySelectorAll("li").length;

  console.log(`\nCategory: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
