device = await navigator.bluetooth.requestDevice({ filters: [{ services: ["19B10010-E8F2-537E-4F6C-D104768A1214".toLowerCase()] }] })
service = await device.gatt.connect() //getPrimaryService("19B10010-E8F2-537E-4F6C-D104768A1214".toLowerCase())
service = await device.gatt.getPrimaryService("19B10010-E8F2-537E-4F6C-D104768A1214".toLowerCase())
characteristics = await service.getCharacteristics()
characteristics[2].oncharacteristicvaluechanged = (e) => {console.log(new UInt8Array(e.target.value.buffer)[0])}