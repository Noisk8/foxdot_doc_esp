---
title: "Instalación"
description: "Livecoding con python y supercollider"
---


## Requerimientos 

* [Python](https://www.python.org/)

* [SuperCollider 3.8 o una versión superior](https://supercollider.github.io/downloads)

* [Git](https://git-scm.com/downloads)


## Instalando FoxDot 


Siga las instrucciones de instalación para sus descargas de Python y SuperCollider. Al instalar Python en Windows, haga clic en sí cuando se le pregunte si desea agregar Python a la ruta del sistema y sí si desea instalar pip - esto se utiliza para descargar automáticamente / instalar bibliotecas de Python como FoxDot.

Instale la última versión de FoxDot desde el Índice de Paquetes de Python utilizando pip desde su línea de comandos (símbolo del sistema en Windows, terminal en MacOS y Linux) ejecutando:


~~~
$ pip install FoxDot
~~~

Ten en cuenta que si tienes Python 3 instalado, el programa puede llamarse pip3, lo que ayuda a discernir entre pip para Python 2 y 3.



Alternativamente, usted puede construir desde la fuente en GitHub y mantenerse al día con la versión de desarrollo:

~~~
$ git clone https://github.com/Qirky/FoxDot.git
$ cd FoxDot
$ python setup.py install
~~~

Abre SuperCollider e instala FoxDot Quark (esto permite a FoxDot comunicarse con SuperCollider ) introduciendo lo siguiente en el editor y pulsando Ctrl+Return; lo que "ejecuta" una línea de código:

~~~
Quarks.install("FoxDot")
~~~

Recompila la librería de clases de SuperCollider yendo a Menu Language Recompile Class Library o pulsando <code>Ctrl+Shift+L</code>

Si no puedes instalar git en tu máquina, puedes descargar un archivo de inicio, llamado [foxdot.scd.](https://foxdot.org/static/common/foxdot.zip) Ábrelo en SuperCollider y evalúa el código pulsando <code > Ctrl+Return.</code>

### Instalación de SC3 plugins (opcional)

Los Plugins SC3 son una colección de clases que extienden la ya masiva librería SuperCollider. Algunos de ellos se utilizan para ciertos "efectos" en FoxDot (como bitcrush) y le dará un error en SuperCollider si intenta utilizarlos sin instalar los plugins.

Una vez descargada la carpeta, colóquela en la carpeta "Extensions" de SuperCollider y reinicie SuperCollider. Para encontrar la ubicación de la carpeta "Extensions", abra SuperCollider y evalúe la siguiente línea de código:

~~~
Platform.userExtensionDir
~~~

Esto mostrará la ubicación de la carpeta "Extensions" en la "ventana de publicación" de SuperCollider, normalmente en la parte derecha de la pantalla. Si este directorio no existe, sólo tiene que crearlo y poner los plugins SC3 allí y reiniciar SuperCollider. La próxima vez que abra FoxDot, vaya al menú desplegable "Idioma" y marque "Usar plugins SC3". Reinicia FoxDot y ¡listo!

### Run 

Abra SuperCollider y evalúe lo siguiente (esto debe hacerse antes de abrir FoxDot):

~~~
FoxDot.start
~~~

SuperCollider está ahora a la escucha de los mensajes de FoxDot. Para iniciar FoxDot desde la línea de comandos simplemente escriba:

~~~
python -m FoxDot
~~~

o 

~~~
FoxDot
~~~

La interfaz de FoxDot debería abrirse y ¡ya estás listo para empezar a improvisar! Echa un vistazo a los documentos de introducción para obtener algunos consejos útiles sobre cómo conocer los fundamentos de FoxDot. ¡Feliz programación!



### Ayuda con otras instalaciones
#### Instalación en Linux

Dependiendo de la distribución de Linux, SuperCollider puede ser un poco complicado de instalar y puede requerir ser construido desde el código fuente.

Afortunadamente, gran parte de la instalación (incluyendo Python y SuperCollider) ha sido automatizada a través de un simple [script](https://github.com/Noisk8/InstalandoFoxDot-En-linux) escrito por Noisk8.

Puedes descargar el script desde su GitLab (requiere login) que contiene algo de información sobre lo que hace el script y cómo ejecutarlo.


### Instalación en Rapbery pi 

Como es el caso con la mayoría de las distribuciones Linux, instalar SuperCollider puede ser complicado en una Raspberry Pi.

El usuario de GitHub redFrik ha elaborado un paquete de instalación simplificado con instrucciones detalladas para ejecutar el software en una Raspberry Pi. Python y FoxDot se pueden instalar a través de los procesos normales.


### Instalación Supercollider 3.7 o anterior 

No es posible descargar/instalar FoxDot Quark para SuperCollider v3.7 e inferiores.

Sin embargo, el contenido del archivo Quark puede ser ejecutado manualmente para permitir que FoxDot se conecte correctamente con SuperCollider. El archivo, <code>foxdot.scd</code>, puede descargarse utilizando el botón de abajo.

Una vez descargado, abra el archivo en SuperCollider y pulse <code>Ctrl+Return</code> para ejecutarlo. Esto hará que SuperCollider comience a escuchar los mensajes de FoxDot y debe ejecutarse antes de abrir FoxDot con Python.