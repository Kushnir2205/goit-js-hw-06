const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);

const categoriesTitle = [...categories].forEach(title => {
  console.log(`Category:
    ${title.firstElementChild.textContent}`);
  console.log(`Elements:
      ${title.lastElementChild.children.length}`);
});