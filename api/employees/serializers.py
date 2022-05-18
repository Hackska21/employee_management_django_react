from rest_framework import serializers

from employees.models import Employee


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'employee_id',
            'name',
            'last_name',
            'date_of_entry'
        )
        read_only_fields = (
            'employee_id',
            'date_of_entry'
        )
        model = Employee
