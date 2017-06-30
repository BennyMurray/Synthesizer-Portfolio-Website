import os
import os.path
import zipfile


import tempfile
import shutil

dirpath = tempfile.mkdtemp()





zip_filename = os.path.join(dirpath, 'tempzip.zip')
base_dir = os.path.abspath('static')

with zipfile.ZipFile(zip_filename, "w",
                     compression=zipfile.ZIP_DEFLATED) as zf:
    base_path = os.path.normpath(base_dir)
    for dirpath, dirnames, filenames in os.walk(base_dir):
        for name in sorted(dirnames):
            path = os.path.normpath(os.path.join(dirpath, name))
            zf.write(path, os.path.relpath(path, base_path))
        for name in filenames:
            path = os.path.normpath(os.path.join(dirpath, name))
            if os.path.isfile(path):
                zf.write(path, os.path.relpath(path, base_path))



