import type { PageServerLoad } from "./$types";
import { PUBLIC_GOOGLE_API } from "$env/static/public";

export const load = (async ({ fetch }) => {
  const postData = {
    "includedTypes": ["bar"],
    "excludedTypes": ["restaurant", "cafe"],
    "languageCode": "fi",
    "locationRestriction": {
      "circle": {
        "center": {
          "latitude": 62.6018675,
          "longitude": 29.7612755
        },
        "radius": 1000.0
      }
    }
  }


  const response = await fetch('https://places.googleapis.com/v1/places:searchNearby', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
      'X-Goog-Api-Key': PUBLIC_GOOGLE_API,
      'X-Goog-Fieldmask': 'places.displayName,places.formattedAddress,places.business_status,places.currentOpeningHours'
    }
  })

  const placeData = await response.json()

  return {
    placeData
  }
}) satisfies PageServerLoad;
