export class KrTimer {
    constructor() {
        this.startTimes = new Map();  // Store start times for labels
        this.endTimes = new Map();    // Store end times for labels
    }

    // Starts the timer for a specific label (default: 'default')
    start(label = 'default') {
        if (this.startTimes.has(label)) {
            console.warn(`Timer for '${label}' has already been started.`);
            return;
        }
        this.startTimes.set(label, performance.now());
    }

    // Stops the timer for a specific label and calculates duration
    stop(label = 'default') {
        if (!this.startTimes.has(label)) {
            console.warn(`Timer for '${label}' was not started.`);
            return;
        }
        const endTime = performance.now();
        const duration = endTime - this.startTimes.get(label);
        this.endTimes.set(label, duration);
        this.startTimes.delete(label); // Clean up after stop
        return duration; // Returns duration for convenience
    }

    // Resets all timers
    reset(label = null) {
        if (label) {
            this.startTimes.delete(label);
            this.endTimes.delete(label);
        } else {
            this.startTimes.clear();
            this.endTimes.clear();
        }
    }

    // Retrieves the duration for a specific label
    getDuration(label = 'default') {
        if (!this.endTimes.has(label)) {
            console.warn(`Timer for '${label}' has not been stopped.`);
            return null;
        }
        return this.endTimes.get(label);
    }

    // Logs all durations
    logAllDurations() {
        this.endTimes.forEach((duration, label) => {
            console.log(`Duration for '${label}': ${duration.toFixed(2)} ms`);
        });
    }
}
