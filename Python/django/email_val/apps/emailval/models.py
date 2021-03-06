from __future__ import unicode_literals
from django.db import models
import re
EMAIL_REGEX = re.compile(r"(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)")
# Create your models here.
class Emanager(models.Manager):
    def register(self, getemail):

        if EMAIL_REGEX.match(getemail):
            return(super(Emanager, self).create(email=getemail))
        else:
            return False

class Emails(models.Model):
    email = models.CharField(max_length=45)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = Emanager()
