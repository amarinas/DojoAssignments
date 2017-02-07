# students = [
#      {'first_name':  'Michael', 'last_name' : 'Jordan'},
#      {'first_name' : 'John', 'last_name' : 'Rosales'},
#      {'first_name' : 'Mark', 'last_name' : 'Guillen'},
#      {'first_name' : 'KB', 'last_name' : 'Tonel'}
# ]
#
# #part one
# def stu_names(students):
#     for i in range(0, len(students)):
#         print students[i]["first_name"],students[i]["last_name"]
#     return
#
# stu_names(students)

# Users
users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }


def stu_in(arr):
    print "STUDENTS"
    for i in range(0, len(arr["Students"])):
        print i+1, arr["Students"][i]["first_name"], arr["Students"][i]["last_name"], str(len(arr["Students"][i]["first_name"]+ arr["Students"][i]["last_name"]))

    print "Instructors"
    for i in range(0, len(arr["Instructors"])):
        print i+1, arr["Instructors"][i]["first_name"], arr["Instructors"][i]["last_name"], str(len(arr["Instructors"][i]["first_name"]+ arr["Instructors"][i]["last_name"]))
    return


stu_in(users)
