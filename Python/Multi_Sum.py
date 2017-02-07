# multiples part 1
for i in range(1, 1000):
    if i% 2 != 0:
        print i

#mutiples part 2
for i in range(5, 1000000):
    if i % 5 == 0:
        print i

#sumlist
a = [1, 2, 5, 10, 255, 3]
sum = 0
for i in a:
    sum += i
print sum

#Avarage list
print sum/len(a)
