from rest_framework import viewsets, filters
from sales.models import Sale, SaleDetail
from sales.serializers import SaleSerializer, SaleDetailSerializer


class SaleView(viewsets.ModelViewSet):
    queryset = Sale.objects.all()
    serializer_class = SaleSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["client"]


class SaleDetailView(viewsets.ModelViewSet):
    queryset = SaleDetail.objects.all()
    serializer_class = SaleDetailSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["sale"]
