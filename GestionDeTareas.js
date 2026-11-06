// =====================================
// Sistema de Gestión de Tareas
// =====================================

// Regina Jiménez Meneses ID: 00000262705

/*
INSTRUCCIONES GENERALES:

1. Lee cuidadosamente cada sección.
2. Completa únicamente donde se indica con TODO.
3. No borres la estructura base.
4. Agrega comentarios explicando tu lógica.
5. Prueba cada función antes de continuar.
6. NO USAR INTELIGENCIA ARTIFICIAL.
*/


// =====================================
// 1. Arreglo inicial de tareas
// =====================================

/*
Cada tarea tiene:
- nombre: string
- prioridad: number (1 = alta, 2 = media, 3 = baja)
- completada: boolean
*/

const tareas = [
  { nombre: "Ir a la playa", prioridad: 1, completada: false },
  { nombre: "Estudiar JS", prioridad: 2, completada: true },
  { nombre: "Ver películas", prioridad: 3, completada: false }
];


// =====================================
// 2. Funciones
// =====================================

/*
TODO 1:
Crear una función que recorra el arreglo de tareas
y muestre en consola:
- nombre de la tarea
- estado: "Completada" o "Pendiente"
*/
function mostrarTareas(lista) {
  // Primero realice un ciclo para poder recorrer cada tarea dentro de la lista.
  for(let i=0;i<lista.length;i++){
    // Despues obtuve cada tarea dentro del arreglo y la almacene en esta variable llamada tarea.
    const tarea = lista.at(i);
    // Ahora obtengo el nombre de la tarea.
    const nombre = tarea.nombre;
    // Para el estado de la tarea, utilice este ternario, si el valor de completada es true, almacenara completada.
    // De lo contrario, escribira pendiente.
    const estado = tarea.completada ? "completada":"pendiente";
    // Por ultimo, imprimimos en la consola el mensaje.
    console.log("Nombre de la tarea: " + nombre + "\nEstado: " + estado);
  }
}


/*
TODO 2:
Crear una función flecha que retorne
solo las tareas completadas.
Usar filter.
*/
const obtenerCompletadas = (lista) => {
  // Utilizamos filter para que nos regrese un nuevo arreglo
  // con las tareas que su valor de completa sea true.
  return lista.filter(tarea => tarea.completada);
};


/*
TODO 3:
Crear una función flecha que retorne
solo las tareas pendientes.
Usar filter.
*/
const obtenerPendientes = (lista) => {
  // Utilizamos filter para que nos regrese un nuevo arreglo
  // con las tareas que su valor de completa sea falso.
  return lista.filter(tarea => !tarea.completada);
};


/*
TODO 4:
Crear una función flecha que retorne
solo los nombres de las tareas.
Usar map.
*/
const obtenerNombres = (lista) => {
  // Utilizamos map para que nos regrese un nuevo arreglo
  // con solo los nombres de cada tarea
  return lista.map(tarea => tarea.nombre);
};


/*
TODO 5:
Crear una función que retorne
el total de tareas.
*/
function contarTareas(lista) {
  // Utilizamos la funcion length para obtener el total de tareas
  return lista.length;
}


// =====================================
// 3. Objeto sistema
// =====================================

/*
TODO 6:
Completar los métodos usando this.tareas

- mostrarTareas: debe llamar a la función mostrarTareas
- mostrarCompletadas: debe usar obtenerCompletadas
- mostrarPendientes: debe usar obtenerPendientes
*/

const sistema = {
  tareas: tareas,

  mostrarTareas: function() {
    // Llamamos directamente a la funcion
    // porque mostrarTareas() ya imprime cada tarea dentro de su ciclo for
    mostrarTareas(this.tareas);
  },

  mostrarCompletadas: function() {
    // obtenerCompletadas retorne un arreglo, así que lo imprimimos
    console.log(obtenerCompletadas(this.tareas));
  },

  mostrarPendientes: function() {
    // obtenerPendientes retorne un arreglo, así que lo imprimimos
    console.log(obtenerPendientes(this.tareas));
  }
};


// =====================================
// 4. Condicionales
// =====================================

/*
TODO 7:

- Si el arreglo tareas está vacío:
  mostrar "No hay tareas"

- Si todas las tareas están completadas:
  mostrar "Todas las tareas completadas"
*/
 // Utilizamos la funcion contarTareas() para que si este regresa 0,
 // la consola imprima que no hay tareas. De lo contrario, entra en la siguiente condicion
if (contarTareas(tareas) === 0) {
  console.log("No hay tareas");
} else if (contarTareas(obtenerCompletadas(tareas)) === contarTareas(tareas)) { 
  // Utilizamos la funcion contarTareas, donde le mandamos el arreglo que nos regresa obtenerCompletadas
  // el cual nos regresa las tareas completadas y lo comparamos con la cantidad de tareas, 
  // si entra la condicion imprime que Todas las tareas completadas.
  console.log("Todas las tareas completadas");
}


// =====================================
// 5. Switch
// =====================================

/*
TODO 8:

Usar la variable opcion para ejecutar:

1 -> mostrar todas las tareas
2 -> mostrar tareas completadas
3 -> mostrar tareas pendientes
default -> mostrar "Opción inválida"
*/

const opcion = 1;

switch (opcion) {
  case 1:
    // Si la opcion es 1, llamamos a la funcion para mostrar el listado completo
    mostrarTareas(tareas);
    break;

  case 2:
    // Si la opcion es 2, filtramos e imprimimos las tareas completadas
    console.log(obtenerCompletadas(tareas));
    break;

  case 3:
    // Si la opcion es 3, filtramos e imprimimos las tareas pendientes
    console.log(obtenerPendientes(tareas));
    break;

  default:
    // Mostramos un mensaje de advertencia
    console.log("Opción inválida");
}


// =====================================
// 6. Pruebas
// =====================================

/*
TODO 9:

Llamar funciones para comprobar que todo funciona correctamente.
Usar console.log donde sea necesario.
*/

console.log("TODO 1: ")
mostrarTareas(tareas)
console.log()

console.log("TODO 2: ")
console.log(obtenerCompletadas(tareas));
console.log()

console.log("TODO 3: ")
console.log(obtenerPendientes(tareas));
console.log()

console.log("TODO 4: ")
console.log(obtenerNombres(tareas));
console.log()

console.log("TODO 5: ")
console.log(contarTareas(tareas));
console.log() 

console.log("TODO 6:");
sistema.mostrarTareas();
console.log("Completadas:");
sistema.mostrarCompletadas();
console.log("Pendientes:");
sistema.mostrarPendientes();
