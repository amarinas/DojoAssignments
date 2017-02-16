from django.shortcuts import render, HttpResponse
from datetime import datetime
from django.utils import timezone

# Create your views here.
def index(request):
    context={
    "currentTime": datetime.strftime(datetime.now(), ("%I: %M %p")),
    "currentDate": datetime.strftime(datetime.now(), ("%b %d, %Y"))

    }
    return render(request, 'timedisplay/index.html', context)
