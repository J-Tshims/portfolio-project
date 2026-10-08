from django.db import models

# Chaque classe est un modèle Django.
# Django transforme chaque modèle en table dans la base de données.
# Exemple : Project = mes projets, Skill = mes compétences, Service = mes services.


class Project(models.Model):
    CATEGORY_CHOICES = [
        ('ai', 'AI'),
        ('backend', 'Backend'),
        ('web', 'Web'),
    ]

    # Nom du projet visible sur la page portfolio.
    title = models.CharField(max_length=200)

    # Description du projet : ce qu'il fait, le contexte, le but.
    description = models.TextField()

    # Catégorie du projet pour le filtre et la couleur de la carte.
    # Exemple : "ai", "backend", "web".
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='web')

    # Technologies utilisées, stockées sous forme de texte simple.
    technologies = models.CharField(max_length=255, blank=True)

    # Lien de la démo ou du projet publié en ligne.
    link = models.URLField(blank=True)

    # Lien GitHub du projet. On le garde séparé du "link" pour distinguer
    # le site de démonstration du dépôt code source.
    github_url = models.URLField(blank=True)

    # Nom de l'icône Font Awesome à afficher pour ce projet.
    # Exemple : "fa-brain", "fa-server", "fa-globe".
    # Cela permet de personnaliser l'icône de chaque projet depuis l'admin.
    icon = models.CharField(max_length=100, blank=True)

    # Date de création automatique. Django la remplit tout seul à l'ajout.
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Service(models.Model):
    # Nom du service proposé (ex: Développement Web, API, Consulting).
    title = models.CharField(max_length=200)

    # Description du service et de ce qu'il apporte au client.
    description = models.TextField()

    # Nom de l'icône Font Awesome à afficher dans le template.
    # Exemple: "fa-server", "fa-code", "fa-brain".
    icon = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.title


class Skill(models.Model):
    # Nom de la compétence : Python, Django, JavaScript, Tailwind...
    name = models.CharField(max_length=100)

    # Catégorie pour regrouper les compétences : Frontend, Backend, AI, etc.
    category = models.CharField(max_length=100, blank=True)

    # Niveau de compétence. On peut l'utiliser pour afficher une barre de niveau.
    level = models.IntegerField(default=0)

    # Icône associée à la compétence. Cela permet d'afficher un bon symbole
    # pour chaque compétence sans coder en dur dans le template.
    icon = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.name


class Experience(models.Model):
    # Intitulé du poste ou du parcours : "Développeur Backend", "Alternance".
    title = models.CharField(max_length=200)

    # Nom de l'entreprise ou de l'établissement.
    company = models.CharField(max_length=200, blank=True)

    # Période affichée dans le parcours : "2024 - 2025".
    period = models.CharField(max_length=100, blank=True)

    # Description du rôle ou des activités principales.
    description = models.TextField()

    def __str__(self):
        return self.title