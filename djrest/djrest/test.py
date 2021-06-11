import json
from django.test import TestCase
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APISimpleTestCase, APITestCase
from mixer.backend.django import mixer
from users.models import User
from users.views import UserModelViewSet
from TODO.models import Project, Todo

# class TestAPI(TestCase):

    # def test_APIRequestFactory(self):
    #     factory = APIRequestFactory()
    #     request = factory.post('/api/users/', {'username': 'push','first_name': 'Пушк','last_name': 'Алекса', 'email': 'push@mail.ru'}, format='json')
    #     admin = User.objects.create_superuser('admin', 'admin@admin.com', 'admin123456')
    #     force_authenticate(request, admin)
    #     view = UserModelViewSet.as_view({'post': 'create'})
    #     response = view(request)
    #     print(response.data)
    #     self.assertEqual(response.status_code,  status.HTTP_201_CREATED)

    # def test_APIClient(self):
    #     user = User.objects.create(username= 'push',first_name= 'Пушк',last_name= 'Алекса', email= 'push@mail.ru')
    #     print(user.id)
    #     client = APIClient()
    #     admin = User.objects.create_superuser('admin', 'admin@admin.com', 'admin123456')
    #     client.login(username='admin', password='admin123456')
    #     response = client.put(f'/api/users/{user.id}/', {'username': 'ppupu', 'first_name': 'Пушкин','last_name': 'Алекса', 'email': 'push@mail.ru'})
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
    #     print(user.id)
    #     print(response.data)
    #     user = User.objects.get(id=user.id)
    #     self.assertEqual(user.username, 'ppupu')
    #     self.assertEqual(user.first_name, 'Пушкин')
    #     client.logout()

#class TestAPI(APITestCase):
    # def tes_APITestCase(self):
    #     response = self.client.get('/api/projects/')
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)

    # def test_edit_mixer(self):
    #     project = mixer.blend(Project)
    #     admin = User.objects.create_superuser('admin', 'admin@admin.com', 'admin123456')
    #     self.client.login(username='admin', password='admin123456')
    #     response = self.client.put(f'/api/projects/{project.id}/', {'name': 'Javajave', 'users': project.users})
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
    #     project = Project.objects.get(id=project.id)
    #     self.assertEqual(project.name, 'Javajave')
