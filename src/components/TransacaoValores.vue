<template>
  <div class="valores">
    <div class="start">
      <span>{{ from }}</span>
      <h3 class="fs-5 text--normal text--white">
        {{ amount }}
      </h3>
    </div>
    <div class="middle"></div>
    <div class="middle--end"></div>
    <div class="end">
      <span>{{ to }}</span>
      <h3 class="fs-5 text--normal">
        {{ amount }}
      </h3>
    </div>
  </div>
  <div v-if="date" class="datatransacao">
    <span>
      {{ date }}
    </span>
  </div>
</template>
<script>
export default {
  name: "TransacaoValores",
  props: ["amount", "from", "to", "date"],
};
</script>
<style lang="scss" scoped>
@import "@/styles/variables.scss";

.valores {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  .start {
    width: 150px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $silver;
    border-radius: 10px 0px 0px 10px;
    color: $white;
    span {
      padding: 5px 10px;
    }
  }
  .middle {
    width: 0;
    height: 0;
    border-top: 40px solid transparent;
    border-bottom: 40px solid transparent;
    border-left: 15px solid $silver;
  }
  .middle--end {
    width: 0;
    height: 0;
    border-top: 40px solid transparent;
    border-bottom: 40px solid transparent;
    border-left: 15px solid $white;
    background-color: $secondary;
  }
  .end {
    width: 150px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $secondary;
    border-radius: 0px 10px 10px 0px;
    span {
      padding: 5px 0;
    }
  }
}
.datatransacao{
  display: flex;
  justify-content: center;  
  align-items: center;
  height: 30px;  
}
</style>