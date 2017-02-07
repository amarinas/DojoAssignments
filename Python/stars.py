# #part one stars
# def draw_stars(num):
#     for i in range(0,len(num)):
#         stars = ""
#         for j in range(0,num[i]):
#             stars += "*"
#         print stars
#
#     return
#
# draw_stars([4,4 , 1, 3, 5, 7, 25])

#part two stars
def draw_stars(num):
    for i in range(0,len(num)):
        stars = ""
        lett = ""
        if type(num[i]) is str:
            for l in range(0, len(num[i])):
                lett +=  num[i][0]
            print lett
        else:
            for j in range(0,num[i]):
                stars += "*"
            print stars
    return

draw_stars([4, "tom", 1, "sandy", 5, 7, "blurp blurp"])
