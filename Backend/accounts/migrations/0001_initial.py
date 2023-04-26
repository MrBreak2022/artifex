# Generated by Django 3.2.6 on 2023-04-15 10:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('username', models.CharField(max_length=30)),
                ('paypalemail', models.EmailField(blank=True, max_length=500, null=True, unique=True)),
                ('email', models.EmailField(max_length=500, unique=True)),
                ('active', models.BooleanField(default=True)),
                ('staff', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]