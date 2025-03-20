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

We found:

* the alert banner at the top of the page could be confusing as it displays potentially conflicting information; for instance, showing a low forecast while the notification banner indicates a nearby threshold breach
* the pollutant threshold table on the alert page led to disengaged and oblivious users not reading it


## What we focused on in sprint 14

We decided to prototype an end-to-end sign-up process for alerts, focusing on key aspects:

* is the sign-up process straightforward and not overly burdensome for users?
* do users clearly understand the different types of alerts available for subscription?
* how do users react to and interpret the various types of alerts they receive?

### Prototype scope

<img src="../../images/sprint-14/air-quality-alerts-signup.svg" alt="Alerts service prototype scope" style="margin-bottom: 30px; margin-top: 10px; width: 100%; height: auto;" />

#### Types of notifications

<img src="../../images/sprint-14/air-quality-alerts-notificationstype.svg" alt="Alerts service prototype scope" style="margin-bottom: 60px; margin-top: 10px; width: 100%; height: auto;" />

## Signing up for an alert 

### Location page 

We've added a link below the 5-day forecast: 'Get air quality alerts by email or text'.

![Get air quality alerts by text or email - location page](../../images/sprint-14/location-forecast.png "")

### Creating an alert for a location

From the link on the location page, users are directed to a screen confirming whether they want to create an alert for the location they’re viewing or a different one.


![Do you want to create an alert for . . .](../../images/sprint-14/do-you-want-to-create-an-alert.png "")


### Type of notifications

On selecting 'Continue,' users are directed to a screen to choose their preferred notification type.

![Type of notifications](../../images/sprint-14/what-type-of-alert.png "")

### Method of notifications

The next step the user needs to confirm how the would like to be notified, either by email or text on their prefered mobile device. 

![How would you like to be notified?](../../images/sprint-14/how-would-you-like-to-be-notified.png "")

### Check your details

When users select 'Continue,' a confirmation screen appears, displaying their submitted details. They can make corrections before proceeding to the next step.

![Check your details](../../images/sprint-14/check-your-details.png "")

### Check your email

After confirming their details, users see a screen prompting them to check their email.

![Check your email](../../images/sprint-14/check-your-email.png "")

An email is sent to the user's submitted account, requiring them to select the activation link to proceed.

![Check your email](../../images/sprint-14/activate-email-alert.png "")

### Manage air quality alerts

After selecting the activation link, the 'Manage Air Quality Alerts' screen appears with a success notification banner.

![Manage air quality alerts](../../images/sprint-14/manage-air-quality-alerts.png "")

## Receiving air quality alerts

### Forecast alert

If a user's chosen location has a forecasted air pollution level of moderate or higher, a message is sent to their registered email or mobile device.

![Forecast email alert](../../images/sprint-14/forecast-email-alert.png "")

When users select the URL in the email, their chosen forecast location is displayed with the forecasted air pollution level of moderate or higher, along with relevant health advice.

![Forecast location alert](../../images/sprint-14/forecast-location-alert.png "")

### Threshold alert

If a monitoring station within X miles of the user's chosen location exceeds the statutory threshold for a given pollutant, a message is sent to their registered email or preferred mobile device.

![Forecast email alert](../../images/sprint-14/threshold-email-alert.png "")

When users select the URL in the email, an alert page is displayed with details of the threshold breach.

![Forecast location alert](../../images/sprint-14/active-alert.png "")

### Expired alert

When the same active threshold alert no longer breaches the statutory threshold, a message is sent to the user notifying them that the alert has expired.

![Forecast email alert](../../images/sprint-14/expired-email-alert.png "")

When users select the URL in the email, an alert page is displayed notifying them that the air quality alert has expired.

![Forecast location alert](../../images/sprint-14/expired-alert.png "")