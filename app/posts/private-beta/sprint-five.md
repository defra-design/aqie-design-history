---
title: Sprint five
layout: page
date: 2024-03-08
author:
  name: Will Richards
  url: https://github.com/defra-design
---

## Research goals from sprint four

The research was conducted with a mix of participants, including those with low digital skills.

We focussed on testing our changes to the forecast, including:
* Today, Tomorrow and Outlook tabs
* only displaying the health advice for the highest reading
* Daily Air Quality Index (DAQI) without numbers  
* the changed position of the pollutant summaries and click-through links

We also tested how the tabulated monitoring stations were viewed and understood.


## Research findings

### What worked well

After an interesting round of user research, we found that: 

* users were clear on the forecast
* users interacted with the measurements section
* the additional range numbers helped to clarify the levels shown for users
* users saw information shown in tabs in the monitoring section (other locations)


### What needs work

While the design tested well, we found that the:

* amount of cumulative text under tabs and repetition of tab text will need to be considered
* mobile users were still less likely to pick up on finer interaction details, for example, tool tips and expanders
* low digitally skilled users found prototype itself usable and proposition easy to understand, but missed links,expanders and tool tips


## What we focused on in sprint five

As a team, in sprint five, we agreed the main points to focus on were:  

* allowing users to search for postcodes in Northern Ireland
* refactoring of the prototype to allow sprints to be versioned and accessible to the team
* adding in additonal content to address short and long term exposure to risk
* changed the details component for further health information to a link to a seperate page

### Searching for postcodes in Northern Ireland 

The [OS Names API](https://www.ordnancesurvey.co.uk/products/os-names-api) only supports places and locations within England, Wales and Scotland. A requirement of the service is also to support locations within Northern Ireland. In the long term we would like a gazetteer that supports all locations and postcodes across the UK. However, to meet the requirement in the private beta we have opted to allow the user to query locations and postcodes in England, Wales and Scotland using [OS Names API](https://www.ordnancesurvey.co.uk/products/) and postcodes in Northern Ireland using [postcodes.io](https://postcodes.io/).

![Searching for a postcode in Northern Ireland](../../images/sprint-five/ni-postcode-search.png "Searching for postcodes in Northern Ireland ")

![Searching for a location in England, Scotland and Wales](../../images/sprint-five/where-do-you-want-to-check.png "Searching for a location in England, Scotland and Wales")
   

### Health advice

Users were not engaging with the details component that contained health information at different pollution levels. So, we tested removing the details component and replacing it with dynamic content and a link to further reading.

After the forecast tab, we displayed the health advice for the highest reading. For example, if the highest reading in the forecast was 'moderate' in any of the tabs, then the health advice for 'moderate' would be displayed in the section below the forecast.

We hypothesised that this would:
* reduce page weight, especially for mobile users
* prevent repeated content
* bring forward the most important advice to the main page


![5 day forecast and moderate health advice](../../images/sprint-five/moderate-forecast.png "5 day forecast and moderate health advice")

![5 day forecast and low health advice](../../images/sprint-five/low-forecast.png "5 day forecast and moderate health advice")

### How air pollution may affect health

Long term health effects of air pollution is information that many of our users are unaware of. The health advice that we gave alongside the DAQI was only for short term exposure. To help improve engagement and education, we front loaded the page with a long term health effects summary. 

![How air pollution may affect health](../../images/sprint-five/how-air-pollution.png "How air pollution may affect health")


