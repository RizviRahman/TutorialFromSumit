const environments = {};

environments.staging = {
   port: 3000,
   envName: 'staging'
}

environments.production = {
   port: 5000,
   envName: 'production'
}

const currentEnvironment = 
   typeof process.env.NODE_ENV === 'string' 
      ? process.env.NODE_ENV : 'staging';


const envStr = currentEnvironment;


const environmentToExport = 
   typeof environments[envStr] === "object"
      ? environments[envStr]
      : environments.staging;

console.log(process.env.NODE_ENV);
console.log(environments.production.envName +' '+ environments.production.port);

module.exports = environmentToExport;