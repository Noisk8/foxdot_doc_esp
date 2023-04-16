---
title: "Atributos del Player "
description: "Lorem ipsum dolor sit amet - 3"
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

Estos son los valores de palabras clave que FoxDot utiliza para decidir qué nota o muestra se reproduce cuando. En ningún orden en particular son: degree, oct, dur, scale, amp, amplify, bpm, sample, y delay. Revisaremos cada uno de estos en profundidad con algún código de ejemplo ahora.

#### Pitch 

~~~
p1 >> pluck(var([0, 3, 0, 4], 8), dur=[1,1/4,1/4,1/2]) + (0, 2, 4)

~~~
