# odd/even
def odd_even():
    for i in range(1,2001):
        if i%2 ==1:
            print "Number is " + str(i)  +". This is an odd number"
        if i%2 ==0:
            print "Number is " + str(i)  +". This is an even number"
    return
odd_even()

# multiply
def multiply(arr, b):
    newarr =[]
    for i in arr:
        i = i * b
        newarr.append(i)
    # print newarr
    return newarr
print multiply([2,4,10,16], 5)

# Hacker challenge
def layered_multiples(arr):
    new_array = []
    for i in range(0,len(arr)):
        arr1 = []
        for i in range(0,arr[i]):
            arr1.append(1)
        new_array.append(arr1)
    return new_array

x = layered_multiples(multiply([2,4,5],3))
print x
