from rest_framework.routers import DefaultRouter
from . import views

app_name = 'post'

router = DefaultRouter()
router.register("", views.PostViewSet)
urlpatterns = router.urls
