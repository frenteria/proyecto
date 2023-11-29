# proyecto
El funcionamiento del proyecto esta dividido en tres ventanas:

1   Login: 
Se debe ingresar un usuario que cuyo formato sera un correo electronico el cual sera validado y en caso de error en la parte inferior de recuadro, se mostrara un mensaje "No es un usuario valido". De igual forma se debe ingresar una contraseña la cual debera contener al menos una mayuscula y una minuscula, debera tener minimo 8 caracteres y dos numeros. Si se cumplen las condiciones y el usuario y la contraseña coinciden con las que ya estas guardadas, se redireccionara luego de 2 segundos a la ventana principal.

2   Lista de Elementos:
En esta ventana se encuentran todos los articulos tecnologicos enlistados en una tabla por cada 10 elementos, donde cada productos contendra informacion sobre como: nombre, categoria, marca, precio, procesador y una celda para los detalles del prodcuto. En la parte izquierda de la ventana se encuentra una zona para aplicar fitros de los 50 elementos los cuales seran por categoria y por marca. Al seleccionar los filtros deseados se oprime el boton "Aplicar" y se muestran en la ventana los productos que coincidan con esas caracteristicas, de igual forma se puede reestablecer la tabla sin filtros con el boton "Limpiar".

3   Detalles del Producto:
Al seleccionar dentro de cada fila la opcion "Ver mas", se desplegara una ventana emergente con todos los detalles que contiene dicho producto, al lado de la imagen del mismo, la información respectiva estara contenida en un campor de texto con el fin de modificar dichos valores si el usuario asi lo considera, cabe aclarar que dichos campos no pueden ser guardados si estan vacios, ya que saltara una alerta que advierte este hecho. Luego de modificar la informacion con el boton "Actualizar" se redirigira a la lista de elementos donde se mostraran los cambios aplicados; el boton "Regresar" retornara a la lista de elementos sin haber aplicado cambios.