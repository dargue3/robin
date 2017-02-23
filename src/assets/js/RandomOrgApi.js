// used for fetching a random slug from random.org
// always guaranteed to be unique

// which characters are allowed in random slugs?
const lowercase = 'abcdefghijklmnopqrstuvwxyz'
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '1234567890'

const Random = {
  url: 'https://api.random.org/json-rpc/1/invoke',
  payload: {
    jsonrpc: '2.0',
    method: 'generateStrings',
    id: 1,
    params: {
      apiKey: '758f4200-ec73-4bd2-8063-920362ee6883',
      n: 1,
      length: 8,
      characters: `${lowercase}${uppercase}${numbers}`
    },
  }
}

export default Random