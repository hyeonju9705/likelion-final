from django.shortcuts import render
from rest_framework import status,viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from . import models
from . import serializers
# Create your views here.


# class PostViewset(viewsets.ModelViewSet):
#     queryset = models.Post.objects.all()
#     serializer_class = serializers.PostSerializer


class TodoViewset(viewsets.ModelViewSet):
    queryset = models.Todo.objects.all()
    serializer_class = serializers.TodoSerializer
    