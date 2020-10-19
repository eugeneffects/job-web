from rest_framework.routers import DefaultRouter
from rest_framework_jwt.views import(
    obtain_jwt_token, refresh_jwt_token, verify_jwt_token)
from . import views

app_name = 'user'

router = DefaultRouter()
router.register("", views.UserViewSet)
router.register("token/", obtain_jwt_token)
router.register("token/refresh", refresh_jwt_token)
router.register("token/verify", verify_jwt_token)

urlpatterns = router.urls
