const uuidv1 = require('uuid/v1');

export const initialFacetStateData = { 
    content: {
        facets: [
            {
                _uid: "bUnI0n5",
                type: "expandable",
                title: "Type:",
                isExpanded: true,
                filters: [
                  { text: "Duvet Covers", count: 1, isActive: false, uid: uuidv1() },
                  { text: "Pillowcases", count: 2, isActive: false, uid: uuidv1() },
                  { text: "Sheet Sets", count: 2, isActive: false, uid: uuidv1() }

                ]
            },
            {
              _uid: "5tUp1D",
              type: "expandable",
              title: "Color: ",
              isExpanded: false,
              filters: [
                {text: "Black", count: 151, isActive: false, uid: uuidv1()},
                {text: "Blue", count: 147, isActive: false, uid: uuidv1()},
                {text: "Gray", count: 324, isActive: false, uid: uuidv1()},
                {text: "Pink", count: 187, isActive: false , uid: uuidv1()},
                {text: "White", count: 421, isActive: false, uid: uuidv1()},
                {text: "Yellow", count: 360, isActive: false, uid: uuidv1()}
              ]
          },
          {
              _uid: "h3RpE5",
              type: "expandable",
              title: "Size:",
              isExpanded: false,
              filters: [
                {text: "Full", count: 151, isActive: false, uid: uuidv1()},
                {text: "Standard", count: 147, isActive: false, uid: uuidv1()},
                {text: "Toddler", count: 324, isActive: false, uid: uuidv1()},
                {text: "Twin", count: 187, isActive: false , uid: uuidv1()},
                {text: "Queen", count: 421, isActive: false, uid: uuidv1()},
                {text: "King", count: 360, isActive: false, uid: uuidv1()},
                {text: "California King", count: 210, isActive: false, uid: uuidv1()},
                {text: "Extra Long Twin", count: 23, isActive: false, uid: uuidv1()},
                {text: "Twin XL", count: 195, isActive: false, uid: uuidv1()},
                {text: "Euro", count: 17, isActive: false, uid: uuidv1()},
                {text: "Bassinet", count: 118, isActive: false, uid: uuidv1()}
              ]
          },
          {
            _uid: "uuidv1()",
            type: "expandable",
            title: "Price:",
            isExpanded: false,
            filters: [
              {text: "up to $20", count: 151, isActive: false, uid: uuidv1()},
              {text: "$20  to $50", count: 147, isActive: false, uid: uuidv1()},
              {text: "$50 to $100", count: 324, isActive: false, uid: uuidv1()},
              {text: "$100 to $500", count: 187, isActive: false , uid: uuidv1()}
            ]
        },
        {
          _uid: "uuidv1()",
          type: "expandable",
          title: "Features:",
          isExpanded: false,
          filters: [
            {text: "Artist Designed", count: 151, isActive: false, uid: uuidv1()},
            {text: "Drawstring", count: 147, isActive: false, uid: uuidv1()},
            {text: "Elasticized", count: 324, isActive: false, uid: uuidv1()},
            {text: "Embellished", count: 187, isActive: false , uid: uuidv1()},
            {text: "Embroidered", count: 187, isActive: false , uid: uuidv1()},
            {text: "Fade-Resistant", count: 187, isActive: false , uid: uuidv1()},
            {text: "Organic", count: 187, isActive: false , uid: uuidv1()},
            {text: "Sustainable", count: 187, isActive: false , uid: uuidv1()}
          ]
      },
      {
        _uid: "uuidv1()",
        type: "expandable",
        title: "Thread Count:",
        isExpanded: false,
        filters: [
          {text: "102", count: 151, isActive: false, uid: uuidv1()},
          {text: "200", count: 147, isActive: false, uid: uuidv1()},
          {text: "300", count: 324, isActive: false, uid: uuidv1()},
          {text: "350", count: 187, isActive: false , uid: uuidv1()},
          {text: "400", count: 187, isActive: false , uid: uuidv1()},
          {text: "600", count: 187, isActive: false , uid: uuidv1()}
        ]
    },
    {
      _uid: "uuidv1()",
      type: "expandable",
      title: "Pattern:",
      isExpanded: false,
      filters: [
        {text: "Floral/Nature", count: 151, isActive: false, uid: uuidv1()},
        {text: "Gingham/Plaid", count: 147, isActive: false, uid: uuidv1()},
        {text: "Solid", count: 324, isActive: false, uid: uuidv1()},
        {text: "Striped", count: 187, isActive: false , uid: uuidv1()}
      ]
  },
  {
    _uid: "uuidv1()",
    type: "expandable",
    title: "Fill:",
    isExpanded: false,
    filters: [
      {text: "Cotton", count: 151, isActive: false, uid: uuidv1()}
    ]
}
          
        ]
    }
};
