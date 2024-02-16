---
title: Sprint four
layout: page
date: 2024-02-14
author:
  name: Will Richards
  url: https://github.com/defra-design
---

## Research goals from sprint three

* Does providing summaries of pollutant sources improve participant engagement with the pollutant pages compared to just displaying the pollutant names?
* Can participants effectively follow content and messaging on smaller screens?
* Are the data tables legible on mobile devices?
* Do links, details components, and tooltips remain visible and accessible to participants on mobile screens?

### What worked well

This was the first user research session conducted to test the responsiveness of our design. We found: 
* the design worked well across different devices
* users scrolled, unprompted, to the data tables and were engaged by the location and information provided by the monitoring stations
* tablet users exhibited notably higher interaction rates with the prototype compared to other device users.
* the wording and colour coding of the daily air quality index (DAQI) bar were positive


### What needs work

Our design worked effectively on mobile devices and responsiveness did not raise any significant concerns. However, there were areas where we identified potential improvements:

* mobile users were less likely to select the tooltips and details components 
* the proximity of the monitoring stations and the accuracy for their location drew engagement
* the pollution summaries worked well and prompted conversation, but users still didn’t select the links to read more
* users were still unsure on the health messaging and what levels of exercise would be safe


## What we focussed on in sprint four

As a team, in Sprint four, we agreed the main points to focus on were:  

* our first iteration of implementing a 5 day forecast
* creating a teaser with the long term health effects for each pollutant, would this encourage further user engagement? 
* would presenting each pollutant in the card component offer more affordance and increase engagement

&nbsp;

## 5 day forecast

![Part of the page showing the tabulated 5 day forecast](../../images/sprint-four/5dayforecast.png "")

We decided to arrange the 5 day forecast into three distinct tabs:

* Today
* Tomorrow
* Outlook

This was influenced by a number of factors, the first being the way flooding had tackled this for the flood risk forecast. 

Secondly when the viewport changes to mobile the tabs stack on top of each other and this would negate a phenomenon where each day could or most likely be low. A situation where Mon low, Tue low, Wed low, etc. 

Lastly the UK summary provided by the Met Office is supplied in three parts today, tomorrow and outlook. This would enable us to relate the air pollution forecast with the UK pollution summary. 

### DAQI value

When we began to mock up our intial designs as wireframes we noticed how the number in isolation became meaningless without the scale 1-10 that we had in previous interations. For this sprint we decided to drop the DAQI value and only use Low, Moderate, High and Very high. 


### Health advice

For each forecast we applied some logic so if it's Low we wouldn't display health advice. However if it's moderate or above we would display the appropriate advice. 

We also customised the inset component used in the goverment design system to use the colour of the relevant forecast. Would this help relate the advice with the forecast?

![Part of the page showing the relevant health advice](../../images/sprint-four/health-advice.png "")

&nbsp;

## Air pollutants monitored nearby

Whilst not part of original sprint goal we wanted to see if tabulating the monitoring stations would help with the length of the template within the larger viewports e.g. desktop and tablet. The nearest monitoring station is displayed by default, followed by the next and so on. 

Imporantly we moved this further up the template so that user could relate this element to the forecast. In the previous sprint a behaviour was noted where participants were scrolling up and down to compare the forecast with the pollutants monitored near by. 

![Part of the page showing the tabulated monitoring stations](../../images/sprint-four/polluntants-monitored.png "")

&nbsp;

## Learn how air pollutants can affect your health

We decided to try and increase engagement with the content that sits below these links. The first was to bring the long term health effects as a teaser, secondly to use a card compoent used on other goverment websites. 

![Part of the page showing the pollutant links as card components](../../images/sprint-four/pollutants.png "")

&nbsp;


## Location template in full

Displayed within a large viewport such as desktop or tablet.

![Page showing a location forecast](../../images/sprint-four/forecast.png "")


Displayed within a smaller viewport such as mobile.
<img src="../../images/sprint-four/mobile.png" alt="Mobile viewport" style="margin-top: 30px; margin-bottom: 30px; width: 100%; height: auto;" />




