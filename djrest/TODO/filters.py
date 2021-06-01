from django_filters import rest_framework as filters
from TODO.models import Project, Todo

class ProjectFilter(filters.FilterSet):
    name = filters.CharFilter(lookup_expr='contains')
    class Meta:
        model = Project
        fields = ['name']

class TodoFilter(filters.FilterSet):
    project = filters.CharFilter()
    class Meta:
        model = Todo
        fields = ['project']