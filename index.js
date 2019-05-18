const {cursos} = require ("./cursos");
let timeout = 2000;
let mostrarCursos=(curso)=> {
    setTimeout(function() {
        console.log("El curso con el ID " + curso.id + " se llama " + curso.nombre + 
        " tiene una duración de " + curso.duracion + " horas y un valor de " + curso.valor);
    }, timeout);
    timeout = timeout + 2000;
};

cursos.map(function(curso) {
    mostrarCursos(curso);
});