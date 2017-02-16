from django.conf.urls import url
from . import views

def index(request):

    urlpatterns = [
        url(r'^$', views.index),
        ]
