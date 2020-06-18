// Logic
const calculate = document.querySelector('.calc');
const burger = document.querySelector('.burger');
const iconBurger = document.querySelector('.icon-burger');
const iconSidebar = document.querySelector('.icon-sidebar');
const sidebar = document.querySelector('.sidebar');
const mainBody = document.querySelector('.main-body');

iconBurger.addEventListener('click', () => {
    iconSidebar.style.display = 'none';
    sidebar.classList.toggle('slideSidebarOut');
    mainBody.classList.toggle('mainBodyShift');
    mainBody.style.width = '80%';
});

burger.addEventListener('click', () => {
    iconSidebar.style.display = 'block';
    sidebar.classList.remove('slideSidebarOut');
    mainBody.classList.remove('mainBodyShift');
    mainBody.style.width = '100%';
})

// Interest Calculation

calculate.addEventListener('click', () => {
    // Values
    // let percentage = document.querySelector('#percentage input').value;
    let amount = document.querySelector('#amount input').value;
    let years = document.querySelector('#years input').value;
    let percent = document.querySelector('.per__month input').value;
    let mon = document.querySelector('.per__month input').value;

    // Calculate
    const principal = parseFloat(amount);
    let calculateInterest = parseFloat(percent) / 100 / 12;
    const calculatedPayment = parseFloat(years) * 12;

    if(+mon > 0) {
        calculateInterest = calculateInterest * +mon;
    }

    // Monthly Payment
    const x = Math.pow(1 + calculateInterest, calculatedPayment);
    const monthly = (principal * x * calculateInterest) / (x - 1);
    const monthlyPayment = monthly.toFixed(2);

    // Total Interest
    const totalInterest = (monthly * calculatedPayment - principal).toFixed(2);

    // Total Payment
    const totalPayment = (monthly * calculatedPayment).toFixed(2);

    // Formatter
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 2,
    });

    // Display Result
    document.querySelector('#total-payment').innerHTML = formatter.format(totalPayment);

});