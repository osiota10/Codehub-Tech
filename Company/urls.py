from django.urls import path
from .views import *

urlpatterns = [
    path('contact-us', ContactFormView.as_view(),),
    path('email-subscription', EmailSubcriptionView.as_view()),
    path('work-process', OurworkProcessView.as_view()),
    path('clients', OurClientView.as_view()),
    path('our-services', ServiceView.as_view()),
    path('our-services/<slug:slug>', ServiceDetail.as_view()),
    path('our-recent-jobs', RecentJobView.as_view()),
    path('our-recent-jobs/<slug:slug>', RecentJobDetail.as_view()),
    path('industries', OurIndustryView.as_view()),
    path('testimonials', TestimonialView.as_view()),
    path('our-teams', OurTeamView.as_view()),
    path('technologies', TechnologyView.as_view()),
    path('company-info/<int:id>', CompanyInfoView.as_view()),
    path('core-values', CoeValueView.as_view()),
]
