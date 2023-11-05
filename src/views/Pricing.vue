<template>
  <div class="bg-white pb-56 md:!pb-40 pt-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl font-important">{{infoHeader.title}}</p>
      </div>
      <p class="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 font-classic">{{infoHeader.description}}</p>

      <!-- xs to lg -->
      <div class="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
        <section v-for="tier in pricingData" :key="tier.id" >
          <h3 :id="tier.id" class="text-sm font-semibold leading-6 text-gray-900 font-important">{{ tier.name }}</h3>
          <p class="mt-2 flex items-baseline gap-x-1 text-gray-900">
            <span class="text-xs font-classic font-classic">{{ tier.description }}</span>
          </p>
          <ul role="list" class="mt-10 space-y-4 text-sm leading-6 text-gray-900">
            <li v-for="section in sections" :key="section.name">
              <ul role="list" class="space-y-4">
                <template v-for="feature in section.features" :key="feature.name">
                  <li v-if="feature.tiers[tier.id]" class="flex gap-x-3 font-classic">
                   {{feature.name}}
                    <span>

                      <span v-if="typeof feature.tiers[tier.id] === 'string'" class="text-sm leading-6 text-gray-500">{{ feature.tiers[tier.id] }}</span>
                    </span>
                  </li>
                </template>
              </ul>
            </li>
          </ul>
        </section>
      </div>

      <!-- lg+ -->
      <div class="isolate mt-20 hidden lg:block">
        <div class="relative -mx-8">

          <table class="w-full table-fixed border-separate border-spacing-x-8 text-left min-w-[800px]">

            <thead>
            <tr>
              <td />
              <th v-for="tier in pricingData" :key="tier.id" scope="col" class="px-6 pt-6 xl:px-8 xl:pt-8">
                <div class="text-sm font-semibold leading-7 text-gray-900 font-important">{{ tier.name }}</div>
              </th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <th scope="row"><span class="sr-only">Price</span></th>
              <td v-for="tier in pricingData" :key="tier.id" class="px-6 pt-2 xl:px-8">
                <div class="flex items-baseline gap-x-1 text-gray-900">
                  <span class="text-xs font-classic">{{ tier.description }}</span>
                </div>
              </td>
            </tr>
            <template v-for="(section, sectionIdx) in sections" :key="section.name">
              <tr>
                <th scope="colgroup"  colspan="4" :class="[sectionIdx === 0 ? '' : 'pt-16', 'pb-4 text-sm font-semibold leading-6 text-gray-900 font-classic text-[10px]']">
                  {{ section.name }}
                  <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/10" />
                </th>
              </tr>
              <tr v-for="feature in section.features" :key="feature.name">
                <th scope="row" class="py-4 text-sm font-normal leading-6 text-gray-900 font-important">
                  {{ feature.name }}
                  <div class="absolute inset-x-8 mt-4 h-px bg-gray-900/5" />
                </th>
                <td v-for="tier in pricingData" :key="tier.id" class="px-6 py-4 xl:px-8">
                  <div v-if="typeof feature.tiers[tier.id] === 'string'" class="text-center text-sm leading-6 text-black" :class="tier.name === 'Coût réels' ? 'font-bold' : ''">{{ feature.tiers[tier.id] }}</div>
                  <template v-else>
                    <CheckIcon v-if="feature.tiers[tier.name] === true" class="mx-auto h-5 w-5 text-indigo-600" aria-hidden="true" />
                    <MinusIcon v-else class="mx-auto h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span class="sr-only">{{ feature.tiers[tier.name] === true ? 'Included' : 'Not included' }} in {{ tier.name }}</span>
                  </template>
                </td>
              </tr>
            </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {UsePricing} from "@/composables/UsePricing.ts";

const { pricingData, infoHeader, sections} = UsePricing()
import { CheckIcon, MinusIcon } from '@heroicons/vue/20/solid'



</script>