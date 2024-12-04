N, M = map(int, input().split())
arr = [0 for _ in range(M)]


def solution(idx):
    if idx == M:
        print(' '.join(map(str, arr)))
        return
    for i in range(1, N+1):
        arr[idx] = i
        solution(idx + 1)
        
solution(0)