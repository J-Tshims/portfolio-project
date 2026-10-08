from django.shortcuts import render
from .models import Project

def home(request):
    projects = Project.objects.all().order_by('-created_at')
    #for loking all the projects in the database and ordering them by the created_at field in descending order. The resulting queryset is then passed to the template as a context variable named 'projects'.
    return render(request, 'portfolio/base.html', {'projects': projects})
    #{'projects': projects} for passing the projects queryset to the template as a context variable named 'projects'. This allows the template to access and display the list of projects.
    


    
