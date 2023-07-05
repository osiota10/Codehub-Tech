# Generated by Django 4.1.3 on 2023-07-03 21:02

import ckeditor.fields
import cloudinary.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Company', '0020_corevalue'),
    ]

    operations = [
        migrations.CreateModel(
            name='RecentJobStatement',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pic', cloudinary.models.CloudinaryField(max_length=255, verbose_name='image')),
                ('title', models.CharField(help_text='Should be Problem Statement or Solutions Offered', max_length=50)),
                ('description', ckeditor.fields.RichTextField()),
                ('recent_job', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='recent_job_statement', to='Company.recentjob')),
            ],
        ),
    ]