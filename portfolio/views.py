import logging

from django.conf import settings
from django.core.mail import EmailMessage
from django.http import JsonResponse
from django.shortcuts import render

from .forms import ContactForm
from .models import Project


logger = logging.getLogger(__name__)


def home(request):
    """Affiche le portfolio et traite les messages POST du formulaire de contact."""
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if not form.is_valid():
            return JsonResponse({'ok': False, 'error': 'invalid_form'}, status=400)

        contact = form.cleaned_data
        email = EmailMessage(
            subject=f"[Portfolio] {contact['subject']}",
            body=(
                f"Nom : {contact['name']}\n"
                f"E-mail : {contact['email']}\n\n"
                f"{contact['message']}"
            ),
            from_email=settings.DEFAULT_FROM_EMAIL,
            to=[settings.CONTACT_EMAIL],
            reply_to=[contact['email']],
        )

        try:
            email.send(fail_silently=False)
        except Exception:
            logger.exception('Impossible d’envoyer le message du formulaire de contact.')
            return JsonResponse({'ok': False, 'error': 'send_failed'}, status=500)

        return JsonResponse({'ok': True})

    projects = Project.objects.all().order_by('-created_at')
    return render(request, 'portfolio/base.html', {'projects': projects})




