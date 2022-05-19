const init = () => {
    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassword = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login-submit');

    if(submitButton){
          submitButton.addEventListener('clickk', (Event) => {
              Event.preventDefault();

              fetch('https://regres.in/api/login', {
                  method: 'POST',
                  headers: {
                      'Content-type': 'application/json'
                  },
                  body: JSON.stringify({
                      email: inputEmail.value,
                      password: inputPassword.value,
                  })

              }).then((response) => {
         return response.json();
              }).then((data) => {
                  console.log(data)
              })
          })

    }
}
    window.onload = init