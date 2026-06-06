import os

if os.path.exists("temporary.txt"):
    os.remove("temporary.txt")
    print("File deleted successfully.")
else:
    print("File does not exist.")