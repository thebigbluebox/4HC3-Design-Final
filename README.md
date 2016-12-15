# 4HC3 Assignment 4 Final, Course Selection Running Instructions

## Documented Limitations
Because this project is only a demonstration of how our course selection system could be implemented,
 and thus this assignment will only be a mere demonstration of the core functionalities specified within our
 milestone.

 * Changing of terms will not work as we would like to keep the user's focused on the task of selecting courses for the current terms
 * Previous and next buttons in the top header, is a means of navigating the user between courses to choose cores for, this is an limitation
 as it is not implemented, and not part of the documented process of selecting a course.
 * Dynamic elements such as the counter on the bottom of the "select course list" showing how many courses remain to be processed will not correctly update
 as always, due to technical implementation constraints.
 * Since there is a limited data set space, you cannot search for all courses but only a limited set of them.
 * Not all courses can be added into the schedule due to our implementation style, please refer to site operation to see how to add a course
 to the schedule.
 * The outline link underneath exam will be not populated, but is expected to link to McMaster's course profile page such as this site for [Anthropology 1A03](https://classics.humanities.mcmaster.ca/course/?c=846)
 * Limitation of not being able to go off by 1 user search parameter, currently both are needed in order to match for courses

 ## Operation and user

 Our demonstration is a simple website that directly links you to the page whereby students would search and choose courses fitting to their wants
 and schedules. You can either start by just opening index.html or removeCourse.html in your web browser.

 * The index.html will contain the main selection screen whereby students are selecting courses for their first term.
 * The removeCourse.html will contain the screen that contains the view for students to perform course drop procedures.

 ### Searching courses

 This is the current selection of courses populated within our system
 * PSYCH 1X03
 * PSYCH 1XX3
 * ECON 1B03
 * ECON 1BB3
 * COMPSCI 1JC3 **
 * ENG 1C03
 * ENG 1D03
 * ENG 1EE0
 * ENG 1P03
 * ENG 1B03
 * ENG 1EC3

## Search
To perform a direct course code search, using the course search input, input any of the following to narrow down your search, or you can use the filter
option to perform more broad positions. The broad function gives you the ability to choose based off year and program selection, however from the limitations side
you must fill out both fields before the results do populate.  

## Adding a Course
To perform a course add, please use the designated course COMPSCI 1JC3 to be used, other courses will not carry an action.
Once you click on the green add button within the course widget, the course is sent into your selected course queue panel.
From there yellow indicates that the user has not performed all necessary actions to move forward with completing course selection.
While green indicates course selection of cores and tutorials are complete for a given course.

We go on to click on 1JC3 in the selected course panel, notice it goes gray to indicate that is currently in progress of selecting its cores,tutorials, and labs.
Notice the title on the top of the page also indicates to the user what should be done in its current state such as "Choose core for COMPSCI 1JC3", and this changes
as the user moves forward with the course selection.

Once the user has completed this, it will show as green, and the course selection progress is complete or the user can be free to add more courses. However for our
demonstration, it concludes with COMPSCI 1JC3.

## Removing a Course
The demonstration for removing a course is located within the removeCourse.html page.
To remove a course, the user will press the red X at the bottom left of the current schedule panel. The course is not removed immediately, but placed into a
drop course queue, where the student can review before completing the dropping of course(s)
