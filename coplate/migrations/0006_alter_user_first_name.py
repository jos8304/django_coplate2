# Generated by Django 4.2.10 on 2024-04-27 20:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coplate', '0005_auto_20210421_0500'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='first_name',
            field=models.CharField(blank=True, max_length=150, verbose_name='first name'),
        ),
    ]
