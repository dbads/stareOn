from django.shortcuts import render
from django.conf import settings as django_setting
from django.core.mail import send_mail
from django.http import HttpResponse

# Create your views here.


def home(request):
	return render(request, 'Stare/home.html',{})

def subscribe(request):
	email = request.POST.get('email')
	sub = 'Successfully Subscribed to STARE'
	message = 'We are glad you subscribed to STARE, Thanks for visiting.'
	from_email = django_setting.EMAIL_HOST_USER
	to_email = [email]
	send_mail(sub,message,from_email,to_email, fail_silently=False)

	return HttpResponse("success")
