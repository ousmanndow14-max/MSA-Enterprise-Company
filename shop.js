/*
  EDITABLE PRODUCT CATALOGUE
  Add, remove, or rename items inside the relevant department's categories below.
  Set each pipe's unitPrices values below to change its price by selected unit.
  Each item uses: { name: "Product name", description: "Short details" }
  This is a static enquiry catalogue. Add actual stock and confirmed prices when you have them.
*/
const catalogue = {
  cement: {
    title: "Cement & aggregates",
    description: "Foundation and concrete materials for building projects.",
    categories: {
      Cement: [
        {
          name: "General purpose cement",
          description: "Bagged cement for general construction.",
        },
        { name: "Masonry cement", description: "For mortar and block laying." },
      ],
      Sand: [
        {
          name: "Building sand",
          description: "For mortar and general building work.",
        },
        { name: "Sharp sand", description: "For concrete and floor screed." },
      ],
      Aggregates: [
        {
          name: "Gravel aggregate",
          description: "Coarse aggregate for concrete mixes.",
        },
        {
          name: "Crushed stone",
          description: "Stone aggregate for construction.",
        },
      ],
    },
  },
  blocks: {
    title: "Blocks & steel",
    description: "Masonry and reinforcement materials for your build.",
    categories: {
      Blocks: [
        {
          name: "Hollow concrete blocks",
          description: "Common walling blocks. Ask about available sizes.",
        },
        {
          name: "Solid concrete blocks",
          description: "Solid blocks for general construction.",
        },
      ],
      Reinforcement: [
        {
          name: "Rebar",
          description: "Steel reinforcement bar. Specify diameter and length.",
        },
        { name: "Binding wire", description: "Wire for tying reinforcement." },
      ],
      Accessories: [
        {
          name: "DPC membrane",
          description: "Damp proof course roll. Ask about widths.",
        },
      ],
    },
  },
  roofing: {
    title: "Roofing materials",
    description: "Roofing essentials and accessories for your project.",
    categories: {
      Sheets: [
        {
          name: "Corrugated roofing sheet",
          description: "Specify length, profile and finish.",
        },
        {
          name: "Roofing sheet fasteners",
          description: "Fasteners for roofing sheets.",
        },
      ],
      Timber: [
        {
          name: "Roofing timber",
          description: "Specify the section and length you need.",
        },
      ],
      Accessories: [
        {
          name: "Ridge cap",
          description: "Roof ridge finishing piece. Ask about profile.",
        },
        { name: "Roofing nails", description: "Nails for roofing work." },
      ],
    },
  },
  plumbing: {
    title: "Plumbing materials",
    description:
      "Browse pipe and fitting types. Select a category to see example materials, then add what you need to your enquiry list.",
    categories: {
      "PVC fittings": [
         { name: "125mm P.V.C Pipe", description: "", units: ["M", "L"], defaultUnit: "L", unitPrices: { M: "250", L: "1750" } },
         {
          name: "125mm PVC Elbow ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D250",
        },
         {
          name: "125mm PVC Bend ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D250",
        },
        {
          name: "125mm PVC Tee ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D375",
        },
        {
          name: "125mm PVC Y Tee ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D450",
        },
        {
          name: "125mm Clip",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D200",
        },

        { name: "110mm P.V.C Pipe", description: "", units: ["M", "L"], defaultUnit: "L", unitPrices: { M: "300", L: "1200" } },
        {
          name: "110mm PVC Elbow ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D150",
        },
        {
          name: "110mm PVC Bend ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D150",
        },
        {
          name: "110mm PVC Tee ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D300",
        },
        {
          name: "110mm PVC Y Tee ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D350",
        },
        {
          name: "110mm Floorgully",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D150",
        },
        {
          name: "110mm Clip",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D150",
        },
        { name: "75mm P.V.C Pipe", description: "", units: ["M", "L"], defaultUnit: "L", unitPrices: { M: "150", L: "950" } },
          {
          name: "75mm PVC Elbow ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D100",
        },
         {
          name: "75mm PVC Bend ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D100",
        },
         {
          name: "75mm PVC Tee ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D125",
        },
         {
          name: "75mm PVC Y Tee ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D150",
        },
         {
          name: "75mm Floorgully ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D100",
        },
         {
          name: "75mm Clip ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D100",
        },
        { name: "50mm P.V.C Pipe", description: "", units: ["M", "L"], defaultUnit: "L", unitPrices: { M: "100", L: "650" } },
         {
          name: "50mm PVC Elbow ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D50",
        },
         {
          name: "50mm PVC Bend ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D50",
        },
        {
          name: "50mm PVC Tee ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D50",
        },
         {
          name: "50mm PVC Y Tee ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D75",
        },
        
         {
          name: "50mm Clip ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D50",
        },
        { name: "40mm P.V.C Pipe", description: "", units: ["M", "L"], defaultUnit: "L", unitPrices: { M: "100", L: "500" } },
         {
          name: "40mm PVC Elbow ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D40",
        },
         {
          name: "40mm PVC Bend ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D40",
        },
        {
          name: "40mm PVC Tee ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D50",
        },
         {
          name: "40mm PVC Y Tee ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D50",
        },
         
         {
          name: "40mm Clip ",
          description: "90° and 45° elbows. Specify pipe diameter.",
          price: "D50",
        },
      ],

      "PEX fittings": [
        {
          name: 'Pex Pipe 1/2"',
          description: "",
          units: ["M", "roll"],
          defaultUnit: "M",
          unitPrices: { M: 95, roll: 9500 },
        },
        {
         name: 'Pex Elbow 1/2"',
         description: "Pex Elbow fitting, 1/2 inch.",
         price: "D200",
       },
        {
          name: 'Pex Female Elbow 1/2"',
          description: "Female elbow fitting, 1/2 inch.",
          price: "D200",
        },
        {
         name: 'Pex Back Plate Elbow 1/2"',
         description: " fitting, 1/2 inch.",
         price: "D350",
       },
        {
          name: 'Pex Tee 1/2"',
          description: "Tee fitting, 1/2 inch.",
          price: "D350",
        },
         {
          name: 'Pex Female Straight 1/2"',
          description: "Pex Female Straight fitting, 1/2 inch.",
          price: "D200",
        },
         {
          name: 'Pex Conector 1/2"',
          description: "Pex Conector fitting, 1/2 inch.",
          price: "D200",
        },
        {
          name: "Pex Union 1/2",
          description: "Push-fit branch connector. Specify sizes.",
          price: "D200",
        },
         {
          name: 'Pex Stop Valve 1/2"',
          description: " fitting, 1/2 inch.",
          price: "D350",
        },
         {
          name: 'Complete Coper Stop Valve  1/2"',
          description: " fitting, 1/2 inch.",
          price: "D650",
        },
         {
          name: ' Coper Stop Valve  1/2"',
          description: " fitting, 1/2 inch.",
          price: "D450",
        },
      ],

      "Push fit fittings": [
        {
          name: "polyethylene tube 1inch ",
          description: "",
          units: ["M", "roll"],
          defaultUnit: "M",
          unitPrices: { M: "50", roll: "5000" },
        },
         {
          name: "Push-fit Elbow 1inch",
          description: "Push-fit branch connector. Specify sizes.",
          price: "250",
        },
         {
          name: "Push-fit Conector 1inch",
          description: "Push-fit branch connector. Specify sizes.",
          price: "250",
        },
        {
          name: "Push-fit Union 1inch",
          description: "Push-fit branch connector. Specify sizes.",
          price: "250",
        },
         {
          name: "Push-fit Tee 1inch",
          description: "Push-fit branch connector. Specify sizes.",
          price: "350",
        },
        {
          name: "polyethylene tube 3/4",
          description: "",
          units: ["M", "roll"],
          defaultUnit: "M",
          unitPrices: { M: "40", roll: "4000" },
        },
         {
          name: "Push-fit Elbow 3/4",
          description: "Push-fit branch connector. Specify sizes.",
          price: "150",
        },
         {
          name: "Push-fit Conector 3/4",
          description: "Push-fit branch connector. Specify sizes.",
          price: "150",
        }, {
          name: "Push-fit Tee 3/4",
          description: "Push-fit branch connector. Specify sizes.",
          price: "200",
        },
        {
          name: "Push-fit Union 3/4",
          description: "Push-fit branch connector. Specify sizes.",
          price: "150",
        },
         
      ],
      "Galva fittings": [
        {
          name: 'Complete Galvanised Pipe 1"',
          description: "",
          units: ['1"', '3/4"'],
          defaultUnit: '1"',
          unitPrices: { '1"': "950", '3/4"': "650" },
        },
        {
           name: 'Galvanised Elbow 1"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "75",
        },
        {
           name: 'Galvanised Tee  1"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "75",
        },
        {
           name: 'Galvanised Socket 1"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "75",
        },
        {
           name: 'Galvanised Union 1"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "150",
        },
         {
           name: 'Galvanised Plug 1"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "75",
        },
         {
           name: 'Galvanised Nipple 1"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "75",
        },
         {
           name: 'Galvanised Elbow 3/4"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "65",
        },
         {
           name: 'Galvanised Tee  3/4"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "75",
        },
        {
           name: 'Galvanised Socket 3/4"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "65",
        },
        {
           name: 'Galvanised Union 3/4"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "95",
        },
        {
           name: 'Galvanised Nipple 3/4"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "65",
        },
         {
           name: 'Galvanised Plug 3/4"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "50",
        },
         {
           name: 'Galvanised Elbow 1/2"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "35",
        },
         {
           name: 'Galvanised Tee  1/2"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "50",
        },
        {
           name: 'Galvanised Socket 1/2"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "50",
        },
        {
           name: 'Galvanised Union 1/2"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "50",
        },
        {
           name: 'Galvanised Nipple 1/2"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "35",
        },
         {
           name: 'Galvanised Plug 1/2"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "25",
        },
         {
           name: 'Galvanised Bush 1 by 3/4"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "75",
        },
         {
           name: 'Galvanised Bush 1 by 1/2"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "75",
        },
         {
           name: 'Galvanised Bush 3/4 by 1/2"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "65",
        },
         {
           name: 'Galvanised Tee 40mm 1 & 1/4"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "200",
        },
         {
           name: 'Galvanised Elbow  1 & 1/4"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "125",
        },
         {
           name: 'Galvanised Nipple  1 & 1/4"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "150",
        },
         {
           name: 'Galvanised Socket 1&1/4 by 1"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "250",
        },
        {
           name: 'Galvanised Unioin 1 & 1/4"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "250",
        },
        {
           name: 'Galvanised Plug  1 & 1/4"',
          description: "Push-fit branch connector. Specify sizes.",
          price: "100",
        },
        
      ],
      "Other Materials": [
        {
          name: "Flexible Connector Plastic ",
          description: "Connector fitting. Specify type and size.",
          price: "100",
        },
        {
          name: "Flexible Connector Iron ",
          description: "Connector fitting. Specify type and size.",
          price: "150",
        },
        {
          name: "White Tape",
          description: "Hose fitting. Specify hose diameter.",
          price: "75",
        },
        {
          name: "Shower Valve 2 in 1",
          description: "Hose fitting. Specify hose diameter.",
          price: "350",
        },
        {
          name: "Shower Valve 2 in 1",
          description: "Hose fitting. Specify hose diameter.",
          price: "450",
        },
        {
          name: "Shower Valve 2 in 1",
          description: "Hose fitting. Specify hose diameter.",
          price: "550",
        },
        {
          name: "3/4 Tap",
          description: "Hose fitting. Specify hose diameter.",
          price: "450",
        },
        {
          name: "1/2 Tap",
          description: "Hose fitting. Specify hose diameter.",
          price: "350",
        },
        {
          name: "Basing Tap Single",
          description: "Hose fitting. Specify hose diameter.",
          price: "450",
        },
        {
          name: "Basing Tap Single",
          description: "Hose fitting. Specify hose diameter.",
          price: "650",
        },
        {
          name: "Basing Tap Mixer",
          description: "Hose fitting. Specify hose diameter.",
          price: "1500",
        },
        {
          name: "Basing Tap Mixer",
          description: "Hose fitting. Specify hose diameter.",
          price: "1700",
        },
        {
          name: "Sink Tap",
          description: "Hose fitting. Specify hose diameter.",
          price: "450",
        },
        {
          name: "Sink Tap",
          description: "Hose fitting. Specify hose diameter.",
          price: "650",
        },
        {
          name: "Sink Tap Mixer",
          description: "Hose fitting. Specify hose diameter.",
          price: "2500",
        },
        {
          name: "Automatic Pump Control",
          description: "Hose fitting. Specify hose diameter.",
          price: "2500",
        },
        {
          name: "Buster Pump Complete",
          description: "Hose fitting. Specify hose diameter.",
          price: "6500",
        },
        {
          name: "Silicon",
          description: "Hose fitting. Specify hose diameter.",
          price: "200",
        },
        {
          name: "Tangi Glue 1kg",
          description: "Hose fitting. Specify hose diameter.",
          price: "350",
        },
        {
          name: "Tangi Glue 3/4kg",
          description: "Hose fitting. Specify hose diameter.",
          price: "250",
        },
        {
          name: "Tangi Glue 1/2kg",
          description: "Hose fitting. Specify hose diameter.",
          price: "100",
        },
        
      ],
      
      "Bathroom Facilities": [
        {
          name: "Complete Press Toilet seal ",
          description: "Hose fitting. Specify hose diameter.",
          price: "6500",
        },
        {
          name: "Complete Press Toilet seal ",
          description: "Hose fitting. Specify hose diameter.",
          price: "7500",
        },
        {
          name: "Complete Press Toilet seal ",
          description: "Hose fitting. Specify hose diameter.",
          price: "8500",
        },
        {
          name: "Complete Press Toilet seal ",
          description: "Hose fitting. Specify hose diameter.",
          price: "9500",
        },
        {
          name: "Complete Press Toilet",
          description: "Hose fitting. Specify hose diameter.",
          price: "4500",
        },
        {
          name: "Complete Press Toilet",
          description: "Hose fitting. Specify hose diameter.",
          price: "5500",
        },
        {
          name: "Complete Flush Toilet",
          description: "Hose fitting. Specify hose diameter.",
          price: "3750",
        },
        {
          name: "Pan Connector",
          description: "Hose fitting. Specify hose diameter.",
          price: "250",
        },
        {
          name: "Pan Connector",
          description: "Hose fitting. Specify hose diameter.",
          price: "350",
        },
        {
          name: "Complete Basing Single",
          description: "Hose fitting. Specify hose diameter.",
          price: "2950",
        },
        {
          name: "Complete Basing Mixer",
          description: "Hose fitting. Specify hose diameter.",
          price: "4500",
        },
        {
          name: "Complete Basing Mixer",
          description: "Hose fitting. Specify hose diameter.",
          price: "5500",
        },
        {
          name: "Complete Basing Mixer",
          description: "Hose fitting. Specify hose diameter.",
          price: "6500",
        },
        {
          name: "Complete Kitching Sink Single",
          description: "Hose fitting. Specify hose diameter.",
          price: "2950",
        },
        {
          name: "Complete Kitching Sink Single",
          description: "Hose fitting. Specify hose diameter.",
          price: "3750",
        },
        {
          name: "Complete Kitching Sink Mixer",
          description: "Hose fitting. Specify hose diameter.",
          price: "5500",
        },
        {
          name: "Complete Kitching Sink Mixer",
          description: "Hose fitting. Specify hose diameter.",
          price: "6500",
        },
        {
          name: "50mm Battle Trap",
          description: "Hose fitting. Specify hose diameter.",
          price: "175",
        },
        {
          name: "40mm Battle Trap",
          description: "Hose fitting. Specify hose diameter.",
          price: "150",
        },
        {
          name: "Toilet Accessories",
          description: "Hose fitting. Specify hose diameter.",
          price: "",
        },
        {
          name: "Complete Single Shower",
          description: "Hose fitting. Specify hose diameter.",
          price: "",
        },
        {
          name: "Complete Shower mixer",
          description: "Hose fitting. Specify hose diameter.",
          price: "",
        },
        
       
      ],
    },
  },
  paint: {
    title: "Paint & finishes",
    description:
      "Paint and finishing essentials. Ask the shop about colours and available sizes.",
    categories: {
      Paint: [
        {
          name: "Interior wall paint",
          description: "Ask about colours, finish and container size.",
        },
        {
          name: "Exterior paint",
          description: "For exterior surfaces. Ask about finish and size.",
        },
      ],
      Preparation: [
        {
          name: "Primer",
          description: "Surface primer. Specify wall or metal use.",
        },
        {
          name: "Wall filler",
          description: "For patching and preparing surfaces.",
        },
      ],
      Accessories: [
        { name: "Paint brush", description: "Ask about available widths." },
        {
          name: "Paint roller",
          description: "Roller sleeve and handle. Ask about sizes.",
        },
      ],
    },
  },
  tools: {
    title: "Tools & hardware",
    description: "Useful tools and fixings for building and repair work.",
    categories: {
      "Hand tools": [
        { name: "Masonry trowel", description: "For mortar and block laying." },
        { name: "Spirit level", description: "Ask about available lengths." },
        {
          name: "Measuring tape",
          description: "Measuring tape for site work.",
        },
      ],
      Fixings: [
        { name: "Common nails", description: "Specify length or gauge." },
        { name: "Wood screws", description: "Specify length and head type." },
        {
          name: "Wall plugs",
          description: "Ask about plug size and pack quantity.",
        },
      ],
    },
  },
  electrical: {
    title: "Electrical materials",
    description:
      "Common electrical supplies. Confirm ratings and specifications with a qualified electrician.",
    categories: {
      Cables: [
        {
          name: "Electrical cable",
          description: "Specify core count, cross-section and length.",
        },
        {
          name: "Flexible cable",
          description: "Specify application and size.",
        },
      ],
      "Switches & sockets": [
        {
          name: "Light switch",
          description: "Ask about gang and plate options.",
        },
        {
          name: "Socket outlet",
          description: "Ask about outlet type and rating.",
        },
      ],
      Accessories: [
        {
          name: "Junction box",
          description: "Ask about size and entry points.",
        },
        { name: "Cable clips", description: "Clips for securing cable runs." },
      ],
    },
  },
  other: {
    title: "Other materials",
    description:
      "Looking for something else? Browse a few more useful supplies or send us your request.",
    categories: {
      "General supplies": [
        {
          name: "Water storage tank",
          description: "Ask about capacity and availability.",
        },
        {
          name: "Wheelbarrow",
          description: "For moving materials around site.",
        },
        {
          name: "Protective gloves",
          description: "Ask about sizes and types.",
        },
      ],
    },
  },
};
const standardUnits = ["each", "kg", "pkt"];
for (const products of Object.values(catalogue.plumbing.categories)) {
  for (const product of products) {
    if (!product.units) {
      product.units = standardUnits;
      product.defaultUnit = "each";
      product.unitPrices = Object.fromEntries(standardUnits.map((unit) => [unit, product.price || ""]));
    }
  }
}
for (const departmentData of Object.values(catalogue)) {
  for (const items of Object.values(departmentData.categories)) {
    for (const item of items) item.description = "";
  }
}

const params = new URLSearchParams(location.search);
const departmentKey = catalogue[params.get("department")]
  ? params.get("department")
  : "plumbing";
const department = catalogue[departmentKey];
const categoryNames = Object.keys(department.categories);
const requestedCategory = params.get("category");
let selectedCategory = categoryNames.includes(requestedCategory)
  ? requestedCategory
  : departmentKey === "plumbing" && categoryNames.includes("PEX fittings")
    ? "PEX fittings"
    : categoryNames[0];
let cart = JSON.parse(localStorage.getItem("msa-enquiry-items") || "[]");
const $ = (id) => document.getElementById(id);

$("department-title").textContent = department.title;
$("breadcrumb-current").textContent = department.title;
document.title = `${department.title} | MSA Enterprise Company`;

function renderCategories() {
  const nav = $("category-navigation");
  nav.replaceChildren(
    ...categoryNames.map((name) => {
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = name;
      button.className = `category-pill${name === selectedCategory ? " active" : ""}`;
      button.setAttribute(
        "aria-pressed",
        name === selectedCategory ? "true" : "false",
      );
      button.addEventListener("click", () => {
        selectedCategory = name;
        history.replaceState(
          null,
          "",
          `?department=${encodeURIComponent(departmentKey)}&category=${encodeURIComponent(name)}`,
        );
        renderCategories();
        renderProducts();
      });
      return button;
    }),
  );
}
function renderProducts() {
  $("category-title").textContent = selectedCategory;
  const query = $("product-search").value.trim().toLowerCase();
  const products = (
    query
      ? categoryNames.flatMap((category) =>
          department.categories[category].map((product) => ({
            ...product,
            category,
          })),
        )
      : department.categories[selectedCategory].map((product) => ({
          ...product,
          category: selectedCategory,
        }))
  ).filter((p) =>
    `${p.name} ${p.category}`.toLowerCase().includes(query),
  );
  const grid = $("product-grid");
  grid.replaceChildren();
  $("empty-state").hidden = products.length > 0;
  const header = document.createElement("div");
  header.className = "product-list-header";
  header.setAttribute("role", "row");
  ["Quantity", "Material", "Price", ""].forEach((label) => {
    const cell = document.createElement("span");
    cell.textContent = label;
    cell.setAttribute("role", "columnheader");
    header.append(cell);
  });
  grid.append(header);
  products.forEach((product) => {
    const row = document.createElement("article");
    row.className = "product-row";
    row.setAttribute("role", "row");
    const quantity = document.createElement("div");
    quantity.className = "row-quantity";
    quantity.setAttribute("role", "cell");
    const count = document.createElement("div");
    count.className = "tiny-quantity";
    const decrement = document.createElement("button");
    decrement.type = "button";
    decrement.textContent = "−";
    decrement.setAttribute("aria-label", `Decrease ${product.name} quantity`);
    const amount = document.createElement("input");
    amount.type = "number";
    amount.min = "1";
    amount.step = "1";
    amount.value = String(product.defaultQuantity || 1);
    amount.setAttribute("aria-label", `${product.name} quantity`);
    const increment = document.createElement("button");
    increment.type = "button";
    increment.textContent = "+";
    increment.setAttribute("aria-label", `Increase ${product.name} quantity`);
    decrement.addEventListener("click", () => {
      amount.value = String(Math.max(1, Number(amount.value || 1) - 1));
    });
    increment.addEventListener("click", () => {
      amount.value = String(Math.max(1, Number(amount.value || 1) + 1));
    });
    amount.addEventListener("change", () => {
      amount.value = String(Math.max(1, Math.floor(Number(amount.value) || 1)));
    });
    count.append(decrement, amount, increment);
    const unit = document.createElement("select");
    unit.className = "unit-select";
    unit.setAttribute("aria-label", `${product.name} unit`);
    (product.units || standardUnits).forEach((unitName) => {
      const option = document.createElement("option");
      option.value = unitName;
      option.textContent = unitName;
      option.selected = unitName === product.defaultUnit;
      unit.append(option);
    });
    quantity.append(count, unit);
    const info = document.createElement("div");
    info.className = "row-material";
    info.setAttribute("role", "cell");
    const tag = document.createElement("span");
    tag.className = "product-tag";
    tag.textContent = product.category;
    const title = document.createElement("h3");
    title.textContent = product.name;
    info.append(tag, title);
    const price = document.createElement("strong");
    price.className = "row-price";
    price.setAttribute("role", "cell");
    const displayUnitPrice = (unitName) => {
      const rawPrice = product.unitPrices?.[unitName] ?? product.price ?? "";
      const value = getUnitPrice({ price: rawPrice });
      return value === null ? "Price on request" : formatMoney(value);
    };
    price.textContent = displayUnitPrice(unit.value);
    unit.addEventListener("change", () => { price.textContent = displayUnitPrice(unit.value); });
    const action = document.createElement("div");
    action.className = "row-action";
    action.setAttribute("role", "cell");
    const addButton = document.createElement("button");
    addButton.type = "button";
    addButton.className = "add-row-button";
    addButton.textContent = "Add";
    addButton.setAttribute("aria-label", `Add ${product.name} to enquiry list`);
    addButton.addEventListener("click", () =>
      addToCart({
        ...product,
        department: department.title,
        quantity: Math.max(1, Number(amount.value) || 1),
        unit: unit.value,
        price: product.unitPrices?.[unit.value] ?? product.price ?? "",
        unitPrices: product.unitPrices,
      }),
    );
    action.append(addButton);
    row.append(quantity, info, price, action);
    grid.append(row);
  });
}
function saveCart() {
  localStorage.setItem("msa-enquiry-items", JSON.stringify(cart));
  renderCart();
}
function addToCart(item) {
  const found = cart.find(
    (x) =>
      x.name === item.name &&
      x.category === item.category &&
      x.department === item.department &&
      (x.unit || "each") === item.unit,
  );
  if (found) found.quantity += item.quantity;
  else cart.push(item);
  saveCart();
}
function getUnitPrice(item) {
  const selectedPrice = item.unitPrices?.[item.unit] ?? item.price ?? "";
  const match = String(selectedPrice)
    .replace(/,/g, "")
    .match(/\d+(?:\.\d+)?/);
  return match ? Number(match[0]) : null;
}
function formatMoney(value) {
  return `D${Number(value).toLocaleString("en-GM", { maximumFractionDigits: 2 })}`;
}
function numberToWords(value) {
  const units = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const underThousand = (n) => {
    if (n < 20) return units[n];
    if (n < 100)
      return tens[Math.floor(n / 10)] + (n % 10 ? `-${units[n % 10]}` : "");
    return `${units[Math.floor(n / 100)]} hundred${n % 100 ? ` ${underThousand(n % 100)}` : ""}`;
  };
  if (value < 1000) return underThousand(value);
  if (value < 1000000) {
    const thousands = Math.floor(value / 1000);
    const remainder = value % 1000;
    return `${underThousand(thousands)} thousand${remainder ? ` ${underThousand(remainder)}` : ""}`;
  }
  return String(value);
}
function setInvoiceDate() {
  const now = new Date();
  $("invoice-date").textContent =
    `${String(now.getDate()).padStart(2, "0")}/${String(now.getMonth() + 1).padStart(2, "0")}/${String(now.getFullYear()).slice(-2)}`;
}
function renderCart() {
  $("cart-count").textContent = cart.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );
  const host = $("cart-items");
  host.replaceChildren();
  $("cart-empty").hidden = cart.length > 0;
  let total = 0;
  let hasUnpricedItems = false;
  cart.forEach((item, index) => {
    const unitPrice = getUnitPrice(item);
    const row = document.createElement("tr");
    row.className = "invoice-item-row";
    const quantityCell = document.createElement("td");
    const quantityControl = document.createElement("div");
    quantityControl.className = "invoice-qty-control";
    const minus = document.createElement("button");
    minus.type = "button";
    minus.textContent = "−";
    minus.setAttribute("aria-label", `Reduce ${item.name} quantity`);
    minus.addEventListener("click", () => {
      item.quantity -= 1;
      if (item.quantity <= 0) cart.splice(index, 1);
      saveCart();
    });
    const quantity = document.createElement("span");
    quantity.textContent = String(item.quantity);
    const plus = document.createElement("button");
    plus.type = "button";
    plus.textContent = "+";
    plus.setAttribute("aria-label", `Increase ${item.name} quantity`);
    plus.addEventListener("click", () => {
      item.quantity += 1;
      saveCart();
    });
    quantityControl.append(minus, quantity, plus);
    const unit = document.createElement("small");
    unit.className = "invoice-unit";
    unit.textContent = item.unit || "each";
    quantityCell.append(quantityControl, unit);
    const descriptionCell = document.createElement("td");
    const descriptionHead = document.createElement("div");
    descriptionHead.className = "invoice-description-head";
    const description = document.createElement("strong");
    description.textContent = item.name;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "invoice-remove-button";
    remove.setAttribute(
      "aria-label",
      `Delete ${item.name} from the enquiry invoice`,
    );
    remove.title = "Delete item";
    remove.innerHTML =
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M8 6V4h8v2m-9 0 1 14h8l1-14M10 10v6M14 10v6"/></svg>';
    remove.addEventListener("click", () => {
      cart.splice(index, 1);
      saveCart();
    });
    descriptionHead.append(description, remove);
    const category = document.createElement("small");
    category.className = "invoice-description-meta";
    category.textContent = `${item.category} · ${item.department}`;
    descriptionCell.append(descriptionHead, category);
    const priceCell = document.createElement("td");
    priceCell.textContent =
      unitPrice === null ? "To confirm" : formatMoney(unitPrice);
    const amountCell = document.createElement("td");
    if (unitPrice === null) {
      amountCell.textContent = "To confirm";
      hasUnpricedItems = true;
    } else {
      const lineTotal = unitPrice * item.quantity;
      total += lineTotal;
      amountCell.textContent = formatMoney(lineTotal);
    }
    row.append(quantityCell, descriptionCell, priceCell, amountCell);
    host.append(row);
  });
  $("invoice-total").textContent = formatMoney(total);
  $("invoice-amount-words").textContent =
    `${numberToWords(Math.floor(total))} dalasi${total % 1 ? ` and ${Math.round((total % 1) * 100)} bututs` : ""}`;
  $("invoice-price-note").hidden = !hasUnpricedItems;
}
function openDrawer() {
  setInvoiceDate();
  $("enquiry-drawer").classList.add("open");
  $("enquiry-drawer").setAttribute("aria-hidden", "false");
  $("drawer-backdrop").hidden = false;
  document.body.classList.add("drawer-open");
}
function closeDrawer() {
  $("enquiry-drawer").classList.remove("open");
  $("enquiry-drawer").setAttribute("aria-hidden", "true");
  $("drawer-backdrop").hidden = true;
  document.body.classList.remove("drawer-open");
}
function resetCart() {
  if (!cart.length) return;
  cart = [];
  saveCart();
}
$("open-cart").addEventListener("click", openDrawer);
$("close-cart").addEventListener("click", closeDrawer);
$("reset-cart").addEventListener("click", resetCart);
$("drawer-backdrop").addEventListener("click", closeDrawer);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDrawer();
});
$("product-search").addEventListener("input", renderProducts);
function wrapCanvasText(context, text, maxWidth) {
  const lines = [];
  let line = "";
  String(text)
    .split(/\s+/)
    .forEach((word) => {
      const candidate = line ? `${line} ${word}` : word;
      if (line && context.measureText(candidate).width > maxWidth) {
        lines.push(line);
        line = word;
      } else line = candidate;
    });
  if (line) lines.push(line);
  return lines;
}
async function createInvoiceImage(name, contact, additionalDetails) {
  const width = 1200;
  const margin = 72;
  const rowHeight = 82;
  const tableTop = 340;
  const height = tableTop + 54 + cart.length * rowHeight + 390;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext("2d");
  context.fillStyle = "#fffefa";
  context.fillRect(0, 0, width, height);
  context.strokeStyle = "#424640";
  context.fillStyle = "#20231f";
  context.textBaseline = "top";
  const logo = document.querySelector(".invoice-company img");
  if (logo?.complete && logo.naturalWidth) {
    try {
      context.drawImage(logo, margin, 42, 86, 72);
    } catch {}
  }
  context.textAlign = "left";
  context.font = "bold 36px Arial";
  context.fillText("MSA ENTERPRISE", margin + 108, 42);
  context.font = "22px Arial";
  context.fillText("Safeedin, Serrekunda. The Gambia", margin + 108, 88);
  context.fillText("Tel: +220 2311749 / 3131290 / 3118887", margin + 108, 118);
  context.fillText("Email: mamsainaboujallow@gmail.com", margin + 108, 148);
  context.beginPath();
  context.moveTo(margin, 204);
  context.lineTo(width - margin, 204);
  context.stroke();
  context.textAlign = "center";
  context.font = "bold 42px Georgia";
  context.fillText("INVOICE", width / 2, 226);
  context.textAlign = "left";
  context.font = "bold 22px Arial";
  context.fillText("To:", margin, 290);
  context.font = "22px Arial";
  context.fillText(name || "Customer", margin + 52, 290);
  context.textAlign = "right";
  context.font = "bold 22px Arial";
  context.fillText(
    `Date: ${$("invoice-date").textContent}`,
    width - margin,
    290,
  );

  const columns = [
    margin,
    margin + 145,
    margin + 625,
    margin + 845,
    width - margin,
  ];
  const tableBottom = tableTop + 54 + cart.length * rowHeight;
  context.lineWidth = 1.5;
  context.strokeRect(
    margin,
    tableTop,
    width - margin * 2,
    tableBottom - tableTop,
  );
  columns.slice(1, -1).forEach((x) => {
    context.beginPath();
    context.moveTo(x, tableTop);
    context.lineTo(x, tableBottom);
    context.stroke();
  });
  context.fillStyle = "#f2f1eb";
  context.fillRect(margin, tableTop, width - margin * 2, 54);
  context.fillStyle = "#20231f";
  context.font = "bold 18px Arial";
  ["QTY", "DESCRIPTION", "U. PRICE", "AMOUNT"].forEach((label, index) => {
    context.textAlign = "center";
    context.fillText(
      label,
      (columns[index] + columns[index + 1]) / 2,
      tableTop + 17,
    );
  });
  context.beginPath();
  context.moveTo(margin, tableTop + 54);
  context.lineTo(width - margin, tableTop + 54);
  context.stroke();
  cart.forEach((item, index) => {
    const y = tableTop + 54 + index * rowHeight;
    if (index) {
      context.beginPath();
      context.moveTo(margin, y);
      context.lineTo(width - margin, y);
      context.stroke();
    }
    const price = getUnitPrice(item);
    const lineTotal = price === null ? null : price * item.quantity;
    context.font = "22px Arial";
    context.textAlign = "center";
    context.fillText(
      `${item.quantity} ${item.unit || "each"}`,
      (columns[0] + columns[1]) / 2,
      y + 28,
    );
    context.textAlign = "left";
    context.font = "bold 21px Arial";
    context.fillText(
      wrapCanvasText(context, item.name, columns[2] - columns[1] - 24)[0] ||
        item.name,
      columns[1] + 12,
      y + 16,
    );
    context.font = "15px Arial";
    context.fillStyle = "#72766f";
    context.fillText(
      `${item.category} · ${item.department}`,
      columns[1] + 12,
      y + 48,
    );
    context.fillStyle = "#20231f";
    context.font = "20px Arial";
    context.textAlign = "center";
    context.fillText(
      price === null ? "To confirm" : formatMoney(price),
      (columns[2] + columns[3]) / 2,
      y + 28,
    );
    context.fillText(
      lineTotal === null ? "To confirm" : formatMoney(lineTotal),
      (columns[3] + columns[4]) / 2,
      y + 28,
    );
  });
  const total = cart.reduce((sum, item) => {
    const price = getUnitPrice(item);
    return sum + (price === null ? 0 : price * item.quantity);
  }, 0);
  const totalY = tableBottom + 20;
  context.textAlign = "right";
  context.font = "bold 25px Arial";
  context.fillText(`Total D: ${formatMoney(total)}`, width - margin, totalY);
  context.textAlign = "left";
  context.font = "20px Arial";
  context.fillText(
    `Amount in words: ${$("invoice-amount-words").textContent}`,
    margin,
    totalY + 54,
  );
  if (cart.some((item) => getUnitPrice(item) === null)) {
    context.fillStyle = "#6c716b";
    context.font = "16px Arial";
    context.fillText(
      "Items marked ‘To confirm’ are excluded from the total.",
      margin,
      totalY + 91,
    );
    context.fillStyle = "#20231f";
  }
  context.font = "18px Arial";
  context.fillText(`Customer contact: ${contact}`, margin, totalY + 132);
  context.fillText("Additional details:", margin, totalY + 172);
  wrapCanvasText(context, additionalDetails || "None", width - margin * 2 - 20)
    .slice(0, 3)
    .forEach((line, index) =>
      context.fillText(line, margin, totalY + 200 + index * 27),
    );
  const signatureY = height - 70;
  context.font = "16px Arial";
  context.fillText(
    "Customer Sign: _________________________",
    margin,
    signatureY,
  );
  context.textAlign = "right";
  context.fillText(
    "Manager’s Sign: _________________________",
    width - margin,
    signatureY,
  );
  const blob = await new Promise((resolve, reject) =>
    canvas.toBlob(
      (file) =>
        file
          ? resolve(file)
          : reject(new Error("Could not create invoice image.")),
      "image/png",
    ),
  );
  const date = $("invoice-date").textContent.replaceAll("/", "-");
  return new File([blob], `MSA-Invoice-${date}.png`, { type: "image/png" });
}
let invoiceReadyToFinish = false;
const invoiceSubmitButton = $("shop-enquiry-form").querySelector(
  'button[type="submit"]',
);
$("shop-enquiry-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  setInvoiceDate();
  const data = new FormData(event.currentTarget);
  const name = String(data.get("name")).trim();
  const contact = String(data.get("contact")).trim();
  if (!cart.length) {
    $("shop-form-status").textContent =
      "Add at least one product to your enquiry list first.";
    return;
  }
  if (!invoiceReadyToFinish) {
    invoiceReadyToFinish = true;
    invoiceSubmitButton.textContent = "Finish invoice";
    $("shop-form-status").textContent =
      "Your invoice is ready. Select Finish invoice to download it to your phone.";
    return;
  }
  const additionalDetails = String(data.get("message")).trim() || "None";
  try {
    const invoiceFile = await createInvoiceImage(
      name,
      contact,
      additionalDetails,
    );
    const objectUrl = URL.createObjectURL(invoiceFile);
    const downloadLink = document.createElement("a");
    downloadLink.href = objectUrl;
    downloadLink.download = invoiceFile.name;
    downloadLink.style.display = "none";
    document.body.append(downloadLink);
    downloadLink.click();
    downloadLink.remove();
    setTimeout(() => URL.revokeObjectURL(objectUrl), 60000);
    cart = [];
    saveCart();
    event.currentTarget.reset();
    invoiceReadyToFinish = false;
    invoiceSubmitButton.textContent = "✓ Invoice finished";
    invoiceSubmitButton.disabled = true;
    $("shop-form-status").textContent =
      "✓ Invoice finished and downloaded. Ready for another enquiry.";
    setTimeout(() => {
      invoiceSubmitButton.textContent = "Done";
      invoiceSubmitButton.disabled = false;
    }, 1800);
  } catch (error) {
    $("shop-form-status").textContent =
      "Could not prepare the invoice image. Please try again.";
  }
});
setInvoiceDate();
renderCategories();
renderProducts();
renderCart();
