# Portfolio Django

Projet personnel pour construire un portfolio avec Django et apprendre progressivement le fonctionnement du backend.

## Etat actuel

- Le frontend est decoupe en templates Django dans `templates/portfolio/` et en fichiers JavaScript dans `static/portfolio/js/`.
- L'application `portfolio` est inscrite dans `INSTALLED_APPS`.
- Les modeles Project, Skill, Service et Experience existent et sont inscrits dans l'administration Django.
- La section des projets affiche les donnees de la base; les sections competences, services et parcours restent actuellement en dur dans leurs templates.
- Le nom visible de la page d'accueil est maintenant Jonathan Tshimbalanga. La photo `static/portfolio/images/Jonathan.png` est reliée au cadre de profil; le chemin statique a été vérifié dans le rendu Django.
- Le hero reprend la référence avec une composition en deux colonnes, des encarts de compétences, une bande de points forts et une palette bleu nuit, magenta, violet et bleu électrique. Les sections suivantes gardent leur disposition avec des accents harmonisés.
- L'accueil a été vérifié dans le navigateur en bureau et mobile sans débordement horizontal. Le bouton secondaire du hero mène au parcours, car aucun CV PDF n'est encore fourni.
- Le formulaire de contact et plusieurs coordonnees et liens sociaux sont encore des exemples; remplace-les par tes vraies informations avant publication.
- La vue `home` dans `portfolio/views.py` rend `portfolio/base.html` et est reliee a l'URL `/`; l'utilisateur a confirme que la page repond avec HTTP 200.
- Django est configure pour trouver les templates globaux et les fichiers statiques; `base.html` et `theme.js` ont ete verifies avec les outils Django.
- Le formulaire de contact est une maquette frontend : son message n'est pas encore envoye ni enregistre.
- Les migrations integrees de Django pour `admin`, `auth`, `contenttypes` et `sessions` ont ete appliquees avec succes.
- Le depot local est sur `master`, propre et synchronisé avec `origin/master`. Le commit `929d59d` contenant les modèles, migrations, projets dynamiques, identité et photo de profil a été poussé.
- La sortie de `git status --short --ignored` a confirme que `.venv/`, `db.sqlite3` et les caches Python sont ignores.
- Le projet utilise SQLite en local. La version de Django constatee dans l'environnement lors de la redaction est `6.0.3`.

## Outils

- Python
- Django
- SQLite
- HTML, Tailwind CSS via CDN et JavaScript

## Installation locale (Windows PowerShell)

Depuis le dossier qui contient `manage.py` :

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install "Django==6.0.3"
```

Si l'environnement virtuel `.venv` existe deja, active-le sans le recreer. Ensuite, verifie la configuration et lance le serveur :

```powershell
python manage.py check
python manage.py runserver
```

Le panneau d'administration est disponible sur `http://127.0.0.1:8000/admin/`. La page du portfolio repond sur `http://127.0.0.1:8000/` en developpement.

## Prochaines etapes

- [x] Configurer Django pour trouver les templates globaux et les fichiers statiques.
- [x] Creer la vue `home` qui rend `portfolio/base.html`.
- [x] Relier la vue `home` a l'URL racine `/` et verifier la reponse HTTP 200.
- [x] Appliquer les migrations integrees de Django avant d'utiliser l'administration.
- [x] Initialiser le depot Git local et preparer les fichiers non ignores.
- [x] Verifier que `.venv/`, `db.sqlite3` et les caches sont exclus de Git.
- [x] Creer le commit local initial.
- [x] Vérifier, committer et pousser les changements locaux, y compris les migrations.
- [ ] Relier le depot à un hébergeur web et préparer les réglages de production avant de partager une URL publique.
- [x] Créer les modèles Project, Skill, Service et Experience et les enregistrer dans l'administration Django.
- [ ] Relier les sections compétences, services et parcours aux données de l'administration.
- [ ] Remplacer les identités, coordonnées et liens d'exemple par les informations réelles.
- [x] Ajouter la photo de profil et vérifier que Django la sert.
- [x] Vérifier visuellement la photo de profil dans le navigateur.
- [x] Adapter le hero à la référence et harmoniser la palette des autres sections.
- [ ] Connecter le formulaire de contact au backend avec validation et protection CSRF.
- [ ] Ecrire des tests pour la page, les contenus et le formulaire.

## Securite avant publication

`config/settings.py` lit maintenant la cle Django depuis une variable d'environnement. Ne publie jamais sa valeur sur GitHub et assure-toi que la variable est configuree sur chaque machine qui lance le projet.

Le controle `python manage.py check --deploy` signale encore des reglages de production a preparer, dont `DEBUG`, `ALLOWED_HOSTS` et HTTPS. Le projet n'est donc pas encore prêt à être exposé publiquement.

Ne publie pas non plus de mot de passe, fichier `.env`, base SQLite locale contenant des donnees privees ou autre identifiant confidentiel.
