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

class PricingFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = PricingFeature
        fields = '__all__'


class PricingSerializer(serializers.ModelSerializer):
    pricing_features = PricingFeatureSerializer(many=True)
    class Meta:
        model = Pricing
        fields = ('id', 'service', 'price', 'title', 'description', 'pricing_features')

class StatSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stat
        fields = '__all__'

class FaqSerializer(serializers.ModelSerializer):
    class Meta:
        model = FAQ
        fields = '__all__'

class ServiceSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=True)
    technologies = OurTechnologySerializer(many=True)
    pricings = PricingSerializer(many=True)
    stats = StatSerializer(many=True)
    faqs = FaqSerializer(many=True)

    class Meta:
        model = Service
        fields = ('id', 'title', 'description', 'image', 'slug', 'category', 'technologies', 'get_image_url', 'pricings', 'stats', 'faqs')


class RecentJobSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=True)
    technologies = OurTechnologySerializer(many=True)

    class Meta:
        model = RecentJob
        fields = ('id', 'title', 'summary', 'slug', 'problem_statement', 'solution_offered', 'category', 'technologies')