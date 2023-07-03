# Generated by Django 4.1.3 on 2023-07-01 20:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Company', '0016_faq_company_alter_faq_service'),
    ]

    operations = [
        migrations.AlterField(
            model_name='faq',
            name='company',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='company_faqs', to='Company.companyinfo'),
        ),
    ]
