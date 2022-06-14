# usage python3 techstack.py > ./../src/data/attributeLists.jsx

y = {}

with open("techlist.txt") as file:
    for line in file:
        if len(line) >= 1:
            if "##" in line or "{{" in line:
                pass
            else:
                x= line.strip()
                y[x] = 1

l = list(y.keys())
l.sort()
l2 = []
for item in l:
    l2.append(f"{{value: '{item}', label: '{item}' }}")

l3 = ",\n    ".join(l2)

output = f"""// Machine generated

export function technologies() {{
  const x = [
    {l3}
  ];
  return x;
}}


"""

print(output)