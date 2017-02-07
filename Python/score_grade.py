import random

def random_number():
    random_num = random.randrange(60, 100)
    return random_num

def score_grade():
    for i in range(0, 11):
        score = random_number()
        if score >=90:
            print "Score:", str(score)+ ";  Youre grade is A"
        elif score >=80:
            print "Score:", str(score)+ "; Youre grade is B"
        elif score >=70:
            print "Score:", str(score)+ "; Youre grade is C"
        elif score >=60:
            print "Score:", str(score)+ "; Youre grade is D"
        else:
            print "Failed try again"


print "Score and Grades"
score_grade()
