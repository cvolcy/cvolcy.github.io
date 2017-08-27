J’ai découvert lorsque du dernier Google I/O, conférence annuelle de Google, la technologie WebRTC.

Cette technologie m’a tout de suite séduit puisqu’elle me permettait d’établir des connexions entre navigateurs, leur permettant d’échanger de l’information. En plus, cela s’effectue sans faire usage d’un intermédiaire lors de ces transferts.

Alors je me suis donc donné pour objectif de développer un prototype utilisant le WebRTC.

### Fonctionnalités

Pour commencer, gérer le côté serveur de l’application, j’ai profité de cette application pour apprendre comment fonctionne Sinatra (Framework d’application Web en Ruby). Contrairement à Ruby on Rails, Sinatra est très simple et ne fournit que le minimum pour créer une application web. Je devais donc développer moi-même toutes les autres facettes (routage des pages, gestions des assets, compilation, etc.) du système.

Ensuite pour ce qui est du côté client, tout est en JavaScript, puisque WebRTC est un API en JavaScript pour les navigateurs. Tant qu’à avoir à travailler avec beaucoup de JavaScript, j’ai donc décidé d’en profiter pour peaufiner mon AngularJS et de bâtir le côté client avec ce framework.

Pour ce qui est des fonctionnalités de l’application, elles sont très simples :

1. Une personne (hôte) se connecte à l’application.
2. Elle téléverse des fichiers dans l’application
3. Transmet un lien de partage à une autre personne (client1)
4. Ce client1 en accédant au lien, peut donc télécharger les fichiers de l’hôte avec l’aide d’une connexion WebRTC.

### Points forts

WebRTC
Première expérience avec Sinatra.
Adaptatif

### Conclusion

Ce projet m’a bien vite permis de constater les limitations de cette API, par exemple, le besoin d’un serveur pour établir la connexion initiale (évidemment, mais je n’y ai pas pensé sur le coup), dans moi je me suis servi d’un serveur peerJS. Ce n’est pas la meilleure technologie pour effectuer un échange de gros fichiers. Cependant, il y a aussi de bons avantages, cet API est parfait, pour l’échange de petites données, par exemple un chat web (comme pour quasi tous les exemples de WebRTC), mais aussi pour un jeu en ligne dans un navigateur web.

Bien que le projet soit toujours à l’état de prototype et incomplet, je suis tout de même satisfait de son avancement et espère avoir d’autres occasion de pour pour me servir de cette technologie.

### Démo

RTC-Drive

### Technologies utilisées

+ WebRTC
+ JavaScript
+ jQuery
+ AngularJS
+ Sinatra
+ Sprocket
+ peerJS

### Captures d’écran

N/A
