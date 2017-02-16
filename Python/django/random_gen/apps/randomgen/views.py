from django.shortcuts import render, redirect, HttpResponse
import string, random



def index(request):
    if "key" not in request.session:
        request.session["key"]=0
    if "gena" not in request.session:
        request.session['gena'] = ""
    return render(request,'randomgen/index.html')

def show(request):
    request.session["key"] += 1
    mixnum=[]
    for i in range(1,15):
        mixnum.append(random.choice(string.ascii_uppercase + string.digits))
        request.session["gena"]= "".join(mixnum)

    return redirect('/')
