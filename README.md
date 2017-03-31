# _Ping Pong!_

#### _Ping-Pong number looping project: week 3 code review for epicodus. Site can be viewed in browser at 'https://gravytates.github.io/ping-pong'_

#### By _Grady L Shelton_

## Description

_This Ping-Pong game takes a user's input number and displays it as a list starting from one and ending at the input number. The catch, of course, is that for every multiple of 3, the integer is replaced by "ping", and for every multiple of 5, it is replaced by "pong". For multiples where 3 and 5 collide (aka multiples of 15), instances are replaced by "ping-pong"._

## Setup/Installation Requirements

* _Ensure internet connection_
* _Open Terminal_
* _Change into the desktop directory ('cd desktop')_
* _Run "git clone  https://github.com/gravytates/ping-pong.git_
* _Open 'ping-pong' folder in desktop_
* _Open 'index.html' file_

_Alternatively_

* _Open web browser (with internet connection)_
* _Enter into browser 'https://gravytates.github.io/ping-pong'_

## Specifications

* _It can count up to the provided number_
  * _Example Input: 2_
  * _Example Output: [1,2]_

* _It can replace numbers divisible by 3 with "ping"_
  * _Example Input: 6_
  * _Example Output: [1,2,ping,4,5,ping]_

* _It can replace numbers divisible by 5 with "pong"_
  * _Example Input: 10_
  * _Example Output: [1,2,3,4,pong,6,7,8,9,pong]_

* _It can replace numbers divisible by 15 with "ping-pong"_
  * _Example Input: 15_
  * _Example Output: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,ping-pong]_

* _It can prompt users with a message if a non-number is entered_
  * _Example Input: Hi!_
  * _Example Output: "Please use positive whole numbers."_


## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_Please contact Grady L Shelton at gradyish@gmail.com if you have any questions or need any support._

## Technologies Used

_Webpage is built with HTML, CSS, and javaScript, specifically with the bootstrap.css file/framework, an additional custom css file, and the jQuery3.2.0 files/framework. JavaScript scripts file uses four functions to take the user input, check if it is a valid number 'isNum', pushes it into a sequential array of numbers ('makeArray') using a for loop, uses another for loop to check for multiples of 3, 5, and 15 and replaces instances with corresponding ping-pong word, and pushes new words with the remaining numbers into a new array. The finished array is then used as the argument for the makeList function where it creates child 'li' elements for every array item, and an 'ul' parent element, so the items are displayed in the html as an unordered list. Grady L Shelton and Epicodus are not liable for anything beyond the portfolio.index.html webpage._

### License

Copyright (c) 2017 Grady L Shelton. This software is licensed under the MIT license.
