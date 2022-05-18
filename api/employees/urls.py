from django.urls import path, include
from rest_framework import routers

# Create a router to generate automatically all paths on de viewset}
from employees.views import EmployeeViewSet


router = routers.SimpleRouter()
router.register(r'', EmployeeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
