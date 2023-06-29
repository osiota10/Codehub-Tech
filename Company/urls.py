from django.urls import path
from .views import *

urlpatterns = [
    path('contact-us', ContactFormView.as_view()),
    path('email-subscription', EmailSubcriptionView.as_view()),
]