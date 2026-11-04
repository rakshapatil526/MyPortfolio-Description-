import subprocess
import time
import urllib.request

proc = subprocess.Popen(["npx", "vite", "preview", "--port", "4173"], shell=True)
time.sleep(3)
try:
    urls = [
        "http://localhost:4173/",
        "http://localhost:4173/documents/Rakshitha_S_Resume.pdf",
        "http://localhost:4173/documents/architecture/jobconnect-ai-architecture.pdf",
        "http://localhost:4173/documents/architecture/ai-quiz-system-architecture.pdf"
    ]
    for url in urls:
        req = urllib.request.urlopen(url)
        print(f"Status {req.status} for {url} (Length: {len(req.read())} bytes)")
finally:
    subprocess.call(["taskkill", "/F", "/T", "/PID", str(proc.pid)])
