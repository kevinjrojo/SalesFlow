from rest_framework import serializers
from products import models

class UnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Unit
        fields = ['id', 'name', 'abbreviation', 'is_divisible']
        read_only_fields = ['id']
    

class ProductCategorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = models.ProductCategory
        fields = ['id', 'name', 'prefix']
        read_only_fields = ['id']
    
    def validate_name(self, value: str):
        return value.lower()
    
    def validate_prefix(self, value: str):
        return value.upper()

class ProductSerializer(serializers.ModelSerializer):
    unit = serializers.CharField(source='unit.name')
    category = serializers.CharField(source='category.name')

    class Meta:
        model = models.Product
        fields = ['id', 'name', 'description', 'sku', 'gtin', 'stock', 'unit', 'category', 'is_active']
        read_only_fields = ['id']
