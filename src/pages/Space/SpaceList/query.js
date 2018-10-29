export const listSpaces = `query ListSpaces(
    $filter: ModelSpaceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        spaceType
        spaceSize
        spaceCapacity
        country
        state
        city
        address
        postCode
        lat
        lon
        title
        description
        bookingType
        isPublished
        isReady
        createdAt
        updatedAt
      }
      nextToken
    }
  }
  `;