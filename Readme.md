### pytojs

This library allows you to run functions written in python through nodejs and send arguments to python

####Node.js with args　

```javascript
const {pyProcess} = require('pytojs')

(async () => {
    try {
        const result = await pyProcess('./your_path.py',['your_args','your_second_args']);
        //you can enter as many arguments as you want in this section; the arguments you enter will come as an array
    } catch (error) {
        console.error('error:', error);
    }
})();
```
####Python with args　
```python
import sys
import json

#The lines in the main function are for taking node.js arguments; if you are not sending any arguments, these lines are not needed

def main():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])

if __name__ == "__main__":
    print(main())
 #You need to print the data you want to pass to node.js in python
```

####Node.js without args　

```javascript
const {pyProcess} = require('pytojs')

(async () => {
    try {
        const result = await pyProcess('./your_path.py');
        console.log(result);
    } catch (error) {
        console.error('error:', error);
    }
})();
```
####Python without args　
```python
def main():
    return 85

if __name__ == "__main__":
    print(main())
 #You need to print the data you want to pass to   node.js in python
```


