# Generated by Django 2.0 on 2018-03-23 13:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('opp', '0039_auto_20180323_1344'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='step',
            name='problem_name',
        ),
    ]
