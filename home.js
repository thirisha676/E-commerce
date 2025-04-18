let roundBtns = document.querySelectorAll('.round');
let ind = 0;
let timerId;
roundBtns.forEach((button,index)=>{
    button.addEventListener('click',()=>{
        slideLeft(index);
        ind = index;
    });
});
function slideLeft(i)
{
    roundBtns.forEach((button)=>{
        button.classList.remove('active');
    });
    roundBtns[i].classList.add('active');
    let translateValue = -100*i;
    document.querySelector('.advertisment_banner_list').style.transform = `translateX(${translateValue}%)`;
    ind = ind+1;
    if(ind === roundBtns.length) 
    {
        ind = 0;
    }
}

timerId = setInterval(()=>{
    slideLeft(ind);

},5000);

let navBar = document.querySelector('.navigation_bar');
let offerText = document.querySelector('.offer-text');
let isNavbarFixed = false;
let navBarHeight = navBar.offsetHeight;

window.addEventListener('scroll',()=>{
    let scrollPosition = window.scrollY;
    let navBarPositions = navBar.getBoundingClientRect();

    if(navBarPositions.top <=0)
    {
        navBar.classList.add('fixed');
        isNavbarFixed = true;
        offerText.style.marginBottom = navBarHeight+'PX';
    }
    else
    {
        navBar.classList.remove('fixed');
        isNavbarfixed = false;
        offerText.style.marginBottom = '0';
    }

    if(scrollPosition<=55)
    {
        navBar.classList.remove('fixed');
        isNavbarFixed = false;
        offerText.style.marginBottom = '0';
    }
});

function redirectToLogin()
{
    window.location.href = "/api/auth/login";
}

async function createUser(e)
{
    e.preventDefault();
    let userName = document.querySelector('#userName').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let respone = await fetch('/api/auth/register',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify({userName,email,password}),
    });
    if(response.ok)
    {
        window.location.href = "/api/auth/login";
    }
}


