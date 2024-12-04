n = int(input())

row = [0 for _ in range(n)]
ans = 0

def check(x):
    for i in range(x):
        if row[i] == row[x] or x - i == abs(row[i] - row[x]):
            return False
    return True

def n_queen(x):
    global ans
    
    if x == n:
        ans += 1
        return
    
    for i in range(n):
        row[x] = i;
        
        if check(x):
            n_queen(x+1)

n_queen(0)
print(ans)