# Generated by Django 4.1.3 on 2024-01-24 11:08

import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Company', '0030_jobopening_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='companyinfo',
            name='career_benefits',
            field=ckeditor.fields.RichTextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='jobopening',
            name='qualification',
            field=models.CharField(blank=True, max_length=225, null=True),
        ),
    ]
