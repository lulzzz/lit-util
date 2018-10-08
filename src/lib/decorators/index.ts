export * from "./webcomponent";

export const testDec = () =>
	(proto: any, name: string) => {
		console.log(proto, name);
	};
