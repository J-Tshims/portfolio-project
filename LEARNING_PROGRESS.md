# Reprise d'apprentissage Django

Dernière mise à jour : 2026-10-05

Ce fichier est un pense-bête de projet. Vérifie toujours le code réel et les derniers résultats fournis par l'utilisateur avant de reprendre.

## Objectif

Apprendre Django en construisant ce portfolio, une étape à la fois. L'utilisateur préfère une explication très simple, une seule action concrète par étape, les commandes PowerShell exactes, puis une pause pour lui laisser essayer et rapporter son résultat.

## Etat verifie du projet (2026-10-08)

- Django 6.0.3 dans l'environnement vérifié.
- Application `portfolio` enregistrée dans `INSTALLED_APPS`.
- `config/settings.py` lit `SECRET_KEY` depuis la variable d'environnement Windows. La vraie valeur ne doit jamais être demandée, affichée ou ajoutée à une note.
- `python manage.py check` a réussi après les changements de modèles et de template.
- Django résout [templates/portfolio/base.html](templates/portfolio/base.html) et [templates/portfolio/components/projects.html](templates/portfolio/components/projects.html).
- Le modèle `Project` contient maintenant les champs `title`, `description`, `category`, `technologies`, `link`, `github_url`, `icon` et `created_at`.
- Le template de projets affiche maintenant les données réelles de la base et les boutons GitHub / Demo conditionnellement.
- Le filtre JavaScript est désormais cohérent avec les catégories réelles des projets, via le champ `category` de la base.
- `python manage.py makemigrations portfolio ; python manage.py migrate ; python manage.py check` a été exécuté avec succès, et la commande a retourné `System check identified no issues (0 silenced)`.
- L'admin Django permet maintenant de créer des projets et d'en choisir la catégorie directement dans l'interface.
- Les modèles `Skill`, `Service` et `Experience` existent aussi et sont enregistrés dans l'admin; leurs sections de page restent toutefois statiques.
- Le nom affiché dans l'accueil, la navigation, la section À propos et le pied de page est maintenant Jonathan Tshimbalanga.
- La photo `static/portfolio/images/Jonathan.png` est reliée au cadre du profil. Le rendu Django contient son chemin statique et `python manage.py check` réussit; vérifier encore l'apparence dans le navigateur. Les coordonnées et liens sociaux sont aussi à personnaliser.
- Le hero reprend la composition de la référence et la palette bleu nuit, magenta, violet et bleu électrique; les sections suivantes gardent leur disposition avec des couleurs harmonisées. Dans la carte profil, le prénom et le nom apparaissent maintenant sur deux lignes.
- Les captures du navigateur en bureau et mobile ont été vérifiées; le nom tient sur une ligne dans la carte photo et aucun débordement horizontal n'est présent.
- Le formulaire de contact reste une maquette frontend qui affiche un toast local; aucun message n'est envoyé ni enregistré.

## Etape en cours : alimenter le portfolio avec des vraies données

La section projets lit les objets `Project` depuis la base. Il reste à ajouter et vérifier les vraies données dans l'admin, puis à relier les sections compétences, services et parcours aux modèles déjà existants.

## Etape en cours : préparer la publication

Le dépôt est sur `master`, propre et synchronisé avec `origin/master`. Le commit `929d59d` (`Add dynamic portfolio content and profile photo`) a été poussé. Les migrations `portfolio` 0001 à 0004 sont appliquées.

`python manage.py check --deploy` signale six avertissements de sécurité, notamment `DEBUG=True`, `ALLOWED_HOSTS` vide et des protections HTTPS/cookies non activées. Il faut préparer les réglages de production et choisir un hébergeur avant de partager un lien public sur LinkedIn.

La recherche initiale de `theme.js` n'avait rien trouvé. Après vérification des réglages et une nouvelle recherche, Django l'a trouvé dans `static/portfolio/js/`. L'étape templates/static est donc validée avec l'état actuel.

Ne pas modifier les fichiers à la place de l'utilisateur : il apprend en réalisant lui-même chaque petite étape.

## Chemin d'apprentissage restant

1. Remplacer les exemples de localisation, email et liens sociaux. Ajouter le CV PDF si le bouton de téléchargement de la référence est souhaité.
2. Ajouter les vrais projets et contenus dans l'admin, puis rendre les sections compétences, services et parcours dynamiques.
3. Finir et tester le formulaire de contact.
4. Préparer l'hébergement, les réglages de sécurité, les fichiers statiques et les données de production.
5. Relire le portfolio en mobile et ordinateur, exécuter les tests, puis préparer le déploiement.

Respecter `.github/agents/backend.md`. Ne pas modifier les fichiers à la place de l'utilisateur; expliquer et attendre ses résultats.
