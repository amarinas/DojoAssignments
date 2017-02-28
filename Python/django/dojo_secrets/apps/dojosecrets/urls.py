from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^register$', views.register, name='register'),
    url(r'^login$', views.login, name='login'),
    url(r'^process$', views.process, name='process'),
    url(r'^logout$', views.logout),
    url(r'^makepost$', views.makepost),
    url(r'^secretspage$', views.secretspage ),
    url(r'^like/(?P<sid>\d+)$', views.like),
    url(r'^delete/(?P<id>\d+)$', views.delete),
    # url(r'^.+$', views.any, name='any')

]
