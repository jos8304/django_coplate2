# Generated by Django 4.2.10 on 2024-05-21 00:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coplate', '0011_change_reverse_relationship'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='profile_pic',
            field=models.ImageField(blank=True, default='default_profile_pic.jpg', upload_to='profile_pics'),
        ),
    ]