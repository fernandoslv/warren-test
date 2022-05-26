<template>
  <div class="valores">
    <div class="start">
        <span>Transferido de Banco I</span>
        <h3 class="fs-3 text--normal text--white">R$1800,00</h3>
    </div>
    <div class="middle"></div>
    <div class="middle--end"></div>
    <div class="end">        
        <span>Para Banco II</span>
        <h3 class="fs-3 text--normal">R$1800,00</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "TransacaoValores",
};
</script>
<style lang="scss" scoped>
@import "@/assets/base.scss";
.valores{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    .start {
      width: 200px;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: $silver;
      border-radius: 10px 0px 0px 10px;
      color: $white;
      span{
          padding: 5px 0;
      }
    }
    .middle {
      width: 0;
      height: 0;
      border-top: 50px solid transparent;
      border-bottom: 50px solid transparent;
      border-left: 20px solid $silver;
    }
    .middle--end {
      width: 0;
      height: 0;
      border-top: 50px solid transparent;
      border-bottom: 50px solid transparent;
      border-left: 20px solid $white;
      background-color: $secondary;
    }
    .end {
      width: 200px;
      height: 100px;
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