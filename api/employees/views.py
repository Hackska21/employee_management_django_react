from django.shortcuts import render

# Create your views here.
from rest_framework.viewsets import ModelViewSet

from employees.models import Employee
from employees.serializers import EmployeeSerializer


class EmployeeViewSet(ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
