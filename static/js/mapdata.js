var simplemaps_usmap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "detect",
    
    //State defaults
    state_description: "Drinks: #data#",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Add location markers using latitude and longitude!",
    location_color: "#2041D4",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "20px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "/static/lib/simplemaps/map_images/",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    HI: {
      color: "#990000",
      name: "Hawaii",
      description: "Number of Drinks Per Person: 7.6 <br> Gallons Consumed Per Capita: 2.63"
    },
    AK: {
      color: "#990000",
      name: "Alaska",
      description: "Number of Drinks Per Person: 7.8 <br> Gallons Consumed Per Capita: 2.94"
    },
    FL: {
      color: "#ff3333",
      name: "Florida",
      description: "Number of Drinks Per Person: 6.8 <br> Gallons Consumed Per Capita: 2.65"
    },
    NH: {
      color: "#ff6666",
      name: "New Hampshire",
      description: "Number of Drinks Per Person: 6.4 <br> Gallons Consumed Per Capita: 4.76"
    },
    VT: {
      color: "#ff3333",
      name: "Vermont",
      description: "Number of Drinks Per Person: 6.8 <br> Gallons Consumed Per Capita: 3.08"
    },
    ME: {
      color: "#cc0000",
      name: "Maine",
      description: "Number of Drinks Per Person: 7.4 <br> Gallons Consumed Per Capita: 2.81"
    },
    RI: {
      color: "#ff0000",
      name: "Rhode Island",
      description: "Number of Drinks Per Person: 7 <br> Gallons Consumed Per Capita: 2.57"
    },
    NY: {
      color: "#ff3333",
      name: "New York",
      description: "Number of Drinks Per Person: 6.8 <br> Gallons Consumed Per Capita: 2.22"
    },
    PA: {
      color: "#ff0000",
      name: "Pennsylvania",
      description: "Number of Drinks Per Person: 7 <br> Gallons Consumed Per Capita: 2.36"
    },
    NJ: {
      color: "#cc0000",
      name: "New Jersey",
      description: "Number of Drinks Per Person: 7.2 <br> Gallons Consumed Per Capita: 2.34"
    },
    DE: {
      color: "#ff0000",
      name: "Delaware",
      description: "Number of Drinks Per Person: 7 <br> Gallons Consumed Per Capita: 3.72"
    },
    MD: {
      color: "#ff6666",
      name: "Maryland",
      description: "Number of Drinks Per Person: 6.6 <br> Gallons Consumed Per Capita: 2.15"
    },
    VA: {
      color: "#ff0000",
      name: "Virginia",
      description: "Number of Drinks Per Person: 7.1 <br> Gallons Consumed Per Capita: 2.14"
    },
    WV: {
      color: "#990000",
      name: "West Virginia",
      description: "Number of Drinks Per Person: 7.9 <br> Gallons Consumed Per Capita: 1.76"
    },
    OH: {
      color: "#990000",
      name: "Ohio",
      description: "Number of Drinks Per Person: 7.7 <br> Gallons Consumed Per Capita: 2.04"
    },
    IN: {
      color: "#cc0000",
      name: "Indiana",
      description: "Number of Drinks Per Person: 7.2 <br> Gallons Consumed Per Capita: 2.17"
    },
    IL: {
      color: "#ff0000",
      name: "Illinois",
      description: "Number of Drinks Per Person: 7.1 <br> Gallons Consumed Per Capita: 2.32"
    },
    CT: {
      color: "#ff0000",
      name: "Connecticut",
      description: "Number of Drinks Per Person: 7 <br> Gallons Consumed Per Capita: 2.45"
    },
    WI: {
      color: "#cc0000",
      name: "Wisconsin",
      description: "Number of Drinks Per Person: 7.2 <br> Gallons Consumed Per Capita: 2.98"
    },
    NC: {
      color: "#ff6666",
      name: "North Carolina",
      description: "Number of Drinks Per Person: 6.4 <br> Gallons Consumed Per Capita: 2.13"
    },
    DC: {
      color: "#ff6666",
      name: "District of Columbia",
      description: "Number of Drinks Per Person: 6.2 <br> Gallons Consumed Per Capita: 2.00"
    },
    MA: {
      color: "#ff6666",
      name: "Massachusetts",
      description: "Number of Drinks Per Person: 6.5 <br> Gallons Consumed Per Capita: 2.57"
    },
    TN: {
      color: "#ff0000",
      name: "Tennessee",
      description: "Number of Drinks Per Person: 7 <br> Gallons Consumed Per Capita: 2.14"
    },
    AR: {
      color: "#990000",
      name: "Arkansas",
      description: "Number of Drinks Per Person: 8.3 <br> Gallons Consumed Per Capita: 1.80"
    },
    MO: {
      color: "#990000",
      name: "Missouri",
      description: "Number of Drinks Per Person: 7.8 <br> Gallons Consumed Per Capita: 2.49"
    },
    GA: {
      color: "#ff3333",
      name: "Georgia",
      description: "Number of Drinks Per Person: 6.9 <br> Gallons Consumed Per Capita: 1.94"
    },
    SC: {
      color: "#cc0000",
      name: "South Carolina",
      description: "Number of Drinks Per Person: 7.4 <br> Gallons Consumed Per Capita: 2.22"
    },
    KY: {
      color: "#990000",
      name: "Kentucky",
      description: "Number of Drinks Per Person: 7.8 <br> Gallons Consumed Per Capita: 1.98"
    },
    AL: {
      color: "#cc0000",
      name: "Alabama",
      description: "Number of Drinks Per Person: 7.3 <br> Gallons Consumed Per Capita: 2.01"
    },
    LA: {
      color: "#990000",
      name: "Louisiana",
      description: "Number of Drinks Per Person: 7.6 <br> Gallons Consumed Per Capita: 2.59"
    },
    MS: {
      color: "#990000",
      name: "Mississippi",
      description: "Number of Drinks Per Person: 7.6 <br> Gallons Consumed Per Capita: 2.23"
    },
    IA: {
      color: "#990000",
      name: "Iowa",
      description: "Number of Drinks Per Person: 7.6 <br> Gallons Consumed Per Capita: 2.40"
    },
    MN: {
      color: "#cc0000",
      name: "Minnesota",
      description: "Number of Drinks Per Person: 7.2 <br> Gallons Consumed Per Capita: 2.77"
    },
    OK: {
      color: "#cc0000",
      name: "Oklahoma",
      description: "Number of Drinks Per Person: 7.5 <br> Gallons Consumed Per Capita: 1.88"
    },
    TX: {
      color: "#cc0000",
      name: "Texas",
      description: "Number of Drinks Per Person: 7.2 <br> Gallons Consumed Per Capita: 2.34"
    },
    NM: {
      color: "#ff3333",
      name: "New Mexico",
      description: "Number of Drinks Per Person: 6.9 <br> Gallons Consumed Per Capita: 2.27"
    },
    KS: {
      color: "#ff0000",
      name: "Kansas",
      description: "Number of Drinks Per Person: 7 <br> Gallons Consumed Per Capita: 1.92"
    },
    NE: {
      color: "#990000",
      name: "Nebraska",
      description: "Number of Drinks Per Person: 7.7 <br> Gallons Consumed Per Capita: 2.23"
    },
    SD: {
      color: "#990000",
      name: "South Dakota",
      description: "Number of Drinks Per Person: 7.7 <br> Gallons Consumed Per Capita: 2.87"
    },
    ND: {
      color: "#990000",
      name: "North Dakota",
      description: "Number of Drinks Per Person: 7.7 <br> Gallons Consumed Per Capita: 3.26"
    },
    WY: {
      color: "#ff0000",
      name: "Wyoming",
      description: "Number of Drinks Per Person: 7 <br> Gallons Consumed Per Capita: 2.67"
    },
    MT: {
      color: "#cc0000",
      name: "Montana",
      description: "Number of Drinks Per Person: 7.2 <br> Gallons Consumed Per Capita: 3.11"
    },
    CO: {
      color: "#ff6666",
      name: "Colorado",
      description: "Number of Drinks Per Person: 6.6 <br> Gallons Consumed Per Capita: 2.81"
    },
    UT: {
      color: "#cc0000",
      name: "Utah",
      description: "Number of Drinks Per Person: 7.3 <br> Gallons Consumed Per Capita: 1.34"
    },
    AZ: {
      color: "#ff0000",
      name: "Arizona",
      description: "Number of Drinks Per Person: 7.1 <br> Gallons Consumed Per Capita: 2.31"
    },
    NV: {
      color: "#cc0000",
      name: "Nevada",
      description: "Number of Drinks Per Person: 7.2 <br> Gallons Consumed Per Capita: 3.46"
    },
    OR: {
      color: "#ff6666",
      name: "Oregon",
      description: "Number of Drinks Per Person: 6.3 <br> Gallons Consumed Per Capita: 2.75"
    },
    WA: {
      color: "#ff6666",
      name: "Washington",
      description: "Number of Drinks Per Person: 6.2 <br> Gallons Consumed Per Capita: 2.26"
    },
    CA: {
      color: "#ff6666",
      name: "California",
      description: "Number of Drinks Per Person: 6.5 <br> Gallons Consumed Per Capita: 2.33"
    },
    MI: {
      color: "#cc0000",
      name: "Michigan",
      description: "Number of Drinks Per Person: 7.3 <br> Gallons Consumed Per Capita: 2.34"
    },
    ID: {
      color: "#cc0000",
      name: "Idaho",
      description: "Number of Drinks Per Person: 7.4 <br> Gallons Consumed Per Capita: 2.92"
    },
    GU: {
      hide: "yes",
      name: "Guam",
      description: " "
    },
    VI: {
      hide: "yes",
      name: "Virgin Islands",
      description: " "
    },
    PR: {
      hide: "yes",
      name: "Puerto Rico",
      description: " "
    },
    MP: {
      hide: "yes",
      name: "Northern Mariana Islands",
      description: " "
    },
    AS: {
      hide: "yes",
      name: "American Samoa",
      description: " "
    }
  },
  locations: {},
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  },
  regions: {},
  data: {
    data: {
      HI: "7.6",
      AK: "7.8",
      FL: "6.8",
      VT: "6.8",
      ME: "7.4",
      RI: "7",
      NY: "6.8",
      PA: "7",
      NJ: "7.2",
      DE: "7",
      MD: "6.6",
      VA: "7.1",
      WV: "7.9",
      OH: "7.7",
      IN: "7.2",
      IL: "7.1",
      CT: "7",
      WI: "7.2",
      NC: "6.4",
      DC: "6.2",
      MA: "6.5",
      TN: "7",
      AR: "8.3",
      MO: "7.8",
      GA: "6.9",
      SC: "7.4",
      KY: "7.8",
      AL: "7.3",
      LA: "7.6",
      MS: "7.6",
      IA: "7.6",
      MN: "7.2",
      OK: "7.5",
      TX: "7.2",
      NM: "6.9",
      KS: "7",
      NE: "7.7",
      SD: "7.7",
      WY: "7",
      MT: "7.2",
      CO: "6.6",
      UT: "7.3",
      AZ: "7.1",
      NV: "7.2",
      OR: "6.3",
      WA: "6.2",
      CA: "6.5",
      MI: "7.3",
      ID: "7.4",
      NH: "6.4",
      ND: "7.7"
    }
  }
};