from django.shortcuts import render, redirect, HttpResponse
from . models import Course

# Create your views here.
def index(request):
	context = {"listall": Course.objects.all() }

    
	return render(request, "courses/index.html", context)

def process(request):
    Course.objects.create(name= request.POST['name'], description = request.POST['textbox'])
    return redirect('/')

def delCourse(request, id):
    context = { 'course': Course.objects.get(id=id)}
    return render(request, "courses/destroy.html", context)

def deleteC(request):
    print "DELETING"
    Course.objects.get(id=request.POST['id']).delete()
    return redirect('/')
