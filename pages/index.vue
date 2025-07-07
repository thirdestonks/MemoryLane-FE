<script setup lang="ts">

</script>


<template>
    <!-- Container for demo purpose -->
    <div class="w-full">
        <!-- Section: Design Block -->
        <section
        class="bg-center bg-cover bg-no-repeat h-screen bg-[url('/img/landing-bg.png')]"><!-- Jumbotron -->
            <div class="container mx-auto text-center lg:text-left xl:px-32">
                <div class="grid items-center lg:grid-cols-2">
                    <div class="mb-12 lg:mb-0">
                        <div
                            class="relative mt-10 z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                            <h2 class="mb-8 text-3xl font-bold">Memory Lane</h2>
                            <p class="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                soluta corporis voluptate ab error quam dolores doloremque,
                                quae consectetur.
                            </p>

                            <div class="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
                                <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2" stroke="currentColor" class="mr-2 h-5 w-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Best Buboy
                                </p>

                                <p class="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2" stroke="currentColor" class="mr-2 h-5 w-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Best Bilog
                                </p>

                                <p class="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="2" stroke="currentColor" class="mr-2 h-5 w-5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Best Domggos
                                </p>
                            </div>

                            <p class="mb-0 text-neutral-500 dark:text-neutral-300">
                                In ac turpis justo. Vivamus auctor quam vitae odio feugiat
                                pulvinar. Sed semper ligula sed lorem tincidunt dignissim. Nam
                                sed cursus lectus. Proin non rutrum magna. Proin gravida,
                                justo et imperdiet tristique, turpis nisi viverra est, nec
                                posuere ex arcu sit amet erat. Sed a dictum sem. Duis pretium
                                condimentum nulla, ut aliquet erat auctor sed. Aenean
                                facilisis neque id ligula maximus scelerisque. Nunc sed velit
                                rhoncus, interdum dolor at, lacinia lacus. Proin eleifend
                                viverra posuere. Ut commodo risus lacus, ac scelerisque quam
                                aliquam dictum. Etiam dignissim pulvinar eros eget auctor.
                                Quisque congue turpis quis libero ullamcorper imperdiet.
                                Vivamus a orci maximus, dignissim ligula a, congue dui. Morbi
                                et lectus sit amet neque luctus viverra.
                            </p>

                            <div class="mt-4 ml-96 absolute inline-flex  group">
                                <div
                                    class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#cbd8df] via-[#493948] to-[#f5d5d3] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                                </div>
                                <nuxt-link to="dashboard">
                                    <a title="Click Hereee!!!"
                                        class="relative inline-flex items-center justify-center px-20 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                        role="button">Click Here
                                    </a>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>

                    <div>
                            <img src="/img/landing-cover-alt.png"
                            class="w-full mt-10 rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
                    </div>
                </div>
            </div>
            <!-- Jumbotron -->
        </section>
        <!-- Section: Design Block -->
    </div>
    <!-- Container for demo purpose -->
</template>
