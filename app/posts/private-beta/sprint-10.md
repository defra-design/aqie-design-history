---
title: Sprint 10
layout: page
date: 2024-07-11
author:
  name: Will Richards
  url: https://github.com/defra-design
---

## Research goals from sprint 9

This research was conducted with a mix of participants living in the South East of England.

We focussed on testing: 

* health messaging based on feedback from the UKHSA
* prioritising statutory pollutants and messaging around air pollution to set the story
* using Rural-Urban classifications and historic data to dispel air pollution myths in a user’s chosen area
* displaying the last published annual means for each statutory pollutant for that given area



## Research findings

### What worked well

In this round of research, we found:
* write somink here



### What needs work

During this round of testing, we found that:
* write somink here




## What we focused on in sprint 10

As a team, we agreed the main points to focus on were:

* how does the service sit within the wider information architecture of www.gov.uk?
* do we need to be so upfront about the statutory pollutants and is this adding unnecessary noise? 
* can we make the historical data easier to scan and comprehend?
* can we reduce the complexity around the pollutants monitored near by?
* displaying the last published annual means for each statutory pollutant for that given area





## Wider information achictecture

We reviewed an initial draft outlining how the service could integrate into the current gov.uk information architecture. Following the model of similar services like "Check for flooding," we propose placing the service under a new category called "Air pollution" within the "Environment and countryside" section. This category would contain all static content related to air quality, such as information on air pollutants and the health effects of air pollution.

The start page for the "Check local air quality" service would also be located within the "Air pollution" category, while the service itself would be hosted on its own subdomain.

Additionally, we recommend prioritising the "Air pollution" category and the "Check local air quality" service in the .gov.uk search results. This will ensure they appear at the top when users search for terms like "air pollution" or "air quality."

All static content in the "Air pollution" category would include links to the "Check local air quality" service through the Related Links section on .gov.uk.

<img src="../../images/sprint-10/ia.svg" alt="Information architecture" style="margin-bottom: 30px; margin-top: 30px; width: 100%; height: auto;" />

   

### Check local air quality - Start page

We have added a breadcrumb navigation consistent with the structure of content on www.gov.uk. Additionally, we have included a related content panel that links to relevant information within the "Air pollution" category.

![Check local air quality - Start page](../../images/sprint-10/start.png "")



## Location template

### UK forecast

We have condensed the UK forecast from the Met Office into a single paragraph, instead of dividing it into separate sections for "Today," "Tomorrow," and "Outlook."

#### Related content

We have also added a related content panel to the location template.

![UK forecast](../../images/sprint-10/forecast.png "")

### Statutory pollutants

We have removed the statutory pollutants section, as users tended to overlook this content and were sometimes put off by labels such as PM 2.5 or Nitrogen Dioxide.

### Historical air quality within the user's chosen area

We decided to merge the sections "Air quality in this area" and "Average levels&hellip;" for an area within the previous year due to user feedback particuarly around the amount of text. We now only highlight the dominant pollutant from the previous year, its sources, and potential health impacts, along with a link for more information on health effects.

Additionally, we simplified the display of average levels into a tabular form, showing only the yearly average and the threshold. This change aims to improve user comprehension when skimming content.

### Air pollutantion levels near by

We have removed the individual pollutant measurements for each area and are now only displaying the DAQI level (low, medium, high, very high). This change was made because users found the individual pollutant measurements difficult to understand. However, we intend to provide links to each measurement area where more detailed data can be accessed.

![Current levels](../../images/sprint-10/current-levels.png "")

## Location template in full

Displayed within a large viewport such as desktop or tablet.

![Page showing a location forecast](../../images/sprint-10/location.png "")



