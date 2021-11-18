<template>
  <div>

    <div class="flex mx-auto shadow rounded p-3">
      <div class="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out background-card"
        >
          <div class="absolute inset-0 bg-gray-600 bg-opacity-75 transition duration-300 ease-in-out"></div>
          <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
            <div>
              <h3 class="text-center text-white text-xl">
                    Jakarta, Indonesia
              </h3>
              <div class="text-gray-300 text-md">17 November 2021</div>
              <h3 class="text-center text-white text-3xl mt-2 font-bold">
                    {{this.$store.state.weatherToday.temp}} &deg;
              </h3>
              <div class="flex mb-4">
                <div class="w-1/3 h-12"></div>
                <div class="w-2/3  h-12 pt-5 pr-4 uppercase text-white text-md font-bold ">{{this.$store.state.weatherToday.weather}}</div>
                <div class="w-1/3 h-12 pl-5"><img src="http://openweathermap.org/img/wn/10d@2x.png"/></div>
              </div>
              
            </div>
          </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "CardWeather"
}
</script>

<style>

</style>