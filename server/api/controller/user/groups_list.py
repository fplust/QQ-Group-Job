__author__ = 'jobin'

from django.http import JsonResponse
from django.views.generic import View

from .check_request import CheckRequest
from api.models import Resume
from api import config

class Index(View):
    def get(self, request):
        check = CheckRequest(request);
        if not check.user:
            return JsonResponse({
                "status": "error",
                "msg": "User not logined"
            })
        data = {"status" :  "success",
                "msg" :  '',
                "data" : []
                }
        lst = Resume.objects.filter(userEmail = check.user.email)
        for item in lst:
            data['data'].append({
                'groupId': item.groupId,
                'status': item.status
            })
        return JsonResponse(data)