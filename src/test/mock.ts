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

export const validURLs = [
	"http://foo.com/blah_blah",
	"http://foo.com/blah_blah/",
	"http://foo.com/blah_blah_(wikipedia)",
	"http://foo.com/blah_blah_(wikipedia)_(again)",
	"http://www.example.com/wpstyle/?p=364",
	"https://www.example.com/foo/?bar=baz&inga=42&quux",
	"http://✪df.ws/123",
	"http://userid:password@example.com:8080",
	"http://userid:password@example.com:8080/",
	"http://userid@example.com",
	"http://userid@example.com/",
	"http://userid@example.com:8080",
	"http://userid@example.com:8080/",
	"http://userid:password@example.com",
	"http://userid:password@example.com/",
	/*"http://142.42.1.1/",*/
	/*"http://142.42.1.1:8080/",*/
	"http://➡.ws/䨹",
	"http://⌘.ws",
	"http://⌘.ws/",
	"http://foo.com/blah_(wikipedia)#cite-1",
	"http://foo.com/blah_(wikipedia)_blah#cite-1",
	"http://foo.com/unicode_(✪)_in_parens",
	"http://foo.com/(something)?after=parens",
	"http://☺.damowmow.com/",
	"http://code.google.com/events/#&product=browser",
	"http://j.mp",
	"ftp://foo.bar/baz",
	"http://foo.bar/?q=Test%20URL-encoded%20stuff",
	"http://مثال.إختبار",
	"http://例子.测试",
	"http://उदाहरण.परीक्षा",
	"http://-.~_!$&'()*+,;=:%40:80%2f::::::@example.com",
	"http://1337.net",
	"http://a.b-c.de",
	"http://223.255.255.254"
];

export const invalidURLs = [
	"http://",
	"http://.",
	"http://..",
	"http://../",
	"http://?",
	"http://??",
	"http://??/",
	"http://#",
	"http://##",
	"http://##/",
	"http://foo.bar?q=Spaces should be encoded",
	"//",
	"//a",
	"///a",
	"///",
	"http:///a",
	"foo.com",
	"rdar://1234",
	"h://test",
	"http:// shouldfail.com",
	":// should fail",
	"http://foo.bar/foo(bar)baz quux",
	"ftps://foo.bar/",
	"http://-error-.invalid/",
	"http://a.b--c.de/",
	"http://-a.b.co",
	"http://a.b-.co",
	"http://0.0.0.0",
	"http://10.1.1.0",
	"http://10.1.1.255",
	"http://224.1.1.1",
	"http://1.1.1.1.1",
	"http://123.123.123",
	"http://3628126748",
	"http://.www.foo.bar/",
	"http://www.foo.bar./",
	"http://.www.foo.bar./",
	"http://10.1.1.1"
];
