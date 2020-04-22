let initialState = [
    {
        id: 1,
        name: "Cort Blennerhasset",
        gender: "Male",
        email: "cblennerhassett0@amazon.co.jp",
        address: "76792 Golden Leaf Terrace",
        phone: "411-880-1127"
      },
      {
        id: 2,
        name: "Royall Lathwood",
        gender: "Male",
        email: "rlathwood1@purevolume.com",
        address: "683 Crownhardt Street",
        phone: "137-271-9251"
      },
      {
        id: 3,
        name: "Enriqueta Astell",
        gender: "Female",
        email: "eastell2@eepurl.com",
        address: "21872 Rockefeller Park",
        phone: "682-616-5900"
      },
      {
        id: 4,
        name: "Paulie Derrington",
        gender: "Female",
        email: "pderrington3@wikipedia.org",
        address: "41626 Sunnyside Plaza",
        phone: "377-598-3506"
      },
      {
        id: 5,
        name: "Craig Castagno",
        gender: "Male",
        email: "ccastagno4@bbb.org",
        address: "594 Summer Ridge Trail",
        phone: "988-132-9403"
      }
];

const users = (state = initialState, action) => {
    switch (action.type) {
        default: return [...state];
    }
}

export default users;