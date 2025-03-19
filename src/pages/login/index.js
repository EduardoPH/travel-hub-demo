const login = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email === 'user@test' && password === '123') {
    alert('Login success');
    document.location.href = '/home';

  }
  else {
    alert('Login failed');
  }
}
