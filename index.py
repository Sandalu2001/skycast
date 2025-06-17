import os

directory_path = "Preview" 
string_to_remove = "-removebg-preview"              
# 🔁 Loop through all files in the directory
for filename in os.listdir(directory_path):
    if string_to_remove in filename:
        new_filename = filename.replace(string_to_remove, "")
        old_path = os.path.join(directory_path, filename)
        new_path = os.path.join(directory_path, new_filename)

        os.rename(old_path, new_path)
        print(f"Renamed: {filename} ➜ {new_filename}")
