from django.shortcuts import render

# Create your views here.


def FrontPage(requests):
    return render(requests,'Carpool/Index.html')

def homepage(requests):
    a=True
    if a:
        a=False
        return render(requests,'Carpool/login.html')