document.querySelectorAll('.acordion_button').forEach(button =>{
     button.addEventListener('click', ()=>{
        const acordionContent = button.nextElementSibling;
        button.classList.toggle('acordion_button--active')
        if (button.classList.contains('acordion_button--active')) {
            acordionContent.style.maxHeight = acordionContent.scrollHeight + 'px';
        }else{
            acordionContent.style.maxHeight = 0;
        }
     })
});