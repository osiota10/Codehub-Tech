# Generated by Django 4.1.3 on 2024-02-03 11:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Company', '0032_jobopeningapplication'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pricing',
            name='price',
            field=models.CharField(max_length=50),
        ),
    ]