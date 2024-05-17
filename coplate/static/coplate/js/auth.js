{
    const elts = document.querySelectorAll('[data-login-required]');

    function handleClick(e) {
        if (!isAuthenticated) {
            e.preventDefault();
            alert('로그인이 필요합니다.')
        }
    }

    for (let elt of elts){
        elt.addEventListener('click', handleClick)
    }
}



