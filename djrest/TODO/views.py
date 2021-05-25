from rest_framework.viewsets import ModelViewSet
from TODO.serializers import Projectserializer,Todoserializer
from TODO.models import Project, Todo

class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = Projectserializer

class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = Todoserializer