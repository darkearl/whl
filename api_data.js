define({ "api": [
  {
    "type": "Object",
    "url": "/",
    "title": "Amount",
    "name": "Amount",
    "group": "Data_Type_References",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Type",
            "description": "<p><code>PERCENTAGE</code> / <code>FIXED_AMOUNT</code></p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "Value",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Data_type_references.php",
    "groupTitle": "Data_Type_References",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Object",
    "url": "/",
    "title": "Availability",
    "name": "Availability",
    "group": "Data_Type_References",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "DateRange",
            "optional": false,
            "field": "DateRange",
            "description": "<p>(<a href=\"#api-Data_Type_References-DateRange__\">Detail</a>)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "Quantity",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ReleasePeriod",
            "description": "<p>Optional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Action",
            "description": "<p><code>Set</code> / <code>Increase</code> / <code>Decrease</code></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Data_type_references.php",
    "groupTitle": "Data_Type_References",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Object",
    "url": "/",
    "title": "BookingCondition",
    "name": "BookingCondition",
    "group": "Data_Type_References",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BookingConditionId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "allowedValues": [
              "\"0\"",
              "\"1\"",
              "\"2\"",
              "\"3\"",
              "\"4\""
            ],
            "optional": false,
            "field": "DepositType",
            "description": "<p><code>0</code>: No Deposit <code>1</code>: Fixed Amount <code>2</code>: Percentage <code>3</code>: First Night <code>4</code>: Full Amount</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "allowedValues": [
              "\"1\"",
              "\"2\""
            ],
            "optional": false,
            "field": "DepositAmount",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Policy[]",
            "optional": false,
            "field": "CancellationRules",
            "description": "<p>Array of Cancellation Rule &amp; Fee (<a href=\"#api-Data_Type_References-Policy\">Detail</a>)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "AdditionalPolicies",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"Set\"",
              "\"Delete\""
            ],
            "optional": true,
            "field": "Action",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Data_type_references.php",
    "groupTitle": "Data_Type_References",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Object",
    "url": "/",
    "title": "BookingItem",
    "name": "BookingItem",
    "group": "Data_Type_References",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "RoomType",
            "description": "<p>Room Type Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "RoomId",
            "description": "<p>RoomId</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "RatePlanId",
            "description": "<p>RatePlanId</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "Quantity",
            "description": "<p>Qty of Rooms</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "Adults",
            "description": "<p>Qty of Adults</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "Children",
            "description": "<p>Qty of Children</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "Infants",
            "description": "<p>Qty of Infants</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ExtraAdults",
            "description": "<p>Qty of Extra Adults</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ExtraChildren",
            "description": "<p>Qty of Extra Children</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "Discount",
            "description": "<p>Discount Amount</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "Deposit",
            "description": "<p>Amount that traveler needs to pay at booking time</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "Amount",
            "description": "<p>Booking Item Amount (including Discount, TaxFee if any)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BookingItemStatus",
            "description": "<p><code>Confirmed</code> / <code>Cancelled</code> / <code>Operational</code> / <code>Completed</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "SpecialName",
            "description": "<p>Name of special offer applied for this booking item</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Data_type_references.php",
    "groupTitle": "Data_Type_References",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Object",
    "url": "/",
    "title": "Booking",
    "name": "Booking__",
    "group": "Data_Type_References",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "NotificationType",
            "description": "<p><code>New</code> / <code>Update</code> / <code>Cancel</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BookingId",
            "description": "<p>HLS Booking Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "HotelId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "HotelName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "NameGroup",
            "optional": false,
            "field": "BookingSource",
            "description": "<p>What source caused this booking to be booked. Possible value: Offline, Website, Widget, Mobile,Facebook or OTA/PMS Name (<a href=\"#api-Data_Type_References-NameGroup__\">Detail</a>)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ExtBookingRef",
            "description": "<p>When the booking came from a 3 rd party OTA, then this is their Unique Booking Id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BookingDate",
            "description": "<p>The date time for the booking in yyyy-mm-yyThh:mm:ss format. This is in GMT+0.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BookingStatus",
            "description": "<p><code>Confirmed</code> / <code>Cancelled</code> / <code>Operational</code> / <code>Completed</code></p>"
          },
          {
            "group": "Parameter",
            "type": "GuestDetail",
            "optional": false,
            "field": "Guests",
            "description": "<p>Guest information (<a href=\"#api-Data_Type_References-GuestDetail\">Detail</a>)</p>"
          },
          {
            "group": "Parameter",
            "type": "BookingItem[]",
            "optional": false,
            "field": "Rooms",
            "description": "<p>A list of rooms that were booked (<a href=\"#api-Data_Type_References-BookingItem\">Detail</a>)</p>"
          },
          {
            "group": "Parameter",
            "type": "ExtraService[]",
            "optional": false,
            "field": "BookingExtras",
            "description": "<p>Array of BookingExtra (<a href=\"#api-Data_Type_References-ExtraService\">Detail</a>)</p>"
          },
          {
            "group": "Parameter",
            "type": "Payment[]",
            "optional": false,
            "field": "Payments",
            "description": "<p>Array of Payment Transactions (<a href=\"#api-Data_Type_References-Payment\">Detail</a>)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "AdditionalComments",
            "description": "<p>Traveller additional comments</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CurrencyISO",
            "description": "<p>Hotel Currency</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CheckIn",
            "description": "<p>yyyy-mm-dd. This is in the hotel timezone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CheckOut",
            "description": "<p>yyyy-mm-dd. This is in the hotel timezone</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "Deposit",
            "description": "<p>Amount traveler needs to pay at booking time</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "TaxFee",
            "description": "<p>Additional tax and fee which are included in the booking amount (if any)</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "TaxFeeOnArrival",
            "description": "<p>Optional. Additional tax (outside the booking amount) traveler needs to pay at hotel (if any)</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "Discount",
            "description": "<p>Optional. Discount amount</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "PaymentFee",
            "description": "<p>Optional. Additional fee for payment processing via payment gateway, bank transfer, credit card fee, etc. This fee is calculated based on Deposit amount.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "Amount",
            "description": "<p>Booking amount (including PaymentFee, TaxFee, Discount if any) aka final booking amount that traveler needs to pay</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "IP",
            "description": "<p>IP address of travellers. Null if this info is not available, for example in case of offline booking or OTA booking.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Data_type_references.php",
    "groupTitle": "Data_Type_References",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Object",
    "url": "/",
    "title": "DateRange",
    "name": "DateRange",
    "group": "Data_Type_References",
    "version": "0.0.0",
    "filename": "src/Data_type_references.php",
    "groupTitle": "Data_Type_References",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ],
    "parameter": {
      "fields": {
        "DateRange": [
          {
            "group": "DateRange",
            "type": "String",
            "optional": false,
            "field": "From",
            "defaultValue": "2018-12-31",
            "description": "<p>Date format: yyyy-mm-dd</p>"
          },
          {
            "group": "DateRange",
            "type": "String",
            "optional": false,
            "field": "To",
            "defaultValue": "2018-12-31",
            "description": "<p>Date format: yyyy-mm-dd</p>"
          }
        ]
      }
    }
  },
  {
    "type": "Object",
    "url": "/",
    "title": "ExtraService",
    "name": "ExtraService",
    "group": "Data_Type_References",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ExtraServiceId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ServiceName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Description",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "RateType",
            "description": "<p><code>1</code>: Per Guest Per Booking <code>2</code>: Per Guest Per Night <code>3</code>: Per Quantity</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "Rate",
            "description": "<p>Rate of extra service</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "ChildRate",
            "description": "<p>Child rate of extra service. If this rate is Null, child rate is equal to adult rate (= Rate)</p>"
          },
          {
            "group": "Parameter",
            "type": "NameGroup[]",
            "optional": false,
            "field": "ApplyToRooms",
            "description": "<p>Array of Rooms that this extra service is available (<a href=\"#api-Data_Type_References-NameGroup__\">Detail</a>)</p>"
          },
          {
            "group": "Parameter",
            "type": "NameGroup[]",
            "optional": false,
            "field": "ApplyToRatePlans",
            "description": "<p>Array of Rate Plan that this extra service is available (<a href=\"#api-Data_Type_References-NameGroup__\">Detail</a>)</p>"
          },
          {
            "group": "Parameter",
            "type": "BookingCondition",
            "optional": false,
            "field": "BookingCondition",
            "description": "<p>Specific booking condition of this extra service. If the CancellationRules is Null, this extra service will use the Hotel Cancellation Rules (<a href=\"#api-Data_Type_References-BookingCondition\">Detail</a>)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Data_type_references.php",
    "groupTitle": "Data_Type_References",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Object",
    "url": "/",
    "title": "GuestDetail",
    "name": "GuestDetail",
    "group": "Data_Type_References",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Title",
            "description": "<p>Optional. Possible values: <code>Mr</code> , <code>Mrs</code>, <code>Miss</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "FirstName",
            "description": "<p>Compulsory</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "LastName",
            "description": "<p>Compulsory</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Email",
            "description": "<p>Compulsory</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Phone",
            "description": "<p>Optional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Address",
            "description": "<p>Optional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "City",
            "description": "<p>Optional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "State",
            "description": "<p>Optional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Country",
            "description": "<p>Optional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PostalCode",
            "description": "<p>Optional</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Data_type_references.php",
    "groupTitle": "Data_Type_References",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Object",
    "url": "/",
    "title": "InventoryResponse",
    "name": "InventoryResponse__",
    "group": "Data_Type_References",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "RoomId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "NameGroup[]",
            "optional": false,
            "field": "RatePlans",
            "description": "<p>Array of Rate Plans (<a href=\"#api-Data_Type_References-NameGroup__\">Detail</a>)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Data_type_references.php",
    "groupTitle": "Data_Type_References",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Object",
    "url": "/",
    "title": "Inventory",
    "name": "Inventory__",
    "group": "Data_Type_References",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "RoomId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Availability[]",
            "optional": false,
            "field": "Availabilities",
            "description": "<p>Array of Room Availabilities (<a href=\"#api-Data_Type_References-Availability\">Detail</a>)</p>"
          },
          {
            "group": "Parameter",
            "type": "RatePackage[]",
            "optional": false,
            "field": "RatePackages",
            "description": "<p>Array of Rate Packages (<a href=\"#api-Data_Type_References-RatePackage\">Detail</a>)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Data_type_references.php",
    "groupTitle": "Data_Type_References",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Object",
    "url": "/",
    "title": "LastMinuteDefault",
    "name": "LastMinuteDefault",
    "group": "Data_Type_References",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "NumberDaysInAdvance",
            "description": "<p>Increase / Decrease last minute rates within this number of date from current date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ValueChange",
            "description": "<p>INCREASE / DECREASE</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ValueType",
            "description": "<p>PERCENTAGE / FIXED_AMOUNT</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "Amount",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Data_type_references.php",
    "groupTitle": "Data_Type_References",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Object",
    "url": "/",
    "title": "MealsIncluded",
    "name": "MealsIncluded",
    "group": "Data_Type_References",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "Breakfast",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "Lunch",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "Dinner",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "AllInclusive",
            "description": "<p>All Inclusive include all 3 meals and any drinks. It is exlusive with other 3 properties: Breakfast, Lunch, and Dinner</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Data_type_references.php",
    "groupTitle": "Data_Type_References",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Object",
    "url": "/",
    "title": "NameGroup",
    "name": "NameGroup__",
    "group": "Data_Type_References",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ID",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Optional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Action",
            "description": "<p><code>Set</code> / <code>Delete</code> (Optional)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Data_type_references.php",
    "groupTitle": "Data_Type_References",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Object",
    "url": "/",
    "title": "NotifyBookings",
    "name": "NotifyBookings",
    "group": "Data_Type_References",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "NotificationType",
            "description": "<p><code>New</code> / <code>Update</code> / <code>Cancel</code> Please note once booking is Cancelled, it won’t be possible to change back to Confirmed.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "BookingId",
            "description": "<p>In case the NotificationType is set as <code>New</code>, this field will be ignored and new booking will be created. This field is Compulsory in case of <code>Update</code> or <code>Cancel</code>.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ExtBookingRef",
            "description": "<p>This is your own booking ref (Optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Currency",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "CheckIn",
            "description": "<p>yyyy-mm-dd. This is in the Hotel timezone</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "CheckOut",
            "description": "<p>yyyy-mm-dd. This is in the Hotel timezone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "AdditionalComments",
            "description": "<p>Optional</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "PayAtHotel",
            "description": "<p><code>0</code> / <code>1</code> (Optional)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Data_type_references.php",
    "groupTitle": "Data_Type_References",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Object",
    "url": "/",
    "title": "Credential",
    "group": "Data_Type_References",
    "version": "0.0.0",
    "filename": "src/Data_type_references.php",
    "groupTitle": "Data_Type_References",
    "name": "Object",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ],
    "parameter": {
      "fields": {
        "Credential": [
          {
            "group": "Credential",
            "type": "String",
            "optional": false,
            "field": "ChannelManagerUsername",
            "defaultValue": "ota",
            "description": "<p>Channel manager user name.</p>"
          },
          {
            "group": "Credential",
            "type": "String",
            "optional": false,
            "field": "ChannelManagerPassword",
            "defaultValue": "ota",
            "description": "<p>Channel manager password.</p>"
          },
          {
            "group": "Credential",
            "type": "String",
            "optional": false,
            "field": "HotelId",
            "defaultValue": "5994c2db-cd76-401c-ba2e-e178ae118a8d",
            "description": ""
          },
          {
            "group": "Credential",
            "type": "String",
            "optional": false,
            "field": "HotelAuthenticationChannelKey",
            "defaultValue": "74dd9b27c6d1fb5fb1289fae19878cac",
            "description": "<p>A digest access key to access without hotel username /password.</p>"
          },
          {
            "group": "Credential",
            "type": "String",
            "optional": false,
            "field": "Lang",
            "defaultValue": "en",
            "description": ""
          }
        ]
      }
    }
  },
  {
    "type": "Object",
    "url": "/",
    "title": "Payment",
    "name": "Payment",
    "group": "Data_Type_References",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Method",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PaymentDate",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "Amount",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Status",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Data_type_references.php",
    "groupTitle": "Data_Type_References",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Object",
    "url": "/",
    "title": "Policy",
    "name": "Policy",
    "group": "Data_Type_References",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "PolicyId",
            "description": "<p>Policy ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "DaysPriorCheckin",
            "description": "<p>Number of days before check-in date. -1 is for No-show</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "PenaltyType",
            "description": "<p><code>0</code>: No Penalty <code>1</code>: Fixed Amount <code>2</code>: Percentage <code>3</code>: First Night <code>4</code>: Full Amount</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "PenaltyAmount",
            "description": "<p>Only used in case PenaltyType is <code>1</code> or <code>2</code></p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Action",
            "description": "<p><code>Set</code> / <code>Delete</code></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Data_type_references.php",
    "groupTitle": "Data_Type_References",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Object",
    "url": "/",
    "title": "RateDetail",
    "name": "RateDetail",
    "group": "Data_Type_References",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Amount",
            "optional": false,
            "field": "Amount",
            "description": "<p>(<a href=\"#api-Data_Type_References-Amount\">Detail</a>)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Action",
            "description": "<p><code>Set</code> / <code>Increase</code> / <code>Decrease</code></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Data_type_references.php",
    "groupTitle": "Data_Type_References",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Object",
    "url": "/",
    "title": "RatePackage",
    "name": "RatePackage",
    "group": "Data_Type_References",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "RatePlanId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "RateDetail",
            "optional": false,
            "field": "Rate",
            "description": "<p>Room/Bed Rate. In SaveInventory function, this Rate must be bigger than the MinRoomRate value returned in GetRatePlans (<a href=\"#api-Data_Type_References-RateDetail\">Detail</a>)</p>"
          },
          {
            "group": "Parameter",
            "type": "RateDetail",
            "optional": false,
            "field": "ExtraAdultRate",
            "description": "<p>Extra Adult Rate (Optional – applicable in case of Room Rate) (<a href=\"#api-Data_Type_References-RateDetail\">Detail</a>)</p>"
          },
          {
            "group": "Parameter",
            "type": "RateDetail",
            "optional": false,
            "field": "ExtraChildRate",
            "description": "<p>Extra Child Rate (Optional – applicable in case of Room Rate) (<a href=\"#api-Data_Type_References-RateDetail\">Detail</a>)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "MinNights",
            "description": "<p>Minimum Length of Stay</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "MaxNights",
            "description": "<p>Maximum Length of Stay</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "CloseToArrival",
            "description": "<p><code>0</code>: No <code>1</code>: Yes If this data is true, system won’t allow traveler to book with check-in date on this specific date (http://www.xotels.com/en/glossary/cta-closed-to-arrival).</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "CloseToDeparture",
            "description": "<p><code>0</code>: No <code>1</code>: Yes If this data is true, system won’t allow traveler to book with check-out date on this specifi date. (http://www.xotels.com/en/glossary/ctd-closed-to-departure)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "StopSell",
            "description": "<p><code>0</code>: No <code>1</code>: Yes</p>"
          },
          {
            "group": "Parameter",
            "type": "DateRange",
            "optional": false,
            "field": "DateRange",
            "description": "<p>(<a href=\"#api-Data_Type_References-DateRange__\">Detail</a>)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Data_type_references.php",
    "groupTitle": "Data_Type_References",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Object",
    "url": "/",
    "title": "RatePlan",
    "name": "RatePlan__",
    "group": "Data_Type_References",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "RatePlanId",
            "description": "<p>Name String Rate Plan Name</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "GuestsIncluded",
            "description": "<p>Occupancy</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "AdultGuestsIncluded",
            "description": "<p>Number of adults is allowed</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "ChildGuestsIncluded",
            "description": "<p>Number of children is allowed</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "MaxGuests",
            "description": "<p>Maximum Occupancy</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ExtraGuestsConfig",
            "description": "<p><code>ONLY_ADULT</code>: only allow extra adult. <code>ONLY_CHILD</code>: only allow extra child. <code>ADULT_CHILD</code>: allow both adult or child as extra person</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "MinRoomRate",
            "description": "<p>Optional. If not specified, it will be reset to 0</p>"
          },
          {
            "group": "Parameter",
            "type": "MealsIncluded",
            "optional": false,
            "field": "MealsIncluded",
            "description": "<p>Optional. If not specified, it will be reset to no meal (<a href=\"#api-Data_Type_References-MealsIncluded\">Detail</a>)</p>"
          },
          {
            "group": "Parameter",
            "type": "LastMinuteDefault",
            "optional": false,
            "field": "LastMinuteDefault",
            "description": "<p>Optional. If not specified, no policy on last minute will be set (<a href=\"#api-Data_Type_References-LastMinuteDefault\">Detail</a>)</p>"
          },
          {
            "group": "Parameter",
            "type": "BookingCondition",
            "optional": false,
            "field": "BookingCondition",
            "description": "<p>Optional. If not specified, this rate plan will use the hotel default policy (<a href=\"#api-Data_Type_References-BookingCondition\">Detail</a>)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "RoomId",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Inclusions",
            "description": "<p>USED or NOT_USED</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "InclusionsName",
            "description": "<p>Free text to describe extra inclusion name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "InclusionsDescription",
            "description": "<p>Free text to describe extra inclusion</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "Order",
            "description": "<p>Order of room shown on our system</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Data_type_references.php",
    "groupTitle": "Data_Type_References",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Object",
    "url": "/",
    "title": "RoomType",
    "name": "RoomType__",
    "group": "Data_Type_References",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Name",
            "description": "<p>Room Type Name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "RoomId",
            "description": "<p>Room Type Id</p>"
          },
          {
            "group": "Parameter",
            "type": "RatePlan[]",
            "optional": false,
            "field": "RatePlans",
            "description": "<p>Rate Plan List (<a href=\"#api-Data_Type_References-RatePlan__\">Detail</a>)</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "Order",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Data_type_references.php",
    "groupTitle": "Data_Type_References",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "post",
    "url": "/ota/getInventory",
    "title": "GetInventory",
    "name": "OtaGetInventory",
    "group": "Endpoints",
    "permission": [
      {
        "name": "oAuth2",
        "title": "Token access only",
        "description": "<p>Application require an access token key in header. Please check endpoint getToken for more info.</p>"
      }
    ],
    "description": "<p>This function allows to retrieve the Availability, Rate and restrictions like Min Nights, Max Night, Close to Arrival, Close to Departure, Stop Sell, and Release Period.</p>",
    "parameter": {
      "fields": {
        "GetInventoryRQ": [
          {
            "group": "GetInventoryRQ",
            "type": "String[]",
            "optional": false,
            "field": "RatePlans",
            "description": "<p>Array of Rate Plan Ids</p>"
          },
          {
            "group": "GetInventoryRQ",
            "type": "DateRange",
            "optional": false,
            "field": "DateRange",
            "description": "<p>Date Range to retrieve inventory</p>"
          },
          {
            "group": "GetInventoryRQ",
            "type": "Credential",
            "optional": false,
            "field": "Credential",
            "description": "<p>Request Credential</p>"
          }
        ],
        "DateRange": [
          {
            "group": "DateRange",
            "type": "String",
            "optional": false,
            "field": "From",
            "defaultValue": "2018-12-31",
            "description": "<p>Date format: yyyy-mm-dd</p>"
          },
          {
            "group": "DateRange",
            "type": "String",
            "optional": false,
            "field": "To",
            "defaultValue": "2018-12-31",
            "description": "<p>Date format: yyyy-mm-dd</p>"
          }
        ],
        "Credential": [
          {
            "group": "Credential",
            "type": "String",
            "optional": false,
            "field": "ChannelManagerUsername",
            "defaultValue": "ota",
            "description": "<p>Channel manager user name.</p>"
          },
          {
            "group": "Credential",
            "type": "String",
            "optional": false,
            "field": "ChannelManagerPassword",
            "defaultValue": "ota",
            "description": "<p>Channel manager password.</p>"
          },
          {
            "group": "Credential",
            "type": "String",
            "optional": false,
            "field": "HotelId",
            "defaultValue": "5994c2db-cd76-401c-ba2e-e178ae118a8d",
            "description": ""
          },
          {
            "group": "Credential",
            "type": "String",
            "optional": false,
            "field": "HotelAuthenticationChannelKey",
            "defaultValue": "74dd9b27c6d1fb5fb1289fae19878cac",
            "description": "<p>A digest access key to access without hotel username /password.</p>"
          },
          {
            "group": "Credential",
            "type": "String",
            "optional": false,
            "field": "Lang",
            "defaultValue": "en",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"RatePlans\": {\n    \"item\": \"07b9a897-ed07-1552017844-4696-9830-b50500e203b6\"\n  },\n  \"DateRange\": {\n    \"From\": \"2019-07-10\",\n    \"To\": \"2019-07-31\"\n  },\n  \"Credential\": {\n    \"ChannelManagerUsername\": \"ota\",\n    \"ChannelManagerPassword\": \"ota\",\n    \"HotelId\": \"5994c2db-cd76-401c-ba2e-e178ae118a8d\",\n    \"HotelAuthenticationChannelKey\": \"74dd9b27c6d1fb5fb1289fae19878cac\"\n  },\n  \"Language\": \"en\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Inventory[]",
            "optional": false,
            "field": "Inventories",
            "description": "<p>Array of Inventory (<a href=\"#api-Data_Type_References-Inventory__\">Detail</a>)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response Example:",
          "content": "{\n  \"result\": true,\n  \"data\": {\n    \"Inventories\": [\n      {\n        \"RoomId\": \"1500c17f-5936-1552017829-4198-b8d3-02c19ec07304\",\n        \"Availabilities\": [\n          {\n            \"DateRange\": {\n              \"From\": \"2019-07-10T00:00:00\",\n              \"To\": \"2019-07-10T00:00:00\"\n            },\n            \"Quantity\": 6,\n            \"Action\": \"\"\n          },\n          {\n            \"DateRange\": {\n              \"From\": \"2019-07-11T00:00:00\",\n              \"To\": \"2019-07-12T00:00:00\"\n            },\n            \"Quantity\": 14,\n            \"ReleasePeriod\": 9,\n            \"Action\": \"\"\n          },\n          {\n            \"DateRange\": {\n              \"From\": \"2019-07-13T00:00:00\",\n              \"To\": \"2019-07-14T00:00:00\"\n            },\n            \"Quantity\": 3,\n            \"Action\": \"\"\n          }\n        ],\n        \"RatePackages\": [\n          {\n            \"RatePlanId\": \"07b9a897-ed07-1552017844-4696-9830-b50500e203b6\",\n            \"Rate\": {\n              \"Amount\": {\n                \"Type\": \"FIXED_AMOUNT\",\n                \"Value\": 568888,\n                \"Currency\": \"USD\"\n              },\n              \"Action\": \"\"\n            },\n            \"ExtraAdultRate\": {\n              \"Amount\": {\n                \"Type\": \"FIXED_AMOUNT\",\n                \"Currency\": \"USD\"\n              },\n              \"Action\": \"\"\n            },\n            \"ExtraChildRate\": {\n              \"Amount\": {\n                \"Type\": \"FIXED_AMOUNT\",\n                \"Currency\": \"USD\"\n              },\n              \"Action\": \"\"\n            },\n            \"MinNights\": 1,\n            \"CloseToArrival\": 0,\n            \"CloseToDeparture\": 0,\n            \"StopSell\": 1,\n            \"DateRange\": {\n              \"From\": \"2019-07-10T00:00:00\",\n              \"To\": \"2019-07-10T00:00:00\"\n            }\n          },\n          {\n            \"RatePlanId\": \"07b9a897-ed07-1552017844-4696-9830-b50500e203b6\",\n            \"Rate\": {\n              \"Amount\": {\n                \"Type\": \"FIXED_AMOUNT\",\n                \"Value\": 150,\n                \"Currency\": \"USD\"\n              },\n              \"Action\": \"\"\n            },\n            \"ExtraAdultRate\": {\n              \"Amount\": {\n                \"Type\": \"FIXED_AMOUNT\",\n                \"Value\": 40,\n                \"Currency\": \"USD\"\n              },\n              \"Action\": \"\"\n            },\n            \"ExtraChildRate\": {\n              \"Amount\": {\n                \"Type\": \"FIXED_AMOUNT\",\n                \"Value\": 15,\n                \"Currency\": \"USD\"\n              },\n              \"Action\": \"\"\n            },\n            \"MinNights\": 2,\n            \"MaxNights\": 12,\n            \"CloseToArrival\": 1,\n            \"CloseToDeparture\": 1,\n            \"StopSell\": 0,\n            \"DateRange\": {\n              \"From\": \"2019-07-11T00:00:00\",\n              \"To\": \"2019-07-12T00:00:00\"\n            }\n          }\n        ]\n      }\n    ]\n  },\n  \"message\": \"Success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/Endpoints_ota.php",
    "groupTitle": "Endpoints",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/ota/getInventory"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer <code>{access_token}</code></p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error Response": [
          {
            "group": "Error Response",
            "optional": true,
            "field": "result",
            "description": "<p>The result of this request, typically just the string <code>false</code></p>"
          },
          {
            "group": "Error Response",
            "optional": true,
            "field": "data",
            "description": "<p>The data of this request, typically just the <code>empty array</code></p>"
          },
          {
            "group": "Error Response",
            "optional": true,
            "field": "message",
            "description": "<p>A human-readable explanation specific to this occurrence of the problem.</p>"
          },
          {
            "group": "Error Response",
            "optional": true,
            "field": "error",
            "description": "<p>An application-specific error code (<strong><a href=\"#api-Error_Handling\">Detail</a></strong>)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response Example:",
          "content": "{\n  \"result\": false,\n  \"data\":[],\n  \"message\": \"Sorry, something is missing. Please check and try again.\",\n  \"error\": 603\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/ota/getRatePlans",
    "title": "GetRatePlans",
    "name": "OtaGetRatePlans",
    "group": "Endpoints",
    "permission": [
      {
        "name": "oAuth2",
        "title": "Token access only",
        "description": "<p>Application require an access token key in header. Please check endpoint getToken for more info.</p>"
      }
    ],
    "description": "<p>Return a list of rate plans of a particular hotel.</p>",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"Credential\": {\n    \"ChannelManagerUsername\": \"ota\",\n    \"ChannelManagerPassword\": \"ota\",\n    \"HotelId\": \"5994c2db-cd76-401c-ba2e-e178ae118a8d\",\n    \"HotelAuthenticationChannelKey\": \"74dd9b27c6d1fb5fb1289fae19878cac\"\n  },\n \"Lang\": \"en\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Credential": [
          {
            "group": "Credential",
            "type": "String",
            "optional": false,
            "field": "ChannelManagerUsername",
            "defaultValue": "ota",
            "description": "<p>Channel manager user name.</p>"
          },
          {
            "group": "Credential",
            "type": "String",
            "optional": false,
            "field": "ChannelManagerPassword",
            "defaultValue": "ota",
            "description": "<p>Channel manager password.</p>"
          },
          {
            "group": "Credential",
            "type": "String",
            "optional": false,
            "field": "HotelId",
            "defaultValue": "5994c2db-cd76-401c-ba2e-e178ae118a8d",
            "description": ""
          },
          {
            "group": "Credential",
            "type": "String",
            "optional": false,
            "field": "HotelAuthenticationChannelKey",
            "defaultValue": "74dd9b27c6d1fb5fb1289fae19878cac",
            "description": "<p>A digest access key to access without hotel username /password.</p>"
          },
          {
            "group": "Credential",
            "type": "String",
            "optional": false,
            "field": "Lang",
            "defaultValue": "en",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "RoomType[]",
            "optional": false,
            "field": "Rooms",
            "description": "<p>Array of Room Types (<a href=\"#api-Data_Type_References-RoomType__\">Detail</a>)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response Example:",
          "content": "{\n  \"result\": true,\n  \"data\": {\n    \"Rooms\": [\n      {\n        \"RoomId\": \"1500c17f-5936-1552017829-4198-b8d3-02c19ec07304\",\n        \"Name\": \"Traveliko - Deluxe Room\",\n        \"RatePlans\": [\n          {\n            \"RatePlanId\": \"07b9a897-ed07-1552017844-4696-9830-b50500e203b6\",\n            \"Name\": \"Deluxe Room - Best Available Rate\",\n            \"GuestsIncluded\": 1,\n            \"AdultGuestsIncluded\": 1,\n            \"ChildGuestsIncluded\": 0,\n            \"MaxGuests\": 1,\n            \"ExtraGuestsConfig\": \"ADULT_CHILD\",\n            \"MinRoomRate\": 0,\n            \"MealsIncluded\": {\n              \"Breakfast\": true,\n              \"Lunch\": false,\n              \"Dinner\": false,\n              \"AllInclusive\": false\n            },\n            \"LastMinuteDefault\": {\n              \"NumberDaysInAdvance\": 0,\n              \"ValueChange\": \"INCREASE\",\n              \"ValueType\": \"FIXED_AMOUNT\",\n              \"Amount\": 0\n            },\n            \"BookingCondition\": {\n              \"BookingConditionId\": \"756f287d-e3da-4e2d-9f4f-85085ac2fa5b\",\n              \"DepositType\": 0,\n              \"CancellationRules\": [\n                {\n                  \"PolicyId\": \"2c7401d4-67e5-1526373225-44c1-b937-618ea46cc8a4\",\n                  \"DaysPriorCheckin\": -1,\n                  \"PenaltyType\": 2,\n                  \"PenaltyAmount\": 20,\n                  \"Action\": \"Get\"\n                },\n                {\n                  \"PolicyId\": \"a52bbbc7-641a-1526373225-4a80-a9bc-ef714a69e475\",\n                  \"DaysPriorCheckin\": 0,\n                  \"PenaltyType\": 3,\n                  \"PenaltyAmount\": 0,\n                  \"Action\": \"Get\"\n                },\n                {\n                  \"PolicyId\": \"cc2715ba-e375-1526373319-41e1-aaa2-ca810c006d12\",\n                  \"DaysPriorCheckin\": 1,\n                  \"PenaltyType\": 1,\n                  \"PenaltyAmount\": 50,\n                  \"Action\": \"Get\"\n                },\n                {\n                  \"PolicyId\": \"bc1e147a-b5ef-1526373508-40cc-9aa3-5ef3dcb059f9\",\n                  \"DaysPriorCheckin\": 2,\n                  \"PenaltyType\": 0,\n                  \"PenaltyAmount\": 0,\n                  \"Action\": \"Get\"\n                }\n              ],\n              \"Action\": \"Get\"\n            },\n            \"RoomId\": \"1500c17f-5936-1552017829-4198-b8d3-02c19ec07304\",\n            \"Inclusions\": \"NOT_USED\",\n            \"InclusionsName\": \"\",\n            \"InclusionsDescription\": \"\",\n            \"Order\": 803\n          }\n        ],\n        \"Order\": 1\n      }\n    ]\n  },\n  \"message\": \"Success\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/Endpoints_ota.php",
    "groupTitle": "Endpoints",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/ota/getRatePlans"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer <code>{access_token}</code></p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error Response": [
          {
            "group": "Error Response",
            "optional": true,
            "field": "result",
            "description": "<p>The result of this request, typically just the string <code>false</code></p>"
          },
          {
            "group": "Error Response",
            "optional": true,
            "field": "data",
            "description": "<p>The data of this request, typically just the <code>empty array</code></p>"
          },
          {
            "group": "Error Response",
            "optional": true,
            "field": "message",
            "description": "<p>A human-readable explanation specific to this occurrence of the problem.</p>"
          },
          {
            "group": "Error Response",
            "optional": true,
            "field": "error",
            "description": "<p>An application-specific error code (<strong><a href=\"#api-Error_Handling\">Detail</a></strong>)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response Example:",
          "content": "{\n  \"result\": false,\n  \"data\":[],\n  \"message\": \"Sorry, something is missing. Please check and try again.\",\n  \"error\": 603\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/ota/saveBooking",
    "title": "SaveBooking",
    "name": "OtaSaveBooking",
    "group": "Endpoints",
    "permission": [
      {
        "name": "oAuth2",
        "title": "Token access only",
        "description": "<p>Application require an access token key in header. Please check endpoint getToken for more info.</p>"
      }
    ],
    "description": "<p>Add new, update or cancel bookings from hotel specified in Credential request.</p> <h3>Please note that our system will only check the availability in your request. We won’t check the rate or other restriction info like min nights, max nights, stop sale, etc which have to be checked before you call this function.</h3> <h3>In addition, we won’t allow changing the check-in and check-out dates. You need to cancel and then create new booking for this change.</h3> <h3>Besides, for each booking item (<BookingItem>) you specify in request, the room quantity will be considered as 1. You need to specify other info like number of adults, number of children, extra adults, extra children, booking amount, deposit, etc per 1 room. If you want to book more than 1 room for the same rate plan, you need to more booking items in the same request.</h3>",
    "parameter": {
      "fields": {
        "Request Body": [
          {
            "group": "Request Body",
            "type": "NotifyBookings",
            "optional": false,
            "field": "Booking",
            "description": "<p>Booking details to be saved (<a href=\"#api-Data_Type_References-NotifyBookings\">Detail</a>)</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "allowedValues": [
              "\"New\"",
              "\"Update\"",
              "\"Cancel\""
            ],
            "optional": false,
            "field": "NotifyBookings.NotificationType",
            "description": "<p>Please note once booking is Cancelled, it won’t be possible to change back to Confirmed.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "NotifyBookings.BookingId",
            "description": "<p>In case the NotificationType is set as <code>New</code>, this field will be ignored and new booking will be created. This field is Compulsory in case of <code>Update</code> or <code>Cancel</code>.</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "NotifyBookings.ExtBookingRef",
            "description": "<p>This is your own booking ref</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": false,
            "field": "NotifyBookings.Currency",
            "description": ""
          },
          {
            "group": "Request Body",
            "type": "Date",
            "optional": false,
            "field": "NotifyBookings.CheckIn",
            "description": "<p>yyyy-mm-dd. This is in the Hotel timezone</p>"
          },
          {
            "group": "Request Body",
            "type": "Date",
            "optional": false,
            "field": "NotifyBookings.CheckOut",
            "description": "<p>yyyy-mm-dd. This is in the Hotel timezone</p>"
          },
          {
            "group": "Request Body",
            "type": "String",
            "optional": true,
            "field": "NotifyBookings.AdditionalComments",
            "description": ""
          },
          {
            "group": "Request Body",
            "type": "Integer",
            "allowedValues": [
              "\"0\"",
              "\"1\""
            ],
            "optional": true,
            "field": "NotifyBookings.PayAtHotel",
            "description": ""
          }
        ],
        "Credential": [
          {
            "group": "Credential",
            "type": "String",
            "optional": false,
            "field": "ChannelManagerUsername",
            "defaultValue": "ota",
            "description": "<p>Channel manager user name.</p>"
          },
          {
            "group": "Credential",
            "type": "String",
            "optional": false,
            "field": "ChannelManagerPassword",
            "defaultValue": "ota",
            "description": "<p>Channel manager password.</p>"
          },
          {
            "group": "Credential",
            "type": "String",
            "optional": false,
            "field": "HotelId",
            "defaultValue": "5994c2db-cd76-401c-ba2e-e178ae118a8d",
            "description": ""
          },
          {
            "group": "Credential",
            "type": "String",
            "optional": false,
            "field": "HotelAuthenticationChannelKey",
            "defaultValue": "74dd9b27c6d1fb5fb1289fae19878cac",
            "description": "<p>A digest access key to access without hotel username /password.</p>"
          },
          {
            "group": "Credential",
            "type": "String",
            "optional": false,
            "field": "Lang",
            "defaultValue": "en",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"NotificationType\": \"Update\",\n  \"BookingId\": \"OT25E11564027043\",\n  \"ExtBookingRef\": \"test-ext-ref\",\n  \"Currency\": \"VND\",\n  \"CheckIn\": \"2019-07-26\",\n  \"CheckOut\": \"2019-07-27\",\n  \"AdditionalComments\": \"Comments\",\n  \"PayAtHotel\": 1,\n  \"GuestDetail\": {\n    \"Title\": \"Mr\",\n    \"FirstName\": \"Trung\",\n    \"LastName\": \"PMS New\",\n    \"Email\": \"trung@whl.travel\",\n    \"Phone\": \"+84 234-242-4322 3\",\n    \"Address\": \"test a\",\n    \"City\": \"Ho Chi Minh\",\n    \"State\": \"test a\",\n    \"Country\": \"VNM\",\n    \"PostalCode\": \"234245\"\n  },\n  \"CreditCard\": {\n    \"Type\": \"Visa\",\n    \"Name\": \"Tuan Nguyen\",\n    \"Number\": \"4111111111111111\",\n    \"Code\": \"123\",\n    \"Month\": \"1\",\n    \"Year\": \"2017\"\n  },\n  \"Rooms\": {\n    \"BookingItem\": {\n      \"RatePlanId\": \"07b9a897-ed07-1552017844-4696-9830-b50500e203b6\",\n      \"Adults\": \"2\",\n      \"Children\": \"1\",\n      \"ExtraAdults\": \"1\",\n      \"ExtraChildren\": \"3\",\n      \"TaxFee\": \"30000\",\n      \"TaxFeeArrival\": \"0\",\n      \"Discount\": \"50000\",\n      \"Deposit\": \"150000\",\n      \"Amount\": \"400000\",\n      \"RoomRate\": {\n        \"Commission\": 2000,\n        \"RatePerNights\": [\n          {\n            \"Date\": \"2019-07-26\",\n            \"Rate\": 400000\n          }\n        ]\n      }\n    }\n  },\n  \"ServiceCharge\": \"5500\",\n  \"ServiceChargeArrival\": \"\",\n  \"Credential\": {\n    \"ChannelManagerUsername\": \"ota\",\n    \"ChannelManagerPassword\": \"ota\",\n    \"HotelId\": \"5994c2db-cd76-401c-ba2e-e178ae118a8d\",\n    \"HotelAuthenticationChannelKey\": \"74dd9b27c6d1fb5fb1289fae19878cac\"\n  },\n  \"Lang\": \"en\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "BookingId",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Successful Response Example:",
          "content": "{\n \"result\": true,\n \"data\": {\n   BookingId\": \"PM72621562744102\"\n },\n \"message\": \"Success\",\n \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/Endpoints_ota.php",
    "groupTitle": "Endpoints",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/ota/saveBooking"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Bearer <code>{access_token}</code></p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/json</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error Response": [
          {
            "group": "Error Response",
            "optional": true,
            "field": "result",
            "description": "<p>The result of this request, typically just the string <code>false</code></p>"
          },
          {
            "group": "Error Response",
            "optional": true,
            "field": "data",
            "description": "<p>The data of this request, typically just the <code>empty array</code></p>"
          },
          {
            "group": "Error Response",
            "optional": true,
            "field": "message",
            "description": "<p>A human-readable explanation specific to this occurrence of the problem.</p>"
          },
          {
            "group": "Error Response",
            "optional": true,
            "field": "error",
            "description": "<p>An application-specific error code (<strong><a href=\"#api-Error_Handling\">Detail</a></strong>)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response Example:",
          "content": "{\n  \"result\": false,\n  \"data\":[],\n  \"message\": \"Sorry, something is missing. Please check and try again.\",\n  \"error\": 603\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/oAuth/token",
    "title": "oAuth",
    "name": "oAuthGetToken",
    "group": "Endpoints",
    "description": "<p>Get access token. This endpoint handles authenticating the user. We are using Oauth2 in order to authenticate users. We are using the Client Credentials Grant method. A successful request will return a response with an access token which is required to make all subsequent API calls. With that said, be sure and store the <code>access_token</code> received in the response so that it can be attached to the header in order to authorize all future requests.</p> <blockquote><a href=\"https://www.oauth.com/oauth2-servers/access-tokens/client-credentials/\" target=\"_blank\">Read more about Oauth2 Client Credentials Grant</a></blockquote>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Basic Access Authentication token (ChannelManagerUsername + ChannelManagerPassword)</p>"
          },
          {
            "group": "Header",
            "optional": false,
            "field": "Content-Type",
            "description": "<p>application/x-www-form-urlencoded</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header Request (Example):",
          "content": "{\n  \"Authorization\": \"Basic cG1zOnBtcw==\"\n  \"Content-Type\": \"application/x-www-form-urlencoded\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"client_credentials\""
            ],
            "optional": false,
            "field": "grant_type",
            "defaultValue": "client_credentials",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Body Request (Example):",
          "content": "{\n \"grant_type\": \"client_credentials\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "access_token",
            "description": "<p>the access token for the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "expires_in",
            "description": "<p>the number of seconds remaining, from the time it was requested, before the token will expire</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "token_type",
            "description": "<p>The type of this token, typically just the string <code>bearer</code></p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "scope",
            "description": "<p>The scope the user granted is identical to the scope the app requested, this parameter is optional</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response success (Example):",
          "content": "{\n  \"result\": true,\n  \"data\":{\n  \"access_token\": \"ac3844dfb4265ed17edbf537c8280b063bc0cdb8\",\n  \"expires_in\": 3600,\n  \"token_type\": \"Bearer\",\n  \"scope\": null\n},\n  \"message\": \"\",\n  \"error\": 0\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/Endpoints_oAuth.php",
    "groupTitle": "Endpoints",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/oAuth/token"
      }
    ],
    "error": {
      "fields": {
        "Error Response": [
          {
            "group": "Error Response",
            "optional": true,
            "field": "result",
            "description": "<p>The result of this request, typically just the string <code>false</code></p>"
          },
          {
            "group": "Error Response",
            "optional": true,
            "field": "data",
            "description": "<p>The data of this request, typically just the <code>empty array</code></p>"
          },
          {
            "group": "Error Response",
            "optional": true,
            "field": "message",
            "description": "<p>A human-readable explanation specific to this occurrence of the problem.</p>"
          },
          {
            "group": "Error Response",
            "optional": true,
            "field": "error",
            "description": "<p>An application-specific error code (<strong><a href=\"#api-Error_Handling\">Detail</a></strong>)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error Response Example:",
          "content": "{\n  \"result\": false,\n  \"data\":[],\n  \"message\": \"Sorry, something is missing. Please check and try again.\",\n  \"error\": 603\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "Error",
    "url": "/",
    "title": "General Error",
    "name": "GeneralError",
    "group": "Error_Handling",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "1",
            "description": "<p>Invalid Account. Please check ChannelManagerUsername &amp; ChannelManagerPassword</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "2",
            "description": "<p>HotelAuthenticationChannelKey Invalid</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "3",
            "description": "<p>Hotel don't have permission use api</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "4",
            "description": "<p>Hotel was deleted</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "5",
            "description": "<p>Hotel is not available</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "6",
            "description": "<p>Error Exception</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "10",
            "description": "<p>You don't have permission to access this api</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Error_Handling.php",
    "groupTitle": "Error_Handling",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Error",
    "url": "/",
    "title": "GetInventory Error",
    "name": "GetInventoryError",
    "group": "Error_Handling",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "107",
            "description": "<p>inventory missing DateRange</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "108",
            "description": "<p>inventory missing RatePlans</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "more",
            "description": "<p>Some General Error <a href=\"#api-Error_Handling-GeneralError\">Here</a></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Error_Handling.php",
    "groupTitle": "Error_Handling",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Error",
    "url": "/",
    "title": "GetRatePlans Error",
    "name": "GetRatePlansError",
    "group": "Error_Handling",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "106",
            "description": "<p>Hotel Channel is not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "more",
            "description": "<p>Some General Error <a href=\"#api-Error_Handling-GeneralError\">Here</a></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Error_Handling.php",
    "groupTitle": "Error_Handling",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Error",
    "url": "/",
    "title": "SaveBooking Error",
    "name": "SaveBookingError",
    "group": "Error_Handling",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "601",
            "description": "<p>Some booking reference numbers do not exist.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "603",
            "description": "<p>Some rate plans do not exist.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "605",
            "description": "<p>Guest is not available.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "607",
            "description": "<p>Check-in and check-out dates are invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "609",
            "description": "<p>Some requested rooms do not have enough availability.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "703",
            "description": "<p>Cannot update booking's status.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "804",
            "description": "<p>Total Rate of RoomRate not match with BookingItem::Amount.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "805",
            "description": "<p>Date in RoomRate are invalid.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "806",
            "description": "<p>Rate in RoomRate Not Found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "807",
            "description": "<p>Invalid PayAtHotel.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "more",
            "description": "<p>Some General Error <a href=\"#api-Error_Handling-GeneralError\">Here</a></p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Error_Handling.php",
    "groupTitle": "Error_Handling",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  },
  {
    "type": "Error",
    "url": "/",
    "title": "oAuth Error",
    "name": "oAuthError",
    "group": "Error_Handling",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "invalid_request",
            "description": "<p>The request method must be POST or The grant type was not specified in the request</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "unsupported_grant_type",
            "description": "<p>Grant type not supported</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "unauthorized_client",
            "description": "<p>The grant type is unauthorized for this client_id</p>"
          },
          {
            "group": "Error 4xx",
            "optional": true,
            "field": "invalid_scope",
            "description": "<p>The scope requested is invalid or unsupported for this request</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/Error_Handling.php",
    "groupTitle": "Error_Handling",
    "sampleRequest": [
      {
        "url": "http://hbe-api.whl-staging.com/external/"
      }
    ]
  }
] });
