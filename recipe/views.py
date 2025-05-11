from django.shortcuts import render
from django.http import HttpResponse, request
from rest_framework.decorators import api_view
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from .models import Recipe, Ingredient
from .serializers import RecipeSerializers
# Create your views here.




class RecipeViewSet(ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializers



