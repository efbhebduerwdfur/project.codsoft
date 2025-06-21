let display = document.getElementById('display');
let buttons = document.querySelectorAll('.btn');
let expression = '';
buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.getAttribute('data-value');

        if (value === 'C') {
            expression = '';
            display.innerText = '0';
        } else if (value === '=') {
            try {
   let result = eval(expression);
                display.innerText = result;
                expression = result.toString(); 
            } catch (error) {
                display.innerText = 'Error';
                expression = '';
            }
        } else {
            expression += value;
            display.innerText = expression;
        }
    });
});
