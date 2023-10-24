from rest_framework import serializers
from .models import Product
from decimal import Decimal


class ProductSerializer(serializers.ModelSerializer):
    promotional_price = serializers.SerializerMethodField()


    def get_promotional_price(self, obj):
        discount = {"Appliances": Decimal("5"), "Furniture": Decimal("3"), "Refrigerators": Decimal("7.5"), "Smartphones": Decimal("2.55"), "Electronics": Decimal("4.3")}
        percentage = discount.get(obj.product_category, Decimal("0"))
        return obj.price - (obj.price * percentage / 100)


    class Meta:
        model = Product
        fields = '__all__'
