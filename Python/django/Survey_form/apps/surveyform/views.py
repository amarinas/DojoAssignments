from django.shortcuts import render, HttpResponse, redirect

# Create your views here.
def index(request):
    return render(request, 'surveyform/index.html')

def process(request):
    if "counter" not in request.session:
        request.session['counter']=1

    request.session['name'] = request.POST['name']
    request.session['language'] =request.POST['language']
    request.session['location']= request.POST['location']
    request.session['textbox']=request.POST['textbox']
    request.session['counter'] += 1
    return redirect('/result')

def result(request):
    return render(request,'surveyform/result.html' )
