import { format } from "date-fns";

export default class Task {
    constructor(Name) {
        this.Name = Name;
        this.date = format(new Date(), "dd.MM.yyyy");
        this.projectName;
    }

    taskName() {
        return this.Name;
    }

    setDescription(text) {
        this.Description = text;
    }

    setDate(d) {
        this.date = format(new Date(d), "dd.MM.yyyy");;
    }

    BelongTo(name) {
        this.projectName = name;
    }
}
