// base code at https://github.com/jonalvarezz/snowpack-template-tailwind
const isIntersecting = (entry) => {
    return entry.isIntersecting; // true si esta dentro de la pantalla y false si esta por fuera
}

const loadImage = (entry) => {
    const nodo = entry.target;
    //console.log("test here!");
    
    //this is part of the lazy loading:
    // Aplicando Lazy loading (video 23/28) 
    const imagen = nodo.firstChild;
    const url = imagen.dataset.src;
    
    imagen.src = url;

    observer.unobserve(nodo);
    
}

const observer = new IntersectionObserver((entries) => {
    entries
    .filter(isIntersecting)
    .forEach(loadImage)
})

export const registerImage = (imagen) => {
    // intersection observer -> observer (imagen) 
    observer.observe(imagen);
}

