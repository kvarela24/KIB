# Generated by Django 2.0 on 2018-03-16 18:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('opp', '0012_auto_20180315_1817'),
    ]

    operations = [
        migrations.AddField(
            model_name='problem',
            name='associated_steps',
            field=models.ManyToManyField(to='opp.Step'),
        ),
        migrations.AlterUniqueTogether(
            name='step',
            unique_together=set(),
        ),
        migrations.RemoveField(
            model_name='step',
            name='problem_name',
        ),
    ]
