from rest_framework import serializers
import models

class SaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Sale,
        fields = ['id', 'datetime','total_price']
        
class SaleDetailSerializer(serializers.ModelSerializer):
    # sale_id = serializers.IntegerField(sourse= 'sale.id', read_only=True)
    # product_id = serializers.IntegerField(sourse= 'sale.id', read_only=True)
    
    class Meta:
        model = models.SaleDetail,
        fields = ['sale', 'product', 'quantity', 'unit_price']
        
