function validate() {
 const emailInput = document.getElementById('email');
 emailInput.addEventListener('change', function ()
 {
    emailInput.classList.remove('error');
    const value = emailInput.value;
   if( value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {return;}
   emailInput.classList.add('error');
 });   
}