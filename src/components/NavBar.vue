<template>

  <div>
    <!-- NavBar -->
    <div>
        <div class="flex items-center justify-between h-15 fixed z-10 w-full px-5">
        
        <div class="flex items-center"><!-- LOGO --->
          <img class="" src="https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-cloud-weather-justicon-lineal-justicon-2.png"/>
          <h3 class="pl-5 text-gray-700 sm:text-sm md:text-xl font-extrabold">
            Weather App
          </h3>
        </div>

        <div class="hidden md:block">
          <div class="flex items-center">

            <router-link to="/" class="text-gray-700 text-xl font-extrabold btn mr-5 px-3 py-2 rounded-md hover:bg-gray-700 hover:text-yellow-50 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300"
            >Menu</router-link>

            <div class="ml-3 relative dropdown"
            
            ><!-- Menu dropdown -->

              <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95"><!-- Dropdown List Menu -->
                <div class="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-lg shadow-lg outline-none">
                    <a href="javascript:void(0)" class="hover:bg-gray-100 text-gray-700 flex justify-between w-full px-4 py-3 text-lg leading-5 text-center">Calender</a>
                    <a href="javascript:void(0)" class="hover:bg-gray-100 text-gray-700 flex justify-between w-full px-4 py-3 text-lg leading-5 text-center">Forecast</a>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div class="-mr-2 flex md:hidden"><!-- MOBILE Icon Box button -->  
          <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>

          </button>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style>

</style>