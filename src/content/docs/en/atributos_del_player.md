---
title: "Atributos del Player "
description: "Atributos del objeto player"
---

### Introducción

A los objetos del reproductor FoxDot se les asigna SynthDefs toma varios argumentos de palabras clave en un conjunto de corchetes para manipular las secuencias que se reproducen. Probablemente ya hayas visto dur y pan, pero ¿qué más podemos usar? Hay muchas opciones, que se dividen ampliamente en dos grupos: atributos y efectos. Los atributos son cosas que afectan qué nota se reproduce cuando y los efectos son cosas que cambian la forma en que suena el sonido! Puede ver una lista de todos los términos de palabras clave posibles evaluando el código

~~~
>>> print(Player.get_attributes()
('degree', 'oct', 'dur', 'delay', 'blur', 'amplify', 'scale', 'bpm', 'sample',
'sus', 'fmod', 'pan', 'rate', 'amp', 'vib', 'vibdepth', 'slide', 'sus',
'slidedelay', 'slidefrom', 'bend', 'benddelay', 'coarse', 'striate', 'pshift',
'hpf', 'hpr', 'lpf', 'lpr', 'swell', 'bpf', 'bpr', 'bits', 'amp', 'crush', 'dist',
'chop', 'tremolo', 'echo', 'decay', 'spin', 'cut', 'room', 'mix', 'formant',
'shape')
~~~

Tenga en cuenta que un SuperCollider SynthDef podría tomar argumentos de palabras clave específicos que no se enumeran anteriormente. Puede establecer los valores para el atributo o efecto de un jugador especificándolos como un argumento de palabra clave dentro de una llamada SynthDef como este:


~~~
p1 >> pluck([0, 1, 2, 3], dur=1/2, sus=2)
~~~

O puede establecer el valor directamente en los atributos del objeto reproductor:

~~~
p1 >> pluck()
p1.degree = [0, 1, 2, 3]
p1.dur = 1/2
p1.sus = 2
~~~

Esta sección lo llevará a través de las diferentes palabras clave de atributo con algún código de ejemplo. Si desea saber más sobre los efectos, puede encontrar más información en la siguiente sección.


### Atributos

Estos son los valores de palabras clave que FoxDot utiliza para decidir qué nota o muestra se reproduce cuando. En ningún orden en particular son: <code class="">degree</code>, <code>oct</code>,<code> dur</code>, <code>scale</code>, <code>amp</code>, <code>amplify</code>, <code>bpm</code>,<code> sample</code>, y <code>delay</code>. Revisaremos cada uno de estos en profundidad con algún código de ejemplo ahora.

#### Pitch 

El tono a veces se conoce como el "grado de una escala' y se refiere al índice de la escala que deberíamos usar para crear una nota – para reproducir la primera nota de una escala, usted usa el valor de grado 0. No necesita especificar este por su nombre tal como está siempre El primer argumento utilizado. Aquí hay un código de ejemplo que reproduce las primeras cuatro notas de la escala predeterminada ( C mayor ).

Palabras clave <code>degree </code>

~~~
p1 >> pluck([0, 1, 2, 3])
~~~

### octava

Palabra clave: <code>oct</code>

Esta es la octava en la que quieres tocar una nota. De manera predeterminada, esto es 5 para que la nota que toque al iniciar un objeto reproductor “ en blanco ” sea C central. Una octava es ( generalmente ) 12 semitonos, por lo que la quinta octava comienza en el 60o semitono. Agregamos este valor a nuestro tono ( que obtenemos al usar el título para obtener el valor final de la nota. Un número menor toca una nota más baja y un número mayor toca una nota más alta:

~~~
p1 >> pluck(oct=[4, 5, 6])
~~~

### Duración

Palabra clave: <code>dur</code>

Esta es la duración de una nota. Las duraciones no pueden ser negativas y deben contener al menos un número distinto de cero. Una duración puede ser de cualquier tipo siempre que pueda representarse mediante un valor de coma flotante. Las siguientes son todas las duraciones válidas:

~~~
# Un solo valor para todas las notas
p1 >> pluck([0, 1, 2, 3], dur=1/2)

# Una lista de duraciones puede ser de números enteros, fracciones o valores de coma flotante
p1 >> pluck([0, 1, 2, 3], dur=[1, 1/2, 0.5])

p1 >> pluck([0, 1, 2, 3], dur=[0.1, 0.3, 0.43, 0.17])
~~~

Puede “ omitir ” una nota estableciendo la duración en cero o “ mudo ” usando un objeto de descanso con la duración entre paréntesis:

~~~
# Saltar cada 3ª nota
p1 >> pluck([0, 1, 2, 3], dur=[1, 1, 0])

# Descansa cada 3ª nota durante 2 tiempos
p1 >> pluck([0, 1, 2, 3], dur=[1, 1, rest(2)])
~~~

### Escala

Palabra clave: <code>scale</code>

Como su nombre indica, esto establece la escala del objeto reproductor. Debe ser una lista, un patrón o un objeto de escala ( que es una subclase de patrón ). Para ver una lista de escalas, puede evaluar el siguiente código:

~~~
>>> print(Scale.names())
['aeolian', 'chinese', 'chromatic', 'custom', 'default', 'diminished',
'dorian', 'dorian2', 'egyptian', 'freq', 'harmonicMajor', 'harmonicMinor',
'indian', 'justMajor', 'justMinor', 'locrian', 'locrianMajor', 'lydian',
'lydianMinor', 'major', 'majorPentatonic', 'melodicMajor', 'melodicMinor',
'minor', 'minorPentatonic', 'mixolydian', 'phrygian', 'prometheus',
'romanianMinor', 'yu', 'zhi']
~~~

﻿ Por defecto, FoxDot usa la escala “ mayor ”. Para cambiar esto a la escala menor, por ejemplo, puede usar el argumento de palabra clave de escala y el <code>Scale.minor</code> escala así:

~~~
# Tocar la escala mayor por defecto
p1 >> pluck([0, 2, 4, 6, 7])

# Cambio a menor
p1 >> pluck([0, 2, 4, 6, 7], scale=Scale.minor)
~~~

Si desea cambiar la escala para todos los jugadores, puede establecer el <code>Scale.default</code> valor:

~~~
# Iniciar un reproductor en la escala por defecto (Mayor)
p1 >> pluck([0, 2, 4, 6, 7])

# Cambiar la escala por defecto a Dórica
Scale.default = Scale.dorian

# Puede especificar la escala por defecto como una cadena
Scale.default = "dorian"
~~~

### Volumen

Palabras clave: <code>amp</code>, <code> amplify</code>

Esta es la amplitud de una nota, o su volumen / volumen. Los valores generalmente van entre 0 y 1, pero puede establecer valores más grandes para hacer una nota aún más fuerte, pero tenga cuidado de no ir demasiado alto o podría dañar sus oídos / altavoces!

~~~
p1 >> pluck([0, 1, 2], dur=[1, 1/2, 1/2], amp=[1, 0.5, 1/3])
Podemos crear patrones bastante rítmicos usando amp usando también valores de 0:

p1 >> pluck(
      dur=1/4, 
      amp=[1, 1/2, 1/2, 1, 0, 1, 0, 1, 1/2, 1/2, 1, 0, 1, 1/2, 1/4, 1]
)
~~~

Pero, ¿qué sucede si queremos tocar este ritmo en cualquier otra barra? Una forma podría ser agregar manualmente un montón de 0s a la secuencia o usar un objeto Patrón y usar su <code>stutter</code> método, pero también podemos usar otro argumento de palabra clave diseñado solo para este propósito; <code>amplify.</code>

Antes de que un reproductor active un sonido, el valor del amplificador se multiplica por amplificar para que pueda usar cosas como TimeVar para establecer una amplitud en 1 o 0 ( i.e. encendido y apagado ) durante cierto período de tiempo:

~~~
p1 >> pluck(
    dur=1/4, 
    amp=[1, 1/2, 1/2, 1, 0, 1, 0, 1, 1/2, 1/2, 1, 0, 1, 1/2, 1/4, 1], 
    amplify=var([1,0],[6,2])
)
~~~

Esto es útil si desea establecer que múltiples jugadores estén “ en ” o “ off ” al mismo tiempo:

~~~
p1 >> pluck(dur=1/4, amp=[1, 1/2, 1/2, 1, 0, 1, 0, 1, 1/2, 1/2, 1, 0, 1, 1/2, 1/4, 1])
p2 >> bass(var([0, 3], 8), dur=1/2)

p1.amplify = p2.amplify = var([1,0],4)
~~~

La última línea es bastante torpe, por lo que puede usar un objeto de Grupo en su lugar ( ver aquí) para más información:

~~~
p1 >> pluck(dur=1/4, amp=[1, 1/2, 1/2, 1, 0, 1, 0, 1, 1/2, 1/2, 1, 0, 1, 1/2, 1/4, 1])
p2 >> bass(var([0, 3], 8), dur=1/2)

Group(p1, p2).amplify = var([1,0],4)
~~~

### Samples 

Palabra clave: <code>sample</code>

Esto solo se usa con el reproductor de muestra, llamado play. Este SynthDef toma una cadena como su primer argumento ( conocido como la cadena de reproducción “ ” ) en lugar de una lista de valores de tono y reproduce muestras de audio almacenadas en su computadora portátil en función del carácter en la cuerda. Cada carácter se asigna a una carpeta de muestras y, por defecto, reproduce la primera muestra en esa carpeta. Para reproducir una muestra diferente, use la palabra clave de muestra:
~~~
# Samples por defecto
p1 >> play("x-o-")

# Un conjunto diferente de muestras
p1 >> play("x-o-", sample=1)

# Puede ser una lista de valores
p1 >> play("x-o-", sample=[0, 1, 2])
~~~

Los valores deben ser un número entero. Si una carpeta contiene 3 muestras y usa el valor 4, el objeto reproductor volverá a girar al primer archivo de la carpeta y lo reproducirá, para que no necesite saber exactamente cuántas muestras hay en una carpeta.

### Retrasando un sonido


Palabra clave: <code>delay</code>

En la música ( y especialmente en la música electrónica ), el retraso a menudo se refiere a una especie de efecto “ eco ” en el que se reproduce un sonido nuevamente un corto período después de que comienza, pero un poco más silencioso. En FoxDot, sin embargo, literalmente se refiere a una cantidad de tiempo, en ritmos, para retrasar la reproducción de un sonido. Aquí, retrasaremos cada tercera nota a medio ritmo:

~~~
p1 >> pluck([0, 1, 2, 3], delay=[0, 0, 0.5])
~~~

Si desea reproducir la nota y reproducirla con un retraso, puede usar una tupla o PGroup con el primer valor 0, lo que significa que no hay retraso. El segundo valor indicará cuánto tiempo retrasar la segunda nota:

~~~
# "Tartamudear" cada tres notas
p1 >> pluck([0, 1, 2, 3], delay=[0, 0, (0, 0.5)])

# Retrasar una nota para que suene *después* de la siguiente
p1 >> pluck([0, 1, 2, 3], delay=[0, 0, (0, 1.5)])
~~~

### Llave musical

Palabra clave: <code>root</code>

Así como puedes usar una escala diferente a la Scale.default desde el interior de un reproductor, también puede usar una nota raíz diferente ( más información aquí). Debe ser un número o secuencia de números y no un nombre de nota, es decir. "C#"

~~~
# cambia el root cada 8  beats
p1 >> blip([0, 7, 6, 4, 2], dur=1/4, sus=2, root=var([0, 2], 8))
~~~
