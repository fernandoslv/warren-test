<template>
  <div class="valores">
    <div class="start">
        <span>{{from}}</span>
        <h3 class="fs-5 text--normal text--white">{{new Intl.NumberFormat('pt-br',{style: 'currency', currency: 'BRL'}).format(amount)}}</h3>
    </div>
    <div class="middle"></div>
    <div class="middle--end"></div>
    <div class="end">        
        <span>{{to}}</span>
        <h3 class="fs-5 text--normal">{{new Intl.NumberFormat('pt-br',{style: 'currency', currency: 'BRL'}).format(amount)}}</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "TransacaoValores",
  props:['amount', 'from', 'to'],
};
</script>
<style lang="scss" scoped>
@import "@/assets/base.scss";
.valores{
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
      span{
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
      span{
          padding: 5px 0;
      }
    }
}
</style>