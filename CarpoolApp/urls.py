from django.urls import path
from . import views

urlpatterns=[

    path("",views.FrontPage),
    path("homepage",views.homepage,name="homepage")
]