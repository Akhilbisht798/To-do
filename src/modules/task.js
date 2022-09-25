

export default class Task {
    constructor(Name, date = "No date") {
        this.Name = Name;
        this.Complete = false;
        this.date = date;
    }

    isCompleted() {
        this.Complete = true;
    }

    setDescription(text) {
        this.Description = text;
    }

    setDate(date) {
        this.Date = date;
    }
}
