# Generated by Django 4.1.3 on 2023-07-01 20:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Company', '0015_companyinfo_about_company_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='faq',
            name='company',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='company_faqs', to='Company.companyinfo'),
        ),
        migrations.AlterField(
            model_name='faq',
            name='service',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='faqs', to='Company.service'),
        ),
    ]