// eslint-disable
// this is an auto generated file. This will be overwritten

export const getSpace = `query GetSpace($id: ID!) {
  getSpace(id: $id) {
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
    spaceData {
      id
      bookingNoticeTime
      minTime
      maxTime
      basePrice
      halfDayDiscount
      fullDayDiscount
      createdAt
      updatedAt
    }
    photos {
      items {
        id
        name
        type
        isCover
        createdAt
        updatedAt
      }
      nextToken
    }
    reservation {
      id
      guestId
      checkIn
      checkOut
      guests
      message
      basePrice
      discount
      discountType
      total
      confirmationCode
      paymentState
      reservationState
      createdAt
      updatedAt
    }
    blockedDates {
      items {
        id
        blockedDates
        createdAt
        updatedAt
      }
      nextToken
    }
    calendar {
      id
      name
      url
      createdAt
      updatedAt
    }
    bookingType
    isPublished
    isReady
    createdAt
    updatedAt
  }
}
`;
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
      spaceData {
        id
        bookingNoticeTime
        minTime
        maxTime
        basePrice
        halfDayDiscount
        fullDayDiscount
        createdAt
        updatedAt
      }
      photos {
        items {
          id
          name
          type
          isCover
          createdAt
          updatedAt
        }
        nextToken
      }
      reservation {
        id
        guestId
        checkIn
        checkOut
        guests
        message
        basePrice
        discount
        discountType
        total
        confirmationCode
        paymentState
        reservationState
        createdAt
        updatedAt
      }
      blockedDates {
        items {
          id
          blockedDates
          createdAt
          updatedAt
        }
        nextToken
      }
      calendar {
        id
        name
        url
        createdAt
        updatedAt
      }
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
export const getSpaceData = `query GetSpaceData($id: ID!) {
  getSpaceData(id: $id) {
    id
    space {
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
    bookingNoticeTime
    minTime
    maxTime
    basePrice
    halfDayDiscount
    fullDayDiscount
    createdAt
    updatedAt
  }
}
`;
export const listSpaceDatas = `query ListSpaceDatas(
  $filter: ModelSpaceDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listSpaceDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      space {
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
      bookingNoticeTime
      minTime
      maxTime
      basePrice
      halfDayDiscount
      fullDayDiscount
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getSpacePhotos = `query GetSpacePhotos($id: ID!) {
  getSpacePhotos(id: $id) {
    id
    space {
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
    name
    type
    isCover
    createdAt
    updatedAt
  }
}
`;
export const listSpacePhotoss = `query ListSpacePhotoss(
  $filter: ModelSpacePhotosFilterInput
  $limit: Int
  $nextToken: String
) {
  listSpacePhotoss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      space {
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
      name
      type
      isCover
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getReservation = `query GetReservation($id: ID!) {
  getReservation(id: $id) {
    id
    space {
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
    blockedDates {
      items {
        id
        blockedDates
        createdAt
        updatedAt
      }
      nextToken
    }
    transaction {
      id
      payerEmail
      payerId
      transactionId
      total
      transactionFee
      currency
      ipn_track_id
      paymentType
      createdAt
      updatedAt
    }
    guestId
    checkIn
    checkOut
    guests
    message
    basePrice
    discount
    discountType
    total
    confirmationCode
    paymentState
    reservationState
    createdAt
    updatedAt
  }
}
`;
export const listReservations = `query ListReservations(
  $filter: ModelReservationFilterInput
  $limit: Int
  $nextToken: String
) {
  listReservations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      space {
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
      blockedDates {
        items {
          id
          blockedDates
          createdAt
          updatedAt
        }
        nextToken
      }
      transaction {
        id
        payerEmail
        payerId
        transactionId
        total
        transactionFee
        currency
        ipn_track_id
        paymentType
        createdAt
        updatedAt
      }
      guestId
      checkIn
      checkOut
      guests
      message
      basePrice
      discount
      discountType
      total
      confirmationCode
      paymentState
      reservationState
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getSpaceBlockedDates = `query GetSpaceBlockedDates($id: ID!) {
  getSpaceBlockedDates(id: $id) {
    id
    space {
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
    reservation {
      id
      guestId
      checkIn
      checkOut
      guests
      message
      basePrice
      discount
      discountType
      total
      confirmationCode
      paymentState
      reservationState
      createdAt
      updatedAt
    }
    calendar {
      id
      name
      url
      createdAt
      updatedAt
    }
    blockedDates
    createdAt
    updatedAt
  }
}
`;
export const listSpaceBlockedDatess = `query ListSpaceBlockedDatess(
  $filter: ModelSpaceBlockedDatesFilterInput
  $limit: Int
  $nextToken: String
) {
  listSpaceBlockedDatess(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      space {
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
      reservation {
        id
        guestId
        checkIn
        checkOut
        guests
        message
        basePrice
        discount
        discountType
        total
        confirmationCode
        paymentState
        reservationState
        createdAt
        updatedAt
      }
      calendar {
        id
        name
        url
        createdAt
        updatedAt
      }
      blockedDates
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getSpaceCalendar = `query GetSpaceCalendar($id: ID!) {
  getSpaceCalendar(id: $id) {
    id
    space {
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
    name
    url
    createdAt
    updatedAt
  }
}
`;
export const listSpaceCalendars = `query ListSpaceCalendars(
  $filter: ModelSpaceCalendarFilterInput
  $limit: Int
  $nextToken: String
) {
  listSpaceCalendars(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      space {
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
      name
      url
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
export const getTransaction = `query GetTransaction($id: ID!) {
  getTransaction(id: $id) {
    id
    reservation {
      id
      guestId
      checkIn
      checkOut
      guests
      message
      basePrice
      discount
      discountType
      total
      confirmationCode
      paymentState
      reservationState
      createdAt
      updatedAt
    }
    payerEmail
    payerId
    transactionId
    total
    transactionFee
    currency
    ipn_track_id
    paymentType
    createdAt
    updatedAt
  }
}
`;
export const listTransactions = `query ListTransactions(
  $filter: ModelTransactionFilterInput
  $limit: Int
  $nextToken: String
) {
  listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      reservation {
        id
        guestId
        checkIn
        checkOut
        guests
        message
        basePrice
        discount
        discountType
        total
        confirmationCode
        paymentState
        reservationState
        createdAt
        updatedAt
      }
      payerEmail
      payerId
      transactionId
      total
      transactionFee
      currency
      ipn_track_id
      paymentType
      createdAt
      updatedAt
    }
    nextToken
  }
}
`;
