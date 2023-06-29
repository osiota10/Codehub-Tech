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