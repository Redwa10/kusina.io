from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
#from rest_framework_nested import routers
from . import views

router = routers.DefaultRouter()
router.register("recipes", views.RecipeViewSet)
router.register("admin/recipes", views.AdminRecipeViewSet, basename= "admin-recipes")
router.register("favorites", views.FavoriteViewSet, basename= "favorites")
router.register("admin/categories", views.CategoriesViewSet, basename= "categories")

urlpatterns = [
    path('', include(router.urls)),
]