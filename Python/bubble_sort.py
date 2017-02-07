#set variable name
#go to line arr
# print variable new arrlist
#if index[0] is greater than index[1] then switch
# if index[1] is greater than index[2] then switch if not then skip and so on


def bubblesort(arr):
  for i in range(len(arr)):
    for k in range(len(arr)-1,i,-1 ):
      if ( arr[k] < arr[k - 1] ):
        swap1( arr, k, k - 1 )
    return arr

def swap1( arr, x, y ):
  temp = arr[x]
  arr[x] = arr[y]
  arr[y] = temp


print bubblesort([3,1,4,2,4,8, 9 ,5,99,])
