export const BasicHttpHeaders = { 'Content-Type': 'application/json' };

export const RAPID_API_HEADERS = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY
};

export const BING_API_HEADERS = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key':  process.env.NEXT_PUBLIC_RAPID_API_KEY
};

export const RAPID_API_BASE_URL = `https://coinranking1.p.rapidapi.com`;
export const BING_API_URL = `https://bing-news-search1.p.rapidapi.com/news`;