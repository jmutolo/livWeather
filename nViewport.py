n = 1
viewport = 1440

print("Viewport!!!" + str(viewport))

while n!=-1:
    try:
        n = float(input(": "))
        if n == -2:
            viewport = int(input("vwp: "))
        print((n/viewport)*100,"vw")
    except ValueError:
        pass
        