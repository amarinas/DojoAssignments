from django.shortcuts import render, redirect, HttpResponse
from .models import Users
from django.contrib import messages
# Create your views here.
def index(request):
    return render(request, 'loginregister/index.html')

def register(request):
    if request.method == "GET":
        return redirect('/')
    register_check = Users.objects.register(request.POST['first_name'],request.POST['last_name'],request.POST['email'],request.POST['pwd'], request.POST['cpwd'])

    if 'error' in register_check:
        messages.error(request, "invalid first name")
        return redirect('/')
    elif 'error1' in register_check:
        messages.error(request, "invalid last name")
        return redirect('/')
    elif 'error7' in register_check:
        messages.error(request, "email is currently in the database")
        return redirect('/')
    elif 'error2' in register_check:
        messages.error(request, "email invalid")
        return redirect('/')
    elif 'error3' in register_check:
        messages.error(request, "password needs to be longer than 8 character")
        return redirect('/')
    elif 'error4' in register_check:
        messages.error(request, "password does not match")
        return redirect('/')
    else:
        user = Users.objects.filter(email=request.POST['email'])
        request.session['userid'] = user[0].id

    return redirect('/process')

def login(request):
    if request.method == "GET":
        return redirect('/')
    login_check = Users.objects.login(request.POST['email'],request.POST['pwd'])
    if 'error8' in login_check:
        messages.error(request, 'please provided registered credentials'.format(request.POST['email']))
        return redirect('/')
    elif 'error5' in login_check:
        messages.error(request, 'not {} in database!'.format(request.POST['email']))
        return redirect('/')
    if 'error6' in login_check:
        messages.error(request, 'password does not match')
        return redirect('/')
    else:
        user = Users.objects.filter(email=request.POST['email'])
        request.session['userid'] = user[0].id
    return redirect('/process')

def process(request):
    if 'userid' not in request.session:
        return redirect('/')
    context = {'loguser': Users.objects.get(id=request.session['userid'])}
    return render(request, 'loginregister/success.html', context)

def logout(request):
    if 'userid' not in request.session:
        return redirect('/')
    del request.session['userid']
    return redirect('/')
def any(request):
    return redirect('/')
