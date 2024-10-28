---
title: Sprint 13
layout: page
date: 2024-08-23
author:
  name: Will Richards
  url: https://github.com/defra-design
---

## Research goals from sprint 10

Due to the UK general election in early July, no research was conducted during sprint 11. The decision was made to conduct the research from sprint 10 during sprint 12, design then focused on [planning for air quality alerts](/aqie-design-history/posts/private-beta/sprint-12/).

The research for sprint 12 involved participants from Scotland.

We focussed on testing: 

* revised page structure to check if users understood the different time periods: five-day forecast, pollutant annual means and hourly measurements
* presenting the annual pollutant averages in a tabular format
* exploring the addition of a related content panel
* reducing complexity in displaying levels for nearby monitoring areas


## Research findings

### What worked well

In this round of research, we found:

* the revised page structure helped users scan content and understand different time periods
* historical information engaged participants
* the navigation panel led to more exploration of underlying pages


### What needs work

In this round of research, we found:

* relying on the browser back button caused some participants issues
* participants tended to gravitate towards the table containing the annual means for each pollutant rather than reading the text about the dominant pollutant
* participants expressed a desire to see historical data over longer periods and in a visual form

As a team, we decided to note these points and park them for further exploration.


## What we focused on in sprint 13

We agreed to start prototyping potential elements of an alerts service. These included:

* what does an alert service look like without the user having to sign up (meeting the statutory obligations)?
* how would an air quality alert be presented on a location forecast page?

### Alert service - meeting statutory obligations

For this sprint, we decided to focus on publishing and displaying alerts within the web service, as this primarily met the statutory obligation for the service. We also wanted to explore whether or not this was sufficient to be classified as a minimum viable product (MVP).

### Prototype scope

<img src="../../images/sprint-13/air-quality-alerts-flow.svg" alt="Alerts service prototype scope" style="margin-bottom: 30px; margin-top: 10px; width: 100%; height: auto;" />



## Air pollution topic landing page

In sprint 10, we started to look at the wider information architecture and how the service sits within GOV.UK. For the prototype, we decided to start the user journey from a topic landing page that contained links to:

* Check local air quality
* Air quality alerts
* Sign up for air quality alerts
* Why we monitor air pollution
* Air pollutants we monitor
* Health effects of poor air quality

This page does not contain an exhaustive list. In the future, it could link to other content, such as annual compliance data or services like 'Get air quality data'.

![Air pollution - Topic landing page](../../images/sprint-13/topic-landing-page.png "")

## Location page displaying an alert

When a user searches for air quality in their chosen location and a nearby monitoring area exceeds statutory thresholds, a notification banner is displayed at the top of the page with a link to the specific alert.

The page also includes a link for the user to sign up for air quality alerts.


![Location page](../../images/sprint-13/location.png "")


## Air quality alerts index

This page displays the latest air quality alerts. If a pollutant in a designated monitoring area exceeds the statutory threshold, an alert is published. The alert expires if levels fall below the threshold for 24 hours.

![A list of active alerts published to the web service](../../images/sprint-13/air-quality-alerts.png "")

If there are no active air quality alerts a message is displayed to inform the user that there currently no active alerts. 

![No active alerts](../../images/sprint-13/no-active-alerts.png "")

## Active alert

When a user views an active alert, a notification banner is displayed indicating the pollutant of concern and an anchor link to health advice contained within the page.

The template displays the relevant metadata, including:

* the monitoring area name
* a link to a Google Map with a pin indicating the location of the area
* the current timestamp

A table is also displayed with the measurements of the pollutant of concern. These include:

* name of the pollutant 
* the maximum level over 24 hours
* the current level
* the legal threshold

The page also contains the relevant health advice and sources of the pollutant of concern. The user can also sign up for alerts from this page.


![Active alert page](../../images/sprint-13/active-alert.png "")

When an alert has expired, a notification banner is displayed informing the user.

![Expired alert page](../../images/sprint-13/expired-alert.png "")