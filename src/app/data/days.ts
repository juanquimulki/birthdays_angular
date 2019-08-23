class Day {
    id: number;
    desc: string;
}

export let days: Array<Day> = [];

for (var i=1;i<=31;i++) {
    let one  = new Day();
    one.id   = i;
    one.desc = i.toString();
    days.push(one);
};