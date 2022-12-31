import { writable } from "svelte/store";

export const dnsServers = writable<string[]>([]);
