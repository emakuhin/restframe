from rest_framework.viewsets import ModelViewSet
from TODO.serializers import Projectserializer,Todoserializer
from TODO.models import Project, Todo
from rest_framework.pagination import LimitOffsetPagination
from TODO.filters import ProjectFilter, TodoFilter
from rest_framework.decorators import action
from rest_framework.response import Response

class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10

class TodoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20


class ProjectModelViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = Projectserializer
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectFilter


class TodoModelViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = Todoserializer
    pagination_class = TodoLimitOffsetPagination
    filterset_class = TodoFilter
    def destroy(self, request, *args, **kwargs):  # Я был Близок, протыкался два дня, так ничего и не получилось.
        k = Todo.objects.get(pk=kwargs['pk'])
        print(k)
        return Response(kwargs)



