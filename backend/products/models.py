from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank= True)
    sku = models.CharField(max_length=100, unique=True, null=True)
    gtin = models.CharField(max_length=100, unique=True, null=True)
    stock = models.DecimalField(default=0)
    unit = models.ForeignKey('products.Unit', on_delete=models.SET_NULL)
    category = models.ForeignKey('products.ProductCategory', on_delete= models.SET_NULL)
    is_active = models.BooleanField(default=True)

class Unit(models.Model):
    name = models.CharField(max_length=100, unique=True)
    abbreviation = models.CharField(max_length=10, null=True, unique=True)
    is_divisible = models.BooleanField(default=False)
    
    
class ProductCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)
    prefix = models.CharField(max_length=5, null=True, unique=True)
    