// Los loops (bucles), son manera rápida y sencilla de hacer algo (una tarea) repetidamente.

var estudiantes = [ 'Maria', 'Sergio', 'Rosa', 'Daniel' ]; 

function saludarEstudiante(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiante(estudiantes[i]);
}

for (var estudiante of estudiantes) {
    saludarEstudiante(estudiante);
}

while (estudiantes.length > 0) {   // Aquí la tarea se hará siempre y cuando sea true, cuando llegué a false, dejará de hacer la tarea
    var estudiante = estudiantes.shift();  // shift() es un método que saca un elemento del array de la posición 0 a la última, Pop() comienza de la última a la primera. Aquí cumple 2 funciones, saca el elemento pero a la vez lo guarda en una variable, pro-tip. 
    saludarEstudiante(estudiante);
}


