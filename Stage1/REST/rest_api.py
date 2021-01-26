import requests
import json
import datetime

url = "https://www.metaweather.com/api/location/search/?query=ahmedabad"

response = requests.get(url)

woeid = json.loads(response.text)

weather_url = "https://www.metaweather.com/api/location/{0}/".format(woeid[0]['woeid'])

response = requests.get(weather_url)

weather_data = json.loads(response.text)

for data in weather_data["consolidated_weather"]:
    if data['applicable_date'] == datetime.datetime.now().strftime("%Y-%m-%d"):
        todays_weather = data['weather_state_name']
# print(weather_data)
# print(datetime.datetime.now().strftime("%Y-%m-%d"))
print(todays_weather)
