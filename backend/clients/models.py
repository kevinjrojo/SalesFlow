from django.db import models

# Create your models here.
class Client(models.Model):
    name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    dni = models.IntegerField(unique=True)
    email = models.EmailField(max_length=255, blank=True)
    adress = models.CharField(max_length=50, blank=True)

