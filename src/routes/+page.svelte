<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  onMount(() => {
    document.documentElement.className = "js";
    document.body.classList.add('container');
    document.documentElement.classList.add('loading');
    document.documentElement.classList.add('no-js');
    
    // Import and initialize animations when in browser
    if (browser) {
      console.log('Browser environment detected, initializing animations');
      import('../lib/effect/index').then(() => {
        console.log('Animation module loaded successfully');
        
        // Log elements for debugging
        const listItems = document.querySelectorAll('.list__item');
        const hoverEffects = document.querySelectorAll('.hover-effect');
        console.log('Found list items:', listItems.length);
        console.log('Found hover effects:', hoverEffects.length);
      }).catch(err => {
        console.error('Error loading animation module:', err);
      });
    }
  });
</script>

<svelte:head>
  <!-- Load GSAP and SplitType directly from static folder -->
  <script src="/scripts/gsap.min.js"></script>
  <script src="/scripts/split-type.js"></script>
  <!-- New initialization script that handles all hover animations -->
  <script src="/scripts/initialize.js"></script>
  
  <title>Ibrahim Raimi</title>
  <meta
    name="description"
    content="Front End Developer based in Lagos, Nigeria focused on creating interactive digital experiences on the web."
  />
  <meta name="author" content="Ibrahim Raimi" />
  <link rel="shortcut icon" href="favicon.ico" />
  <meta
    property="og:image"
    content="https://res.cloudinary.com/dajnn3jbw/image/upload/v1690339875/Ibrahim.png"
  />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://ibrahimraimi.com" />
  <meta property="twitter:title" content="Ibrahim Raimi" />
  <meta
    property="twitter:description"
    content="Front End Developer based in Lagos, Nigeria focused on creating interactive digital experiences on the web."
  />
  <meta
    property="twitter:image"
    content="https://res.cloudinary.com/dajnn3jbw/image/upload/v1690339875/Ibrahim.png"
  />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://ibrahimraimi.com" />
  <meta property="og:title" content="Ibrahim Raimi" />
  <meta
    property="og:description"
    content="Front End Developer based in Lagos Nigeria focused on creating interactive digital experiences on the web."
  />
  <meta
    property="og:image"
    content="https://res.cloudinary.com/dajnn3jbw/image/upload/v1690339875/Ibrahim.png"
  />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Nanum+Gothic+Coding&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<main>
  <header class="frame">
    <h1 class="frame__title">˗ˏˋ ×͜× ˎˊ</h1>
    <a
      class="hover-effect hover-effect--bg-south frame__archive hover-effect hover-effect--bg-south"
      href="mailto:raimiibrahim44@gmail.com?subject=Lets%20work%20together!&body=Hello%2C%20I%20think%20we%20need%20you%20to%20work%20on%2Fcollaborate%20this%20particular%20product...%20Reach%20out%20as%20soon%20as%20you%20can."
      target="_blank"
      >Say Hello</a
    >
    <a
      class="hover-effect hover-effect--bg-south frame__back hover-effect hover-effect--bg-south"
      href="https://x.com/ibrahimraimi_"
      target="_blank"
      >Twitter</a
    >
    <a
      class="hover-effect hover-effect--bg-south frame__github hover-effect hover-effect--bg-south"
      href="https://github.com/ibrahimraimi"
      target="_blank"
      >GitHub</a
    >
  </header>
  <section class="content">
    <h2 class="content__title">
      I'm Ibrahim, an independent creative developer from Nigeria, <br />
      dedicated to crafting impactful digital experiences for global brands
      & individuals.
    </h2>

    <br />
    <h2 class="content__title">Projects</h2>
    <ul class="list">
      <a href="https://korty.ibrahimraimi.com" target="_blank">
        <li class="list__item">
          <span class="list__item-col hover-effect hover-effect--bg-south"
            >Eniola Korty</span
          >
          <span class="list__item-col hover-effect hover-effect--bg-south"
            >Creative Development</span
          >
          <span class="list__item-col hover-effect hover-effect--bg-south"
            >2024-01-21</span
          >
        </li>
      </a>

      <a href="https://musngr.studio21.studio" target="_blank">
        <li class="list__item">
          <span class="list__item-col hover-effect hover-effect--bg-south"
            >Musngr</span
          >
          <span class="list__item-col hover-effect hover-effect--bg-south"
            >Design & UI Development</span
          >
          <span class="list__item-col hover-effect hover-effect--bg-south"
            >2025-01-18</span
          >
        </li>
      </a>

      <a href="https://studio21.studio" target="_blank">
        <li class="list__item">
          <span class="list__item-col hover-effect hover-effect--bg-south"
            >studio21</span
          >
          <span class="list__item-col hover-effect hover-effect--bg-south"
            >Creative Development</span
          >
          <span class="list__item-col hover-effect hover-effect--bg-south"
            >2024-12-22</span
          >
        </li>
      </a>

      <a href="https://brunoarizio.com" target="_blank">
        <li class="list__item">
          <span class="list__item-col hover-effect hover-effect--bg-south"
            >Bruno Arizio Rebuild</span
          >
          <span class="list__item-col hover-effect hover-effect--bg-south"
            >Art Direction</span
          >
          <span class="list__item-col hover-effect hover-effect--bg-south"
            >2024-04-04</span
          >
        </li>
      </a>

      <a href="https://geist.ibrahimraimi.com" target="_blank">
        <li class="list__item">
          <span class="list__item-col hover-effect hover-effect--bg-south"
            >Svelte Geist</span
          >
          <span class="list__item-col hover-effect hover-effect--bg-south"
            >Design Sysyem</span
          >
          <span class="list__item-col hover-effect hover-effect--bg-south"
            >2025-03-07</span
          >
        </li>
      </a>

      <a href="https://palette.ibrahimraimi.com" target="_blank">
        <li class="list__item">
          <span class="list__item-col hover-effect hover-effect--bg-south"
            >Palette</span
          >
          <span class="list__item-col hover-effect hover-effect--bg-south"
            >Design Sysyem</span
          >
          <span class="list__item-col hover-effect hover-effect--bg-south"
            >2024-12-21</span
          >
        </li>
      </a>
    </ul>
  </section>
</main>

<style>
  /* Global styles */
  :global(*),
  :global(*::after),
  :global(*::before) {
    box-sizing: border-box;
  }

  :global(:root) {
    font-size: 16px;
    --page-padding: 2rem;
    --color-text: #000;
    --color-bg: #fff;
    --color-link: rgba(0, 0, 0, 0.8);
    --color-link-hover: #000;
    --color-list-item: #000;
    --color-title: #000;
    --color-number: #000;
    --color-bg-effect: white;
    --blendmode-effect: difference;
    --bg-blur: 0px;
    --font-size-list-item: 18px;
  }

  :global(body) {
    margin: 0;
    color: var(--color-text);
    background-color: var(--color-bg);
    font-family: "JetBrains Mono", monospace;
    font-weight: 300;
    font-optical-sizing: auto;
    text-transform: uppercase;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
  }

  :global(body::after) {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: repeating-linear-gradient(
      transparent,
      transparent 2px,
      #0000003d 3px
    );
    background-size: auto 100%;
    pointer-events: none;
  }

  :global(body.container) {
    background-image: url(/img/noise.png), url(/bg-d.jpg);
    background-size: 100px, cover, cover;
    background-position: 50% 50%, center, center;
    --color-text: #fff;
    --color-bg: #000000;
    --color-link: #ffffff;
    --color-link-hover: #fff;
    --color-list-item: #ffffffd9;
    --color-title: #ffffff;
    --color-number: #ffffff;
    --color-bg-effect: rgb(229 222 204 / 10%);
    --blendmode-effect: none;
    --bg-blur: 5px;
    --font-size-list-item: clamp(1rem, 4vw, 2rem);
  }

  :global(body.container::after) {
    display: none;
  }

  :global(a) {
    text-decoration: none;
    color: var(--color-link);
    outline: none;
    cursor: pointer;
  }

  :global(a:hover) {
    text-decoration: none;
    color: var(--color-link-hover);
    outline: none;
  }

  :global(a:focus) {
    outline: none;
  }

  :global(.unbutton) {
    background: none;
    border: 0;
    padding: 0;
    margin: 0;
    font: inherit;
    cursor: pointer;
  }

  :global(.unbutton:focus) {
    outline: none;
  }

  /* Component styles */
  main {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-between;
  }

  .frame {
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 1px;
    padding: var(--page-padding);
    position: relative;
    display: grid;
    grid-row-gap: 1rem;
    grid-column-gap: 2rem;
    align-items: start;
    pointer-events: none;
    justify-items: start;
    grid-template-columns: auto auto;
    grid-template-areas: "title" "archive" "back" "github" "sponsor" "demos";
  }

  .frame :global(#cdawrap) {
    justify-self: start;
  }

  .frame a {
    pointer-events: auto;
  }

  .frame__title {
    grid-area: title;
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
    padding-bottom: 0.5rem;
  }

  .frame__back {
    grid-area: back;
    justify-self: start;
  }

  .frame__archive {
    grid-area: archive;
    justify-self: start;
  }

  .frame__github {
    grid-area: github;
  }

  .content {
    display: flex;
    flex-direction: column;
    padding: 0 var(--page-padding) 2rem;
    justify-content: center;
  }

  .content__title {
    font-size: 12px;
    color: var(--color-title);
  }

  .list {
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    counter-reset: item 0;
  }

  .list__item {
    font-size: var(--font-size-list-item);
    cursor: pointer;
    width: 100%;
    display: grid;
    color: var(--color-list-item);
    grid-column-gap: 2rem;
    padding: 0.5rem 0;
    grid-template-columns: 100%;
    justify-content: space-between;
    align-items: start;
    justify-items: start;
  }

  :global(body.container) .list__item {
    padding: 0.85rem 0;
  }

  .list__item::before {
    color: var(--color-number);
    content: counter(item, decimal-leading-zero);
    counter-increment: item;
    font-weight: 500;
    padding: 3px 3px 0;
    line-height: 0.8;
  }

  :global(body.container) .list__item::before {
    font-size: 0.8rem;
  }

  :global(.list--alt) .list__item::before {
    content: "EVT#" counter(item, decimal-leading-zero) "0";
  }

  .list__item-col {
    flex: none;
    padding: 3px 3px 0;
    line-height: 0.8;
  }

  .hover-effect :global(.word) {
    white-space: nowrap;
  }

  .hover-effect :global(.char) {
    position: relative;
  }

  .hover-effect {
    font-kerning: none;
    position: relative;
    white-space: nowrap;
  }

  .hover-effect--bg-south {
    --anim: 0;
  }

  .hover-effect--bg-south::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: calc(100% + 3px);
    top: 0;
    background-color: var(--color-bg-effect);
    mix-blend-mode: var(--blendmode-effect);
    -webkit-backdrop-filter: blur(var(--bg-blur));
    backdrop-filter: blur(var(--bg-blur));
    transform-origin: 0% 50%;
    transform: scaleX(var(--anim));
  }

  .hover-effect--bg-south::after {
    z-index: -1;
    left: -8px;
    right: -8px;
    top: -8px;
    bottom: -8px;
    border-radius: 2px;
    height: auto;
    width: auto;
    transform-origin: 50% 100%;
    transform: scaleY(var(--anim));
  }

  @media screen and (min-width: 40em) {
    .list {
      position: relative;
    }
    
    .list::before {
      display: none;
    }
    
    .list__item {
      grid-template-columns: 30px minmax(250px, 1fr) minmax(250px, 1fr) 120px;
      grid-template-rows: 1fr;
      grid-column-gap: 5rem;
      grid-row-gap: 0;
      padding: 0.6rem 0;
      border-bottom: none;
      padding-left: 0;
    }
    
    .list__item::before {
      position: static;
      left: auto;
      top: auto;
      align-self: center;
    }
    
    .list__item-col {
      margin-bottom: 0;
      display: inline-block;
      grid-row: auto;
    }
    
    .list__item-col:nth-of-type(1) {
      grid-column: 2;
      grid-row: 1;
    }
    
    .list__item-col:nth-of-type(2) {
      grid-column: 3;
      grid-row: 1;
    }
    
    .list__item-col:nth-of-type(3) {
      grid-column: 4;
      grid-row: 1;
    }
  }

  @media screen and (min-width: 40em) {
    .list {
      position: relative;
    }
    
    .list::before {
      display: none;
    }
    
    .list__item {
      grid-template-columns: 30px minmax(250px, 1fr) minmax(250px, 1fr) 120px;
      grid-template-rows: 1fr;
      grid-column-gap: 5rem;
      grid-row-gap: 0;
      padding: 0.6rem 0;
      border-bottom: none;
      padding-left: 0;
    }
    
    .list__item::before {
      position: static;
      left: auto;
      top: auto;
      align-self: center;
    }
    
    .list__item-col {
      margin-bottom: 0;
      display: inline-block;
      grid-row: auto;
    }
    
    .list__item-col:nth-of-type(1) {
      grid-column: 2;
      grid-row: 1;
    }
    
    .list__item-col:nth-of-type(2) {
      grid-column: 3;
      grid-row: 1;
    }
    
    .list__item-col:nth-of-type(3) {
      grid-column: 4;
      grid-row: 1;
    }
  }

  @media screen and (min-width: 53em) {
    .frame {
      grid-template-columns: auto auto auto auto 1fr 1fr;
      grid-template-areas: "title back archive github demos sponsor";
    }
    .frame :global(#cdawrap) {
      justify-self: end;
    }
    .frame :global(#cdawrap) {
      text-align: right;
    }
  }

  @media screen and (min-width: 73em) {
    .list__item {
      grid-template-columns: 30px minmax(250px, 1fr) minmax(250px, 1fr) 120px;
      grid-column-gap: 5rem;
    }
    :global(body.container) .list__item {
      grid-template-columns: 30px minmax(250px, 1fr) minmax(250px, 1fr) 120px;
      grid-column-gap: 5rem;
    }
    .list__item-col:last-child {
      justify-self: start;
    }
  }
</style>