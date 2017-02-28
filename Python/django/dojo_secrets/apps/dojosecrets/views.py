from django.shortcuts import render, redirect, HttpResponse
from .models import Users, Secret
from django.contrib import messages
from django.db.models import Count
# Create your views here.
def index(request):
    return render(request, 'dojosecrets/index.html')

def register(request):
    if request.method == "GET":
        return redirect('/')
    register_check = Users.objects.register(request.POST['first_name'],request.POST['last_name'],request.POST['email'],request.POST['pwd'], request.POST['cpwd'])
    if 'error' in register_check:
        error = register_check['error']
        for msg in error:
            messages.error(request, msg)
        return redirect('/')
    else:
        user = Users.objects.filter(email=request.POST['email'])
        request.session['userid'] = user[0].id

    return redirect('/process')

def login(request):
    if request.method == "GET":
        return redirect('/')
    login_check = Users.objects.login(request.POST['email'],request.POST['pwd'])
    if 'error' in login_check:
        error = login_check['error']
        for msg in error:
            messages.error(request, msg)
        return redirect('/')
    else:
        user = Users.objects.filter(email=request.POST['email'])
        request.session['userid'] = user[0].id
    return redirect('/process')

def process(request):
    if 'userid' not in request.session:
        messages.error(request, "please login cheater")
        return redirect('/')
    context = {'loguser': Users.objects.get(id=request.session['userid']), 'secrets': Secret.objects.all(), 'post': Secret.objects.annotate(count=(Count('likedby'))).order_by('-created_at')}
    return render(request, 'dojosecrets/success.html', context)

def logout(request):
    if 'userid' not in request.session:
        return redirect('/')
    del request.session['userid']
    return redirect('/')
# def any(request):
#     return redirect('/')


def makepost(request):
    print 'my secret has been posted'
    Secret.objects.validate(request.POST['secretmessage'], request.session['userid'])
    return redirect('/process')

def secretspage(request):
    if 'userid' not in request.session:
        return redirect('/')
    post =  Secret.objects.annotate(count=(Count('likedby'))).order_by('-count')
    context={
        'post': post[:10],
        'loguser': Users.objects.filter(id=request.session['userid'])[0]
    }
    return render(request, 'dojosecrets/secrets.html', context)

def like(request, sid):
    if 'userid'not in request.session:
        messages.error(request, 'Nice try, log in or register.')
        return redirect('/')
    secrets= Secret.objects.like(request.session['userid'], sid)
    if 'error' in secrets:
        messages.error(request, secrets['error'][0])
    return redirect('/process')

def delete(request, id):
    if 'userid'not in request.session:
        messages.error(request, 'Nice try, log in or register.')
        return redirect('/')

    Secret.objects.filter(id=id).delete()
    return redirect('/process')
