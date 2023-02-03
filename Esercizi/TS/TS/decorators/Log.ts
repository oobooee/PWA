export enum Severity {
    HIGH, MEDIUM, LOW
} 

export function Log(value: Severity) {
    console.log(`Log Decorator executed, value - ${value}`);

    return function(target) {
        console.log(`Log Decorator executed - ${target}`);
    }
}
