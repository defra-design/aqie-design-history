---
title: Sprint one
layout: page
date: 2023-11-24
author:
  name: Will Richards
  url: https://github.com/defra-design
---

The sprint goals were centered around the primary user needs identified in Beta planning post Alpha. 

As a user I need to: 

* check air quality in my chosen local area (forecast and measured)
* understand how air quality can affect me or the people of the people I can for
* understand about the different pollutants, the sources and how they can affect short term and long term health

## Screens within the prototype

<img src="../../images/sprint-one/scope.svg" alt="The scope of the Private BETA MVP" style="margin-bottom: 30px; width: 100%; height: auto;" />


The private beta design is not intended to work as one transactional journey, any page within the service could be considered a first touch point.

## Landing page

![Start page on GOV.UK for ‘Check local air quality’](../../images/sprint-one/start.png "")

We have kept this page very simple and used the pattern documented within the [goverment design system](https://design-system.service.gov.uk/patterns/start-using-a-service/).

We have a working hypothesis that this landing page may not be required. Whether we amalgamate it with the ‘Where do you want to check?’ page or just remove it entirely are potential ideas to test and iterate upon in future sprints if we get any evidence that this page isn’t required.

The name of the service is a working title for now whilst we gather evidence about whether we use the words ‘air quality’ or ‘air pollution’. 

## Location search

![Page showing how a user searches for a location](../../images/sprint-one/search-for-location.png "")

We decided to follow a similar pattern used by the Check for flooding service. We were able to utilise their research to help us design a page that allows the user to complete their action as easily as possible.

Additionally, we integrated the [OS Places Names API](https://www.ordnancesurvey.co.uk/products/os-names-api). This feature allows users to search for locations using either place names or postcodes.

The API can return many results, by utilizing its functionality, we can filter results using the `LOCAL_TYPE:` parameter, ensuring only the desired types are displayed.

`LOCAL_TYPE:` filters used in the prototype:

* City
* Town
* Village
* Suburban_Area
* Postcode
* Airport

Filtering within the API is documented on the [OS Data Hub](https://osdatahub.os.uk/docs/names/technicalSpecification?_ga=2.22604795.1525581704.1701342143-1774170150.1701342142&_gl=1*1s8nh4i*_ga*MTc3NDE3MDE1MC4xNzAxMzQyMTQy*_ga_59ZBN7DVBG*MTcwMTM1NTU4My4yLjAuMTcwMTM1NTU4My42MC4wLjA).

## Disambiguation

![Page showing multiples results returned when a user searches by place name (disambiguation)](../../images/sprint-one/disambiguation.png "")

The OS Places API's can return multiple matches for a given request, enabling us to implement disambiguation. The API provides `DISTRICT_BOROUGH` or `COUNTY_UNITARY` data within the gazetteer of each result. 

We designed a logic within the results that first identifies and returns the district borough from the results of the API. If the district borough is not available, it automatically defaults to the unitary authority. 

This approach enables users to differentiate between the similar titled areas. For example, distinguishing 'Millbrook, **Tameside**' (a district borough) from 'Millbrook, **Cornwall**' (a unitary authority).

## Air quality location page

![Page showing the current forecast](../../images/sprint-one/location.png "")

To keep the design clean and simple, we have implemented progressive disclosures for certain elements of this page. Our hypothesis is that the content within the progressive disclosures will help add context to many of the engaged users but reduce cognitive overload for others.  

We have moved the information on pollutants, their health effects and measurements to separate pages. Our hypothesis is that when users search for specific pollutants, we want each of the pages to have the ability to be the beginning and end of the user’s journey.

### Daily air quality index (DAQI)

![Image showing the daily air quality index](../../images/sprint-one/daqi.png "")

While a parallel piece of social research into the DAQI is being carried out, we have left the 10-point scale in the prototype. However, as well as accessibility issues, we believe that the 10-points may be superfluous and that just having a 4-point scale (low, moderate, high and very high) would be less confusing for the users. This is something we hope to get more evidence for from our user research sessions. 

### Health advice

![Image showing health advice](../../images/sprint-one/health-advice.png "")

To give context to the DAQI scale, we have included health advice for the forecasted measurement. This text has been taken directly from the UK AIR website. In the next iterations, we may work on paring the text down to use plain English and improve readability. We have removed the advice for citizens with no health problems as we have a working assumption that we only need to advise people who may be in danger from the forecast air pollution levels. 

The details component contains all the health advice for the DAQI scale. Again, we will visit the wording of this in future iterations. 

### Measurement stations

![Image showing the measurement stations table](../../images/sprint-one/measurement-stations.png "")

We included the 3 nearest measuring stations to the citizen's search point. We did this, as the closest may not be the most relevant station for the user to be aware of (if, for example, it is based at an industrial site, whereas the user may be searching a residential address which may not be affected by the higher readings from the industrial site). Currently, for the prototype, these are fixed, hypothetical stations and not dynamic to any searched location. 

### Station page

![Page showing the current pollutant measurements at a station](../../images/sprint-one/measuring-station.png "")

Each station is linked from the air quality location page. The station page includes a decription of the type of pollutant and then provides the current measurement for that pollutant. 

## Pollutants

![Page showing the details about a pollutant](../../images/sprint-one/pollutant-detail.png "")

The pollutant pages are designed so that they could be either a stand-alone page, navigated from a search engine, or as part of the user’s journey from an earlier point in the service. 

The information has been written in collaboration with different sources and still needs to be checked by a subject matter expert (SME) on pollutants. 

We have not included a ‘back’ button on this page as the user may have navigated to it from a search page. We may look to put a link to ‘Check the air quality in a local area’ though. We are still undecided about which page would constitute the homepage though. This will hopefully become clear as we test with more users. 



