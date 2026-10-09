"""Validation des messages envoyés depuis le formulaire de contact."""

from django import forms


class ContactForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField(max_length=254)
    subject = forms.CharField(max_length=200)
    message = forms.CharField(max_length=5000)