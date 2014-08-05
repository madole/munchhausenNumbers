limit = 100000
munchhausen = ()->
  for i in [0...limit]
    arr = i.toString().split('');

    total = 0;
    for j in arr
      total = total + Math.pow(j,j)

    if total.toString() == i.toString()
      console.log i + ' is a Munchasen';

munchhausen();