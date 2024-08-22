//your code here!
document.addEventListener('DOMContentLoaded', function() {
    const list = document.getElementById('infi-list');
    let listItemCount = 10; // Initial number of items

    // Function to add list items
    function addListItems(numItems) {
        for (let i = 0; i < numItems; i++) {
            const newItem = document.createElement('li');
            newItem.textContent = `Item ${listItemCount + 1}`;
            list.appendChild(newItem);
            listItemCount++;
        }
    }

    // Add initial 10 items
    addListItems(10);

    // Detect when user scrolls to the bottom
    list.addEventListener('scroll', function() {
        if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
            // Add 2 more items when scrolled to the bottom
            addListItems(2);
        }
    });
});

