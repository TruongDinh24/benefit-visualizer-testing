var defaultConfig = {
  xAxis: [
    {
      table: "DeathBenefit",
      attribute: "Age",
      displayName: "Age",
    },
  ],
  categories: [
    {
      name: "Low",
      scenarios: [
        {
          name: "4%",
          yAxis: [
            {
              table: "DeathBenefit",
              attribute: "FundValue_4pc",
              displayName: "Fund",
            },
            {
              table: "DeathBenefit",
              attribute: "DeathBenefit_4pc",
              displayName: "Death",
            },
          ],
        },
      ],
    },
  ],
  hasScenario: true,
};

var defaultData = {
  productId: "AUWPBV01",
  productVersion: "1",
  tables: {
    DeathBenefit: {
      size: 22,
      projections: [
        {
          name: "Year",
          values: [
            {
              value: "1",
            },
            {
              value: "2",
            },
            {
              value: "3",
            },
            {
              value: "4",
            },
            {
              value: "5",
            },
            {
              value: "6",
            },
            {
              value: "7",
            },
            {
              value: "8",
            },
            {
              value: "9",
            },
            {
              value: "10",
            },
            {
              value: "15",
            },
            {
              value: "20",
            },
            {
              value: "25",
            },
            {
              value: "30",
            },
            {
              value: "35",
            },
            {
              value: "40",
            },
            {
              value: "45",
            },
            {
              value: "50",
            },
            {
              value: "55",
            },
            {
              value: "60",
            },
            {
              value: "65",
            },
            {
              value: "66",
            },
          ],
        },
        {
          name: "Age",
          values: [
            {
              value: "34",
            },
            {
              value: "35",
            },
            {
              value: "36",
            },
            {
              value: "37",
            },
            {
              value: "38",
            },
            {
              value: "39",
            },
            {
              value: "40",
            },
            {
              value: "41",
            },
            {
              value: "42",
            },
            {
              value: "43",
            },
            {
              value: "48",
            },
            {
              value: "53",
            },
            {
              value: "58",
            },
            {
              value: "63",
            },
            {
              value: "68",
            },
            {
              value: "73",
            },
            {
              value: "78",
            },
            {
              value: "83",
            },
            {
              value: "88",
            },
            {
              value: "93",
            },
            {
              value: "98",
            },
            {
              value: "99",
            },
          ],
        },
        {
          name: "TotalPremium",
          values: [
            {
              value: "7,896",
            },
            {
              value: "15,792",
            },
            {
              value: "23,687",
            },
            {
              value: "31,583",
            },
            {
              value: "39,479",
            },
            {
              value: "47,375",
            },
            {
              value: "55,271",
            },
            {
              value: "63,167",
            },
            {
              value: "71,062",
            },
            {
              value: "78,958",
            },
            {
              value: "118,437",
            },
            {
              value: "157,917",
            },
            {
              value: "157,917",
            },
            {
              value: "157,917",
            },
            {
              value: "157,917",
            },
            {
              value: "157,917",
            },
            {
              value: "157,917",
            },
            {
              value: "157,917",
            },
            {
              value: "157,917",
            },
            {
              value: "157,917",
            },
            {
              value: "157,917",
            },
            {
              value: "157,917",
            },
          ],
        },
        {
          name: "SumAssured",
          values: [
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
          ],
        },
        {
          name: "FundValue_4pc",
          values: [
            {
              value: "2,952",
            },
            {
              value: "8,817",
            },
            {
              value: "15,685",
            },
            {
              value: "23,183",
            },
            {
              value: "31,336",
            },
            {
              value: "39,760",
            },
            {
              value: "48,870",
            },
            {
              value: "58,283",
            },
            {
              value: "68,011",
            },
            {
              value: "78,064",
            },
            {
              value: "133,642",
            },
            {
              value: "199,376",
            },
            {
              value: "235,709",
            },
            {
              value: "280,147",
            },
            {
              value: "334,091",
            },
            {
              value: "401,156",
            },
            {
              value: "481,855",
            },
            {
              value: "578,706",
            },
            {
              value: "694,916",
            },
            {
              value: "834,283",
            },
            {
              value: "1,001,306",
            },
            {
              value: "1,038,488",
            },
          ],
        },
        {
          name: "DeathBenefit_4pc",
          values: [
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "401,156",
            },
            {
              value: "481,855",
            },
            {
              value: "578,706",
            },
            {
              value: "694,916",
            },
            {
              value: "834,283",
            },
            {
              value: "1,001,306",
            },
            {
              value: "",
            },
          ],
        },
        {
          name: "FundValue_8pc",
          values: [
            {
              value: "3,014",
            },
            {
              value: "9,120",
            },
            {
              value: "16,499",
            },
            {
              value: "24,828",
            },
            {
              value: "34,181",
            },
            {
              value: "44,221",
            },
            {
              value: "55,413",
            },
            {
              value: "67,429",
            },
            {
              value: "80,332",
            },
            {
              value: "94,190",
            },
            {
              value: "180,592",
            },
            {
              value: "304,909",
            },
            {
              value: "440,034",
            },
            {
              value: "638,497",
            },
            {
              value: "926,464",
            },
            {
              value: "1,344,284",
            },
            {
              value: "1,950,493",
            },
            {
              value: "2,830,023",
            },
            {
              value: "4,106,111",
            },
            {
              value: "5,957,518",
            },
            {
              value: "8,643,575",
            },
            {
              value: "9,311,474",
            },
          ],
        },
        {
          name: "DeathBenefit_8pc",
          values: [
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "350,000",
            },
            {
              value: "440,034",
            },
            {
              value: "638,497",
            },
            {
              value: "926,464",
            },
            {
              value: "1,344,284",
            },
            {
              value: "1,950,493",
            },
            {
              value: "2,830,023",
            },
            {
              value: "4,106,111",
            },
            {
              value: "5,957,518",
            },
            {
              value: "8,643,575",
            },
            {
              value: "",
            },
          ],
        },
      ],
    },
    SurrenderValue: {
      size: 22,
      projections: [
        {
          name: "Year",
          values: [
            {
              value: "1",
            },
            {
              value: "2",
            },
            {
              value: "3",
            },
            {
              value: "4",
            },
            {
              value: "5",
            },
            {
              value: "6",
            },
            {
              value: "7",
            },
            {
              value: "8",
            },
            {
              value: "9",
            },
            {
              value: "10",
            },
            {
              value: "15",
            },
            {
              value: "20",
            },
            {
              value: "25",
            },
            {
              value: "30",
            },
            {
              value: "35",
            },
            {
              value: "40",
            },
            {
              value: "45",
            },
            {
              value: "50",
            },
            {
              value: "55",
            },
            {
              value: "60",
            },
            {
              value: "65",
            },
            {
              value: "66",
            },
          ],
        },
        {
          name: "Age",
          values: [
            {
              value: "34",
            },
            {
              value: "35",
            },
            {
              value: "36",
            },
            {
              value: "37",
            },
            {
              value: "38",
            },
            {
              value: "39",
            },
            {
              value: "40",
            },
            {
              value: "41",
            },
            {
              value: "42",
            },
            {
              value: "43",
            },
            {
              value: "48",
            },
            {
              value: "53",
            },
            {
              value: "58",
            },
            {
              value: "63",
            },
            {
              value: "68",
            },
            {
              value: "73",
            },
            {
              value: "78",
            },
            {
              value: "83",
            },
            {
              value: "88",
            },
            {
              value: "93",
            },
            {
              value: "98",
            },
            {
              value: "99",
            },
          ],
        },
        {
          name: "TotalPremium",
          values: [
            {
              value: "7,896",
            },
            {
              value: "15,792",
            },
            {
              value: "23,687",
            },
            {
              value: "31,583",
            },
            {
              value: "39,479",
            },
            {
              value: "47,375",
            },
            {
              value: "55,271",
            },
            {
              value: "63,167",
            },
            {
              value: "71,062",
            },
            {
              value: "78,958",
            },
            {
              value: "118,437",
            },
            {
              value: "157,917",
            },
            {
              value: "157,917",
            },
            {
              value: "157,917",
            },
            {
              value: "157,917",
            },
            {
              value: "157,917",
            },
            {
              value: "157,917",
            },
            {
              value: "157,917",
            },
            {
              value: "157,917",
            },
            {
              value: "157,917",
            },
            {
              value: "157,917",
            },
            {
              value: "157,917",
            },
          ],
        },
        {
          name: "SurrenderValue_4pc",
          values: [
            {
              value: "1,476",
            },
            {
              value: "4,408",
            },
            {
              value: "15,685",
            },
            {
              value: "23,183",
            },
            {
              value: "31,336",
            },
            {
              value: "39,760",
            },
            {
              value: "48,870",
            },
            {
              value: "58,283",
            },
            {
              value: "68,011",
            },
            {
              value: "78,064",
            },
            {
              value: "133,642",
            },
            {
              value: "199,376",
            },
            {
              value: "235,709",
            },
            {
              value: "280,147",
            },
            {
              value: "334,091",
            },
            {
              value: "401,156",
            },
            {
              value: "481,855",
            },
            {
              value: "578,706",
            },
            {
              value: "694,916",
            },
            {
              value: "834,283",
            },
            {
              value: "1,001,306",
            },
            {
              value: "1,038,488",
            },
          ],
        },
        {
          name: "SurrenderValue_8pc",
          values: [
            {
              value: "1,507",
            },
            {
              value: "4,560",
            },
            {
              value: "16,499",
            },
            {
              value: "24,828",
            },
            {
              value: "34,181",
            },
            {
              value: "44,221",
            },
            {
              value: "55,413",
            },
            {
              value: "67,429",
            },
            {
              value: "80,332",
            },
            {
              value: "94,190",
            },
            {
              value: "180,592",
            },
            {
              value: "304,909",
            },
            {
              value: "440,034",
            },
            {
              value: "638,497",
            },
            {
              value: "926,464",
            },
            {
              value: "1,344,284",
            },
            {
              value: "1,950,493",
            },
            {
              value: "2,830,023",
            },
            {
              value: "4,106,111",
            },
            {
              value: "5,957,518",
            },
            {
              value: "8,643,575",
            },
            {
              value: "9,311,474",
            },
          ],
        },
      ],
    },
  },
  premiums: {
    SumAssured_rider: "250,000",
    PremiumPaymentTerm: "20",
    AnnualPremium_rider: "595",
    Premium_rider: "54",
    PolicyTerm: "66",
    PremiumPaymentTerm_rider: "1",
    PolicyTerm_rider: "1",
    SumAssured: "350,000",
    Validation: true,
    FundValue: "351,950",
    Premium: "658",
    ValidationMessage: "",
  },
};
