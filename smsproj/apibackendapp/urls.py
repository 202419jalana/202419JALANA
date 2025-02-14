from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import AdmissionViewSet

router = DefaultRouter()
router.register('admissions', AdmissionViewSet,)

urlpatterns = [
    path('api/', include(router.urls)),
]
