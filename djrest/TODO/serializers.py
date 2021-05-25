from rest_framework.serializers import HyperlinkedModelSerializer, StringRelatedField
from TODO.models import Project, Todo







class Todoserializer(HyperlinkedModelSerializer):
#    project = StringRelatedField()
    class Meta:
        model = Todo
        fields = '__all__'

class Projectserializer(HyperlinkedModelSerializer):
    todos = Todoserializer(many=True, read_only=True)
    class Meta:
        model = Project
        fields = '__all__'
