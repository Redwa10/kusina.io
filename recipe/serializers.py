from dataclasses import field
from rest_framework import serializers
from .models import Recipe, Ingredient, Favorite, Catagories




class IngredientSerializers(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ["id", "name", "quantity"]

class RecipeSerializers(serializers.ModelSerializer):
    ingredients = IngredientSerializers(many = True)
    instruction = serializers.SerializerMethodField()
    catagories = serializers.SlugRelatedField(
        queryset = Catagories.objects.all(),
        slug_field = "title"
    )

    def get_instruction(self, obj):
        return obj.instruction.strip().split(',')
    
    class Meta:
        model = Recipe
        fields = ["id", "name", "author", "cooking_time", "instruction", "catagories", "ingredients"]



class FavoriteSerializers(serializers.ModelSerializer):
    pass

class CatagoriesSerializers(serializers.ModelSerializer):
    pass