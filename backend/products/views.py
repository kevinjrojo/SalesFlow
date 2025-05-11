from django.shortcuts import render
from rest_framework import response as res, request as req, viewsets, views, filters
from products import models, serializers

# Create your views here.
class UnitViewSet(viewsets.ModelViewSet):
    """
    Urls:
    /product/unit/ -> GET (all), POST
    /product/unit/<int:pk>/ -> GET, PUT, DELETE
    """
    
    queryset = models.Unit.objects.all()
    serializer_class = serializers.UnitSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'abbreviation']
    
class ProductCategoryViewSet(viewsets.ModelViewSet):
    """
    Urls:
    /product/category/ -> GET (all), POST
    /product/category/<int:pk>/ -> GET, PUT, DELETE
    """
    queryset =  models.ProductCategory.objects.all()
    serializer_class = serializers.ProductCategorySerializer
    

class ProductView(viewsets.ViewSet):
    """
    Urls:
    /product/ -> GET (all), POST
    /product/<int:pk>/ -> GET, PUT, DELETE
    """
    
    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'gtin']
    