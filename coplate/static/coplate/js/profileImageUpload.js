{
    const fileInput = document.querySelector('#id_profile_pic');
    const profilePic = document.querySelector('.profile.profile-pic') 

    function handleChange(e){
        const file = e.target.files[0];
        if(file){
            const fileURL = window.URL.createObjectURL(file);
            profilePic.style.backgroundImage = `url(${fileURL})`
        }
        
    }

    fileInput.addEventListener('change', handleChange)
}