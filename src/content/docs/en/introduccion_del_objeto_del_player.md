---
title: "Introducción del objeto del player"
description: "Lorem ipsum dolor sit amet - 2"
---


### Recogiendo un sonido

Cuando FoxDot se inicia, se reservan todos los nombres de variables de dos caracteres en minúsculas, p. aa, p1, y bd, para ser utilizados como "jugadores". Estos son los objetos que reproducen sonidos para nosotros según las instrucciones que les damos. La primera instrucción que le damos diciéndole qué instrumento ( sintetizador ) tocar. Para ver una lista de todos los sintetizadores disponibles, evalúe lo siguiente:
~~~
print(SynthDefs)
~~~


Esto es la abreviatura de definición de sintetizador. Elija uno y asígnelo a un objeto reproductor FoxDot usando dos signos "mayores que", también conocido como "flecha doble". Si mi SynthDef elegido fue “ pluck ” y mi objeto de jugador elegido fue p1 entonces asignaría “ pluck ” a p1 así:

~~~
p1 >> pluck()
~~~
Asegúrese de incluir los corchetes al final de “ pluck ” o no funcionará. Para detener un objeto reproductor individual, simplemente ejecute p1.stop(). Para detener todos los objetos del reproductor, puede presionar Ctrl+., que es un atajo para el comando 

~~~
Clock.clear()
~~~

### Instrucciones de asignación

los >> en Python generalmente se reserva para un tipo de operación, como cómo se usa un símbolo ‘ + ’ para agregar, pero no es el caso en FoxDot, y la razón quedará clara en breve. Al agregar argumentos entre paréntesis, puede cambiar las notas que se reproducen. El primer argumento, el tono de nota ( a veces denominado grado ), no necesita ser nombrado explícitamente, pero deberá especificar otros atributos ( como la duración ) si desea cambiarlos. Estos valores pueden ser un solo valor o una lista de valores que el jugador jugará a su vez.

Por ejemplo, el siguiente código reproduce tres notas a su vez continuamente hasta p1 se detiene:

~~~
p1 >> pluck([0, 2, 4], dur=[1, 1/2, 1/2], amp=0.75)
~~~

El primer argumento es el tono de la nota que queremos tocar, que es una lista de 3 números; 0, 2 y 4. El jugador jugará cada uno de estos por turno. Por defecto, todos los jugadores usarán la escala C-Major, que podemos considerar como una lista de Python:

~~~
CMajor = [C, D, E, F, G, A, B] 
~~~

Los números que usamos para tono se refieren al índice de las notas que queremos elegir de esta escala. Entonces, con nuestra lista de lanzamientos [0, 2, 4] nuestras notas serían:

~~~
CMajor[0] => C
CMajor[2] => E
CMajor[4] => G
~~~


La duración de estas notas se deriva de la dur argumento de palabra clave, que también es una lista de tres números; 1, 1/2 y 1/2. La posición de estos valores se relaciona con la posición de los valores que suministramos para el tono. Entonces, la primera nota durará 1 tiempo y las siguientes dos notas durarán la mitad de 1 tiempo. El último argumento de palabra clave, amp se usa para establecer la amplitud ( volumen ) de la nota, donde 0 es silencioso y 1 es más fuerte. Podrá conocer otras palabras clave que puede usar en la sección Atributos de jugadores.

También puede agregar valores al reproductor para crear variaciones en sus secuencias o incluso reproducir acordes. Por ejemplo, el siguiente código reproducirá cada 3 notas 4 tonos más alto:

~~~
p1 >> pluck([0, 1, 2, 3], dur=2) + [0, 0, 4] 
~~~

Para crear acordes, use una tupla en lugar de una lista. El siguiente código agregará una tríada básica a cada nota reproducida:
~~~
p1 >> pluck([0, 1, 2, 3], dur=2) + (0, 2, 4) 
~~~

### Reproduciendo  Samples

FoxDot también puede reproducir samples de audio, como percusión, utilizando un SynthDef especial llamado play. En lugar de tomar una lista de números como primer argumento, toma una cadena de caracteres donde cada carácter se relaciona con un sonido diferente. Aquí hay un ejemplo de un patrón de tambor muy básico:

~~~
d1 >> play("x-o-") 
~~~

La cadena también puede contener información sobre cómo se debe reproducir la secuencia, lo que se hace mediante el uso de diferentes tipos de paréntesis. Poner dos o más personajes entre corchetes alternará qué sonido reproducir en cada bucle a través de la secuencia:
~~~
d1 >> play("(x-)(-x)o-")
~~~

Poner múltiples personajes entre corchetes los jugará sucesivamente en el espacio de un paso. Este ejemplo juega un triplete de charles durante su cuarto paso:

~~~
d1 >> play("x-o[---]", dur=1)
~~~

También puede usar aparatos ortopédicos rizados para elegir un sonido al azar, para agregar un poco de variedad a su secuencia:
~~~
d1 >> play("x-o{-=*}")
~~~

Todos estos se pueden usar y anidar juntos para crear patrones complejos:

~~~
d1 >> play("(x[--])xo{-[--][-x]}")
~~~





