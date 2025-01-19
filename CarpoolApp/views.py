from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib import messages

# Create your views here.


def FrontPage(requests):
    return render(requests,'Carpool/Index.html')


def login_view(request):
    if request.method == "POST":
        form_id = request.POST.get('form_id')
        if form_id == "login-form":
            email = request.POST.get('email')
            password = request.POST.get('password')

            user = authenticate(request, username=email, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, "Logged in successfully!")
                return redirect("home")
            else:
                messages.error(request, "Invalid email or password.")
                return HttpResponse("Invalid email or password.", status=401)

        elif form_id == "signup-form":
            name = request.POST.get('name')
            email = request.POST.get('email')
            password = request.POST.get('password')

            if User.objects.filter(username=email).exists():
                messages.error(request, "Email is already registered.")
            else:
                user = User.objects.create_user(username=email, password=password, email=email, first_name=name)
                user.save()
                messages.success(request, "Account created successfully! You can now log in.")
                return HttpResponse("Account created successfully!", status=200)

    return render(request, "Carpool/Login.html")



def HomePage(request):
    return render(request,'Carpool/home.html')