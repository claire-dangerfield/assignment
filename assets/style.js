function addItemsToList() {
    const form = document.querySelector('[data-form]')
    const ul = document.querySelector('[data-ul]')

    const value = form.value
    const li = document.createElement('li')
    li.innerHTML = value
    ul.appendChild(li)

};

const btn = document.getElementById('btn');

form.addEventListener('add', function handleSubmit(event) {
    event.preventDefault();

    // Reset the form here
    form.reset();
});
