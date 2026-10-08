from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    technologies = models.CharField(max_length=255, blank=True)
    link = models.URLField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Service(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    icon = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.title


class Skill(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100, blank=True)
    level = models.IntegerField(default=0)

    def __str__(self):
        return self.name


class Experience(models.Model):
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200, blank=True)
    period = models.CharField(max_length=100, blank=True)
    description = models.TextField()

    def __str__(self):
        return self.title