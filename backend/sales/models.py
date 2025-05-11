from django.db import models

# Create your models here.
class Sale(models.Model):
    datetime = models.DateTimeField(auto_now=True)
    client = models.ForeignKey("clients.Client", on_delete=models.SET_NULL, null=True)
    total_price = models.IntegerField()
    
class SaleDetail(models.Model):
    sale = models.ForeignKey("sales.Sale", on_delete=models.RESTRICT)
    product = models.ForeignKey("products.Product", on_delete=models.RESTRICT)
    quantity = models.IntegerField(default=1)
    unit_price = models.DecimalField(max_digits=100, decimal_places=2)
