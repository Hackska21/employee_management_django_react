from django.db import models

# Create your models here.
from django.db import models


# Create your models here.
class Employee(models.Model):
    employee_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    date_of_entry = models.DateTimeField(auto_now_add=True)
