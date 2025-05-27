from rest_framework import serializers
from djoser.serializers import UserCreateSerializer as BaseUserCreateSerializer, TokenCreateSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from core.models import User

class UserCreateSerializer(BaseUserCreateSerializer):
    class Meta(BaseUserCreateSerializer.Meta):
        fields = ['id','username', 'password', 'email', 'role' ,'full_name']


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token["full_name"] = user.full_name
        token["role"] = user.role
        return token

