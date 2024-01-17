const countCategories = document.querySelectorAll('#categories .item')
console.log(`Number of categories: ${countCategories.length}`);

countCategories.forEach(elem => {
    const title = elem.querySelector('h2').textContent
    const numberElem = elem.querySelectorAll('li').length
    console.log(`Category: ${title}`);
    console.log(`Elements: ${numberElem}`);
})

