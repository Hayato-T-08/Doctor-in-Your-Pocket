from django.urls import path
from . import views

urlpatterns = [
    path('process_with_rulebase/', views.process_with_rulebase_text, name='process_with_rulebase_text'),
    path('processed_with_rulebase/', views.get_processed_with_rulebase_text, name='get_processed_with_rulebase_text'),
    path('process_with_crf/', views.process_with_crf_text, name='process_with_crf_text'),
    path('processed_with_crf/', views.get_processed_with_crf_text, name='get_processed_with_crf_text'),
    path('symptom_list/', views.symptom_list, name='symptom_list'),
    path('get_symptom_list/', views.get_symptom_list, name='get_symptom_list'),
    path('diagnosis_list/', views.get_diagnosis_list, name='get_diagnosis_list')
]




