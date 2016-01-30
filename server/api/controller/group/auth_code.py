
"""
get:
    输入:
        {
            "groupId":"xxxx"
        }

    验证管理员权限:
        是

    保存:
        相关表: modules.AuthCode

    返回:
        {
            "status":"success",#必需
            "msg":"xxxx",#必需
            "data":[
                "id":111,
                "adminName":11111,
                "code":"xxx",
                "times":2222
                ]

        }
post:
    输入:
        {
            "code":"xxxx"
        }

    验证管理员权限:
        是

    保存:
        相关表: modules.AuthCode

    返回:
        {
            "status":"success",#必需
            "msg":"xxxx",#必需

        }
delete:
    输入:
        {
            "id":111,//必需
        }

    验证管理员权限:
        是

    保存:
        相关表: modules.AuthCode

    返回:
        {
            "status":"success",#必需
            "msg":"xxxx",#必需
        }

"""