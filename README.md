# Projet Mobile

##### Naiqi Zhang , Sitan Xin

### La liste des fonctionnalités implémenteées

- Creer un compte(avec la vérification s'il existe, affichier le message d'erreur)
- Login
- Login par facebook et google
- Authentification


- creer une liste
- supprimer une liste
- ajouter une tache(avec la priorité)
- supprimer une tache(avec la priorité)
- donner les priorités(écriture et lecture)
- prendre une photo 
- ouvrir la bibliothèque
   


    

### Amélioration

- Pour la function: donner les priorité, maintenant, les utilisateurs ont des priorités d'écriture et lecture peuvent ajouter reader et writer. Mais pour nous, c'est juste le 'owner' de la liste peut ajouter reader et writer. Nous pensez on doit créer une function. Elle vérifie si l'utilisateur est le "owner". S'il n' est pas owner. Nous cachez le button. Mais on viens de le trouver. C'est trop tard. 

- Stocker des données d'image sur firebase.


### Compilation et déploiement
- PC: 
    - Installer node.js, ionic
    - git clone ce projet
    - executer la commande : ionic serve
    - Camera : npm install @ionic-native/camera
               - Vous pouvez la tester sur la plateforme browser en lançant la command suivante pour installer plugin:
                  - ionic cordova platform add browser
                  - ionic cordova plugin add cordova-plugin-camera 
                  - ionic cordova run browser
    
- déploiement sur mobile
    - Téléchager mobile-app/platforms/android/app/build/outputs/apk/debug/app-debug.apk
    - Installer app-debug.apk

### Le hosting

https://cours5-9520b.web.app/login

 
