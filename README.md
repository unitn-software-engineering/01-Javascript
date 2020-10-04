# Introduzione a Javascript e node.js
Laboratorio di Ingegneria del Software 2 - Anno accademico 2020-2021 - Università degli studi di Trento

## Il World Wide Web
E' un mezzo di comunicazione globale che opera attraverso Internet.
Nasce nel 1989, su proposta di Tim Berners-Lee al CERN, come un database basato su ipertesti collegati l'un l'altro da link.
Si sviluppa negli anni 90 in una rete globale formata da documenti HTML interconnessi
Si evolve quindi nel cosiddetto Web 2.0 con il nuovo millennio.

## Web 1.0 e web 2.0
Il web 1.0 è associabile alla prima fase di sviluppo del web, in cui pagine statiche collegate da hyperlink compongono la maggior parte dei contenuti fruibili sul web. L'interazione con gli utenti è fortemente limitata e la maggior parte dei contenuti sono pagine statiche. 

Con il web 2.0 le pagine statiche lasciano il posto a contenuti più dinamici, in molti casi generati dagli utenti stessi.
Molte applicazioni desktop diventano ora servizi fruibili tramite un semplice web browser, e.g. Gmail, Google Maps o GoogleDoc.

## Le tecnologie del web 2.0
AJAX (Asynchronous JavaScript and XML) è la principale tecnologia che ha reso possibile la transizione verso il web 2.0.
AJAX definisce un pattern standard per la comunicazione tra il back-end ed il front-end di applicazioni web.

Sviluppato sulla base di tecnologie esistenti quali:
- HTML e CSS - definiscono la grafica del front-end
- Javascript e DOM - supportano la parte dinamica e interattiva con l'interfaccia utente
- XMLHttpRequest - è una api supportata dai moderni browser che permette di comunicare con un backend o con servizi terzi direttamente da una pagina web (tramite dati formattati in xml o json)
- Server che supportano linguaggi di scripting (php) o veri e propri programmi (Servlet Java, Node.js, ...)

Approfondimenti:
https://en.wikipedia.org/wiki/Ajax_(programming)
http://www.adaptivepath.org/ideas/ajax-new-approach-web-applications/

Inoltre, tecnologie come le web API e i servizi RESTful, hanno facilitato la scomposizione delle applicazioni web in moduli che si interfacciano l'un l'altro tramite il web, così come accade tra il front-end e il back-end.


# Javascript

Javascript è un linguaggio interpretato, inizialmente supportato dai browser per rendere il web più dinamico.

Grazie al DOM, Javascript è in grado di integragire con gli elementi di una pagina html e modificarli in tempo reale, ad esempio come reazione ad input dell'utente.

Con l'introduzione di XMLHttpRequest, Javascript permette di comunicare con un server web in maniera asincrona dall'interno di una stessa pagina web.
Nel web 1.0 i contenuti venivano parsati dal back-end in pagine statiche inviate poi al browser dell'utente.
Con il web 2.0, grazie a chiamate XMLHttpRequest, il back-end viene contattato direttamente dal client, il quale si occupa poi di integrarli dinamicamente nel DOM della pagina. Il browser si occupa di inotrare le chiamate XMLHttpRequest effettuate dal Javascript della pagine e restituire poi le risposte al codice stesso.

Oggi, con Node.js, è adottato anche lato server in ambito di applicazioni web.
E' apprezzato per la sua scalabilità nel gestire un traffico dati con un alto numero di chiamate poco dispendiose.
Essendo Javascript un linguaggio basato sugli eventi, evita di dedicare interi thread per gestire singole e brevi chiamate http.


## Contenuti
- "Basics" contiene esempi introduttivi al linguaggio Javascript
- "Advanced" contiene esempi avanzati da eseguire in Node.js
- "Additional" contiene esempi aggiuntivi che approfondiremo prossimamente

E possibile testare rapidamente gli script tramite Repl.it:
https://repl.it/@marcorobol/01-Javascript#README.md


## Software e servizi richiesti per il prossimo laboratorio:
- Browser web (e.g. Chrome)
- Editor di testo (e.g. Brackets, Visual Studio Code, Sublime Text, Vim)
- Node.js (https://nodejs.org/it/download/)
- Git CLI (https://git-scm.com/downloads)
- Attivare un account su github.com (registrandosi con l'indirizzo @unitn si ottiene la licenza pro)
- Postman (https://www.postman.com/downloads/)
- Attivare un account su https://apiary.io/

## Dispense e materiale aggiuntivo:
- https://github.com/matteocontrini/nodejs-fundamentals#nodejs-repl