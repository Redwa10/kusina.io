from django.contrib import admin
from . import models

# Register your models here.
class IngredientInline(admin.TabularInline):
    model = models.Ingredient


@admin.register(models.Recipe)
class RecipeAdmin(admin.ModelAdmin):
    list_display = ["name", "category", "author", "cookingTime", "instructions"]
    inlines = [IngredientInline]


@admin.register(models.Ingredient)
class IngredientAdmin(admin.ModelAdmin):
    list_display = ["name", "quantity", "recipe"]