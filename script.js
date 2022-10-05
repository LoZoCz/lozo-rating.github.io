const fronCont = document.querySelector('.fron-cont')
const backCont = document.querySelector('.back-cont')
const submit = document.querySelector('#sub')
const rate = document.querySelector('.rate')
const rateBtns = document.querySelectorAll('.rating')

submit.addEventListener('click', function()
{
    fronCont.style.display = "none";
    backCont.style.display = "block";
});

rateBtns.forEach((btn) =>
    {
        btn.addEventListener('click', function()
        {
            const user_data = btn.innerHTML;
            rate.innerHTML = 'You selected ' + user_data + ' out of 5'
        })
    });