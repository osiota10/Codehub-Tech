# Generated by Django 4.1.3 on 2023-07-13 14:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Company', '0021_recentjobstatement'),
    ]

    operations = [
        migrations.AddField(
            model_name='socialurl',
            name='whatsapp_url',
            field=models.URLField(blank=True, null=True),
        ),
    ]