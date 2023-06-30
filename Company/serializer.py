from rest_framework import serializers
from .models import *


class ContactFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactForm
        fields = '__all__'

class EmailSubcriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailSubcription
        fields = '__all__'

class OurWorkProcessSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurWorkProcess
        fields = '__all__'

class OurClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = OurClient
        fields = ('id', 'name_of_client', 'get_logo_url')

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class OurTechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = OurTechnology
        fields = ('id', 'name_of_technology', 'get_logo_url')

class ServiceSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=True)
    technologies = OurTechnologySerializer(many=True)
    class Meta:
        model = Service
        fields = ('id', 'title', 'description', 'image', 'category', 'technologies', 'get_image_url')