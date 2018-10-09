export * from "./custom-element";

export const testDec = () =>
	(proto: any, name: string) => {
		console.log(proto, name);
	};
