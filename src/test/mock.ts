export const camelWords = [
	{
		camel: "HelloWorld",
		dash: "hello-world"
	},
	{
		camel: "THiSIsAwesome",
		dash: "t-hi-s-is-awesome"
	},
	{
		camel: "Example_Component",
		dash: "example_component"
	},
	{
		camel: "test",
		dash: "test"
	}
];

export const uniqueArrays = [
	{
		arr: [1, 2, 3, 4, 4, 4],
		unique: [1, 2, 3, 4]
	},
	{
		arr: [10, 20, 20, 30, 10, 10, 20, 30, 40],
		unique: [10, 20, 30, 40]
	}
];

export const clampedValues = [
	{
		value: 200,
		min: 100,
		max: 300,
		clamped: 200
	},
	{
		value: 12,
		min: 54,
		max: 100,
		clamped: 54
	},
	{
		value: 2991,
		min: 0,
		max: 2001,
		clamped: 2001
	},
	{
		value: -1023,
		min: -100,
		max: 100,
		clamped: -100
	},
	{
		value: 0,
		min: 0,
		max: 0,
		clamped: 0
	}
];


export const enStrings = {
	"lang": "en",
	"header": {
		"title": "Hello",
		"subtitle": "World"
	},
	"cta": {
		"awesome": "{{ things }} are awesome!",
		"cats": "Cats"
	}
};

export const daStrings = {
	"lang": "da",
	"header": {
		"title": "Hej",
		"subtitle": "Verden"
	},
	"cta": {
		"awesome": "{{ things }} er for nice!",
		"cats": "Katte"
	}
};

export const validColors = [
	{
		hex: "#ffFfFF",
		rgb: {r: 255, g: 255, b: 255},
		contrast: "#000000"
	},
	{
		hex: "000000",
		rgb: {r: 0, g: 0, b: 0},
		contrast: "#FFFFFF"
	},
	{
		hex: "#8d6e63",
		rgb: {r: 141, g: 110, b: 99},
		contrast: "#FFFFFF"
	},
	{
		hex: "#26a69a",
		rgb: {r: 38, g: 166, b: 154},
		contrast: "#FFFFFF"
	},
	{
		hex: "#ff7676",
		rgb: {r: 255, g: 118, b: 118},
		contrast: "#000000"
	},
	{
		hex: "#29b6f6",
		rgb: {r: 41, g: 182, b: 246},
		contrast: "#000000"
	},
	{
		hex: "#f54ea280",
		rgb: {r: 245, g: 78, b: 162, a: 0.5},
		contrast: "#FFFFFF"
	}
];

export const invalidHexes = [
	"26a69",
	"#26a69af",
	"asdoiajsd",
	"",
	"#fafafa800",
	"#0a0a0aABC",
	"#efbaba_"
];

