---
title: "Conceptos básicos del patrón"
description: "Lorem ipsum dolor sit amet - 3"
---

### ¿Por qué usar patrones?

Los objetos del reproductor usan listas de Python, a menudo conocidas como matrices en otros lenguajes de programación, para crear secuencias de valores, como tono y duraciones. Sin embargo, las listas no son las estructuras de datos más intuitivas para las transformaciones. Por ejemplo, intente multiplicar una lista – ¿qué sucede?
~~~
print([1, 2, 3] * 2)
~~~

¡El resultado es la misma lista repetida dos veces! Si desea manipular los valores internos ( p. dóblelos ) en Python, entonces así es como puede hacerlo:

~~~
values = [1, 2, 3]

### Use a loop
my_list = []
for i in values:
    my_list.append(i * 2)
print(my_list)


### List comprehension
print([i*2 for i in values])

~~~

Para ambos métodos, requiere tener que recorrer todos los valores y multiplicar cada uno individualmente. Las cosas se vuelven aún más complicadas si también desea multiplicar cada segundo valor por un número diferente. Esto requiere mucho trabajo, especialmente si no sabe qué números usará. Aquí es donde entra la clase Pattern.

Los patrones actúan como listas regulares de Python, pero cualquier transformación matemática realizada en él se realiza en cada elemento de la lista. La forma más sencilla de crear un patrón es solo agregar un caso superior P al comienzo de una lista:
~~~
my_list    = [0, 1, 2, 3]
my_pattern = P[0, 1, 2, 3]
~~~

Ahora, cuando realiza una operación, como la multiplicación, obtendrá el patrón transformado:

~~~
>>> print(my_pattern * 2)
P[0, 2, 4, 6]
~~~

También puede crear un patrón, ya que crearía cualquier otro objeto Python utilizando el nombre de la clase seguido de corchetes con argumentos:
~~~
my_pattern = Pattern([0, 1, 2, 3]) 
~~~


Los patrones también son “ modulo indexable ”, lo que significa que no importa qué valor usemos como índice al acceder a los datos de un Patrón, Mientras sea un número entero, obtendremos un valor devuelto. Si el índice es mayor que la longitud del Patrón, entonces volvemos al inicio del Patrón y comenzamos a buscar:

~~~
>>> pat = P[0, 1, 2]
>>> print(pat[2])
2
>>> print(pat[3])
0
~~~

### Transformaciones

Puede realizar una operación en un patrón usando una lista u otro patrón para crear transformaciones más complejas. Por ejemplo, sumando los patrones P[0, 1, 2, 3] y P[4, 7] realizará la operación a su vez, lo que significa que el patrón resultante será el resultado P[0 + 4, 1 + 7, 2 + 4, 3 + 7], que es P[4, 8, 6, 10]. El uso de patrones de longitudes sin divisor común creará un nuevo patrón que contiene todos los valores de las combinaciones:
~~~
>>> P[0, 1, 2, 3] + P[4, 5, -2]
P[4, 6, 0, 7, 5, -1, 6, 8, -2, 5, 7, 1]
~~~

Los patrones también tienen métodos específicos para la transformación, como rotar, invertir y ordenar, que se pueden usar para manipular el orden:

~~~
>>> P[4, 1, 3, 2].rotate()
P[1, 3, 2, 4]
>>> P[4, 1, 3, 2].reverse()
P[2, 3, 1, 4]
>>> P[4, 1, 3, 2].sort()
P[1, 2, 3, 4] 
~~~

Puedes evaluar <code>help(Pattern)</code> para ver más información sobre los métodos.

### Funciones del patrón

Hay una serie de funciones que devuelven diferentes patrones. Estos generan patrones más largos solo usando algunos argumentos. Para ver una lista de funciones de Patrón, puede evaluar <code>help(Patterns.Sequences)</code>

En Python, puede generar un rango de enteros con la sintaxis <code>range(start, stop, step)</code> Por defecto, el inicio es 0 y el paso es 1. Puedes usar <code>PRange(start, stop, step)</code> para crear un objeto Patrón con los valores equivalentes:
~~~
>>> print(list(range(0, 10 2)))
[0, 2, 4, 6, 8]
>>> print(PRange(0, 10, 2))
P[0, 2, 4, 6, 8] 
~~~

Y debido a estas instancias de retorno de Patrón, podemos tratarlos como objetos de Patrón y usar métodos de Patrón y realizar operaciones aritméticas en ellos de la misma manera:

~~~
>>> print(PRange(0, 10, 2).reverse() + [1, 2])
P[9, 8, 5, 4, 1, 10, 7, 6, 3, 2] 
~~~


### Patrones de concatenación

En Python, generalmente concatenaría dos listas ( y se agregaría una a otra ) usando el <code>+ </code>operador, pero ya hemos visto que hacer esto con Patrones agregaría los valores de un patrón al contenido de otro. Para concatenar dos objetos de patrón juntos, puede usar el símbolo de tubería, <code>|</code>, con el que los usuarios de Linux podrían estar familiarizados –, se utiliza para conectar programas de línea de comandos enviando salida de un proceso como entrada a otro.

~~~
>>> print(PRange(4) | [1,7,6])
P[0, 1, 2, 3, 1, 7, 6]
~~~

Espaciado de patrones y grupos P

¿Qué sucede cuando un patrón contiene una lista anidada como esta?

~~~
>>> pat = P[0, 2, [3, 5]]
>>> print(pat)
P[0, 2, P[3, 5]] 
~~~
En primer lugar, la lista anidada se convierte en un patrón ( y cualquier lista anidada que pueda haber contenido también se convierte ). Si intentamos acceder al patrón anidado, esto es lo que sucede:

~~~
>>> print(pat[0])
0
>>> print(pat[1])
2
>>> print(pat[2])
3
~~~

Eso es extraño…? Te perdonarían por pensar que la última línea volvería <code>P[3, 5]</code> porque ese es el objeto en la tercera ranura de pat, pero no es así como se comportan los patrones. Los patrones están colocados, lo que significa que los valores de los Patrones anidados se devuelven cuando se accede a su Patrón principal. Para acceder al segundo valor del patrón anidado en el ejemplo anterior, necesitamos recorrer el Patrón por segunda vez, es decir. use un valor de índice mayor que la longitud del Patrón:

~~~
>>> for i in range(6):
>>>     print(pat[i],)
0, 2, 3, 0, 2, 5
~~~

Debido a esto, cuando imprima la longitud de un Patrón, verá el tamaño del Patrón como si estuviera expandido como está arriba. Si utiliza paréntesis redondos y anida una tupla de valores, verá que ocurre algo muy diferente:

~~~
>>> pat = P[0, 2, (3, 5)]
>>> print(pat)
P[0, 2, P(3, 5)] 
~~~

The last item in the pattern is known as a PGroup and is used to keep values within a pattern together i.e. not laced:
~~~
>>> print(pat[0])
0
>>> print(pat[1])
2
>>> print(pat[2])
P(3, 5) 
~~~

Agrupar valores significa que se reproducen al mismo tiempo, lo que resulta muy útil cuando se quieren tocar notas juntas, por ejemplo, acordes:

~~~
p1 >> pluck([(0, 2, 4), (0, 3, 5)], dur=4) 
~~~
Puede añadir tuplas/ PGroups a un Patrón para crear un nuevo patrón de elementos PGroup:
~~~
>>> pat = P[0, 3, 5, 4]
>>> print(pat + (0, 2))
P[P(0, 2), P(3, 5), P(5, 7), P(4, 6)]
>>> print(pat + [(0, 2), (2, 4)])
P[P(0, 2), P(5, 7), P(5, 7), P(6, 8)] 
~~~