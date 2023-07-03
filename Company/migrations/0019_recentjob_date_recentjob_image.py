# Generated by Django 4.1.3 on 2023-07-03 17:27

import cloudinary.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Company', '0018_service_hero_image_service_hero_snippet'),
    ]

    operations = [
        migrations.AddField(
            model_name='recentjob',
            name='date',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='recentjob',
            name='image',
            field=cloudinary.models.CloudinaryField(blank=True, max_length=255, null=True),
        ),
    ]
