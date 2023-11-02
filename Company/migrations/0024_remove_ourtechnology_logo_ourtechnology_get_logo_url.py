# Generated by Django 4.1.3 on 2023-11-02 18:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Company', '0023_remove_corevalue_pic_corevalue_pic_url'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ourtechnology',
            name='logo',
        ),
        migrations.AddField(
            model_name='ourtechnology',
            name='get_logo_url',
            field=models.URLField(default='https://bit.ly/3u7pAe0'),
        ),
    ]