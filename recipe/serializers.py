from dataclasses import field
from dis import Instruction
from xml.dom import ValidationErr
from rest_framework import serializers
from .models import Recipe, Ingredient, Favorite, Catagories




class IngredientSerializers(serializers.ModelSerializer):
    class Meta:
        model = Ingredient
        fields = ["id", "name", "quantity"]

class RecipeSerializers(serializers.ModelSerializer):
    ingredients = IngredientSerializers(many = True)
    #instructions = serializers.CharField(write_only = True)
    #instructions_display = serializers.SerializerMethodField(read_only = True) # because serializermethodfield is only for output
    instructions = serializers.ListField(child = serializers.CharField(), write_only = False)
    category = serializers.SlugRelatedField(
        queryset = Catagories.objects.all(),
        slug_field = "title"
    )
    imageUrl = serializers.ImageField(required = False)

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation["instructions"] = instance.instructions.strip().split(",")
        return representation
    
    
    def create(self, validated_data):
        instructions = validated_data.pop("instructions", [])
        validated_data["instructions"] = ",".join(instructions)       
        ingredient_data = validated_data.pop("ingredients", None)
        recipe = Recipe.objects.create(**validated_data)

        for ingr in ingredient_data:
            Ingredient.objects.create(recipe= recipe, **ingr)

        return recipe
    
    def update(self, instance, validated_data):
        instructions = validated_data.pop("instructions", None)
        if instructions is not None:
            validated_data["instructions"] = ",".join(instructions)

        ingredient_data = validated_data.pop("ingredients", None)
        instance = super().update(instance, validated_data)

        if ingredient_data is not None:
            instance.ingredients.all().delete()

            for ingr in ingredient_data:
                Ingredient.objects.create(recipe= instance, **ingr)
        
        return instance

    
    class Meta:
        model = Recipe
        fields = ["id", "name", "author", "cookingTime", "instructions", "category", "ingredients", "imageUrl"]



class FavoriteSerializers(serializers.ModelSerializer):
    user = serializers.CharField(read_only = True)
    class Meta:
        model = Favorite
        fields = ['id', 'user', 'recipe']

class CatagoriesSerializers(serializers.ModelSerializer):
    pass