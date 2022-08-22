class Workout {
    constructor({time, bpm, activity, date}) {
        const formatDate = date.replace(/\-/g, '/');
        const dateOptions = {
           day: "2-digit",
           month: "2-digit",
           year: "numeric"
        };

        this.time = time;
        this.bpm = bpm;
        this.activity = activity;
        this.date = new Date(formatDate).toLocaleDateString();
    }
}