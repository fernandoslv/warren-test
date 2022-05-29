<template>
  <form>
    <div class="filtros">
      <div class="filtros__section">          
        <input
          @keyup="filtrarPorTitulo"
          v-model="filtros.inputValue"
          class="inputsearch fs-5"
          placeholder="Filtrar pelo título"
          type="text"
        />
      </div>
      <div class="filtros__section">
        <select class="selectstatus fs-5" @change="filtrarPorTitulo" v-model="filtros.statusValue">
          <option class=" fs-5"
            v-for="(status, index) in statusOptions"
            :key="index"
            :value="status.cod"
          >
            {{ status.desc }}
          </option>
        </select>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "TransacaoFiltros",
  emits: ["filtarPorStatusPorTitulo"],
  data() {
    return {
      filtros: {
        statusValue: 0,
        inputValue: "",
      },
      statusOptions: [
        {
          cod: "0",
          desc: "Todos os Status",
        },
        {
          cod: "created",
          desc: "Solicitado",
        },
        {
          cod: "processing",
          desc: "Processado",
        },
        {
          cod: "processed",
          desc: "Concluído",
        },
      ],
    };
  },
  methods: {
    filtrarPorTitulo() {
      this.$emit("filtarPorStatusPorTitulo", this.filtros);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";

.inputsearch {
  padding: 5px 10px;
  height: 35px;
  width: 100%;
  border: 1px solid $silver;
  border-radius: 4px;
}
select {
  padding: 5px 10px;
  height: 35px;
  width: 100%;
  border: 1px solid $silver;
  border-radius: 4px;
}

.filtros {
  display: flex;
  justify-content: start;
  margin: 20px 0px;
  .filtros__section {
    margin: 10px;
  }
}
</style>