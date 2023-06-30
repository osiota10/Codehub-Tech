from django.urls import path
from .views import *

urlpatterns = [
    path('contact-us', ContactFormView.as_view()),
    path('email-subscription', EmailSubcriptionView.as_view()),
    path('work-process', OurworkProcessView.as_view()),
    path('clients', OurClientView.as_view()),
    path('services', ServiceView.as_view()),
    path('services/<int:id>', ServiceDetail.as_view()),
]