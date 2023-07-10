from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect

def login_view(request):
    remaining_attempts = 3  
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')  
        else:
            remaining_attempts -= 1
            if remaining_attempts == 0:
                error_message = 'Invalid username or password. No remaining attempts.'
            else:
                error_message = f'Invalid username or password. {remaining_attempts} attempts remaining.'
    else:
        error_message = ''
    return render(request, 'login.html', {'error_message': error_message})

@login_required
def home_view(request):
    return render(request, 'home.html')
