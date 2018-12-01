# REPEAL THE EIGTH DATA DASHBOARD
This project is created as part of CI Dublin's course in Software Dev. It is the second project following modues in HTML, CSS, User Centric Frontend Dev, Javascript Fundamentals and Interactive Frontend Dev. 

In this project I create a data dashboard that visualizes a notable referendum Ireland held in May this year to decide whether or not to remove the 8th amendment regarding abortion rights, from the Irish constitution. The result of this election was particularly interesting in terms of how it reflects modern day Ireland, and therefore I felt a set of charts would be worthwhile. 

# UX
This data dashboard is largely aimed at the general public, and not at statistic offices nor is it intended for official purposes. Instead, it should provide a user-friendly experience that even children to interact with! Here are some user stories that helped create the end design:
    1) As an Irish citizen, I would like to see the overall result of this election clearly, so I can better understand the country I'm living in. 
    2) As a person who doesn't deal well with statistics and numbers, I want to see some data that looks friendly, so I can actually read it!
    3) I'm a kid, so I don't like boring lists and numbers. I also want to see how the people of the country I live in vote but I don't want to have to read about it, cause that confuses me!
    4) I'm a person with a modern-day attention span. I want to see information at a glance. I do not want to read through pages upon pages of information. 

# FEATURES

# existing features 
1) Three data dashboards that all interact with each other by clicking on coloured categories to filter information. 
2) Clear and colourful layout on large devices for easy accessibility.

# features-to-implement
1) if this chart were being used as a live resource I would add a data visualisation for realtime data charting highest and lowest tally's across the 3 voting regions. 
2) A system of measurement using % values. 
3) I would also consider adding a mechanism for users to input their own constituency to return the yes / no tally in their region, however this is all achievable with the charts provided and so isn't high priority. 


# TECHNOLOGY USED
This project uses HTML5 scripting language, CSS for styling, and javascript for logic. 

The charts are implemented using dc.js, which is built to work natively with crossfilter rendered with d3.js: https://dc-js.github.io/dc.js/

# TESTING 

Manual Testing: 

This project has been tested manually by interacting with the dataset, and comparting results with the data file.

Example scenarios of manual testing: 
    1) Yes / No pie chart 
    simple test to check dynamic information is correct and accessible: 
        i) click on 'yes' to turn it off
        ii) view related results in region chart which shows that the smallest 'no' tally proportionately came from Dublin
        iii) view related results in constituency pie chart shows that the highest no tally came from Donegal, which by comparing data, we know to be true. 
    
    2) Region pie chart
    test the highest yes vote came from Dublin Bay North is true:
        i) Within the yes/no pie chart click on 'yes' to turn yes counts off
        ii) At region pie chart, turn two region segments off by clicking leaving only Dublin results
        ii) View the bar chart, and see that Dublin Bay North registers the highest tally.
        
    **BUG: However, we can see here that the total registered is also being displayed in the yes count. This is to do with the way I wrote the data file and not with the rendering process. Infact, creating the csv file so that it would be usable in a dynamic way was one of the more challenging aspects of this project for me. The yes vote in the csv file contains the electoral reg count value, while the no votes contain '0' in that field. This the reason for this issue. There is a fundamental flaw in the data structure.  
    
    3) Constituency Bar Chart
    test the comparitive accuracy of the constiuency fields
        i) Within the yes/no pie chart click on 'yes' to turn yes counts off
        ii) at the bar chart level select Donegal and Dublin Bay North
        iii) observe that both bars display results as expected

# other issues when testing
The bar chart lacks responsivity on small devices. The screen can be rotated or scrolled to view it. However, the design implementation is not ideal for this purpose. 

# DEPLOYMENT

# CREDITS 
# acknowledgements
I retrieved data info for my csv file from various news sources such as the Irish Independent and the Irish Times. 

Thanks to people working behind the scenes there! And lastly, within the following article is an example of a piece of data visualisation far superior to mine, that makes me drool a little bit! So, thanks to the people who made this for future inspiration and aspirations:

https://www.independent.ie/irish-news/abortion-referendum/its-a-big-yes-stunning-victory-officially-confirmed-as-66-4pc-vote-to-reform-irelands-restrictive-abortion-laws-36949114.html
