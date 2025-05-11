from rest_framework import serializers
from products import models

from rest_framework import serializers
from . import models  # ajusta según tu estructura de imports

class ProductSerializer(serializers.ModelSerializer):
    # Para lectura (read-only): muestra los nombres de la unidad y categoría
    unit = serializers.CharField(source='unit.name', read_only=True)
    category = serializers.CharField(source='category.name', read_only=True)
    
    # Para escritura (write-only): recibe los IDs de unidad y categoría
    unit_id = serializers.PrimaryKeyRelatedField(
        queryset=models.Unit.objects.all(), write_only=True
    )
    category_id = serializers.PrimaryKeyRelatedField(
        queryset=models.ProductCategory.objects.all(), write_only=True
    )

    class Meta:
        model = models.Product
        fields = [
            'id', 'name', 'description', 'sku', 'gtin', 'stock',
            'unit', 'unit_id', 'category', 'category_id', 
            'unit_price', 'cost_price', 'is_active'
        ]
        read_only_fields = ['id', 'unit', 'category']

    def create(self, validated_data):
        unit = validated_data.pop('unit_id')
        category = validated_data.pop('category_id')
        return models.Product.objects.create(unit=unit, category=category, **validated_data)

    def update(self, instance, validated_data):
        if 'unit_id' in validated_data:
            instance.unit = validated_data.pop('unit_id')
        if 'category_id' in validated_data:
            instance.category = validated_data.pop('category_id')
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance


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

