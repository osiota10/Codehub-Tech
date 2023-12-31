# Generated by Django 4.1.3 on 2023-07-01 15:10

import cloudinary.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Company', '0009_recentjob_slug_service_slug'),
    ]

    operations = [
        migrations.CreateModel(
            name='OurIndustry',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_of_industry', models.CharField(max_length=50)),
                ('logo', cloudinary.models.CloudinaryField(max_length=255)),
            ],
            options={
                'verbose_name_plural': 'Our Industries',
            },
        ),
    ]
