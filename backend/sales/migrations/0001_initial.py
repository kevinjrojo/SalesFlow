# Generated by Django 5.2.1 on 2025-05-11 09:49

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('clients', '0001_initial'),
        ('products', '0002_product_cost_price_product_unit_price'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sale',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('datetime', models.DateTimeField(auto_now=True)),
                ('total_price', models.IntegerField()),
                ('client', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='clients.client')),
            ],
        ),
        migrations.CreateModel(
            name='SaleDetail',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField(default=1)),
                ('unit_price', models.DecimalField(decimal_places=2, max_digits=100)),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='products.product')),
                ('sale', models.ForeignKey(on_delete=django.db.models.deletion.RESTRICT, to='sales.sale')),
            ],
        ),
    ]
