from django.conf.urls import url
from django.urls import path
from . import views


urlpatterns = [
	url(r'^$', views.index, name='index'),
	url(r'^opp/', views.opp, name='index'),
	url(r'^test/', views.testo, name='index'),
	url(r'^opp13/$',views.TemplateProcess.as_view(), name = 'Main page'),
	url(r'^process_steps/$',views.DataAjax.as_view(), name = 'Step ajax'),
	url(r'^process/$',views.DataProcess.as_view(), name = 'Data process'),
	]

		
