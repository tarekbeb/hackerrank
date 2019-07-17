def reverse_words(sentance):
    reversed = ""
    for i in sentance:
        reversed = i+reversed
    split = reversed.split(" ")
    new_sentance = ""
    for i in split:
        new_sentance = i + " " + new_sentance
    print(new_sentance)


reverse_words("hello world!")