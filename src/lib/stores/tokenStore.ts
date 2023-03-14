import { localStorageStore } from '@skeletonlabs/skeleton';
import type { Writable } from 'svelte/store';
const token: Writable<string> = localStorageStore('token', '');

export default token;
