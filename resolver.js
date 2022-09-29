import { v4 as uuidv4 } from "uuid";
class Course {
  constructor(
    id,
    { courseName, category, price, language, email, stack, teachingAssists }
  ) {
    this.id = id;
    this.courseName = courseName;
    this.category = category;
    this.price = price;
    this.language = language;
    this.email = email;
    this.stack = stack;
    this.teachingAssists = teachingAssists;
  }
}

const courseHolder = {};

const resolvers = {
  getCourse: ({ id }) => {
    return new Course(id, courseHolder[id]);
  },
  createCourse: ({ input }) => {
    let id = uuidv4();
    courseHolder[id] = input;
    console.log(courseHolder);
    return new Course(id, input);
  },
};

export default resolvers;
