var qranode = require("qranode")

var osc = require("osc");
var udpPort = new osc.UDPPort({
    localAddress: "192.168.0.3",
    localPort: 10150,
    remoteAddress: "192.168.0.101",
    remotePort: 8000,
    metadata: true
});
udpPort.open();

var n = [];
var num = [] ;

function logEvery2Seconds(i) {
    setTimeout(() => {
        console.log('Infinite Loop Test n:', i);
        logEvery2Seconds(++i);
		q();
		sendOSC(num[0],num[1],num[2],num[3],num[4],num[5],num[6],num[7],num[8],num[9],num[10],num[11],num[12],num[13],num[14],num[15]);
		}, 2000)
}
	
async function q() {
	let e = await qranode('uint8', 16)
	console.log(e[0]);
	for (i = 0; i < 16; i++) {
		num[i] = e[i];
	}
	console.log(num);
};
logEvery2Seconds(0);

function sendOSC( A,B,C,D,E,F,G,H, I,J,K,L,M,N,O,P) {
	var msg = {
		address: "/q/random",
		args: [
			{				type: "i",				value: A			},
			{				type: "i",				value: B			},
			{				type: "i",				value: C 			},
			{				type: "i",				value: D			},
			{				type: "i",				value: E			},
			{				type: "i",				value: F			},
			{				type: "i",				value: G			},
			{				type: "i",				value: H			},
			{				type: "i",				value: I			},
			{				type: "i",				value: J			},
			{				type: "i",				value: K			},
			{				type: "i",				value: L			},
			{				type: "i",				value: M			},
			{				type: "i",				value: N			},
			{				type: "i",				value: O			},
			{				type: "i",				value: P			}
		]
	};
	console.log("Sending message", msg.address, msg.args, "to", udpPort.options.remoteAddress + ":" + udpPort.options.remotePort);
    udpPort.send(msg);
};