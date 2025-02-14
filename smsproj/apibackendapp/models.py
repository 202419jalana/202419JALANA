from django.db import models
from django.utils import timezone  # Import timezone

class Admission(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('approved', 'Approved'),
        ('rejected', 'Rejected'),
    ]
    
    student_name = models.CharField(max_length=255)
    student_email = models.EmailField(unique=True)
    admission_date = models.DateTimeField(default=timezone.now)  # Default to current date and time
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')

    # id field is automatically added by Django, so there's no need to define it explicitly.

    def __str__(self):
        return self.student_name
