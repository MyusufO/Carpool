from django.urls import path
from . import views

urlpatterns=[

    path("",views.FrontPage,name="First"),
    path("Login",views.login_view,name="login"),
    path("Home",views.HomePage,name="home")
]