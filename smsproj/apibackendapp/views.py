from rest_framework import viewsets
from .models import Admission
from .serializers import AdmissionSerializer
from rest_framework.permissions import IsAuthenticated

class AdmissionViewSet(viewsets.ModelViewSet):
    queryset = Admission.objects.all()
    serializer_class = AdmissionSerializer
    permission_classes = [IsAuthenticated]
