import os
import re

def convert_px_to_vw(match):
    prefix = match.group(1)
    prop = match.group(2)
    px_value = int(match.group(3))
    vw_value = round(px_value / 19.2, 4)
    return f'{prefix}:{prop}[{vw_value}vw]'

# Regex to match desktop-prefixed arbitrary pixel values
# e.g., md:text-[58px], lg:pb-[140px], md:gap-[18px]
# Prefix: groups[0] (md, lg, xl, 2xl)
# Property (optional part before [): groups[1]
# Value: groups[2]
regex = re.compile(r'(md|lg|xl|2xl):([a-z0-9-]*?)\[(\d+)px\]')

target_dirs = [
    r'c:\Users\Web 2\Desktop\ODE\src\components',
    r'c:\Users\Web 2\Desktop\ODE\src\pages'
]

for directory in target_dirs:
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.tsx'):
                path = os.path.join(root, file)
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = regex.sub(convert_px_to_vw, content)
                
                if new_content != content:
                    with open(path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f'Converted: {path}')

print('Conversion complete!')
