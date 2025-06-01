from rest_framework import (
    response as res,
    request as req,
    viewsets,
    filters,
    status,
)
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
    search_fields = ["name", "abbreviation"]


class ProductCategoryViewSet(viewsets.ModelViewSet):
    """
    Urls:
    /product/category/ -> GET (all), POST
    /product/category/<int:pk>/ -> GET, PUT, DELETE
    """

    queryset = models.ProductCategory.objects.all()
    serializer_class = serializers.ProductCategorySerializer


class ProductView(viewsets.ModelViewSet):
    """
    Urls:
    /product/ -> GET (all), POST
    /product/<int:pk>/ -> GET, PUT, DELETE
    """

    queryset = models.Product.objects.all()
    serializer_class = serializers.ProductSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ["name", "gtin"]

    def deactivate(self, request: req.Request, pk: int) -> res.Response:
        """
        Soft Delete a product
        """
        try:
            product = self.queryset.get(pk=pk)
            product.deactivate()
            product.save()
            return res.Response(
                status=status.HTTP_200_OK,
                data={"details": f"Product with id {pk} deactivate successfuly."},
            )

        except models.Product.DoesNotExist:
            return res.Response(
                status=404, data={"error": f"Product with id {pk} not found"}
            )

    def activate(self, request: req.Request, pk: int) -> res.Response:
        """
        Suspended product activation
        """

        try:
            product = self.queryset.get(pk=pk)
            product.activate()
            product.save()

            return res.Response(
                status=status.HTTP_200_OK,
                data={"details": f"Product with id {pk} activate successfuly."},
            )
        except models.Product.DoesNotExist:
            return res.Response(
                status=status.HTTP_404_NOT_FOUND,
                data={"error": f"Product with id {pk} not found"},
            )
