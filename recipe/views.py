from django.shortcuts import render
from django.http import HttpResponse, request
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAdminUser
from rest_framework.decorators import api_view
from rest_framework.viewsets import ModelViewSet, ReadOnlyModelViewSet
from rest_framework.response import Response

from core.models import User
import recipe
from .models import Favorite, Recipe, Ingredient
from .serializers import FavoriteSerializers, RecipeSerializers
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
    def get_queryset(self):
        return Favorite.objects.filter(user = self.request.user)
    
    def perform_create(self, serializer):
        return serializer.save(user= self.request.user)