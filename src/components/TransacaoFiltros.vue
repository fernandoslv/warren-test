<template>
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
      <select
        class="selectstatus fs-5"
        @change="filtrarPorTitulo"
        v-model="filtros.statusValue"
      >
        <option
          class="fs-5"
          v-for="(status, index) in statusOptions"
          :key="index"
          :value="status.cod"
        >
          {{ status.desc }}
        </option>
      </select>
    </div>
    <div
      class="filtros__section"
      v-if="filtros.inputValue || filtros.statusValue != 0"
    >
      <button class="limpar btn btn--primary" @click="limpar()">Limpar</button>
    </div>
  </div>
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
          cod: 0,
          desc: "Todos os Status",
        },
        {
          cod: "Solicitada",
          desc: "Solicitada",
        },
        {
          cod: "Processada",
          desc: "Processada",
        },
        {
          cod: "Concluída",
          desc: "Concluída",
        },
      ],
    };
  },
  methods: {
    filtrarPorTitulo() {
      this.$emit("filtarPorStatusPorTitulo", this.filtros);
    },
    limpar() {
      this.filtros.statusValue = 0;
      this.filtros.inputValue = "";
      this.filtrarPorTitulo();
    },
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
  width: 100%;
  justify-content: start;
  align-items: center;
  margin: 20px 0px;
  .filtros__section {
    padding: 0px 5px;
    min-width: 185px;
  }
}


@media only screen and (max-width: 600px) {
  .filtros {
    flex-direction: column;
    margin: 20px 0px;
    .filtros__section {
      padding: 5px 0px;
      width: 100%;
    }
  }
}

.btn {
  padding: 5px 10px;
  height: 35px;
  border-radius: 4px;
  width: 100%;
  &--primary {
    border: 1px solid $silver;
    background-color: $secondary;
    transition: ease 0.5s;
  }
  &--primary:hover {
    background-color: $silver;
    color: $white;
  }
}
</style>