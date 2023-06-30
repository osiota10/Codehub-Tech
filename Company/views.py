from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializer import *
from rest_framework.permissions import AllowAny


class ContactFormView(generics.CreateAPIView):
    queryset = ContactForm.objects.all()
    serializer_class = ContactFormSerializer
    permission_classes = [AllowAny,]

class EmailSubcriptionView(generics.CreateAPIView):
    queryset = EmailSubcription.objects.all()
    serializer_class = EmailSubcriptionSerializer
    permission_classes = [AllowAny,]

class OurworkProcessView(generics.ListAPIView):
    serializer_class = OurWorkProcessSerializer
    permission_classes = [AllowAny,]

    def get_queryset(self):
        query = OurWorkProcess.objects.all()
        return query
    

class OurClientView(generics.ListAPIView):
    serializer_class = OurClientSerializer
    permission_classes = [AllowAny,]

    def get_queryset(self):
        query = OurClient.objects.all()
        return query
    

class ServiceView(generics.ListAPIView):
    serializer_class = ServiceSerializer
    permission_classes = [AllowAny,]

    def get_queryset(self):
        query = Service.objects.all()
        return query