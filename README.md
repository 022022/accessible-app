# Accessible responsive layout with CSS Grid 


* Semantic layout
* Contrast and relative font sizing WCAG 2.1 Level AA compliant
* Keyboard accessible and screenreader friendly:
 burger menu, skip navigation pattern, accordion, dropdown menu  


Deploy: https://022022.github.io/accessible-app/

![screenshot](https://user-images.githubusercontent.com/99475472/210799504-d825a4dd-93b1-4fd7-84db-f02aa09d4afd.png)


## Accessibility improving features in details

#### Contrast

* 4.5 text 
* 3.0 for large text 

#### Font size

* Relative font sizing
* Line spacing at least 1.5 times the font size
* User can reset their base browser size up to 200% and text will still be readable and webpage functional

#### Accessible navigation

* The skip navigation pattern  used to skip past the main site navigation onto the main landmark element. "Skip" link is hidden from view until focused with keyboard

* Activating the skip link moves keyboard focus to the target element and screen reader will announce the contents of that element

* Burger menu is keyboard focusable. Button label and state are announced by screenreader

* SPACEBAR or ENTER key on button expands the menu
When menu is expanded, keyboard focus goes to the first item in the menu

* TAB key navigates keyboard focus through commands 
Focus is trapped inside expanded menu, until user closes it or activates a menu link

* ESC key collapses the menu and return focus to button


#### Accessible accordion

* Pressing TAB key moves keyboard focus from one header to the next and through any interactive elements inside open panel
* SPACEBAR or ENTER key on button opens the panel. Any other open panel closes, but this should not be announced by screenreader 


#### Accessible dropdown menu

* Button is keyboard focusable. Button label and state are announced by screenreader
* SPACEBAR or ENTER key on button expands the dropdown, keyboard focus goes to the first item in the menu
* UP-ARROW and DOWN-ARROW keys navigate keyboard focus through commands 
* ENTER or SPACEBAR keys activate focused item
* ESC key collapses the menu and returns focus to button
* TAB key moves keyboard focus off widget, and onto next interactive element in the page

