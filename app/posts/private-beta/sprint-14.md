---
title: Sprint 14
layout: page
date: 2024-09-20
author:
  name: Will Richards
  url: https://github.com/defra-design
---

## Research goals from sprint 13

For this sprint, we decided to focus on publishing and displaying alerts within the web service, as this primarily met the statutory obligation for the service. We also wanted to explore whether or not this was sufficient to be classified as a minimum viable product (MVP).

This included:

* what an alert service would look like without the user having to sign up?
* how would an air quality alert be presented on a location forecast page?


## Research findings

### What worked well

In this round of research, we found:

* alerts were positively received with all the participants seeing them as valuable and something they would consider signing up to
* less engaged users follow key messages in the local area and on potential danger to health
* more engaged users went deeper into the information we gave them into why we measure air pollution


### What needs work

In this round of research, we found:

* the alert banner at the top of the page could be confusing as it displays potentially conflicting information; for instance, showing a low forecast while the notification banner indicates a nearby threshold breach
* the pollutant threshold table on the alert page led to disengaged and oblivious users not reading it


## What we focused on in sprint 14

We decided to prototype an end-to-end sign-up process for alerts, focusing on key aspects:

* is the sign-up process straightforward and not overly burdensome for users?
* do users clearly understand the different types of alerts available for subscription?
* how do users react to and interpret the various types of alerts they receive?

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