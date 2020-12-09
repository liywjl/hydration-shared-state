import Sister from "sister";

export const emitter = Sister();

let seconds = 0;
setInterval(() => {
  emitter.trigger("foo", seconds);
  seconds++;
}, 1000);
