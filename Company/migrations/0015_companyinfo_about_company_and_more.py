# Generated by Django 4.1.3 on 2023-07-01 19:43

import ckeditor.fields
import cloudinary.models
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Company', '0014_rename_whatsapp_url_socialurl_github_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='companyinfo',
            name='about_company',
            field=ckeditor.fields.RichTextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='companyinfo',
            name='company_address',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='companyinfo',
            name='company_name',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='companyinfo',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
        migrations.AddField(
            model_name='companyinfo',
            name='logo',
            field=cloudinary.models.CloudinaryField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='companyinfo',
            name='page_header_image',
            field=cloudinary.models.CloudinaryField(blank=True, max_length=255, null=True),
        ),
        migrations.AddField(
            model_name='companyinfo',
            name='privacy_policy',
            field=ckeditor.fields.RichTextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='companyinfo',
            name='return_policy',
            field=ckeditor.fields.RichTextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='companyinfo',
            name='telephone',
            field=models.CharField(blank=True, max_length=15, null=True, validators=[django.core.validators.RegexValidator('^\\d{11}$', 'Enter a valid phone number.')]),
        ),
        migrations.AddField(
            model_name='companyinfo',
            name='telephone_2',
            field=models.CharField(blank=True, max_length=15, null=True, validators=[django.core.validators.RegexValidator('^\\d{11}$', 'Enter a valid phone number.')]),
        ),
        migrations.AddField(
            model_name='companyinfo',
            name='term_and_conditions',
            field=ckeditor.fields.RichTextField(blank=True, null=True),
        ),
    ]
