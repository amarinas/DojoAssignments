def selection_sort(arr):
  for i in range(len(arr)):
      small = i
      for k in range(i+1,len(arr)):
          if arr[k] < arr[small]:
              small = k
      swap1( arr, small, i )
  return arr

def swap1( arr, x, y ):
  temp = arr[x]
  arr[x] = arr[y]
  arr[y] = temp


print selection_sort([3,1,4,2,4,8, 9 ,5,99,])
