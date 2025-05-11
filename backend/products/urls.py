from django.urls import path
from products import views

urlpatterns = [
    # Products
    path('', view= views.ProductView.as_view({'get': 'list', 'post': 'create',})),
    path('<int:pk>/', view= views.ProductView.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
    path('activate/<int:pk>/', view= views.ProductView.as_view({'patch': 'activate'})),
    path('deactivate/<int:pk>/', view= views.ProductView.as_view({'patch': 'deactivate'})),
    
    # Units
    path('unit/', view=views.UnitViewSet.as_view({'get': 'list', 'post': 'create',})),
    path('unit/<int:pk>/', view=views.UnitViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),
    
    # Categories
    path('category/', view= views.ProductCategoryViewSet.as_view({'get': 'list', 'post': 'create',})),
    path('category/<int:pk>', view= views.ProductCategoryViewSet.as_view({'get': 'retrieve', 'put': 'update', 'delete': 'destroy'})),

]   