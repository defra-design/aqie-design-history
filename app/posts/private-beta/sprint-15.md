---
title: Sprint 15
layout: page
date: 2024-10-29
author:
  name: Will Richards
  url: https://github.com/defra-design
---

## Research goals from sprint 14

We decided to prototype an end-to-end sign-up process for alerts, focusing on key aspects:

* is the sign-up process straightforward and not overly burdensome for users?
* do users clearly understand the different types of alerts available for subscription?
* how do users react to and interpret the various types of alerts they receive?


## Research findings

### What worked well

In this round of research, we found:

* alerts have started very well and are regarded as high value, especially if they come via SMS
* evidence building that we could really build a strong value proposition by inviting target groups straight into alert registration


### What needs work

We found:

* concept clash between DAQI forecast and measured threshold alerts, leading to some confusion
    * For example, when the forecast displays 'Low' air pollution, but a nearby monitoring station has breached its threshold, it sends mixed messages to the user.
* monitoring station locations are not making sense to "snackers" and can currently can undermine the overall message, especially but not only in rural areas
* post code and local authority are confusing some participants and causing ambiguity



## What we focused on in sprint 15

In this prototype iteration, we focused on:

* using the `POPULATED_PLACE` variable from the OS Names API and `POST_TOWN` in the OS Places API with the postcode to see if it reduces confusion and ambiguity around the forecast location
* implementing some SEO changes to the `<H1>` of the forecast location
* improve visibilty for signing up to alerts within the forecast location
* simplifying alert choices—perhaps users don’t need to select the type of alert they receive?

### Prototype scope

In Sprint 14, the sign-up process was prototyped for email. However, nearly all participants in two rounds of research expressed a preference for receiving air quality alerts via text message. We then decided to prototype a text message sign-up process.

We also removed the screen where users selected notification types, as we felt most users would prefer to receive all messages.

<img src="../../images/sprint-15/air-quality-alerts-signup.svg" alt="Alerts service prototype scope" style="margin-bottom: 30px; margin-top: 10px; width: 100%; height: auto;" />

#### Types of notifications

In Sprint 14, we included a link in the expired air quality alert message. However, we've simplified this by only notifying the user that the air quality alert has expired.

<img src="../../images/sprint-15/air-quality-alerts-notificationstype.svg" alt="Alerts service prototype scope" style="margin-bottom: 100px; margin-top: 10px; width: 100%; height: auto;" />

## Location forecast and signing up for an alert 

### H1 and SEO changes

We've added 'Air quality in ...' to the `<H1>`, accompanying the location name or postcode and parent area.

* For location names, we've retained the local authority for disambiguation.
* For postcodes, we now use the `POPULATED_PLACE` variable from the OS Names API and `POST_TOWN` from the OS Places API.

When users search for air quality in a local area using a service like Google, the result title will now display 'Air quality in ...'. We assume this will help users quickly understand the service when scanning search engine results.


![Get air quality alerts by text or email - location page](../../images/sprint-15/location-forecast.png "")

### Creating an alert for a location

From the link on the location page, users are directed to a screen confirming whether they want to create an alert for the location they’re viewing or a different one.


![Do you want to create an alert for . . .](../../images/sprint-15/do-you-want-to-create-an-alert.png "")

### Method of notifications

The next step requires users to confirm how they would like to be notified.

In Sprint 14, the order was email first, then text. However, we've flipped the order since the majority of participants preferred to receive alerts via text message.

![How would you like to be notified?](../../images/sprint-15/method-of-notification.png "")

### Check your details

When users select 'Continue,' a confirmation screen appears, displaying their submitted details. They can make corrections before proceeding to the next step.

![Check your details](../../images/sprint-15/check-your-details.png "")

### Check your messages

The screen notifies the user that a unique code has been sent to their phone. They must enter the code to proceed.

![Check your email](../../images/sprint-15/check-your-messages.png "")

### Manage air quality alerts

Upon successfully submitting the code, the 'Manage Air Quality Alerts' screen is displayed with a success notification banner.

![Manage air quality alerts](../../images/sprint-15/success-manage-alerts.png "")

## Receiving air quality alerts

### Forecast alert

If a user's chosen location has a forecasted air pollution level of moderate or higher, a message is sent to their registered mobile device or email.

![Forecast email alert](../../images/sprint-15/forecast-message.png "")

When users select the URL in the message, their chosen forecast location is displayed with the forecasted air pollution level of moderate or higher, along with relevant health advice.

![Forecast location alert](../../images/sprint-15/location-forecast-high.png "")

### Threshold alert

If a monitoring station within X miles of the user's chosen location exceeds the statutory threshold for a given pollutant, a message is sent to their registered mobile device or email.

![Forecast email alert](../../images/sprint-15/alert-message.png "")

When users select the URL in the message, an alert page is displayed with details of the threshold breach.

From earlier iterations of this page, we have made the following changes:

* The `<H1>` is now more explicit with the addition of 'Air quality alert ...', rather than just stating the monitoring site name and parent area, which confused a number of participants.
* The position of the health messaging has been moved above the threshold levels and measurements in the table. In previous rounds, we found that users were often oblivious to or disengaged from this content.

![Forecast location alert](../../images/sprint-15/air-quality-alert.png "")

### Expired alert

When the same active threshold alert no longer breaches the statutory threshold, a message is sent to the user notifying them that the alert has expired.

![Forecast email alert](../../images/sprint-15/expired-message.png "")

