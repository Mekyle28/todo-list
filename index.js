
// A new task will be created as incomplete
const newTask = (title, description) => {
  const task = {
    title: title,
    description: description,
    complete: false,

    //prints out the provided task's details
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    // marks the provided task as completed
    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};

//driver code below
const task1 = newTask("clean cat litter", "take all the 💩 out of the box");
const task2 = newTask("Do laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // clean cat litter has not been completed
task1.markCompleted();
task1.logState(); // cat litter has been completed

console.log(tasks);




