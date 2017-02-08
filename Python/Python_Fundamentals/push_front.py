def push_front(arr):
    newarr = []
    for i in range(0, len(arr)):
        newarr.append(arr[i])
        # print newarr
    arr[0], arr[-1] = arr[-1], arr[0]
    return arr


print push_front([4,34,99,23,23,49])
