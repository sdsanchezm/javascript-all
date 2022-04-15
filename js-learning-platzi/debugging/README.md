
## Debugging


### 3 phases

1. Where? (where is the problema, what is going werong)
2. What? (what is wrong, a number, semicolon)
3. How? (how we gonna fix the problem)



### Strategies:

1. Worst: Gues and Check
2. Analysis: Try to read characted by characted, is very difficult to find the bug (just reading the code) [sometimes is good for pattern recognition]
3. Subdivision: is okay to use, (take a long piece of code and put consolesLogs to see where the error is happening, this is okay if we dont know where the error is)
4. Sandboxing: take the function and paste into a brand new project to see what is doing (focus on that piece of code) 


### Tips:

- Reproduce the Error
- Identification (what is not working)
- Test Assumptions (we assume something that is not actually happening)
- Find and fix the first error first (sometimes errors cascade)
- Understand the error 
- Walk through each line of code (steps that are being taking)



### Tools

- Console.log() 
- Console stack trace
- Alert (pause the execution and dialog box)
- Preserve Logs
- Debugger

### Preventive

- Pure Functions (if an error happen here, then we know the error is here because it works within its own scope)
- Impure Functions (if an error is here, the error could be in a global variable or similar), this work with in the global scope
- Unit Testing, if the unit testing is created, then error is easyu to identify because the unit testing was created 


