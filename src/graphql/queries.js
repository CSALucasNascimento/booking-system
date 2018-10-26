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
      manualDayDiscount
      createdAt
      updatedAt
      version
    }
    photos {
      items {
        id
        name
        type
        isCover
        createdAt
        updatedAt
        version
      }
      nextToken
    }
    reservation {
      items {
        id
        guestId
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
        version
      }
      nextToken
    }
    blockedDates {
      items {
        id
        blockedDates
        createdAt
        updatedAt
        version
      }
      nextToken
    }
    calendar {
      items {
        id
        name
        url
        createdAt
        updatedAt
        version
      }
      nextToken
    }
    bookingType
    isPublished
    isReady
    createdAt
    updatedAt
    version
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
        manualDayDiscount
        createdAt
        updatedAt
        version
      }
      photos {
        items {
          id
          name
          type
          isCover
          createdAt
          updatedAt
          version
        }
        nextToken
      }
      reservation {
        items {
          id
          guestId
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
          version
        }
        nextToken
      }
      blockedDates {
        items {
          id
          blockedDates
          createdAt
          updatedAt
          version
        }
        nextToken
      }
      calendar {
        items {
          id
          name
          url
          createdAt
          updatedAt
          version
        }
        nextToken
      }
      bookingType
      isPublished
      isReady
      createdAt
      updatedAt
      version
    }
    nextToken
  }
}
`;
export const getSpaceData = `query GetSpaceData($id: ID!) {
  getSpaceData(id: $id) {
    id
    bookingNoticeTime
    minTime
    maxTime
    basePrice
    halfDayDiscount
    fullDayDiscount
    manualDayDiscount
    createdAt
    updatedAt
    version
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
      bookingNoticeTime
      minTime
      maxTime
      basePrice
      halfDayDiscount
      fullDayDiscount
      manualDayDiscount
      createdAt
      updatedAt
      version
    }
    nextToken
  }
}
`;
export const getSpacePhoto = `query GetSpacePhoto($id: ID!) {
  getSpacePhoto(id: $id) {
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
      version
    }
    name
    type
    isCover
    createdAt
    updatedAt
    version
  }
}
`;
export const listSpacePhotos = `query ListSpacePhotos(
  $filter: ModelSpacePhotoFilterInput
  $limit: Int
  $nextToken: String
) {
  listSpacePhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        version
      }
      name
      type
      isCover
      createdAt
      updatedAt
      version
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
      version
    }
    blockedDates {
      items {
        id
        blockedDates
        createdAt
        updatedAt
        version
      }
      nextToken
    }
    guestId
    slot {
      items {
        id
        checkIn
        checkOut
        createdAt
        updatedAt
        version
      }
      nextToken
    }
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
    version
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
        version
      }
      blockedDates {
        items {
          id
          blockedDates
          createdAt
          updatedAt
          version
        }
        nextToken
      }
      guestId
      slot {
        items {
          id
          checkIn
          checkOut
          createdAt
          updatedAt
          version
        }
        nextToken
      }
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
      version
    }
    nextToken
  }
}
`;
export const getReservationSlot = `query GetReservationSlot($id: ID!) {
  getReservationSlot(id: $id) {
    id
    checkIn
    checkOut
    createdAt
    updatedAt
    version
  }
}
`;
export const listReservationSlots = `query ListReservationSlots(
  $filter: ModelReservationSlotFilterInput
  $limit: Int
  $nextToken: String
) {
  listReservationSlots(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      checkIn
      checkOut
      createdAt
      updatedAt
      version
    }
    nextToken
  }
}
`;
export const getSpaceBlockedDate = `query GetSpaceBlockedDate($id: ID!) {
  getSpaceBlockedDate(id: $id) {
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
      version
    }
    reservation {
      id
      guestId
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
      version
    }
    calendar {
      id
      name
      url
      createdAt
      updatedAt
      version
    }
    blockedDates
    createdAt
    updatedAt
    version
  }
}
`;
export const listSpaceBlockedDates = `query ListSpaceBlockedDates(
  $filter: ModelSpaceBlockedDateFilterInput
  $limit: Int
  $nextToken: String
) {
  listSpaceBlockedDates(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        version
      }
      reservation {
        id
        guestId
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
        version
      }
      calendar {
        id
        name
        url
        createdAt
        updatedAt
        version
      }
      blockedDates
      createdAt
      updatedAt
      version
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
      version
    }
    name
    url
    createdAt
    updatedAt
    version
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
        version
      }
      name
      url
      createdAt
      updatedAt
      version
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
      version
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
    version
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
        version
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
      version
    }
    nextToken
  }
}
`;
export const searchSpaces = `query SearchSpaces(
  $filter: SearchableSpaceFilterInput
  $sort: SearchableSpaceSortInput
  $limit: Int
  $nextToken: Int
) {
  searchSpaces(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
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
        manualDayDiscount
        createdAt
        updatedAt
        version
      }
      photos {
        items {
          id
          name
          type
          isCover
          createdAt
          updatedAt
          version
        }
        nextToken
      }
      reservation {
        items {
          id
          guestId
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
          version
        }
        nextToken
      }
      blockedDates {
        items {
          id
          blockedDates
          createdAt
          updatedAt
          version
        }
        nextToken
      }
      calendar {
        items {
          id
          name
          url
          createdAt
          updatedAt
          version
        }
        nextToken
      }
      bookingType
      isPublished
      isReady
      createdAt
      updatedAt
      version
    }
    nextToken
  }
}
`;
