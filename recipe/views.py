from django.shortcuts import render
from django.http import HttpResponse, request
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from rest_framework.decorators import api_view
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from rest_framework.response import Response
from rest_framework import status
from core.models import User
import recipe
from .models import Catagories, Favorite, Recipe, Ingredient
from .serializers import FavoriteSerializers, RecipeSerializers, CatagoriesSerializers
# Create your views here.




class RecipeViewSet(ReadOnlyModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializers
    permission_classes = [IsAuthenticated]

class AdminRecipeViewSet(ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializers
    permission_classes = [IsAdminUser]

class FavoriteViewSet(ModelViewSet):
    serializer_class = FavoriteSerializers
    permission_classes = [IsAuthenticated]
    lookup_field = 'id'
    def get_queryset(self):
        return Favorite.objects.filter(user = self.request.user)
    
    def perform_create(self, serializer):
        return serializer.save(user= self.request.user)
    
   
class CategoriesViewSet(ModelViewSet):
    serializer_class = CatagoriesSerializers
    queryset = Catagories.objects.all()
    permission_classes = [IsAdminUser]