Primero definimos que el álbum va a tener 180 figuritas, luego carga el array de figuritas guardado en localstorage si existe, si no, crea uno nuevo con todas las figuritas en false (no obtenidas). 
Luego busca el elemento html con id contador y guardalo en la variable contador, y hace lo mismo con el elemento con id álbum guardándolo en la variable album. 
Después de esto crearemos 2 funciones: la primera función será para actualizar el contador, buscando que figuritas ya están marcadas como obtenidas (las que tengan valor true) y luego mostrar en pantalla cuantas faltan para completar el álbum.
La otra función, la principal, para crear el álbum con un for que recorra desde el 0 al 179 para:
crear botones con números, darles una class que sea “obtenida” para luego poder asignar el color dependiendo de si esta marcada (rojo) o no (verde) 
seguido de la funcion EventListener la cual va a escuchar el click y va a invertir el estado de la figurita, agregando o cambiando la class “obtenida” y guardando todo en el localstorage y actualizando finalmente el contador
