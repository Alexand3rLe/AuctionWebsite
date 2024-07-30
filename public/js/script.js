document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-item-form');
  
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
  
      const formData = new FormData();
      formData.append('name', document.getElementById('name').value);
      formData.append('description', document.getElementById('description').value);
      formData.append('price', document.getElementById('price').value);
      formData.append('status', document.getElementById('status').value);
      formData.append('image', document.getElementById('image').files[0]);
  
      try {
        const response = await fetch('/api/items', {
          method: 'POST',
          body: formData
        });
  
        if (response.ok) {
          const newItem = await response.json();
          addItemToPage(newItem);
          form.reset();
        } else {
          console.error('Failed to add item:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  
    const addItemToPage = (item) => {
      const itemsList = document.getElementById('items-list');
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('item');
      itemDiv.innerHTML = `
        <h2>${item.name}</h2>
        <img src="${item.image}" alt="${item.name}" width="200">
        <p>Description: ${item.description}</p>
        <p>Price: $${item.price}</p>
        <p>Status: ${item.status}</p>
        <button class="bid-button" data-id="${item.id}">Place Bid</button>
      `;
      itemsList.appendChild(itemDiv);
    };
  });
  
