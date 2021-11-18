<template>

  <div class="home">
    <div class="w-full">

      <!-- WEATHER TODAY -->
      <div role="main" class="w-full flex flex-col h-screen  justify-center">
          <div class="w-full sm:w-1/2 lg:w-1/3 bg-gray-100 rounded-3xl m-auto">
          
            <!-- SEARCH -->
            <div class="flex mx-auto shadow rounded p-3">
              <input type="search" class="flex-grow bg-gray-100 rounded-full py-3 px-6" placeholder="Search Location" />
              <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg>
              </button>
            </div><br>

            <!-- WEATHER TODAY -->
            <card-weather></card-weather>

          </div>
      </div>

    </div>
                     
    <!-- WEATHER NEXT -->
    <main class="relative z-0 flex-1 pb-8 px-6 bg-white">
      <div class="grid pb-10  mt-4 ">
          <div class="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-3">

            <div class="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out background-card"
        >
          <div class="absolute inset-0 bg-pink-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
          <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
            <div>
              <h3 class="text-center text-white text-xl">
                    Jakarta, Indonesia
              </h3>
              <div class="text-gray-300 text-md">17 November 2021</div>
              <h3 class="text-center text-white text-3xl mt-2 font-bold">
                    49 &deg;
              </h3>
              <div class="flex mb-4">
                <div class="w-1/3 h-12"></div>
                <div class="w-2/3  h-12 pt-5 pr-4 uppercase text-white text-md font-bold ">Party Cloudy</div>
                <div class="w-1/3 h-12 pl-5"><img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-cloud-weather-justicon-lineal-color-justicon.png"/></div>
              </div>
              
            </div>
          </div>
            </div>
            <div class="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out background-card"
        >
          <div class="absolute inset-0 bg-yellow-600 bg-opacity-75 transition duration-300 ease-in-out"></div>
          <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
            <div>
              <h3 class="text-center text-white text-xl">
                    Jakarta, Indonesia
              </h3>
              <div class="text-gray-300 text-md">17 November 2021</div>
              <h3 class="text-center text-white text-3xl mt-2 font-bold">
                    49 &deg;
              </h3>
              <div class="flex mb-4">
                <div class="w-1/3 h-12"></div>
                <div class="w-2/3  h-12 pt-5 pr-4 uppercase text-white text-md font-bold ">Party Cloudy</div>
                <div class="w-1/3 h-12 pl-5"><img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-cloud-weather-justicon-lineal-color-justicon.png"/></div>
              </div>
              
            </div>
          </div>
            </div>
            <div class="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out background-card"
        >
          <div class="absolute inset-0 bg-blue-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
          <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
            <div>
              <h3 class="text-center text-white text-xl">
                    Jakarta, Indonesia
              </h3>
              <div class="text-gray-300 text-md">17 November 2021</div>
              <h3 class="text-center text-white text-3xl mt-2 font-bold">
                    49 &deg;
              </h3>
              <div class="flex mb-4">
                <div class="w-1/3 h-12"></div>
                <div class="w-2/3  h-12 pt-5 pr-4 uppercase text-white text-md font-bold ">Party Cloudy</div>
                <div class="w-1/3 h-12 pl-5"><img src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-cloud-weather-justicon-lineal-color-justicon.png"/></div>
              </div>
              
            </div>
          </div>
            </div>

          </div>
      </div>
    </main>

  </div>

</template>

<script>
import CardWeather from '../components/CardWeather.vue'


export default {
  name: 'Home',
  components: {
    CardWeather,
  },
  created() {
    this.$store.dispatch("getIpClient")
  }
}
</script>
    

<style>

</style>
