import Vue from 'vue'
import Vuex from 'vuex'
import Swal from "sweetalert2";
// import router from "../router";
// import axios from "../baseUrlAxios/API"
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weather: {
      cityName: "Jakarta",
      country: "NG",
      temperature: 12,
      description: "Clouds everywhere",
      lowTemp: "19",
      highTemp: "30",
      feelsLike: "20",
      humidity: "55",
    },
    
    cityIsFound: false,
    citySearch: "",
    weatherToday: [],
    ipClient: {},


  },
  mutations: {
    MUTATE_WEATHER(state, payload) {
      state.weatherToday = payload
    },
    MUTATE_SEARCH(state, payload) {
      state.citySearch = payload
    },
    MUTATE_CITY_ISFOUND(state) {
      state.cityIsFound = !state.cityIsFound
    },
   
  },
  actions: {
    async getIpClient() {
      try {
        const response = await axios.get(
           "https://ipapi.co/json/",
        );
        
        const sendData = response.data
       
        let dataIp = {
          city: sendData.city,
          lat: sendData.latitude,
          lon: sendData.longitude
        }
        
        this.dispatch("getRawDataWeatherByIp", dataIp)
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: err.response.data.message,
        });
      }
    },
    async getRawDataWeatherByIp(context, payload) {
      try {
        // console.log(payload.city,'<<< KOTA');
        const response = await axios.post(
           `http://localhost:3000/weather`,{
             ...payload
          }
        );

        const sendData = response.data
        context.commit("MUTATE_WEATHER", sendData)
        
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: err.response.data.message,
        });
      }
    },

    

  },
  modules: {
    
  }
})
