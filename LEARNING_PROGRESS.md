# Reprise d'apprentissage Django

Dernière mise à jour : 2026-10-05

Ce fichier est un pense-bête de projet. Vérifie toujours le code réel et les derniers résultats fournis par l'utilisateur avant de reprendre.

## Objectif

Apprendre Django en construisant ce portfolio, une étape à la fois. L'utilisateur préfère une explication très simple, une seule action concrète par étape, les commandes PowerShell exactes, puis une pause pour lui laisser essayer et rapporter le résultat.

## Etat verifie du projet (2026-10-05)

- Django 6.0.3 dans l'environnement vérifié.
- Application `portfolio` enregistrée dans `INSTALLED_APPS`.
- `config/settings.py` lit maintenant `SECRET_KEY` depuis la variable d'environnement Windows. La vraie valeur ne doit jamais être demandée, affichée ou ajoutée à une note.
- `python manage.py check` a réussi après le changement de clé.
- Django résout `portfolio/base.html` dans `templates/portfolio/`.
- `STATICFILES_DIRS` pointe vers le dossier `static/`; `findstatic portfolio/js/theme.js --verbosity 2` trouve le fichier dans `static/portfolio/js/`.
- `portfolio/models.py`, `admin.py` et `tests.py` restent des squelettes.
- `portfolio/views.py` contient maintenant `home(request)`, qui rend `portfolio/base.html`.
- `config/urls.py` relie maintenant `/` à `views.home`; l'utilisateur a confirmé que `GET /` renvoie HTTP 200 et que le portfolio s'affiche.
- Le commit initial existe sur la branche `master`. `git remote` ne trouve aucun dépôt distant GitHub.
- Après ce commit, seuls `README.md` et `LEARNING_PROGRESS.md` sont modifiés; ces mises à jour doivent encore être ajoutées dans un second commit avant la publication.
- `git status --short --ignored` montre les fichiers sources non suivis et confirme que `.venv/`, `db.sqlite3` et les caches Python sont ignorés. La clé de `settings.py` provient de l'environnement, aucune valeur littérale n'y est présente.
- L'utilisateur a exécuté `python manage.py migrate`; les 18 migrations intégrées pour `admin`, `auth`, `contenttypes` et `sessions` ont toutes affiché `OK`.
- Le formulaire de contact reste une maquette frontend qui affiche un toast local; aucun message n'est envoyé ni enregistré.

## Etape en cours : préparer Git avant les modèles

La vue, le template et la route `/` répondent avec HTTP 200. Les migrations Django intégrées sont appliquées. Le premier commit local existe sur `master`; aucun dépôt distant n'est configuré. Seuls les deux fichiers documentaires ont des changements après ce commit. Prochaine action : les commiter, puis créer un dépôt GitHub vide et pousser `master`.

La recherche initiale de `theme.js` n'avait rien trouvé. Après vérification des réglages et une nouvelle recherche, Django l'a trouvé dans `static/portfolio/js/`. L'étape templates/static est donc validée avec l'état actuel.

Ne pas modifier les fichiers à la place de l'utilisateur : il apprend en réalisant lui-même chaque petite étape.

## Chemin d'apprentissage restant

1. Commiter les mises à jour de README et de progression.
2. Créer un dépôt GitHub vide, ajouter son URL comme `origin`, puis pousser `master`.
3. Choisir avec l'utilisateur les données à gérer dans l'admin; concevoir les modèles utiles seulement après son accord.
4. Créer et appliquer les migrations, puis enregistrer les modèles dans l'admin.
5. Afficher les données dans les templates avec le contexte de la vue.
6. Connecter le formulaire avec validation, CSRF, enregistrement en base et tests. Décider séparément si des emails sont nécessaires.

Respecter `.github/agents/backend.md`. Ne pas modifier les fichiers à la place de l'utilisateur; expliquer et attendre ses résultats.
