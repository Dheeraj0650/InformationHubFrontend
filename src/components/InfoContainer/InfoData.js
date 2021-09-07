import languages from './languages';

var sidebarMenuArray = [
  { name:'Weather',
    description:'get the information about weather'
  },
  { name:'Movies',
    description:'get the information about Movies'
  },
  { name:'Dogs',
    description:'get the information about Dogs'
  },
  { name:'Nasa',
    description:'get the information about Nasa'
  },
  { name:'Food',
    description:'get the information about Food'
  },
  { name:'Food',
    description:'get the information about Food'
  },
  { name:'Food',
    description:'get the information about Food'
  },
  { name:'Food',
    description:'get the information about Food'
  },
  { name:'Food',
    description:'get the information about Food'
  },
  { name:'Food',
    description:'get the information about Food'
  },
];

var method_1 = [
{
  type:"InputField",
  name:"latitude",
},
{
  type:"InputField",
  name:"longitude",
},
{
  type:"Dropdown",
  name:"exclude",
  description:"exclude some parts of the weather data from the API response",
  content:{'current':'current','minutely':'minutely','hourly':'hourly','daily':'daily','alerts':'alerts'}
},
{
  type:"Dropdown",
  name:"units",
  description:"Units of measurement",
  content:{'imperial':'temperature in Fahrenheit and wind speed in miles/hour','metric':'temperature in Celsius and wind speed in meter/sec','standard':'temperature in Kelvin and wind speed in meter/sec'}
},
{
  type:"Dropdown",
  name:"language",
  description:"You can use the lang parameter to get the output in your language",
  content:languages
}
];

export {sidebarMenuArray, method_1};
