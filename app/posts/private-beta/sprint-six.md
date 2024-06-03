---
title: Sprint six
layout: page
date: 2024-04-02
author:
  name: Will Richards
  url: https://github.com/defra-design
---

## Research goals from sprint five

The research was conducted with a mix of participants, including those with low digital skills.

We focussed on testing our changes to the forecast, including:
* Today, Tomorrow and Outlook tabs
* only displaying the health advice for the highest reading
* Daily Air Quality Index (DAQI) without numbers  
* the changed position of the pollutant summaries and click-through links

We also tested how the tabulated monitoring stations were viewed and understood.


## Research findings

### What worked well

After an interesting round of user research, we found that participants: 

* were clear on the forecast
* interacted with the measurements section
* are broadly understanding the prototype messaging
* are connecting the health information to the people most at risk of poor air


### What needs work

While the design tested well, we found that the:
* participants did not engage with the descriptive text and still required context on the DAQI scale
* ‘Outlook’ was seen as ‘Day 3’ rather than the remaining few days
* long term heath information is not being seen or registered
* tooltips are still being passed over



## What we focused on in sprint six

As a team, we agreed the main points to focus on were:  

* adding a scale to indicate the full extent of the DAQI
* removing the 5 day forecast from the tabs and having a static table containing the 4 day forecast
* putting the UK forecast into the tab component

### Adding a scale to today's forecast 

In previous sprints, we have removed the DAQI scale. However, the users wanted more context for the forecast, specifically how far the scale went up. In sprint 5 we added some text to explain the DAQI scale and levels, but this text was being missed by the participants. So, in this sprint we decided to add back in a visual scale which would give the participant the current reading on the scale. 

![Today's forecast with scale](../../images/sprint-six/todays-forecast.png "")

   

### 4 day forecast

During sprint 5, we found that participants were looking at the 3 tabs for the forecast (‘Today, Tomorrow, Outlook’) and interpreting ‘Outlook’ as a single day, as opposed to the 3 remaining days of the 5 day forecast. 

We decided to split the forecast to ‘Today’ (which was shown on the DAQI scale) and the remaining days of the forecast underneath on a separate scale. 

![Forecast for the next 4 days](../../images/sprint-six/4day-forecast.png "")



### UK forecast

The UK forecast, which is supplied by the Met office was kept in the format we receive which is ‘Today, Tomorrow and Outlook’.

![Forecast for the next 4 days](../../images/sprint-six/uk-forecast.png "")



### Location template in full

![location template](../../images/sprint-six/location-template.png "location template")


