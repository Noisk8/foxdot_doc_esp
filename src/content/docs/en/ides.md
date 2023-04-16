---
title: "IDES para Foxdot"
description: "Livecoding con python y supercollider"
---



## Emacs 

<img src="https://foxdot.org/static/images/emacs-logo.png" alt="Descripción de la imagen" width="100" >

* Descarga <code>foxdot-cli.py</code> y <code>foxdot-mode.el</code> de [aquí](https://gist.github.com/lvm/c84e4d5ca54f1db256eaa6c98db5b141)

* Coloca <code>foxdot-cli.py</code> En la misma carpeta de instalación de FoxDot  (en caso de que esté utilizando virtualenv, de lo contrario comentario de las líneas 5 a 7)

* Copia <code>foxdot-mode.el</code> en <code> ~/.emacs.d/lisp</code>

* Agrega <code>(defvar foxdot-cli-path "/path/to/foxdot-cli/")</code> en tu <code > ~/.emacs file</code>

* En Emacs Presiona <code> M-x </code>Crga la libreria y completa con  <code >foxdot-mode</code>

* Escribe <code> C-c C-f</code> or M-x <code>foxdot-start to start</code>

* Presiona <code> C-c C-e</code> or <code>M-x foxdot-execute</code> para evaluar una línea o un bloque de código

Credit: Mauro



## Pulsar 

<img src="https://pulsar-edit.dev/logo-name-navbar-light.svg" alt="Descripción de la imagen" width="200">


Pulsar es un clon del difunto Atom, utiliza el plugin que habitualmente usabamos en Atom 

[Pulsar Web](https://pulsar-edit.dev/)

* Desde Pulsar ve a <code>Ajustes> -> Instalar</code> luego busca "foxdot" y pulsa instalar en el plugin

* Para iniciar FoxDot pulse <code>Ctrl+Alt+f</code> o utilice el menú para ir a <code>Paquetes -> FoxDot -> Alternar</code>
