from unittest.mock import patch

from django.test import TestCase
from django.urls import reverse


class ContactFormTests(TestCase):
	def setUp(self):
		self.url = reverse('home')
		self.form_data = {
			'name': 'Test Visitor',
			'email': 'visitor@example.com',
			'subject': 'Portfolio question',
			'message': 'I would like to discuss a project.',
		}

	@patch('portfolio.views.EmailMessage')
	def test_valid_post_sends_email(self, email_message):
		response = self.client.post(self.url, self.form_data)

		self.assertEqual(response.status_code, 200)
		self.assertEqual(response.json(), {'ok': True})
		email_message.return_value.send.assert_called_once_with(fail_silently=False)

	@patch('portfolio.views.EmailMessage')
	def test_invalid_post_does_not_send_email(self, email_message):
		invalid_data = {**self.form_data, 'email': 'not-an-email'}

		response = self.client.post(self.url, invalid_data)

		self.assertEqual(response.status_code, 400)
		self.assertEqual(response.json(), {'ok': False, 'error': 'invalid_form'})
		email_message.assert_not_called()
