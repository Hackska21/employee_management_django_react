# Generated by Django 3.2.5 on 2022-05-19 15:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('employees', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='date_of_entry',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
