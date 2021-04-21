<template>
  <section id="Info" ref="Info" class="bg-gray-50 m-5 rounded-md shadow-lg">
    <div class="bg-gray-300 bg-graphic-paper h-auto relative">
      <div
        id="Avatar"
        class="rounded-full bg-gray-300 w-36 h-36 border-gray-50 overflow-hidden border-4 mx-auto lg:ml-6 transform translate-y-1/2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="object-contain"
        >
          <path
            fill-rule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <h3
        class="font-bold text-2xl text-gray-50 text-center hidden lg:block absolute top-24 left-48 tracking-wider"
      >
        邱騰輝
      </h3>
    </div>
    <div class="px-2 mt-20 pb-5 lg:px-20 lg:mt-5 lg:ml-28">
      <h3 class="font-bold text-2xl text-center lg:hidden">邱騰輝</h3>
      <div class="flex divide-x divide-gray-400 flex-wrap mb-3">
        <h4 class="font-bold text-base my-1 px-1.5">國立中正大學</h4>
        <h4 class="font-bold text-base my-1 px-1.5">資訊管理系 大學畢業</h4>
      </div>
      <div class="flex divide-x divide-gray-400 flex-wrap">
        <div class="text-sm text-gray-400 leading-7 px-1.5">新竹縣竹東鎮</div>
        <div class="text-sm text-gray-400 leading-7 px-1.5">無工作經驗</div>
        <div class="text-sm text-gray-400 leading-7 px-1.5">希望職稱：前端、全端工程師</div>
      </div>
    </div>
  </section>
  <Section id="Education">
    <template v-slot:title>學歷</template>
    <template v-slot:content
      ><h4 class="font-bold text-xl m-3 ml-0">國立中正大學</h4>
      <div>
        <div class="m-1 text-sm text-gray-400 leading-7">資訊管理系</div>
        <div class="m-1 text-sm text-gray-400 leading-7">大學畢業</div>
      </div>
    </template>
  </Section>
  <Section id="Experience">
    <template v-slot:title>工作經歷</template>
    <template v-slot:content
      ><div class="flex space-x-10">
        <h5>總年資</h5>
        <div>無工作經驗</div>
      </div></template
    >
  </Section>
  <Section id="JobCondition">
    <template v-slot:title>求職條件</template>
    <template v-slot:content>
      <div class="pb-3 border-b border-gray-300">
        <OneLine v-for="item in condition1" :title="item.title" :content="item.content" :key="item.title"/>
        <!-- <OneLine title="希望性質" content="全職工作" />
        <OneLine title="上班時段" content="日班" />
        <OneLine title="可上班日" content="錄取後一周內" />
        <OneLine title="希望待遇" content="依公司規定" />
        <OneLine title="希望地點" content="新竹縣市" /> -->
      </div>
      <div class="pt-3">
        <OneLine v-for="item in condition2" :title="item.title" :content="item.content" :key="item.title"/>

        <!-- <OneLine title="希望職稱" content="前端、全端工程師" />
        <OneLine title="希望職類" content="網頁設計師、Internet程式設計師" />
        <OneLine title="工作內容" content="前端切版、資料視覺化、API串接" /> -->
      </div>
    </template>
  </Section>
  <Section id="Language">
    <template v-slot:title>語文能力</template>
    <template v-slot:content
      ><h4 class="font-bold text-xl m-3 ml-0">英文</h4>
      <div class="flex divide-x divide-gray-400 flex-wrap">
        <div class="px-2 pl-0 m-1">聽：中等</div>
        <div class="px-2 m-1">說：中等</div>
        <div class="px-2 m-1">讀：中等</div>
        <div class="px-2 m-1">寫：中等</div>
      </div></template
    >
  </Section>
  <Section id="Skill">
    <template v-slot:title>專長</template>
    <template v-slot:content
      ><h4 class="font-bold text-xl m-3 ml-0">網頁開發</h4>
      <p class="mb-2 leading-7">HTML、CSS、JavaScript、Vue、TailwindCSS、網頁設計到開發</p>
      <p class="text-sm text-gray-400 leading-7">#HTML #CSS #JavaScript #VueJS #Sass</p>
    </template>
  </Section>
  <Section id="Bio">
    <template v-slot:title>自傳</template>
    <template v-slot:content
      ><p class="leading-7">
        大學畢業後上過全端網頁開發的課程，做過一些練習，包括串接 API ，網頁仿刻(微軟的 Fluent Design
        System)，使用 Bootstrap 、套件快速開發，網頁架構、 SEO
        的優化，一頁式網頁的開發，網路資源、素材尋找和使用， Photoshop 、 Illustrator 修改、設計、
        prototype 、 mockup ， Laravel
        開發，前後端資料串接，購務車網站實做，後臺開發，遇到問題如何解決，如何自學，未來的方向、Python
        爬蟲。皆使用 Visual Studio Code
        和其外掛開發。目前的方向是熟悉Vue3和Tailwindcss，搭配Vite自動化開發，未來想學D3.js，想往互動式網頁發展。
      </p></template
    >
  </Section>
</template>

<script>
import Section from '/@/components/Section.vue';
import OneLine from '/@/components/OneLine.vue';
export default {
  name: 'Home',
  components: { Section, OneLine },
  data() {
    return {
      condition1: [
        { 'title': '希望性質', 'content': '全職工作' },
        { 'title': '上班時段', 'content': '日班' },
        { 'title': '可上班日', 'content': '錄取後一周內' },
        { 'title': '希望待遇', 'content': '依公司規定' },
        { 'title': '希望地點', 'content': '新竹縣市' },
        { 'title': '希望性質', 'content': '全職工作' },
      ],
      condition2: [
        { title: '希望職稱', content: '前端、全端工程師' },
        { title: '希望職類', content: '網頁設計師、Internet程式設計師' },
        { title: '可上班日', content: '工作內容' },
      ],
    }
  },
};
</script>

<style>
</style>