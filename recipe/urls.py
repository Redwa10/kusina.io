from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
#from rest_framework_nested import routers
from . import views

router = routers.DefaultRouter()
router.register("recipes", views.RecipeViewSet)
urlpatterns = [
    path('', include(router.urls)),
]