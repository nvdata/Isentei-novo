export default function linkDentroLink() {
    document.querySelectorAll('.link__nao-link').forEach(i => {
<<<<<<< HEAD

=======
>>>>>>> b8bcbdedb529584a5bd5993c856bea9ad0d60f98
        i.addEventListener('click', ev => {
            ev.preventDefault();
            window.open(ev.currentTarget.getAttribute('href'), 'janela');

            //No seu código, em vez de window.open, 
            //você pode usar location.href = ev.currentTarget.getAttribute('href')  

        })

    });
}