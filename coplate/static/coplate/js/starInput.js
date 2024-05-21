{
    const radioInputs = document.querySelectorAll('.rating input[type="radio"]');
    const starLabels = document.querySelectorAll('.rating label');


    function handleChange(e){
        const value = e.target.value;
        for (let i = 0; i < starLabels.length; i++){
            starLabels[i].classList.toggle('selected', i < value);
        }        
    }

    for (let input of radioInputs){
        input.addEventListener('change', handleChange)
    }
}