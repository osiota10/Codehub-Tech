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
        fields = ('id', 'service', 'price', 'title',
                  'description', 'pricing_features')


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
        fields = ('id', 'title', 'description', 'image', 'slug', 'category', 'technologies',
                  'get_image_url', 'pricings', 'stats', 'faqs', 'safe_description_html', 'hero_snippet', 'get_hero_image_url')


class RecentJobSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=True)
    technologies = OurTechnologySerializer(many=True)

    class Meta:
        model = RecentJob
        fields = ('id', 'title', 'summary', 'slug', 'problem_statement',
                  'solution_offered', 'category', 'technologies', 'safe_summary_html', 'date', 'get_image_url')


class OurIndustrySerializer(serializers.ModelSerializer):
    class Meta:
        model = OurIndustry
        fields = ('id', 'name_of_industry', 'get_logo_url')


class TestimonialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Testimonial
        fields = ('id', 'name', 'position', 'message', 'get_image_url')


class SocialUrlSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialUrl
        fields = '__all__'


class OurTeamSerializer(serializers.ModelSerializer):
    team_social = SocialUrlSerializer()

    class Meta:
        model = OurTeam
        fields = ('id', 'name', 'position', 'get_image_url', 'team_social')


class CompanyInfoSerializer(serializers.ModelSerializer):
    company_social = SocialUrlSerializer()
    company_faqs = FaqSerializer(many=True)

    class Meta:
        model = CompanyInfo
        fields = ('id', 'company_name', 'company_address', 'telephone', 'telephone_2',
                  'email', 'about_company', 'return_policy', 'term_and_conditions', 'privacy_policy', 'company_social', 'company_faqs')
