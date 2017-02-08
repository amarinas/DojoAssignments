str = "If monkeys like bananas, then I must be a monkey!"
for i in len(str):
    print str


print str.replace("monkey", "alligator")

x = [2,54,-2,7,12,98]
print max(x)
print min(x)

x = ["hello",2,54,-2,7,12,98,"world"]
print x[:1] + x[len(x)-1:]

x = [19,2,54,-2,7,12,98,32,10,-3,6]
x.sort()
temp = []
newarr = []
for i in x:
    if i < 0:
        temp.append(i)
    else:
        newarr.append(i)
        print newarr
newarr.insert(0,temp)
print newarr
