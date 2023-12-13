export function validation(pass: boolean, callback: () => void) {
	if (pass) {
		callback();
	}
}
