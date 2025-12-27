import { createClient } from "microcms-js-sdk";

// microCMS client
// Set up your API keys in .env.local:
// MICROCMS_SERVICE_DOMAIN=your-service-domain
// MICROCMS_API_KEY=your-api-key

type Client = ReturnType<typeof createClient>;

let client: Client | null = null;

// Only create client if environment variables are set
if (process.env.MICROCMS_SERVICE_DOMAIN && process.env.MICROCMS_API_KEY) {
  client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
  });
}

// Check if microCMS is configured
export function isMicroCMSConfigured(): boolean {
  return client !== null;
}

// Fetch functions for each content type
export async function getHeroContent() {
  if (!client) return null;

  try {
    const data = await client.get({
      endpoint: "hero",
    });
    return data;
  } catch (error) {
    console.error("Error fetching hero content:", error);
    return null;
  }
}

export async function getAboutContent() {
  if (!client) return null;

  try {
    const data = await client.get({
      endpoint: "about",
    });
    return data;
  } catch (error) {
    console.error("Error fetching about content:", error);
    return null;
  }
}

export async function getActivitiesContent() {
  if (!client) return null;

  try {
    const data = await client.get({
      endpoint: "activities",
    });
    return data;
  } catch (error) {
    console.error("Error fetching activities content:", error);
    return null;
  }
}

export async function getJoinContent() {
  if (!client) return null;

  try {
    const data = await client.get({
      endpoint: "join",
    });
    return data;
  } catch (error) {
    console.error("Error fetching join content:", error);
    return null;
  }
}

export async function getSiteSettings() {
  if (!client) return null;

  try {
    const data = await client.get({
      endpoint: "settings",
    });
    return data;
  } catch (error) {
    console.error("Error fetching site settings:", error);
    return null;
  }
}
