from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializer import *
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response


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
    

class ServiceView(APIView):
    permission_classes = [AllowAny,]

    def get(self, request):
        services = Service.objects.all()
        serializer = ServiceSerializer(services, many=True)
        return Response(serializer.data)

class ServiceDetail(generics.RetrieveAPIView):
    lookup_field = 'id'
    serializer_class = ServiceSerializer
    queryset = Service.objects.all()
    permission_classes = [AllowAny,]


class RecentJobView(APIView):
    permission_classes = [AllowAny,]

    def get(self, request):
        services = RecentJob.objects.all()
        serializer = RecentJobSerializer(services, many=True)
        return Response(serializer.data)