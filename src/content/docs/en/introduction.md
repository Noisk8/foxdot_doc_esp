---
title: "Haciendo tus primeros sonidos"
description: "Docs intro"
---





## Abrir el editor FoxDot

Felicitaciones por instalar FoxDot – ¡hagamos algunos sonidos! Primero debe abrir SuperCollider para que podamos cargar sonidos de FoxDot. 

Una vez que se abra SuperCollider, escriba lo siguiente en el editor:

~~~
FoxDot.start
~~~

Esto le dice a SuperCollider que comience a escuchar mensajes de FoxDot. Para ejecutar esta línea de código, debe colocar el cursor de texto en la línea y presionar Ctrl+Return. La línea debe parpadear y debería ver que algunos números se vuelven verdes en la parte inferior de su pantalla:

![](https://foxdot.org/static/images/docs/sc_bootup.png)

Ahora podemos abrir el editor FoxDot y comenzar a hacer sonidos. Puede abrir el editor yendo a su aplicación de línea de comandos ( Aviso de comandos en Windows, Terminal en Mac y Linux ) y escribiendo el siguiente bit de código y presionando enter:

~~~
$ python -m FoxDot
~~~

Esto le dice a su computadora que ejecute el intérprete de Python y ejecute el módulo FoxDot como un script independiente. Deberías ser recibido con una ventana que se parece a esto:

## Editor de FoxDot

![](https://foxdot.org/static/images/docs/foxdot_editor.png)


Lo que tiene aquí es un editor de texto interactivo; puede escribir código pero también ejecutar el código dentro del editor. Para ejecutar un bloque de líneas de código ( no separadas por líneas en blanco ) asegúrese de que su cursor de texto esté en el bloque de código que desea evaluar y presionar Ctrl+Enter en Windows / Linux o Command+Return en Mac. El texto debe destellar rojo por un breve momento e imprimirse en la consola en la parte inferior de la pantalla de esta manera:

![](https://foxdot.org/static/images/docs/foxdot_editor.png)

Hagamos un ruido simple. Escriba lo siguiente en el editor FoxDot y evalúelo:

~~~
p1 >> pluck()
~~~
Esto debería comenzar un bucle muy básico tocando una nota pulsada en repetición. Para detener esto, agregue .stop() hasta el final de la línea para que se vea así:

~~~
p1 >> pluck().stop()
~~~

Evalúe la línea para detener el bucle. ¡Ahí tienes! Has hecho sonido con FoxDot – echa un vistazo al resto de la sección “ Comenzando ” para familiarizarte con otros aspectos del entorno antes de pasar a las secciones avanzadas… y diviértete!




- ✅ **Full Markdown support**
