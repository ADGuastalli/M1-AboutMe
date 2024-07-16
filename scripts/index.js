class Activity {
    constructor (titulo, descripcion, imgurl, id) {
        this.title = titulo;
        this.descripcion = descripcion;
        this.imgurl = imgurl;
        this.id = id;
        this.genero = []
        
    }

}

class Repository {
    constructor() {
        this.activities = [];
        this.id = 0;
    }
    getAllActivities() {
        return this.activities
    };

    createActivity(titulo, descripcion, imgurl) {
        this.id++;
        const actividad = new Activity(titulo, descripcion, imgurl, this.id);
        this.activities.push(actividad);
    }
    
    deleteActivity(id) {
        this.activities = this.activities.filter(actividad => actividad.id !== id)
    }
}

const repositorio1 = new Repository();

function crearCard (objeto) {
    const card = document.createElement("div");
    card.classList.add("actividad")

    const h3 = document.createElement("h5");
    h3.innerHTML = objeto.tittle;
    h3.classList.add("h3Card")

    const p = document.createElement("p");
    p.innerHTML = objeto.descripcion;
    p.classList.add("pCard")

    const link = document.createElement("img");
    link.src = objeto.imgurl;
    link.classList.add("imgCard")
    
    card.appendChild(h3);
    card.appendChild(p);
    card.appendChild(link)
    
    activitiesContainer.appendChild(card)

    card.addEventListener('click', function() {
    repositorio1.deleteActivity(objeto.id);
    actividadesAHtml();
    });
    
    return card;
}

function actividadesAHtml() {
    activitiesContainer.innerHTML = "";
    const listado = repositorio1.getAllActivities();
    const map1 = listado.map((actividad) => crearCard(actividad));
    map1.forEach(card => {
        activitiesContainer.appendChild(card);
        });
}

function handler() {
    const titulo = document.getElementById("inputTitle").value.trim();
    const descripcion = document.getElementById("inputDescription").value.trim();
    const url = document.getElementById("inputImagen").value.trim();
    
    if (!titulo || !descripcion || !url) {alert("¡¡¡ Hay campos que se encuentran vacios, por favor completarlos para poder continuar !!!");
        return 0;
}
    repositorio1.createActivity(titulo, descripcion, url);
    actividadesAHtml();

    inputTitle.value = '';
    inputDescription.value = '';
    inputImagen.value = '';
}

const submit = document.getElementById("agregar");
submit.addEventListener("click", handler)