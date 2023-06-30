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