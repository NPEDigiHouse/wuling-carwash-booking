export const CLIENT_KEY = {
  AUTH: {
    LOGIN_MUTATION: "post-login-mutation-id-key",
    REGISTER_MUTATION: "post-register-mutation-id-key",
    GET_USER_CREDENTIAL: "get-user-credential-query-id-key",
  },
  USER: {
    CREATE_USER: "post-user-mutation-id-key",
    UPDATE_USER: "update-user-mutation-id-key",
    DELETE_USER: "delete-user-mutation-id-key",
    GET_USER_DETAIL: "get-user-detail-query-id-key",
  },
  CUSTOMER: {
    GET_CUSTOMER_BOOKINGS: "get-all-customers-booking-query-id-key",
    GET_CUSTOMER_DETAIL: "get-customer-detail-query-id-key",
  },
  PRODUCT: {
    GET_ALL_PRODUCTS: "get-all-products-query-id-key",
    CREATE_PRODUCTS: "create-product-mutation-id-key",
    GET_DETAIL_PRODUCT: "get-product-detail-query-id-key",
  },
  TIMESLOTS: {
    GET_ALL_TIMESLOTS: "get-all-timeslots-query-id-key",
    DELETE_TIMESLOT: "delete-timeslot-mutation-id-key",
    CREATE_TIMESLOT: "create-timeslot-mutation-id-key",
  },
  PUBLIC: {
    GET_ALL_PRODUCTS_HOMEPAGE: "get-all-products-homepage-query-id-key",
  },
  PROMO: {
    CREATE_PROMO: "create-promo-mutation-id-key",
    GET_ALL_PROMO: "get-all-promos-query-id-key",
  },
  BOOKINGS: {
    CREATE_BOOKING: "create-booking-mutation-id-key",
    CREATE_CUSTOMER_BOOKING: "create-customer-booking-mutation-id-key",
    GET_ALL_BOOKING: "get-all-booking-query-id-key",
    GET_BOOKING_DETAIL: "get-booking-detail-query-id-key",
    DELETE_BOOKING: "delete-booking-customer-mutation-id-key",
    CONFIRMATION_CUSTOMER_BOOKING:
      "confirmation-customer-booking-mutation-id-key",
  },
  UI: {
    GET_CONFIRMATION_MODAL_BOOKING_DATA:
      "get-confirmation-modal-booking-query-id-key",
    GET_PROMO_DISCOUNT_FROM_OPTION: "get-promo-discount-option-query-id-key",
    GET_TOTAL_BOOKING: "get-total-bookings-query-id-key",
    GET_TOTAL_CUSTOMER: "get-total-customers-query-id-key",
    GET_TOTAL_PROMO: "get-total-promos-query-id-key",
  },
};
