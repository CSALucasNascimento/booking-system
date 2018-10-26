// eslint-disable
// this is an auto generated file. This will be overwritten

export const createSpace = `mutation CreateSpace($input: CreateSpaceInput!) {
  createSpace(input: $input) {
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
export const updateSpace = `mutation UpdateSpace($input: UpdateSpaceInput!) {
  updateSpace(input: $input) {
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
export const deleteSpace = `mutation DeleteSpace($input: DeleteSpaceInput!) {
  deleteSpace(input: $input) {
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
export const createSpaceData = `mutation CreateSpaceData($input: CreateSpaceDataInput!) {
  createSpaceData(input: $input) {
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
export const updateSpaceData = `mutation UpdateSpaceData($input: UpdateSpaceDataInput!) {
  updateSpaceData(input: $input) {
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
export const deleteSpaceData = `mutation DeleteSpaceData($input: DeleteSpaceDataInput!) {
  deleteSpaceData(input: $input) {
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
export const createSpacePhoto = `mutation CreateSpacePhoto($input: CreateSpacePhotoInput!) {
  createSpacePhoto(input: $input) {
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
export const updateSpacePhoto = `mutation UpdateSpacePhoto($input: UpdateSpacePhotoInput!) {
  updateSpacePhoto(input: $input) {
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
export const deleteSpacePhoto = `mutation DeleteSpacePhoto($input: DeleteSpacePhotoInput!) {
  deleteSpacePhoto(input: $input) {
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
export const createReservation = `mutation CreateReservation($input: CreateReservationInput!) {
  createReservation(input: $input) {
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
export const updateReservation = `mutation UpdateReservation($input: UpdateReservationInput!) {
  updateReservation(input: $input) {
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
export const deleteReservation = `mutation DeleteReservation($input: DeleteReservationInput!) {
  deleteReservation(input: $input) {
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
export const createReservationSlot = `mutation CreateReservationSlot($input: CreateReservationSlotInput!) {
  createReservationSlot(input: $input) {
    id
    checkIn
    checkOut
    createdAt
    updatedAt
    version
  }
}
`;
export const updateReservationSlot = `mutation UpdateReservationSlot($input: UpdateReservationSlotInput!) {
  updateReservationSlot(input: $input) {
    id
    checkIn
    checkOut
    createdAt
    updatedAt
    version
  }
}
`;
export const deleteReservationSlot = `mutation DeleteReservationSlot($input: DeleteReservationSlotInput!) {
  deleteReservationSlot(input: $input) {
    id
    checkIn
    checkOut
    createdAt
    updatedAt
    version
  }
}
`;
export const createSpaceBlockedDate = `mutation CreateSpaceBlockedDate($input: CreateSpaceBlockedDateInput!) {
  createSpaceBlockedDate(input: $input) {
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
export const updateSpaceBlockedDate = `mutation UpdateSpaceBlockedDate($input: UpdateSpaceBlockedDateInput!) {
  updateSpaceBlockedDate(input: $input) {
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
export const deleteSpaceBlockedDate = `mutation DeleteSpaceBlockedDate($input: DeleteSpaceBlockedDateInput!) {
  deleteSpaceBlockedDate(input: $input) {
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
export const createSpaceCalendar = `mutation CreateSpaceCalendar($input: CreateSpaceCalendarInput!) {
  createSpaceCalendar(input: $input) {
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
export const updateSpaceCalendar = `mutation UpdateSpaceCalendar($input: UpdateSpaceCalendarInput!) {
  updateSpaceCalendar(input: $input) {
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
export const deleteSpaceCalendar = `mutation DeleteSpaceCalendar($input: DeleteSpaceCalendarInput!) {
  deleteSpaceCalendar(input: $input) {
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
export const createTransaction = `mutation CreateTransaction($input: CreateTransactionInput!) {
  createTransaction(input: $input) {
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
export const updateTransaction = `mutation UpdateTransaction($input: UpdateTransactionInput!) {
  updateTransaction(input: $input) {
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
export const deleteTransaction = `mutation DeleteTransaction($input: DeleteTransactionInput!) {
  deleteTransaction(input: $input) {
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
