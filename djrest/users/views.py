from rest_framework.viewsets import ModelViewSet
from rest_framework import mixins
from rest_framework import viewsets
from .models import User
from .serializers import UserModelSerializer

class UserModelViewSet(mixins.RetrieveModelMixin, mixins.ListModelMixin, mixins.UpdateModelMixin, viewsets.GenericViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer