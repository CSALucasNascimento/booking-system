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
export const onCreateSpaceData = `subscription OnCreateSpaceData {
  onCreateSpaceData {
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
export const onUpdateSpaceData = `subscription OnUpdateSpaceData {
  onUpdateSpaceData {
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
export const onDeleteSpaceData = `subscription OnDeleteSpaceData {
  onDeleteSpaceData {
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
export const onCreateReservationSlot = `subscription OnCreateReservationSlot {
  onCreateReservationSlot {
    id
    checkIn
    checkOut
    createdAt
    updatedAt
    version
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
    version
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
    version
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
