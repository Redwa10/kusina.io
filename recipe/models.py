from django.db import models


# Create your models here.

class Catagories(models.Model):
    title = models.CharField(max_length=255)


class Recipe(models.Model):
    food_name = models.CharField(max_length= 255)
    #duration = models.CharField(max_length= 255)
    ingredient = models.CharField(max_length= 255)
    steps = models.CharField(max_length= 255)
    catagories = models.ForeignKey(Catagories, on_delete=models.CASCADE, related_name='foods', null= True)

class Favorite(models.Model):
    recipe = models.OneToOneField(Recipe, on_delete= models.CASCADE)