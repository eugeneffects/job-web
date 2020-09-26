from django.db import models


class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    user = models.ForeignKey(
        'user.User', on_delete=models.CASCADE, related_name='post')

    def __str__(self):
        return self.title
