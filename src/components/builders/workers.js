const workers = [
  {
    id: "1",
    firstName: "Mark",
    lastName: "Doe",
    rating: "***",
    phone: "605 784 8001",
    email: "MarkD@gmail.com",
    bio: "Hey lads I'm Mark and I'm the best builder"
  },

  {
    id: "2",
    firstName: "Alan",
    lastName: "Johnson",
    rating: "*****",
    phone: "605 704 8022",
    email: "alanJ@gmail.com",
    bio: "Hey lads I'm Alan  and I'm the best builder"
  },
  {
    id: "3",
    firstName: "Bob",
    lastName: "Smith",
    rating: "***",
    phone: "605 704 8099",
    email: "bobS@gmail.com",
    bio: "Hey lads I'm Bob and I'm the best builder"
  },
  {
    id: "4",
    firstName: "Joe",
    lastName: "Soap",
    rating: "****",
    phone: "605 704 8099",
    email: "test@test.com",
    bio:
      "Hey lads I'm Joe and I'm the best builder in all the land. \n Hey lads I'm Joe and I'm the best builder in all the land."
  }
];

export default workers;

// not actually using this in the app, but may come in handy later if im refactoring, or just want to have all bios in one place, could maybe r
// save them asa variables and plug them in to the other files, to stop any certain file being too long full of code