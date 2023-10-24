from django.db import models

class Product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=150)
    description = models.CharField(max_length=150)
    color = models.CharField(max_length=150)
    product_category = models.CharField(max_length=150, choices=[("Appliances", "Appliances"),("Furniture", "Furniture"), ("Refrigerators", "Refrigerators"), ("Smartphones", "Smartphones"), ("Electronics", "Electronics")])
    price = models.DecimalField(max_digits=10, decimal_places=2)





