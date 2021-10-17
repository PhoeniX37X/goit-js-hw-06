const itemsRef = document.querySelectorAll('.item');
console.log("Number of categories: ", itemsRef.length);


  itemsRef.forEach(item => {
    const itemsTitle = item.querySelector('.item h2');
    console.log('Category: ', itemsTitle.textContent);
    const itemsLength = item.querySelectorAll('.item > ul > li');
    console.log('Elements: ', itemsLength.length);
});

