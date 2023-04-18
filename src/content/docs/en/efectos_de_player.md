---
title: "Efectos del player"
description: "Efectos del objeto player"
---


## Introducción

Los efectos se pueden agregar a un jugador de la misma manera que se cambian sus atributos; usando argumentos de palabras clave. Al igual que con los atributos del jugador, estos pueden ser un solo valor o una secuencia. Esta página contiene descripciones de los diferentes efectos disponibles en FoxDot y cómo aplicarlos.

La mayoría de los efectos se aplican utilizando un solo valor, como <code>pan</code>, pero algunos tienen un solo efecto “ parent ” y uno o más “ child ”. Un ejemplo es <code>slide</code>, que es el padre, y <code>slidedelay</code> es el niño. Si el efecto padre se establece en 0, entonces el efecto no se aplica. Los valores del niño de 0 todavía se aplican si el padre no es cero

~~~
# Efecto diapositiva añadido
p1 >> pluck(dur=4, slide=1, slidedelay=0.5)

# Efecto diapositiva no añadido
p1 >> pluck(dur=4, slide=0, slidedelay=0.5)

# Efecto de deslizamiento añadido, con retardo cero
p1 >> pluck(dur=4, slide=1, slidedelay=0)
~~~

### Mantener

Palabras clave: <code>sus</code>, <code>blur=1</code>

El argumento de palabra clave sus se usa para establecer el “ sostenido ” de una nota, lo que significa cuánto dura el sonido de la nota. Por defecto, esto es lo mismo que la duración de la nota ( establecida usando el dur palabra clave ) y es un valor medido en términos de “ beats ”. El siguiente código reproducirá una nota de 1 latido, una repetición con un sostenido de medio latido:

~~~
# Duración de un tiempo, duración de medio tiempo
p1 >> pluck(dur=1, sus=1/2)
~~~

Usar <code>blur</code> para crear un efecto “ legato ” ( una palabra que significa “ unidos ” en italiano ). Este es un término musical que se refiere a cuán suavemente las notas se suceden entre sí, o se difuminan juntas. los sus el valor se multiplica por la corriente <code>blur</code> valor tal que el siguiente código duplica la longitud del sostenido de cada otra nota:


~~~
# Duplica la duración de cada dos notas
p1 >> pluck(dur=PDur(3,8), blur=[1, 2])
~~~

### Pandeo estéreo

Palabras clave: <code>pan</code>

La panorámica ( en audio ) es la distribución del sonido en múltiples altavoces. Actualmente, FoxDot solo usa dos canales de salida ( para el altavoz izquierdo y derecho ), pero hay planes para expandir esto para múltiples altavoces. Para cambiar la panorámica de un sonido, use el <code>pan</code> y establezca el valor entre -1 ( izquierda dura ) y 1 ( derecha dura ). A <code>pan</code> El valor de 0 envía la señal de audio de ambos altavoces por igual.

~~~
# Alternar entre izquierda, centro y derecha
p1 >> pluck(pan = [-1, 0, 1])

# Tocar dos notas al mismo tiempo, pero en altavoces diferentes
p1 >> pluck((0, 4), pan=(-1,1))

# Mueve gradualmente la panoramización del sonido de izquierda a derecha utilizando un "linvar"
p1 >> pluck([0, 2, 4, 7], dur=1/4, pan=linvar([-1,1],8))
~~~

### Modificador de frecuencia

Palabras clave: <code>fmod</code>

Esto agrega un valor a la frecuencia utilizada para generar una nota, pero solo en uno de los canales. Por ejemplo, iniciar un player sin instrucciones reproducirá continuamente una nota en el medio C, que es 261.6 Hz, a través de ambos canales de altavoces. Usando <code>fmod = 10</code> tocará la nota a 261.6 Hz en un canal y 271.6 Hz en el otro. Esto crea una disonancia notable “ ” o un sonido “ atonal ” porque las frecuencias están muy juntas. Usar un valor más pequeño, como 2, crea una especie de [flanger](https://es.wikipedia.org/wiki/Flanger) efecto:

~~~
# Efecto flanger simple
p1 >> pluck(fmod = 2)

# Variar el efecto en el tiempo
p1 >> pluck(fmod=linvar([-10,10],8), dur=1/4, sus=1)
~~~

### Vibrato

El vibrato es un término musical que se refiere a una modulación continua del tono, es decir, que cambia con el tiempo. Puede ajustar la velocidad del vibrato de una nota utilizando la palabra clave <code>vib</code> y la profundidad (el tamaño de la modulación) del vibrato utilizando la palabra clave <code>vibdepth</code>. La profundidad por defecto es 0.02, lo que significa que el vibrato fluctúa entre +/- la frecuencia de la nota multiplicada por 0.02. También puede pensarse como una fluctuación de la frecuencia de la nota. También puede pensarse que fluctúa entre el 99% y el 101% del valor de la frecuencia.

palabras clave : <code>vib</code>, <code>vibdepth = 0.02</code>


~~~
p1 >> pads(dur=4, vib=4)

p1 >> pads(dur=4, vib=4, vibdepth=0.1)

p1 >> pads(dur=4, vib=4, vibdepth=1)

~~~


### Deslizar

Palabras clave: <code>slide</code>, <code>slidedelay = 0</code>

Esto se usa para cambiar la frecuencia de una nota a lo largo del tiempo. La frecuencia “ se desliza ” a (1 + n) * freq donde n es el valor suministrado a la slide palabra clave. Por ejemplo, un slide el valor de 1 deslizará la frecuencia al doble de su valor original ( una octava hacia arriba ). A slide el valor de -1 se deslizará a una frecuencia de 0.

Por defecto, el efecto de diapositiva comienza inmediatamente después de que comienza la nota. Para retrasar el inicio de la diapositiva, puede usar el <code>slidedelay</code> palabra clave. Este debería ser un valor entre 0 ( el inicio de la nota ) y 1 ( el final de la nota ).

~~~
# Deslice una octava hacia arriba
p1 >> pluck(dur=4, slide=1)

# Deslice desde 0
p1 >> pluck(dur=4, slide=-1)

# Retrasar el efecto de deslizamiento para que comience a la mitad de la nota
p1 >> pluck(dur=4, slide=0.5, slidedelay=0.5)
~~~

### Deslizar desde

Palabras clave: <code>slidefrom</code>, <code>slidedelay</code>

Similar a la diapositiva, este efecto también cambia la frecuencia de una nota a lo largo del tiempo, pero usted especifica dónde comienza la diapositiva. La frecuencia “ se desliza ” desde <code>(1 + n) * freq</code> donde n es el valor suministrado a la slidefrom palabra clave y termina en la frecuencia de la nota.

Por ejemplo, un <code> slidefrom </code> el valor de 1 deslizará la frecuencia del doble de su valor original ( una octava hacia arriba ). A <code> slidefrom </code> valor de -1 will <code> slide</code> desde una frecuencia de 0. Por defecto, el efecto de diapositiva comienza inmediatamente después de que comienza la nota. Para retrasar el inicio de la diapositiva, puede usar el <code>slidedelay </code> palabra clave. Este debería ser un valor entre 0 ( el inicio de la nota ) y 1 ( el final de la nota ).


~~~
# Deslizamiento de una octava hacia arriba
p1 >> pluck(dur=4, slidefrom=1)

# Deslizamiento desde 0
p1 >> pluck(dur=4, slidefrom=-1)

# Retrasar el efecto de deslizamiento para que comience a la mitad de la nota
p1 >> pluck(dur=4, slidefrom=0.5, slidedelay=0.5)
~~~

### Doblar

Palabras clave: <code>bend</code>, <code>benddelay = 0</code>

Otro efecto similar a la diapositiva, la curva de inclinación cambia la frecuencia de una nota a lo largo de un tiempo, pero también vuelve a su frecuencia original al final de la nota. Aparte de eso, funciona exactamente igual que la diapositiva.

~~~
# Dobla una octava hacia arriba y hacia atrás
p1 >> pluck(dur=4, bend=1)

# Doblar a 0 y volver a doblar
p1 >> pluck(dur=4, bend=-1)

# Retrasa el efecto bend para que comience a la mitad de la nota
p1 >> pluck(dur=4, slide=0.5, bend=0.5)
~~~

### Picar (chop)

Palabras clave: <code>chop</code>

Esta “ corta ” la señal de audio en partes “ n ”, donde “ n ” es el valor que proporciona al argumento de la palabra clave. Utiliza el sostenido del conjunto de notas ( usando <code>sus</code>) para determinar el tamaño de las piezas, por lo que también puede combinar <code>chop</code> y <code>sus</code> para crear efectos interesantes.

~~~
# Picar un sonido en 4 partes
p1 >> pluck([0,1,2,3], dur=4, chop=4)

# Si varía la duración, también variarán los tamaños de las chuletas
p1 >> pluck([0,[4,6,7]], dur=PDur(3,8), chop=4)

# Al cambiar un único valor de "sus" se igualan los tamaños y se crea un bonito efecto de eco superpuesto
p1 >> pluck([0,[4,6,7]], dur=PDur(3,8), chop=4, sus=2)
~~~

### Coarse 

palabras clave: <code> coarse</code>

Esto es similar a “ chop ” pero difiere en que la señal de audio no está siendo “ picada ” arriba, la velocidad de control ( la frecuencia de las notas / la tasa de reproducción para muestras ) es. Esto puede ser útil en varias situaciones.

La primera es cuando se reproducen muestras usando el sintetizador de reproducción: el uso de chop esencialmente solo reproduce la mitad del audio ya que la otra mitad está siendo silenciada por el efecto “ chop ”. El uso de grueso esencialmente detendrá el sonido y lo reanudará después de un ligero retraso. Lo hace configurando la velocidad de reproducción en 0, mientras que chop establecería la amplitud en 0. Escuche la diferencia ejecutando el código a continuación en FoxDot:

~~~
# Using chop
c1 >> play("C", dur=4, chop=16, coarse=0)

# Using coarse
c1 >> play("C", dur=4, coarse=16, chop=0)
~~~

Otro uso para el grueso sería cuando obtienes sonidos “ recortando ” cuando usas chop. Esto ocurre cuando una amplitud va a 0 muy rápidamente y suena como un pequeño “ pop ”. Ejecute estas líneas de código en FoxDot y escuche las diferencias:

~~~
b1 >> bass(dur=2, chop=4, coarse=0)

b1 >> bass(dur=2, coarse=4, chop=0)
~~~


La línea usando <code>coarse = 4</code> suena un poco más limpio. Desafortunadamente esto no siempre sucede y el coarse el efecto no siempre se puede aplicar a algunos sintetizadores, por ejemplo klank.


### Filtros de paso alto 

Palabras clave: <code>hpf</code>, <code>hpr = 1</code>

Un sonido no trivial está compuesto por una combinación de ondas de sonido que vibran a varias frecuencias y amplitudes, y algunas de ellas pueden filtrarse “ a partir de una señal usando un filtro. Esto a menudo se conoce como síntesis sustractiva. Un filtro de paso alto eliminará partes de una señal que son abajo una cierta frecuencia, es decir, solo permite que las frecuencias pasen más que el umbral. Esto se puede aplicar en FoxDot simplemente configurando el <code>hpf</code> ( abreviatura de filtro de paso alto ) valor:

~~~
# Ajusta el corte del filtro paso alto a 2000 Hz
d1 >> play("x-o-", hpf=2000)

# Establecer el corte para cambiar con el tiempo utilizando un linvar
d1 >> play("x-o-", hpf=linvar([0,2000],32))
~~~

También puede establecer la resonancia de paso alto para el filtro utilizando el <code>hpr</code> palabra clave. Esto a veces se conoce como “ rq ” o “ hpq ”. A medida que este valor disminuye, los sobretonos cerca del valor de corte se aumentan –, un valor cercano a 0 sonará como una onda sinusoidal oscilante en el valor establecido usando <code>hpf</code>. ¡Tenga cuidado con los valores muy pequeños y muy grandes, ya que puede obtener sonidos muy fuertes!

~~~

# Ajusta el corte del filtro paso alto a 2000 Hz
d1 >> play("x-o-", hpf=2000)

# Ajusta la resonancia a 0,2. ¿Oyes la diferencia?
d1 >> play("x-o-", hpf=2000, hpr=0.2)

# Ajuste el corte *y* la resonancia para que cambien con el tiempo mediante linvar
d1 >> play("x-o-", hpf=linvar([0,2000],32), hpr=linvar([1,0.1],28))

~~~

