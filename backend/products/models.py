from django.db import models
from products import exceptions as e

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank= True)
    sku = models.CharField(max_length=100, unique=True, null=True)
    gtin = models.CharField(max_length=100, unique=True, null=True)
    stock = models.DecimalField(default=0, max_digits=10, decimal_places=3)
    unit = models.ForeignKey('products.Unit', on_delete=models.SET_NULL, null=True)
    category = models.ForeignKey('products.ProductCategory', on_delete= models.SET_NULL, null=True)
    unit_price = models.DecimalField(max_digits=100, decimal_places=2)
    cost_price = models.DecimalField(max_digits=100, decimal_places=2)
    is_active = models.BooleanField(default=True)

    def activate(self) -> None: self.is_active = True
    def deactivate(self) -> None: self.is_active = False
    
    def reduce_stock(self, amount: int) -> None:
        if amount < self.stock:
            raise e.InsufficientStockException(f"It is not possible to reduce the stock by the quantity provided, the maximum stock is {self.stock}")
        self.stock = self.stock - amount
        
    def increase_stock(self, amount: int) -> None:
        self.stock = self.stock + amount
    

class Unit(models.Model):
    name = models.CharField(max_length=100, unique=True)
    abbreviation = models.CharField(max_length=10, null=True, unique=True)
    is_divisible = models.BooleanField(default=False)
    
    def __str__(self):
        return f"{self.name} [{self.abbreviation}]"
    
    
class ProductCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)
    prefix = models.CharField(max_length=5, null=True, unique=True)
    
    def __str__(self):
        return self.name