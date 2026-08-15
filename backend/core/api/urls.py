from django.urls import path
from .views import hello_world, status_api

urlpatterns = [
    path('hello/', hello_world),
    path('status/', status_api),
]
