import * as config from './config.json'
import MQTT from "async-mqtt";

async function app() {
   try {
      console.log(`Try connecting to ${config.mqttServer}...`);
      const mqttClient = await MQTT.connectAsync(config.mqttServer, { clientId:"mqttjs01", protocolId: 'MQIsdp', protocolVersion: 3, connectTimeout:1000 });
      console.log(`Connected to ${config.mqttServer}`);

      mqttClient.on('message', async function(topic: string, message: Buffer) {
         
      });
   } catch (e) {
      console.log(`Connection error for ${config.mqttServer}: ${e}`);
   }
}

app();