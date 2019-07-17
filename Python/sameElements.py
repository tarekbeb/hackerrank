def sameElements (arr):
    new_arr = []
    final_arr = []
    for i in arr:
        string = str(i)
        if string in new_arr:
            final_arr.append(string)
        else:
            new_arr.append(string)
    print (final_arr)

array = ['t', 't', 'a', 'r', 4, 'y', 4, '4']
print(sameElements(array))