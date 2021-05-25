from django.db import models
from users.models import User

class Project(models.Model):
    name = models.CharField(max_length=30)
    users = models.ManyToManyField(User)


    def __str__(self):
        return self.name

class Todo(models.Model):
    project = models.ForeignKey(Project, models.PROTECT, related_name='todos')
    user_create = models.ForeignKey(User, on_delete=models.CASCADE)
    time_creation = models.DateTimeField(auto_now_add=True)
    time_update = models.DateTimeField(auto_now=True)
    text = models.TextField()
    active = models.BooleanField()



