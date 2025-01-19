from django.test import TestCase
from django.test import RequestFactory
from django.contrib.auth import authenticate
from django.contrib.auth import login as auth_login
from django.http import HttpResponse
from views import login  # Import your view function here


