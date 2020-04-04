# Valid Palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:
```
Input: "A man, a plan, a canal: Panama"
Output: true
```

Example 2:
```
Input: "race a car"
Output: false
```

Question you can ask during interview:
* Have you considered that the string could be empty?


Notes: 
**RegExp + Metacharacters **
 *  **/[\w]/** - serach for word characters in a string
 *  **/[\W]/** - search for non-word characters in a string
 *  **/[\W]/g** - global search for non-word characters in a string
 *  **g** - g modifier is to perform a global match
 
**Methods Used**
* **.split()** : Split a string into an array of substrings
* **.toLowerCase()**: Lowercase all the characters in the string
* **.replace()**: Searches a string and replaces a specified value, or a regular expression (regex), and returns a new string (with replaces specified values)
* **.reverse()**: Reverses an array in place
* **.join()**: Creates and returns a new string by concatenating all of the elements in an array
