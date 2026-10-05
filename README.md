# Portfolio Django

Projet personnel pour construire un portfolio avec Django et apprendre progressivement le fonctionnement du backend.

## Etat actuel

- Le frontend est decoupe en templates Django dans `templates/portfolio/` et en fichiers JavaScript dans `static/portfolio/js/`.
- L'application `portfolio` est inscrite dans `INSTALLED_APPS`.
- Le contenu du portfolio n'est pas encore gere par des modeles Django.
- La vue `home` dans `portfolio/views.py` rend `portfolio/base.html` et est reliee a l'URL `/`; l'utilisateur a confirme que la page repond avec HTTP 200.
- Django est configure pour trouver les templates globaux et les fichiers statiques; `base.html` et `theme.js` ont ete verifies avec les outils Django.
- Le formulaire de contact est une maquette frontend : son message n'est pas encore envoye ni enregistre.
- Les migrations integrees de Django pour `admin`, `auth`, `contenttypes` et `sessions` ont ete appliquees avec succes.
- Le commit local initial a ete cree sur la branche `master`. Aucun depot distant GitHub n'est encore configure.
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
- [ ] Enregistrer les dernieres mises a jour documentaires dans un commit local.
- [ ] Creer un depot GitHub vide, le relier au depot local et y envoyer les commits.
- [ ] Choisir les donnees a rendre administrables, puis creer les modeles utiles.
- [ ] Enregistrer les modeles dans l'administration Django.
- [ ] Connecter le formulaire de contact au backend avec validation et protection CSRF.
- [ ] Ecrire des tests pour la page, les contenus et le formulaire.

## Securite avant publication

`config/settings.py` lit maintenant la cle Django depuis une variable d'environnement. Ne publie jamais sa valeur sur GitHub et assure-toi que la variable est configuree sur chaque machine qui lance le projet.

Ne publie pas non plus de mot de passe, fichier `.env`, base SQLite locale contenant des donnees privees ou autre identifiant confidentiel.
