from rest_framework.serializers import HyperlinkedModelSerializer, StringRelatedField, ModelSerializer
from TODO.models import Project, Todo







class Todoserializer(ModelSerializer):
#    project = StringRelatedField()
    class Meta:
        model = Todo
        fields = '__all__'

class Projectserializer(ModelSerializer):
    todos = Todoserializer(many=True, read_only=True)
    class Meta:
        model = Project
        fields = '__all__'
