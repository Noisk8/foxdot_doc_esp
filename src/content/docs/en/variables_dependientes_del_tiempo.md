---
title: "variables dependientes del tiempo"
description: "Lorem ipsum dolor sit amet - 3"
---

### Programación a tiempo

Cuando eres música de codificación en vivo, a menudo querrás que las cosas cambien con el tiempo. Una buena manera de demostrar esto es usar secuencias de acordes. Digamos que tiene la secuencia C-F-C-G, que podemos representar como la lista de Python <code>[0, 3, 0, 4]</code>, y queremos tocar los acordes durante 8 latidos cada uno, pero con un jugador que toca notas cada cuarto de latidos. ¿Cómo hacemos esto? Una solución podría ser usar el Patrón <code>stutter</code> método que repite valores en un patrón “ n ” veces:

~~~
>>> print(P[0, 3, 0, 4].stutter(4) + (0, 2, 4))
P[P(0, 2, 4), P(0, 2, 4), P(0, 2, 4), P(0, 2, 4), P(3, 5, 7), P(3, 5, 7),
P(3, 5, 7), P(3, 5, 7), P(0, 2, 4), P(0, 2, 4), P(0, 2, 4), P(0, 2, 4),
P(4, 6, 8), P(4, 6, 8), P(4, 6, 8), P(4, 6, 8)]
~~~

Entonces, para reproducir la secuencia de acordes anterior con un sonido “ pluck ”, podríamos hacer algo como esto:


~~~
p1 >> pluck(P[0, 3, 0, 4].stutter(32), dur=1/4) + (0, 2, 4)
~~~

Con 4 notas por latido y 8 latidos por acorde, podemos determinar fácilmente que necesitamos tartamudear cada valor de tono 32 veces. El problema es que tenemos que cambiar ese valor cada vez que cambiamos la duración. Si cambiamos nuestra duración a <code>[1/2, 1/4, 1/4]</code> tendríamos que hacer algunas matemáticas en nuestra cabeza ( o usar Python ) para calcular cuántas veces tartamudear los valores de tono. Para evitar esto, podemos usar variables que cambian su valor con el tiempo, por lo que después de 8 tiempos comenzamos a jugar automáticamente un tono diferente. Estas se conocen como variables dependientes del tiempo “ ” o “ TimeVar ” para abreviar.

Un TimeVar tiene una serie de valores entre los que cambia después de un número predefinido de tiempos y se crea usando un objeto var con la sintaxis <code>var([list_of_values],[list_of_durations])</code>. Ejemplo:

~~~
# La duración puede ser un valor único
>>> a = var([0,3],4)
# 'a' inicialmente tiene un valor de 0 cuando han transcurrido 0 pulsaciones
>>> print(int(Clock.now()), a)   
0, 0
# Después de 4 tiempos, el valor cambia a 3
>>> print(int(Clock.now()), a)   
4, 3
# Después de otros 4 tiempos, el valor vuelve a 0
>>> print(int(Clock.now()), a)   
8, 0
~~~

Entonces, para resolver nuestro problema original al reproducir una secuencia de acordes, podríamos usar el siguiente código con cualquier valor de duración y todavía estaríamos aquí la secuencia de reproducción de 8 tiempos por acorde:

~~~
p1 >> pluck(var([0, 3, 0, 4], 8), dur=[1,1/4,1/4,1/2]) + (0, 2, 4)

~~~
