## Iniciar sesion

* Pagina Principal: En este apartado el usuario inicia sesión y dependiendo lo que quiera hacer se va hacia el apartado de Compra o Venta de productos.

* Registro: En este apartado el usuario que no tenga una cuanta registrada en nuestra página podría registrarse de manera fácil y rápida.

![Registro](regis.png)

* Inicio de Sesión: En este apartado es donde ya con una cuenta previamente registrada podrá iniciar sesión y acceder a la página con total normalidad.

![Inicio](ini.png)

*****************************
## Comprador 

* Pagina principal: En este apartado el usuario una vez iniciada sesión podra ver, añadir al carrito y comprar los productos ofrecidos en la pagina.

![pagina](pag.png)

* Productos: Estos productos mostraran una imagen alusiva al producto ofrecido, nombre del producto ofrecido, costo del producto y por ultimo un botón para añadir el producto al "Carrito".
![comprador](comp.png)

* Carrito: Cuando el usuario oprima el boton de "Agregar al carrito", el producto seleccionado se añarida al carrito el cual esta ubicado en la parte superior derecha de la pagina pricnipal, el cual mostrara el resumen de la compra en donde se veran todos los productos que añadio al carrito, desde ese mismo apartado podra eliminar productos a placer, o vaciar el carrito por completo, de la misma manera podra proceder al pago de sus productps.
Se usa **localStorage** para que los productos agregados no se borren al actualizar la pagina.

```javascript
function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}
```
![carrito](car.png)

* Pago de Productos: En este apartado el usuario podra realizar el pago de todos los objetos añadidos al carrito y asi terminar su recorrido como comprador.

![pagar](pago.png)

**********************
## Vendedor 
* Pagina principal: Una vez que el usuario iniciara sesion y en este caso fuera un vendedor lo redijira al apartado correspondiente, en esta pagina observamos un recuadro central en el que hay tres apartados para introducir los datos del producto que desea poner a la venta (producto, precio, descripción). Una vez concluido el llenado de los campos correspondientes se da click en el boton para agregar los productos.

![vendedor](vend-1.png)

* Administrar tus productos: Los productos puestos en venta se muestran en la parte baja de la pagina, al lado del nombre del producto aparece un logo de bote de basura que permite al vendedor administrar sus productos y poder eliminarlos.

![almacen](alm-1.png)

