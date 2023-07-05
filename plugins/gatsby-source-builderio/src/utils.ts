import axios from 'axios';

const headers = {
  'Content-Type': `application/json`,
};

/**
 * Fetch utility for requests to the example api.
 * You can use a GraphQL client module instead if you prefer a more full-featured experience.
 * @see https://graphql.org/code/#javascript-client
 */
export async function fetchGraphQL<T>(
  endpoint: string,
  query: string
): Promise<T> {
  const response = await axios({
    method: `POST`,
    headers,
    url: endpoint,
    data: { query },
  });

  return await response.data;
}
