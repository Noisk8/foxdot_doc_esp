---
title: "Manipulación algorítmica"
description: "Livecoding con python y supercollider"
---


Una de las cosas buenas de la codificación en vivo es que puede programar eventos para que ocurran, o se repitan, en el futuro. 

Esto le permite continuar codificando mientras se llaman funciones repetidas y añadir variedad a su música. Esta sección es un análisis detallado de cómo se implementa cada método del Reproductor y cómo puede combinar varias instancias del mismo para crear música compleja a partir de patrones simples.

### Fundamentos

Primero veamos un ejemplo simple que invierte una secuencia cada 8 latidos:

~~~
p1 >> pluck([0, 1, 2, 3, 4, 5, 6, 7]).every(8, "reverse")
~~~

El primer argumento es el número de pulsaciones entre cada llamada de un método y el segundo es el nombre del método en sí como una cadena. 

La razón para usar el nombre de cadena del método en lugar de una función es que Python puede comprobar si el método es válido usando la función getattr y generar un error si no lo es. Ejecutando el código <code>print(getattr(p1, "reverse"))</code> le dará algo similar al método bound Player.reverse of p1 - pluck. Lo que entonces sucede, en esencia, es que el reloj de programación ejecuta <code>getattr(p1, "reverse").__call__()</code> cada 8 tiempos.

Puede utilizar una lista de duraciones para programar llamadas a métodos a intervalos irregulares:

p1 >> pluck([0, 1, 2, 3, 4, 5, 6, 7]).every([6, 2], "reverse")

El código de arriba llamará al método inverso después de 6 latidos, luego 2 latidos después de eso, luego otra vez 6 latidos después de esa llamada, repitiendo esto hasta que se detenga. También puede utilizar un objeto Pattern o PatternGenerator como PRand para llamar métodos a veces no predeterminados:

p1 >> pluck([0, 1, 2, 3, 4, 5, 6, 7]).every(PRand([2, 4, 8]), "reverse")

Si intenta especificar varias llamadas del mismo método, verá que sólo se programa la última llamada actualizada. Si desea utilizar más de una llamada repetida al mismo método, puede utilizar la palabra clave de identificación y darle un nombre o número para diferenciarla:

# Llama "reversa" cada 8 latidos *y* cada 5 latidos
~~~
d1 >> pluck([0, 1, 2, 3, 4, 5, 6, 7]).every(8, "reverse").every(5, "reverse", ident=1)
~~~

Los métodos de los jugadores que pueden ser usados con cada uno efectivamente son reversa, rotación, barajar, saltar y tartamudear. La palabra clave del ciclo

La palabra clave del ciclo

A veces puede ser útil programar un método para el mismo punto en un ciclo de N-tiempos, por ejemplo, tartamudear el sonido en el 6º tiempo de cada ciclo de 8 tiempos. Puede hacerlo simplemente especificando la longitud del ciclo como argumento de palabra clave:

~~~
d1 >> play("x-o-").every(6, "stutter", cycle=8)
~~~

En lugar de llamar tartamudeo a cada 6 latidos, se llama cada 8 latidos (el tamaño del ciclo), pero compensado por 6 latidos. El método del tartamudeo en profundidad

Uno de los métodos más útiles que se puede llamar usando cada uno es el método del tartamudeo. Reproduce el último evento enviado a SuperCollider varias veces a lo largo de una duración especificada. También puede especificar atributos/efectos para adjuntar a los eventos como pan o shape usando argumentos de palabras clave.

Puede especificar el número de veces que un evento tartamudea simplemente proporcionando un número entero a cada llamada siguiendo el nombre del método como una cadena. El valor por defecto es 2, lo que significa que escuchará 1 evento adicional - 2 menos el evento que ya se está reproduciendo. Usando un valor de 4 se reproducirán 3 eventos extra (ya tienes la idea). Por defecto, los eventos serán tartamudeados a lo largo de la duración del evento que está tartamudeando, pero también puede tartamudear los eventos a lo largo de un período de tiempo determinado mediante el suministro de una palabra clave dur:

### Reproducir el evento 4 veces cada 6 latidos a través de 1/2 latido

~~~
d1 >> play("x-o-", dur=1/2).every(6, "stutter", 4)
~~~

### Juega el evento 4 veces cada 6 latidos a través de 3 latidos

~~~
d1 >> play("x-o-", dur=1/2).every(6, "stutter", 4, dur=3)
~~~

También puede especificar el número de eventos a tartamudear usando la palabra clave 'n

~~~
d1 >> play("x-o-", dur=1/2).every(6, "stutter", dur=3, n=4)
~~~

Así como usted proporciona argumentos de palabras clave para controlar el sonido de sus sintetizadores, puede hacer lo mismo con el tartamudeo para controlar el sonido que se está reproduciendo. Estos pueden ser una lista o patrón de valores que se dan a cada evento tartamudeado a su vez, es decir, no jugado todos a la vez:

### Tartamudea 8 veces con el aumento de la velocidad de reproducción

~~~
d1 >> play("x-o-").every(4, "stutter", 8, rate=[1,2,3,4,5,6,7,8])
~~~

### Tartamudeo 4 veces con paneo alternado y mayor velocidad

~~~
d1 >> play("x-o-").every(4, "stutter", 4, dur=3, pan=[-1, 1], rate=2)
~~~

### Todavía puedes usar tuplas / PGroups para añadir efectos simultáneos

~~~
d1 >> play("x-o-").every(4, "stutter", 4, dur=1, pan=(-1,1), rate=(4, 1/2))
~~~

Tenga en cuenta que cuando se utiliza una lista de valores, sólo se utilizarán los primeros n valores (donde n es el número de veces que se tartamudea).

Uso de métodos de patrones
Además de revertir, rotar, barajar, saltar y tartamudear, también puede programar cualquier método que pertenezca a la clase Patrón para que se llame en cualquier atributo de un reproductor. El comportamiento es ligeramente diferente a cuando se programan los métodos de los jugadores en el sentido de que en lugar de ser llamado cada n beats, es llamado y luego desllamado so-to-speak. Probablemente es mejor demostrarlo con un ejemplo:

Llama al método "trim" en el atributo de grado

~~~
d1 >> play("x-o-").every(4, "trim", 3)
~~~

El patrón "x-o-" se recorta a sólo "x-o" después de 4 tiempos y luego vuelve a "x-o-" de nuevo después de los siguientes 4 tiempos. Por defecto, el método se llama atributo grado (que es pitch para la mayoría de los sintetizadores y la cadena de caracteres para el sintetizador de reproducción) - puede especificar un atributo diferente anteponiendo al nombre del método el nombre del atributo y luego un ":

### Trim the octave pattern to 3 every 4 beats

~~~
p1 >> pluck([0,1,2,3], oct=[4,5,6,7]).every(4, "oct.trim", 3)
~~~

Los argumentos que se proporcionarían al método del patrón se dan siguiendo el nombre del método. Por ejemplo, el método de patrón offadd, que superpone un patrón consigo mismo pero con un valor añadido y retrasado por una duración, toma 2 argumentos; el valor a añadir y el tiempo de retardo (por defecto es 0,5). Aquí hay algunos ejemplos de cómo usarlo con cada una de las aplicaciones:

### Toca una nota 2 pasos más alto retrasado 1/2 latido

~~~
p1 >> pasha([0, 4], dur=[3/4, 3/4, 1/2]).every(3, "offadd",
~~~

### Toca una nota 4 pasos más alto retrasado 3/4 de un ritmo

~~~
p1 >> pasha ([0,1,3,4], dur=1/2).every(5, "offadd", 4, 3/4)
~~~

Puede utilizar cualquier método de la clase Patrón, que puede ver ejecutando help(Pattern) o mirando las descripciones en profundidad.