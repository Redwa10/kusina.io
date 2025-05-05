from django.shortcuts import render
from django.http import HttpResponse
from .models import Recipe
# Create your views here.

def recipe(request):
    queryset = Recipe.objects.get(id = 1)
    return render(request, "template.html", {"name": "abdulhafiz"})