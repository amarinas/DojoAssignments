from django.shortcuts import render, redirect, HttpResponse
from .models import Emails, Emanager
from django.contrib import messages

import re

# Create your views here.
def index(request):
    return render(request, "emailval/index.html")

def process(request):
    if Emails.objects.register(getemail=request.POST['email']) == False:
        messages.add_message(request, messages.INFO, 'UMM nice try, but you cant do that!')
        return redirect('/')
    else:
        messages.add_message(request, messages.INFO, 'Awesome you are now entered in our spam program')

    return redirect('/done')

def done(request):
    context = {"emails": Emails.objects.all()}
    return render(request, "emailval/success.html", context)

def delete(request, id):
    print "the id for this is"+id
    Emails.objects.filter(id=id).delete()
    return redirect("/done")
