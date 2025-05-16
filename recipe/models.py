from django.db import models
from django.conf import settings
from django.utils.text import slugify
# Create your models here.

class Catagories(models.Model):
    title = models.CharField(max_length=255)

    def __str__(self):
        return self.title
    

class Recipe(models.Model):
    id = models.CharField(primary_key= True, max_length= 20, editable= False)
    name = models.CharField(max_length= 255, unique= True)
    cookingTime = models.CharField(max_length= 255)
    author = models.CharField(max_length= 255)
    instructions = models.TextField(help_text= "separate instructions with new line")
    category = models.ForeignKey(Catagories, on_delete=models.CASCADE, related_name='foods', null= True)
    imageUrl = models.ImageField(upload_to= 'recipe/images', null = True,blank= True )


    def save(self, *args, **kwargs):
        if not self.id:
            self.id = slugify(self.name)
        return super().save(*args, **kwargs)
    

    def __str__(self):
        return self.name

class Favorite(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete= models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete= models.CASCADE)

    class Meta:
        unique_together = ("recipe", "user")


class Ingredient(models.Model):
    name= models.CharField(max_length= 255)
    quantity = models.CharField(max_length= 255)
    recipe = models.ForeignKey(Recipe, on_delete= models.CASCADE, related_name= "ingredients")

    def __str__(self):
        return f" name : {self.name}, quantity : {self.quantity}"


