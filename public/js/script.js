document.addEventListener('DOMContentLoaded', () => {
    const bidButtons = document.querySelectorAll('.bid-button');
    
    bidButtons.forEach(button => {
      button.addEventListener('click', async (event) => {
        const itemId = event.target.dataset.id;
        
        const response = await fetch(`/api/items/${itemId}/bid`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ amount: 100 }) 
        });
  
        if (response.ok) {
          alert('Bid placed successfully!');
        } else {
          alert('Failed to place bid.');
        }
      });
    });
  });
  