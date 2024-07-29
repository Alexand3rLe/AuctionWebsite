document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('user-form');
    const userList = document.getElementById('user-list');
  
    const fetchUsers = async () => {
      const response = await fetch('/users');
      const users = await response.json();
      userList.innerHTML = '';
      users.forEach(user => {
        const userItem = document.createElement('div');
        userItem.textContent = `${user.username} (${user.email})`;
        userList.appendChild(userItem);
      });
    };
  
    userForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      const response = await fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
  
      if (response.ok) {
        fetchUsers();
      } else {
        const error = await response.json();
        alert(error.message);
      }
  
      userForm.reset();
    });
  
    fetchUsers();
  });
  