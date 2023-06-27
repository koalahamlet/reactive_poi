

const synth = new Tone.Synth().toMaster()

window.synth = synth

// document.getElementById("play-button").addEventListener("click", function() {
//   if (Tone.Transport.state !== 'started') {
//     Tone.Transport.start();
//   } else {
    
//   }
// });

let midi = null; // global MIDIAccess object
let output = null; // global output object
function onMIDISuccess(midiAccess) {
  console.log("MIDI ready!");
  midi = midiAccess; // store in the global (in real usage, would probably keep in an object instance)
  listInputsAndOutputs(midi)
}

function onMIDIFailure(msg) {
  console.error(`Failed to get MIDI access - ${msg}`);
}

function listInputsAndOutputs(midiAccess) {
  for (const entry of midiAccess.inputs) {
    const input = entry[1];
    console.log(
      `Input port [type:'${input.type}']` +
        ` id:'${input.id}'` +
        ` manufacturer:'${input.manufacturer}'` +
        ` name:'${input.name}'` +
        ` version:'${input.version}'`
    );
  }

  for (const entry of midiAccess.outputs) {
    output = entry[1];
    console.log(
      `Output port [type:'${output.type}'] id:'${output.id}' manufacturer:'${output.manufacturer}' name:'${output.name}' version:'${output.version}'`
    );
  }
}

navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

const noteMap = {
  1: "C4",
  2: "D4",
  3: "E4",
  4: "F4",
  5: "G4",
  6: "A4",
  7: "B4",
  8: "C5",
  9: "D5",
  10: "E5",
  11: "F5",
  12: "G5",
  13: "A5",
  14: "B5",
  15: "C6",
  16: "D6",
  17: "E6",
  18: "F6",
  19: "G6",
  20: "A7",
  21: "B7",
      };


const noteMapExpanded = {
    1: "C0",
    2: "C#0",
    3: "D0",
    4: "D#0",
    5: "E0",
    6: "F0",
    7: "F#0",
    8: "G0",
    9: "G#0",
    10: "A0",
    11: "A#0",
    12: "B0",
    13: "C1",
    14: "C#1",
    15: "D1",
    16: "D#1",
    17: "E1",
    18: "F1",
    19: "F#1",
    20: "G1",
    21: "G#1",
    22: "A1",
    23: "A#1",
    24: "B1",
    25: "C2",
    26: "C#2",
    27: "D2",
    28: "D#2",
    29: "E2",
    30: "F2",
    31: "F#2",
    32: "G2",
    33: "G#2",
    34: "A2",
    35: "A#2",
    36: "B2",
    37: "C3",
    38: "C#3",
    39: "D3",
    40: "D#3",
    41: "E3",
    42: "F3",
    43: "F#3",
    44: "G3",
    45: "G#3",
    46: "A3",
    47: "A#3",
    48: "B3",
    49: "C4",
    50: "C#4",
    51: "D4",
    52: "D#4",
    53: "E4",
    54: "F4",
    55: "F#4",
    56: "G4",
    57: "G#4",
    58: "A4",
    59: "A#4",
    60: "B4",
    61: "C5",
    62: "C#5",
    63: "D5",
    64: "D#5",
    65: "E5",
    66: "F5",
    67: "F#5",
    68: "G5",
    69: "G#5",
    70: "A5",
    71: "A#5",
    72: "B5",
    73: "C6",
    74: "C#6",
    75: "D6",
    76: "D#6",
    77: "E6",
    78: "F6",
    79: "F#6",
    80: "G6",
    81: "G#6",
    82: "A6",
    83: "A#6",
    84: "B6",
    85: "C7",
    86: "C#7",
    87: "D7",
    88: "D#7",
    89: "E7",
    90: "F7",
    91: "F#7",
    92: "G7",
    93: "G#7",
    94: "A7",
    95: "A#7",
    96: "B7",
    97: "C8",
    98: "C#8",
    99: "D8",
    100: "D#8",
    101: "E8",
    102: "F8",
    103: "F#8",
    104: "G8",
    105: "G#8",
    106: "A8",
    107: "A#8",
    108: "B8",
  };

const claireDeLune = [
  noteMap[5], noteMap[3], noteMap[2], noteMap[3], noteMap[2], noteMap[1], noteMap[2], noteMap[1], // Bar 1
  noteMap[3], noteMap[2], noteMap[1], noteMap[5], noteMap[3], noteMap[2], noteMap[3], noteMap[1], // Bar 2
  noteMap[5], noteMap[3], noteMap[2], noteMap[1], noteMap[2], noteMap[3], noteMap[5], noteMap[3], // Bar 3
  noteMap[2], noteMap[1], noteMap[3], noteMap[7], noteMap[7], noteMap[6], noteMap[7], noteMap[6], // Bar 4
  noteMap[5], noteMap[7], noteMap[9], noteMap[7], noteMap[5], noteMap[3], noteMap[5], noteMap[7], // Bar 5
  noteMap[3], noteMap[5], noteMap[9], noteMap[5], noteMap[3], noteMap[2], noteMap[3], noteMap[2], // Bar 6
  noteMap[1], noteMap[5], noteMap[7], noteMap[5], noteMap[3], noteMap[2], noteMap[3], noteMap[5], // Bar 7
  noteMap[3], noteMap[2], noteMap[1], noteMap[7], noteMap[8], noteMap[9], noteMap[7], noteMap[5], // Bar 8
  noteMap[3], noteMap[2], noteMap[1], noteMap[7], noteMap[9], noteMap[10], noteMap[12], noteMap[9], // Bar 9
  noteMap[5], noteMap[7], noteMap[8], noteMap[9], noteMap[7], noteMap[5], noteMap[3], noteMap[7], // Bar 10
  noteMap[8], noteMap[9], noteMap[10], noteMap[7], noteMap[5], noteMap[3], noteMap[2], // Bar 11
  noteMap[5], noteMap[3], noteMap[2], noteMap[3], noteMap[2], noteMap[1], noteMap[2], noteMap[1], // Bar 1
  noteMap[3], noteMap[2], noteMap[1], noteMap[5], noteMap[3], noteMap[2], noteMap[3], noteMap[1], // Bar 2
  noteMap[5], noteMap[3], noteMap[2], noteMap[1], noteMap[2], noteMap[3], noteMap[5], noteMap[3], // Bar 3
  noteMap[2], noteMap[1], noteMap[3], noteMap[7], noteMap[7], noteMap[6], noteMap[7], noteMap[6], // Bar 4
  noteMap[5], noteMap[7], noteMap[9], noteMap[7], noteMap[5], noteMap[3], noteMap[5], noteMap[7], // Bar 5
  noteMap[3], noteMap[5], noteMap[9], noteMap[5], noteMap[3], noteMap[2], noteMap[3], noteMap[2], // Bar 6
  noteMap[1], noteMap[5], noteMap[7], noteMap[5], noteMap[3], noteMap[2], noteMap[3], noteMap[5], // Bar 7
  noteMap[3], noteMap[2], noteMap[1], noteMap[7], noteMap[8], noteMap[9], noteMap[7], noteMap[5], // Bar 8
  noteMap[3], noteMap[2], noteMap[1], noteMap[7], noteMap[9], noteMap[10], noteMap[12], noteMap[9], // Bar 9
  noteMap[5], noteMap[7], noteMap[8], noteMap[9], noteMap[7], noteMap[5], noteMap[3], noteMap[7], // Bar 10
  noteMap[8], noteMap[9], noteMap[10], noteMap[7], noteMap[5], noteMap[3], noteMap[2], // Bar 11
  noteMap[5], noteMap[3], noteMap[2], noteMap[3], noteMap[2], noteMap[1], noteMap[2], noteMap[1], // Bar 1
  noteMap[3], noteMap[2], noteMap[1], noteMap[5], noteMap[3], noteMap[2], noteMap[3], noteMap[1], // Bar 2
  noteMap[5], noteMap[3], noteMap[2], noteMap[1], noteMap[2], noteMap[3], noteMap[5], noteMap[3], // Bar 3
  noteMap[2], noteMap[1], noteMap[3], noteMap[7], noteMap[7], noteMap[6], noteMap[7], noteMap[6], // Bar 4
  noteMap[5], noteMap[7], noteMap[9], noteMap[7], noteMap[5], noteMap[3], noteMap[5], noteMap[7], // Bar 5
  noteMap[3], noteMap[5], noteMap[9], noteMap[5], noteMap[3], noteMap[2], noteMap[3], noteMap[2], // Bar 6
  noteMap[1], noteMap[5], noteMap[7], noteMap[5], noteMap[3], noteMap[2], noteMap[3], noteMap[5], // Bar 7
  noteMap[3], noteMap[2], noteMap[1], noteMap[7], noteMap[8], noteMap[9], noteMap[7], noteMap[5], // Bar 8
  noteMap[3], noteMap[2], noteMap[1], noteMap[7], noteMap[9], noteMap[10], noteMap[12], noteMap[9], // Bar 9
  noteMap[5], noteMap[7], noteMap[8], noteMap[9], noteMap[7], noteMap[5], noteMap[3], noteMap[7], // Bar 10
  noteMap[8], noteMap[9], noteMap[10], noteMap[7], noteMap[5], noteMap[3], noteMap[2], // Bar 11
  noteMap[5], noteMap[3], noteMap[2], noteMap[3], noteMap[2], noteMap[1], noteMap[2], noteMap[1], // Bar 1
  noteMap[3], noteMap[2], noteMap[1], noteMap[5], noteMap[3], noteMap[2], noteMap[3], noteMap[1], // Bar 2
  noteMap[5], noteMap[3], noteMap[2], noteMap[1], noteMap[2], noteMap[3], noteMap[5], noteMap[3], // Bar 3
  noteMap[2], noteMap[1], noteMap[3], noteMap[7], noteMap[7], noteMap[6], noteMap[7], noteMap[6], // Bar 4
  noteMap[5], noteMap[7], noteMap[9], noteMap[7], noteMap[5], noteMap[3], noteMap[5], noteMap[7], // Bar 5
  noteMap[3], noteMap[5], noteMap[9], noteMap[5], noteMap[3], noteMap[2], noteMap[3], noteMap[2], // Bar 6
  noteMap[1], noteMap[5], noteMap[7], noteMap[5], noteMap[3], noteMap[2], noteMap[3], noteMap[5], // Bar 7
  noteMap[3], noteMap[2], noteMap[1], noteMap[7], noteMap[8], noteMap[9], noteMap[7], noteMap[5], // Bar 8
  noteMap[3], noteMap[2], noteMap[1], noteMap[7], noteMap[9], noteMap[10], noteMap[12], noteMap[9], // Bar 9
  noteMap[5], noteMap[7], noteMap[8], noteMap[9], noteMap[7], noteMap[5], noteMap[3], noteMap[7], // Bar 10
  noteMap[8], noteMap[9], noteMap[10], noteMap[7], noteMap[5], noteMap[3], noteMap[2], // Bar 11
  noteMap[5], noteMap[3], noteMap[2], noteMap[3], noteMap[2], noteMap[1], noteMap[2], noteMap[1], // Bar 1
  noteMap[3], noteMap[2], noteMap[1], noteMap[5], noteMap[3], noteMap[2], noteMap[3], noteMap[1], // Bar 2
  noteMap[5], noteMap[3], noteMap[2], noteMap[1], noteMap[2], noteMap[3], noteMap[5], noteMap[3], // Bar 3
  noteMap[2], noteMap[1], noteMap[3], noteMap[7], noteMap[7], noteMap[6], noteMap[7], noteMap[6], // Bar 4
  noteMap[5], noteMap[7], noteMap[9], noteMap[7], noteMap[5], noteMap[3], noteMap[5], noteMap[7], // Bar 5
  noteMap[3], noteMap[5], noteMap[9], noteMap[5], noteMap[3], noteMap[2], noteMap[3], noteMap[2], // Bar 6
  noteMap[1], noteMap[5], noteMap[7], noteMap[5], noteMap[3], noteMap[2], noteMap[3], noteMap[5], // Bar 7
  noteMap[3], noteMap[2], noteMap[1], noteMap[7], noteMap[8], noteMap[9], noteMap[7], noteMap[5], // Bar 8
  noteMap[3], noteMap[2], noteMap[1], noteMap[7], noteMap[9], noteMap[10], noteMap[12], noteMap[9], // Bar 9
  noteMap[5], noteMap[7], noteMap[8], noteMap[9], noteMap[7], noteMap[5], noteMap[3], noteMap[7], // Bar 10
  noteMap[8], noteMap[9], noteMap[10], noteMap[7], noteMap[5], noteMap[3], noteMap[2], // Bar 11
];

// const claireDeLune = [
//     noteMapExpanded[52], noteMapExpanded[53], noteMapExpanded[52], noteMapExpanded[48],
//     noteMapExpanded[51], noteMapExpanded[48], noteMapExpanded[44], noteMapExpanded[51], 
//     noteMapExpanded[48], noteMapExpanded[44], noteMapExpanded[48], noteMapExpanded[46], 
//     noteMapExpanded[48], noteMapExpanded[46], noteMapExpanded[43], 
//     // etc.
//   ];
const nyanCat = [
    noteMapExpanded[58], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[62], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], // Bar 4
    noteMapExpanded[58], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[62], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], // Bar 8
    noteMapExpanded[58], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[62], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], // Bar 12
    noteMapExpanded[58], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[62], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], // Bar 16
    noteMapExpanded[58], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[62], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], // Bar 4
    noteMapExpanded[58], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[62], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], // Bar 8
    noteMapExpanded[58], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[62], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], // Bar 12
    noteMapExpanded[58], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[62], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], // Bar 16
    noteMapExpanded[58], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[62], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], // Bar 4
    noteMapExpanded[58], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[62], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], // Bar 8
    noteMapExpanded[58], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[62], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], // Bar 12
    noteMapExpanded[58], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[62], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], 
    noteMapExpanded[65], noteMapExpanded[70], noteMapExpanded[68], noteMapExpanded[70], // Bar 16
  ];

const ode2Joy = [
    noteMapExpanded[60], noteMapExpanded[60], noteMapExpanded[62], noteMapExpanded[64],
    noteMapExpanded[64], noteMapExpanded[62], noteMapExpanded[60], noteMapExpanded[59],
    noteMapExpanded[57], noteMapExpanded[57], noteMapExpanded[59], noteMapExpanded[60],
    noteMapExpanded[60], noteMapExpanded[59], noteMapExpanded[59], noteMapExpanded[57], // Bar 4
  
    noteMapExpanded[60], noteMapExpanded[60], noteMapExpanded[62], noteMapExpanded[64],
    noteMapExpanded[64], noteMapExpanded[62], noteMapExpanded[60], noteMapExpanded[59],
    noteMapExpanded[57], noteMapExpanded[57], noteMapExpanded[59], noteMapExpanded[60],
    noteMapExpanded[59], noteMapExpanded[57], noteMapExpanded[57], noteMapExpanded[59], // Bar 8
    
    noteMapExpanded[59], noteMapExpanded[60], noteMapExpanded[62], noteMapExpanded[62],
    noteMapExpanded[59], noteMapExpanded[59], noteMapExpanded[60], noteMapExpanded[62],
    noteMapExpanded[60], noteMapExpanded[57], noteMapExpanded[57], noteMapExpanded[60],
    noteMapExpanded[57], noteMapExpanded[59], noteMapExpanded[59], noteMapExpanded[60], // Bar 12
  
    noteMapExpanded[60], noteMapExpanded[62], noteMapExpanded[64],
    noteMapExpanded[64], noteMapExpanded[62], noteMapExpanded[60], noteMapExpanded[59],
    noteMapExpanded[57], noteMapExpanded[57], noteMapExpanded[59], noteMapExpanded[60],
    noteMapExpanded[59], noteMapExpanded[57], noteMapExpanded[57], noteMapExpanded[59], // Bar 16
  
    noteMapExpanded[60], noteMapExpanded[60], noteMapExpanded[62], noteMapExpanded[64],
    noteMapExpanded[64], noteMapExpanded[62], noteMapExpanded[60], noteMapExpanded[59],
    noteMapExpanded[57], noteMapExpanded[57], noteMapExpanded[59], noteMapExpanded[60],
    noteMapExpanded[59], noteMapExpanded[57], noteMapExpanded[57], noteMapExpanded[59], // Bar 20
  
    noteMapExpanded[59], noteMapExpanded[60], noteMapExpanded[62], noteMapExpanded[62],
    noteMapExpanded[59], noteMapExpanded[59], noteMapExpanded[60], noteMapExpanded[62],
    noteMapExpanded[60], noteMapExpanded[57], noteMapExpanded[57], noteMapExpanded[60],
    noteMapExpanded[57], noteMapExpanded[59], noteMapExpanded[59], noteMapExpanded[60], // Bar 24
  
    noteMapExpanded[60], noteMapExpanded[62], noteMapExpanded[64],
    noteMapExpanded[64], noteMapExpanded[62], noteMapExpanded[60], noteMapExpanded[59],
    noteMapExpanded[57], noteMapExpanded[57], noteMapExpanded[59], noteMapExpanded[60],
    noteMapExpanded[59], noteMapExpanded[57], noteMapExpanded[57], noteMapExpanded[59], // Bar 28
    ];


    const marioTheme = [
        noteMapExpanded[65], noteMapExpanded[65], null, noteMapExpanded[65], null, noteMapExpanded[61], noteMapExpanded[65], null, noteMapExpanded[68], null, noteMapExpanded[56], null, noteMapExpanded[53], null,
        noteMapExpanded[58], null, noteMapExpanded[60], null, noteMapExpanded[59], noteMapExpanded[58], null, noteMapExpanded[56], noteMapExpanded[65], null, noteMapExpanded[68], null, noteMapExpanded[70], null,
        noteMapExpanded[66], noteMapExpanded[68], null, noteMapExpanded[65], null, noteMapExpanded[61], null, noteMapExpanded[63], null, noteMapExpanded[60], noteMapExpanded[61], null, noteMapExpanded[56], null,
        noteMapExpanded[53], null, noteMapExpanded[58], null, noteMapExpanded[60], null, noteMapExpanded[59], noteMapExpanded[58], null, noteMapExpanded[56], noteMapExpanded[65], null, noteMapExpanded[68], null,
        noteMapExpanded[70], null, noteMapExpanded[66], noteMapExpanded[68], null, noteMapExpanded[65], null, noteMapExpanded[61], null, noteMapExpanded[63], null, noteMapExpanded[60], noteMapExpanded[68], null,
        noteMapExpanded[67], null, noteMapExpanded[66], null, noteMapExpanded[64], null, noteMapExpanded[65], noteMapExpanded[57], null, noteMapExpanded[58], null, noteMapExpanded[61], noteMapExpanded[58], null,
        noteMapExpanded[61], null, noteMapExpanded[63], null, noteMapExpanded[68], null, noteMapExpanded[67], null, noteMapExpanded[66], null, noteMapExpanded[64], noteMapExpanded[65], null, noteMapExpanded[73], null,
        noteMapExpanded[73], null, noteMapExpanded[73], noteMapExpanded[68], null, noteMapExpanded[67], null, noteMapExpanded[66], null, noteMapExpanded[64],
        noteMapExpanded[70], null, noteMapExpanded[66], noteMapExpanded[68], null, noteMapExpanded[65], null, noteMapExpanded[61], null, noteMapExpanded[63], null, noteMapExpanded[60], noteMapExpanded[68], null,
        noteMapExpanded[67], null, noteMapExpanded[66], null, noteMapExpanded[64], null, noteMapExpanded[65], noteMapExpanded[57], null, noteMapExpanded[58], null, noteMapExpanded[61], noteMapExpanded[58], null,
        noteMapExpanded[61], null, noteMapExpanded[63], null, noteMapExpanded[68], null, noteMapExpanded[67], null, noteMapExpanded[66], null, noteMapExpanded[64], noteMapExpanded[65], null, noteMapExpanded[73], null,
        noteMapExpanded[73], null, noteMapExpanded[73], noteMapExpanded[68], null, noteMapExpanded[67], null, noteMapExpanded[66], null, noteMapExpanded[64]
      ];



var isNotPlaying = true
var index = 0


blah.onclick = () => {
    synth.triggerAttackRelease('C4', '8n')
    navigator.bluetooth.requestDevice({ filters: [{ services: ["19B10010-E8F2-537E-4F6C-D104768A1214".toLowerCase()] }] }).then(async device =>{
    console.log(device)
    await device.gatt.connect() //getPrimaryService("19B10010-E8F2-537E-4F6C-D104768A1214".toLowerCase())
    console.log(device.gatt)
    service = await device.gatt.getPrimaryService("19B10010-E8F2-537E-4F6C-D104768A1214".toLowerCase())
    console.log(service)
    characteristics = await service.getCharacteristics()
    let filteredCharacteristics = characteristics.filter(function(characteristic) {
        return characteristic.uuid === "19B10010-E8F2-537E-4F6C-D104768A1218".toLocaleLowerCase();
    });
    console.log(filteredCharacteristics)
    

    console.log(characteristics)
    console.log(filteredCharacteristics)
    Tone.Transport.start();
    // Tone.Transport.stop();
    
    filteredCharacteristics[0].oncharacteristicvaluechanged = (e) => {
        var myVal = new Uint8Array(e.target.value.buffer)[0]
        // console.log(myVal, isNotPlaying)
        if(myVal>14 && isNotPlaying) {
            const note = marioTheme[index];//ode2Joy[index];//
            synth.triggerAttackRelease(note, '16n')
            console.log("played " +note +"at index "+index)
            index++
            isNotPlaying = false
            setTimeout(() => isNotPlaying = true, 100)
        } else {
            // Tone.Transport.stop();
        }


        var noteOnMessage = [0x90, myVal, 100]; // [status byte, note number, velocity]

        // Send the MIDI message
        output.send(noteOnMessage);
    }
    await characteristics[2].startNotifications()
})
}
