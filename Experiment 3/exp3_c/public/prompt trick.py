import webbrowser
import time
import subprocess

urls = [
    "https://aiskillshouse.com/student/qr-mediator.html?uid=2530&promptId=17",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=2530&promptId=16",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=2530&promptId=15",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=2530&promptId=14",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=2530&promptId=13",

    "https://aiskillshouse.com/student/qr-mediator.html?uid=10900&promptId=15",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10900&promptId=14",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10900&promptId=13",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10900&promptId=16",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10900&promptId=17",

    "https://aiskillshouse.com/student/qr-mediator.html?uid=10901&promptId=15",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10901&promptId=14",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10901&promptId=13",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10901&promptId=16",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10901&promptId=17",

    "https://aiskillshouse.com/student/qr-mediator.html?uid=10902&promptId=15",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10902&promptId=14",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10902&promptId=13",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10902&promptId=16",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10902&promptId=17",

    "https://aiskillshouse.com/student/qr-mediator.html?uid=10903&promptId=15",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10903&promptId=14",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10903&promptId=13",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10903&promptId=16",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10903&promptId=17",

    "https://aiskillshouse.com/student/qr-mediator.html?uid=10977&promptId=17",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10977&promptId=16",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10977&promptId=15",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10977&promptId=14",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10977&promptId=13",

    "https://aiskillshouse.com/student/qr-mediator.html?uid=10887&promptId=17",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10887&promptId=16",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10887&promptId=15",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10887&promptId=14",
    "https://aiskillshouse.com/student/qr-mediator.html?uid=10887&promptId=13"
]

times = 1
delay_seconds = 4.66
cycle_delay = 1

try:
    while True:
        for url in urls:
            for i in range(times):
                webbrowser.open_new_tab(url)
                print(f"Opened {url} ({i+1}/{times})")
                time.sleep(delay_seconds)

        print("Waiting before next cycle...")
        time.sleep(cycle_delay)

except KeyboardInterrupt:
    print("Script stopped by user.")
