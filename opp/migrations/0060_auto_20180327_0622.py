# Generated by Django 2.0 on 2018-03-27 06:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('opp', '0059_auto_20180327_0613'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='studentstep',
            unique_together=set(),
        ),
        migrations.RemoveField(
            model_name='studentstep',
            name='problem_student_id',
        ),
        migrations.RemoveField(
            model_name='studentstep',
            name='step_id',
        ),
        migrations.DeleteModel(
            name='StudentStep',
        ),
    ]
