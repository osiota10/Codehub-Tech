# Generated by Django 4.1.3 on 2023-11-11 15:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Company', '0025_remove_ourindustry_logo_ourindustry_get_logo_url'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='companyinfo',
            name='page_header_image',
        ),
        migrations.AddField(
            model_name='companyinfo',
            name='get_page_header_image',
            field=models.URLField(default=''),
        ),
    ]
