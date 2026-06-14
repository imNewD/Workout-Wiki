// Planche push-up variants extracted from pushup-data.js
const planchePushups = [
if (typeof pushups !== "undefined" && Array.isArray(pushups)) {
  pushups.push(...planchePushups);
} else {
  const pushups = [...planchePushups];
}
