const options = {
    id: {
        alias: 'i',
        require: true
    }, nombreAlumno: {
        alias: 'n',
        require: true
    }, cedula: {
        alias: 'c',
        require: true
    }
};

const {cursos} = require("./cursos");
const fs = require("fs");
const argv = require("yargs")
            .command("inscribir", "Inscribirme en un curso", options)
            .argv;

let cursoSeleccionado = cursos.find(curso => curso.id == argv.id);

let crearArchivo = () => {
        
    if(cursoSeleccionado == undefined) {
        console.log("Ha ingresado un ID que no corresponde a ningun curso\n")
        const index = require("./index");
        return;
    }
    texto = "El estudiante " + argv.nombreAlumno + "\n" +
            "con cedula " + argv.cedula + "\n" +
            "se ha matriculado en el curso de " + cursoSeleccionado.nombre + "\n" +
            "que tiene una duración de " + cursoSeleccionado.duracion + " y un valor de " + cursoSeleccionado.valor;

    fs.writeFile("matricula.txt", texto, (error) => {
        if(error) throw (error);
        console.log("Se ha creado exitosamente");
    });
}

crearArchivo();
