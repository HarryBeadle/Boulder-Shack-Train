from PIL import Image
from math import floor

im = Image.open("assets/holdmap-100.png")
px = im.load()
x, y = im.size

flag = False
print ("[")
for j in range(y-1):
	for i in range(x-1):
		if px[i,j][3] > 0:
			print ("[%i, %i]," % (i, j))


