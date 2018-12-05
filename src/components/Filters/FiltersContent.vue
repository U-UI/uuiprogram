<template>
  <div class="filtersContent">
    <filters-content-left></filters-content-left>
    <filters-content-right ></filters-content-right>
  </div>
</template>

<script>
    import FiltersContentLeft from "./FiltersContentLeft";
    import FiltersContentRight from "./FiltersContentRight";
    export default {
        name: "FiltersContent",
      components: {FiltersContentRight,FiltersContentLeft}
    }
</script>

<style scoped>
  .filtersContent{
    width:100%;
    /*height:650px;*/
    display: flex;

  }
  @media screen and (max-width: 1000px) {
    .filtersContent{
      flex-direction: column;
    }
  }
</style>
