# Generated by Django 4.1.3 on 2024-01-20 11:53

import cloudinary.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Company', '0027_recentjob_industry_recentjob_location'),
    ]

    operations = [
        migrations.AddField(
            model_name='companyinfo',
            name='testimonial_frame',
            field=cloudinary.models.CloudinaryField(blank=True, max_length=255, null=True),
        ),
    ]
