// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateSpace = `subscription OnCreateSpace {
  onCreateSpace {
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
      }
      nextToken
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
      items {
        id
        name
        url
        createdAt
        updatedAt
      }
      nextToken
    }
    bookingType
    isPublished
    isReady
    createdAt
    updatedAt
  }
}
`;
export const onUpdateSpace = `subscription OnUpdateSpace {
  onUpdateSpace {
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
      }
      nextToken
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
      items {
        id
        name
        url
        createdAt
        updatedAt
      }
      nextToken
    }
    bookingType
    isPublished
    isReady
    createdAt
    updatedAt
  }
}
`;
export const onDeleteSpace = `subscription OnDeleteSpace {
  onDeleteSpace {
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
      }
      nextToken
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
      items {
        id
        name
        url
        createdAt
        updatedAt
      }
      nextToken
    }
    bookingType
    isPublished
    isReady
    createdAt
    updatedAt
  }
}
`;
export const onCreateSpaceData = `subscription OnCreateSpaceData {
  onCreateSpaceData {
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
    manualDayDiscount
    createdAt
    updatedAt
  }
}
`;
export const onUpdateSpaceData = `subscription OnUpdateSpaceData {
  onUpdateSpaceData {
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
    manualDayDiscount
    createdAt
    updatedAt
  }
}
`;
export const onDeleteSpaceData = `subscription OnDeleteSpaceData {
  onDeleteSpaceData {
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
    manualDayDiscount
    createdAt
    updatedAt
  }
}
`;
export const onCreateSpacePhoto = `subscription OnCreateSpacePhoto {
  onCreateSpacePhoto {
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
export const onUpdateSpacePhoto = `subscription OnUpdateSpacePhoto {
  onUpdateSpacePhoto {
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
export const onDeleteSpacePhoto = `subscription OnDeleteSpacePhoto {
  onDeleteSpacePhoto {
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
export const onCreateReservation = `subscription OnCreateReservation {
  onCreateReservation {
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
    guestId
    slot {
      items {
        id
        checkIn
        checkOut
        createdAt
        updatedAt
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
  }
}
`;
export const onUpdateReservation = `subscription OnUpdateReservation {
  onUpdateReservation {
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
    guestId
    slot {
      items {
        id
        checkIn
        checkOut
        createdAt
        updatedAt
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
  }
}
`;
export const onDeleteReservation = `subscription OnDeleteReservation {
  onDeleteReservation {
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
    guestId
    slot {
      items {
        id
        checkIn
        checkOut
        createdAt
        updatedAt
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
  }
}
`;
export const onCreateReservationSlot = `subscription OnCreateReservationSlot {
  onCreateReservationSlot {
    id
    checkIn
    checkOut
    createdAt
    updatedAt
  }
}
`;
export const onUpdateReservationSlot = `subscription OnUpdateReservationSlot {
  onUpdateReservationSlot {
    id
    checkIn
    checkOut
    createdAt
    updatedAt
  }
}
`;
export const onDeleteReservationSlot = `subscription OnDeleteReservationSlot {
  onDeleteReservationSlot {
    id
    checkIn
    checkOut
    createdAt
    updatedAt
  }
}
`;
export const onCreateSpaceBlockedDate = `subscription OnCreateSpaceBlockedDate {
  onCreateSpaceBlockedDate {
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
export const onUpdateSpaceBlockedDate = `subscription OnUpdateSpaceBlockedDate {
  onUpdateSpaceBlockedDate {
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
export const onDeleteSpaceBlockedDate = `subscription OnDeleteSpaceBlockedDate {
  onDeleteSpaceBlockedDate {
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
export const onCreateSpaceCalendar = `subscription OnCreateSpaceCalendar {
  onCreateSpaceCalendar {
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
export const onUpdateSpaceCalendar = `subscription OnUpdateSpaceCalendar {
  onUpdateSpaceCalendar {
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
export const onDeleteSpaceCalendar = `subscription OnDeleteSpaceCalendar {
  onDeleteSpaceCalendar {
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
export const onCreateTransaction = `subscription OnCreateTransaction {
  onCreateTransaction {
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
export const onUpdateTransaction = `subscription OnUpdateTransaction {
  onUpdateTransaction {
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
export const onDeleteTransaction = `subscription OnDeleteTransaction {
  onDeleteTransaction {
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
