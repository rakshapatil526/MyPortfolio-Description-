import json
import urllib.request
import urllib.error
import os

repos_to_check = [
    # Full Stack
    ("JobConnect AI", "https://github.com/rakshapatil526/JobConnect-AI-Job-Portal", "JobConnect-AI-Job-Portal"),
    ("Restaurant Management", "https://github.com/rakshapatil526/Restaurant-Management-System", "Restaurant-Management-System"),
    ("Library Management", "https://github.com/rakshapatil526/Library-Management-System", "Library-Management-System"),
    ("TaskFlow", "https://github.com/rakshapatil526/TaskFlow-To-Do-List-", "TaskFlow-To-Do-List-"),
    ("Expense Tracker", "https://github.com/rakshapatil526/Expense-Tracker-", "Expense-Tracker-"),
    ("Student Management", "https://github.com/rakshapatil526/Student-Management-System", "Student-Management-System"),
    ("SmartCare HMS", "https://github.com/rakshapatil526/Smart-HMS-Integreted-enterprise-Hospital-Manegment-System-and-digitalcare-Administrate", "Smart-HMS-Integreted-enterprise-Hospital-Manegment-System-and-digitalcare-Administrate"),
    # AI/ML
    ("AI Quiz System", "https://github.com/rakshapatil526/AI-Quiz-System", "AI-Quiz-System"),
    ("Diabetes Risk Prediction", "https://github.com/rakshapatil526/Diabetes-Risk-Prediction-System", "Diabetes-Risk-Prediction-System"),
    ("Email Spam Detection", "https://github.com/rakshapatil526/Email-Spam-Detection-System", "Email-Spam-Detection-System"),
    ("Fake News Detection", "https://github.com/rakshapatil526/Fake-News-Detection-System", "Fake-News-Detection-System"),
    ("Handwritten Digit Recognition", "https://github.com/rakshapatil526/Handwritten-Digit-Recognition-System", "Handwritten-Digit-Recognition-System"),
    ("House Price Prediction", "https://github.com/rakshapatil526/House-Price-Prediction", "House-Price-Prediction"),
    ("Student Performance Prediction", "https://github.com/rakshapatil526/Student-Performance-Prediction", "Student-Performance-Prediction"),
]

headers = {'User-Agent': 'Mozilla/5.0'}

results = {}
os.makedirs("repo_metadata", exist_ok=True)

# Also fetch all public repos of rakshapatil526 to see if any missing ones exist under slightly different names
print("Fetching all public repos for rakshapatil526...")
try:
    req = urllib.request.Request("https://api.github.com/users/rakshapatil526/repos?per_page=100", headers=headers)
    with urllib.request.urlopen(req) as response:
        all_repos = json.loads(response.read().decode('utf-8'))
        print(f"Total public repos found: {len(all_repos)}")
        with open("repo_metadata/all_public_repos.json", "w", encoding="utf-8") as f:
            json.dump([{"name": r["name"], "html_url": r["html_url"], "description": r["description"], "language": r["language"]} for r in all_repos], f, indent=2)
except Exception as e:
    print(f"Error fetching all repos: {e}")

for title, url, repo_name in repos_to_check:
    print(f"Checking {title} ({repo_name})...")
    api_url = f"https://api.github.com/repos/rakshapatil526/{repo_name}"
    readme_url = f"https://api.github.com/repos/rakshapatil526/{repo_name}/readme"
    
    info = {"title": title, "url": url, "status": "unknown", "valid": False}
    try:
        req = urllib.request.Request(api_url, headers=headers)
        with urllib.request.urlopen(req) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            info["valid"] = True
            info["status"] = "verified"
            info["stars"] = data.get("stargazers_count", 0)
            info["forks"] = data.get("forks_count", 0)
            info["language"] = data.get("language")
            info["description"] = data.get("description")
            info["default_branch"] = data.get("default_branch", "main")
            
            # Fetch readme
            try:
                rm_req = urllib.request.Request(readme_url, headers={**headers, 'Accept': 'application/vnd.github.raw+json'})
                with urllib.request.urlopen(rm_req) as rm_resp:
                    readme_content = rm_resp.read().decode('utf-8', errors='ignore')
                    with open(f"repo_metadata/{repo_name}_README.md", "w", encoding="utf-8") as rf:
                        rf.write(readme_content)
                    info["has_readme"] = True
            except Exception as rme:
                info["has_readme"] = False
                info["readme_error"] = str(rme)
                
    except urllib.error.HTTPError as he:
        info["status"] = f"HTTP {he.code}"
        info["valid"] = False
    except Exception as e:
        info["status"] = str(e)
        info["valid"] = False
        
    results[repo_name] = info

with open("repo_metadata/verification_results.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)

print("Done verifying repos.")
