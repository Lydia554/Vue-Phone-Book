<template>
  <v-card-actions class="white justify-center">
    <v-tooltip v-for="(action, i) in actions" :key="i" bottom>
      <template v-slot:activator="{ on }">
        <v-btn
          v-on="on"
          dark
          :color="action.color"
          class="white--text ml-1"
          fab
          icon
          small
          @click.stop="actionClick(action.method)"
        >
          <v-icon>{{ action.icon }}</v-icon>
        </v-btn>
      </template>
      <span>{{ action.tooltip }}</span>
    </v-tooltip>
  </v-card-actions>
</template>
<script>
export default {
  props: ["item"],
  data() {
    return {
      actions: [
        {
          method: "edit",
          icon: "mdi-pencil",
          tooltip: "Click to edit",
          color: "red darken-1"
        },
        {
          method: "delete",
          icon: "mdi-delete",
          tooltip: "Click to delete",
          color: "cyan "
        }
      ]
    };
  },
  methods: {
    actionClick(e) {
      if (e == "edit") this.$emit("edit");
      else if (e == "delete") this.$emit("delete");
    }
  }
};
</script>
 