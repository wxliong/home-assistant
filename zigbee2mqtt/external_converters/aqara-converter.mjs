import * as m from 'zigbee-herdsman-converters/lib/modernExtend';

export default {
    zigbeeModel: ['lumi.light.acn033'],
    model: 'lumi.light.acn033',
    vendor: 'Aqara',
    description: 'Automatically generated definition',
    extend: [m.deviceEndpoints({"endpoints":{"1":1,"21":21}}), m.light({"colorTemp":{"range":[153,370]}}), m.electricityMeter(), m.numeric({"name":"analog_input_21","cluster":"genAnalogInput","attribute":"presentValue","reporting":{"min":"MIN","max":"MAX","change":1},"description":"analog_input_21","access":"STATE_GET","endpointNames":["21"]})],
};