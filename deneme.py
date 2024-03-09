import sys
import json

def main():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])

if __name__ == "__main__":
    print(main())

