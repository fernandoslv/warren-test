<template>
  <div class="statusbar">
    <div class="status__progress">
      <div class="statusbar__bar"></div>
      <div class="statusbar__area" :class="{'statusbar__area--solicitada':status=='created', 'statusbar__area--processada':status=='processing', 'statusbar__area--concluida':status=='processed'}">
        <div class="dot"></div>
      </div>
    </div>
    <div class="statusbar__label">
      <span class="text--uppercase" :class="{'fs-4 text--bold':status=='created', 'fs-5':status!='created'}">Solicitada</span>
      <span class="text--uppercase" :class="{'fs-4 text--bold':status=='processing', 'fs-5':status!='processing'}">Processada</span>
      <span class="text--uppercase" :class="{'fs-4 text--bold':status=='processed', 'fs-5':status!='processed'}">concluída</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TransacaoStatusBar",
  props:['status']  
};
</script>

<style lang="scss" scoped>
@import "@/assets/base.scss";

.statusbar {
  .status__progress {
    width: 100%;
    .statusbar__bar {
      height: 8px;
      width: 100%;
      background-color: $silver;
      border-radius: 4px;
    }
    .statusbar__area {
      display: flex;
      &--solicitada {
        justify-content: start;
      }
      &--processada {
        justify-content: center;
      }
      &--concluida {
        justify-content: end;
      }
      .dot {
        width: 22px;
        height: 22px;
        border-radius: 11px;
        border: 2px solid $silver;
        background-color: $white;
        position: relative;
        margin-left: 10px;
        top: -14px;
      }
    }
  }
  .statusbar__label {
    display: flex;
    justify-content: space-between;
  }
}
</style>